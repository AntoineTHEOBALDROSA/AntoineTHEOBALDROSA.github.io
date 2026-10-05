/* Atelier local : formulaires, brouillons et export. Le site public reste statique. */
(function(){
'use strict';
const $ = id => document.getElementById(id);
const KINDS = {articles:'Article',projects:'Projet',problems:'Problème'};
const STORAGE_KEY = 'antoine-site-editor-v1';
const clone = value => JSON.parse(JSON.stringify(value));
const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const displayTitle = value => String(value || 'Sans titre').replace(/\$|\*\*/g,'');
const fingerprint = value => {
  const text = JSON.stringify(value);
  let hash = 2166136261;
  for(let i=0;i<text.length;i++) hash = Math.imul(hash ^ text.charCodeAt(i),16777619);
  return (hash >>> 0).toString(16);
};
if(!window.SITE){ $('save-status').textContent='Le contenu du site n’a pas pu être chargé.'; return; }
let site = clone(window.SITE);
const sourceFingerprint = fingerprint(site);
let kind = 'articles', selected = site.articles[0]?.slug || '', lang = 'fr';
let staleDraft = null, saveTimer, previewTimer, previewReady = false, storageAvailable = true;
const autoSlugs = new WeakSet();
let exportedFingerprint = sourceFingerprint;
const current = () => site[kind].find(item => item.slug === selected);
const today = () => new Date().toLocaleDateString('sv-SE');
const slugify = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'') || 'nouvelle-page';
const uniqueSlug = (base,except) => {
  let candidate=base, n=2;
  while(site[kind].some(item=>item!==except && item.slug===candidate)) candidate=base+'-'+n++;
  return candidate;
};
function status(text){ $('save-status').textContent=text; }
function validShape(data){
  const object=value=>value && typeof value==='object' && !Array.isArray(value);
  const texts=['title','blurb','body','statement','hint','solution','role','status','lead'];
  const localized=value=>object(value) && texts.every(key=>value[key]===undefined || typeof value[key]==='string') && (value.links===undefined || Array.isArray(value.links) && value.links.every(link=>Array.isArray(link) && link.length===2 && link.every(x=>typeof x==='string')));
  return object(data) && object(data.profile) && ['first','last','email'].every(key=>typeof data.profile[key]==='string') && ['formation','skills','socials'].every(key=>Array.isArray(data.profile[key])) && Array.isArray(data.cats) && data.cats.every(cat=>object(cat) && typeof cat.id==='string' && object(cat.fr) && typeof cat.fr.name==='string') && object(data.tags) && Array.isArray(data.domains) && Object.keys(KINDS).every(key=>Array.isArray(data[key]) && data[key].every(item=>object(item) && typeof item.slug==='string' && localized(item.fr) && (!item.en || localized(item.en)) && (item.tags===undefined || Array.isArray(item.tags) && item.tags.every(tag=>typeof tag==='string')) && (item.id===undefined || typeof item.id==='string') && (item.date===undefined || typeof item.date==='string')));
}
function loadDraft(){
  try{
    const raw=localStorage.getItem(STORAGE_KEY);
    if(!raw) return;
    const draft=JSON.parse(raw);
    if(draft.version!==1 || !validShape(draft.site)) throw new Error('Format de brouillon inconnu');
    if(draft.sourceFingerprint!==sourceFingerprint && fingerprint(draft.site)!==sourceFingerprint){ staleDraft=draft; $('draft-notice').hidden=false; return; }
    site=draft.site;
    if(KINDS[draft.kind]) kind=draft.kind;
    selected=site[kind].some(x=>x.slug===draft.selected) ? draft.selected : site[kind][0]?.slug || '';
    if(draft.lang==='en') lang='en';
    status('Brouillon récupéré dans ce navigateur.');
  }catch(error){
    storageAvailable=false;
    status('Les brouillons automatiques sont indisponibles. Pense à les télécharger.');
  }
}
function persist(){
  clearTimeout(saveTimer);
  if(staleDraft){status('Un ancien brouillon est disponible. Choisis de le récupérer ou de garder le contenu actuel.');return;}
  if(!storageAvailable) return;
  try{
    localStorage.setItem(STORAGE_KEY,JSON.stringify({version:1,sourceFingerprint,site,kind,selected,lang}));
    status('Brouillon sauvegardé · '+new Date().toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'}));
  }catch(error){ storageAvailable=false; status('Le navigateur ne peut pas sauvegarder ce brouillon. Télécharge-le pour le conserver.'); }
}
function changed(){
  status(storageAvailable ? 'Sauvegarde du brouillon…' : 'Pense à télécharger ton brouillon pour le conserver.');
  clearTimeout(saveTimer);saveTimer=setTimeout(persist,500);
  renderList();renderValidation();
  clearTimeout(previewTimer);previewTimer=setTimeout(updatePreview,450);
}
function routeFor(item){
  if(kind==='articles') return '#/articles/'+encodeURIComponent(item.cat)+'/'+encodeURIComponent(item.slug);
  return '#/'+(kind==='projects'?'projets':'problemes')+'/'+encodeURIComponent(item.slug);
}
function validate(){
  const issues=[];
  const dateIsValid=text=>typeof text==='string' && /^\d{4}-\d{2}-\d{2}$/.test(text) && Number(text.slice(0,4))>0 && !Number.isNaN(Date.parse(text)) && new Date(text).toISOString().slice(0,10)===text;
  for(const type of Object.keys(KINDS)){
    const slugs=new Set();
    for(const item of site[type]){
      const title=item.fr?.title || item.slug || 'Sans titre', prefix=KINDS[type]+' « '+title+' » : ';
      if(!item.fr?.title?.trim()) issues.push(prefix+'ajoute un titre français.');
      if(!item.slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.slug)) issues.push(prefix+'l’adresse doit utiliser des lettres minuscules, des chiffres et des tirets.');
      if(slugs.has(item.slug)) issues.push(prefix+'cette adresse est déjà utilisée.');
      slugs.add(item.slug);
      const body=type==='problems'?'statement':'body';
      if(!item.fr?.[body]?.trim()) issues.push(prefix+'ajoute '+(type==='problems'?'un énoncé.':'un texte.'));
      if(type!=='projects' && !dateIsValid(item.date)) issues.push(prefix+'choisis une date valide.');
      if(type==='articles'){
        if(!site.cats.some(cat=>cat.id===item.cat)) issues.push(prefix+'choisis une catégorie.');
        if(!Number.isFinite(item.read) || item.read<=0) issues.push(prefix+'indique un temps de lecture positif.');
      }
      if(type==='problems'){
        if(![1,2,3].includes(item.level)) issues.push(prefix+'choisis une difficulté entre 1 et 3.');
        if(!item.id?.trim()) issues.push(prefix+'ajoute un numéro de problème.');
        if(!Array.isArray(item.tags)) issues.push(prefix+'les thèmes doivent être une liste.');
      }
      if(type==='projects' && !Array.isArray(item.tags)) issues.push(prefix+'les technologies doivent être une liste.');
    }
  }
  const ids=site.problems.map(x=>x.id);
  if(new Set(ids).size!==ids.length) issues.push('Deux problèmes portent le même numéro.');
  return issues;
}
function renderValidation(){
  const issues=validate();
  $('validation').hidden=!issues.length;
  $('validation').innerHTML=issues.length ? '<p>Avant d’enregistrer le contenu :</p><ul>'+issues.map(x=>'<li>'+escape(x)+'</li>').join('')+'</ul>' : '';
  $('export').disabled=!!issues.length;
}
function renderList(){
  const q=$('item-search').value.toLocaleLowerCase('fr');
  const items=site[kind].filter(item=>[item.fr?.title,item.en?.title,item.slug].join(' ').toLocaleLowerCase('fr').includes(q));
  $('item-list').innerHTML=items.length ? items.map(item=>{
    const translated=!!item.en?.[kind==='problems'?'statement':'body'];
    return '<button type="button" data-slug="'+escape(item.slug)+'"'+(item.slug===selected?' aria-current="true"':'')+'>'+escape(displayTitle(item.fr?.title))+'<small>'+escape(item.id || item.date || item.year || '')+' · '+(translated?'FR + EN':'FR · anglais à compléter')+'</small></button>';
  }).join('') : '<p>'+ (q?'Aucun résultat.':'Aucun contenu pour le moment.')+'</p>';
  document.querySelectorAll('[data-kind]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.kind===kind)));
}
function field(label,key,value,options={}){
  const scope=options.common?'data-common-field':'data-local-field';
  const attrs=scope+'="'+key+'" id="field-'+key+'"';
  const help=options.help?'<span class="field-help">'+escape(options.help)+'</span>':'';
  let input;
  if(options.select){
    input='<select '+attrs+'>'+options.select.map(([v,t])=>'<option value="'+escape(v)+'"'+(String(value)===String(v)?' selected':'')+'>'+escape(t)+'</option>').join('')+'</select>';
  }else if(options.textarea){
    input='<textarea '+attrs+' rows="'+(options.rows||3)+'" spellcheck="true" lang="'+lang+'">'+escape(value)+'</textarea>';
  }else{
    input='<input '+attrs+' type="'+(options.type||'text')+'" value="'+escape(value)+'"'+(options.min!==undefined?' min="'+options.min+'"':'')+(options.max!==undefined?' max="'+options.max+'"':'')+' class="'+(key==='title'?'title-input':'')+'"'+(!options.common?' lang="'+lang+'"':'')+'>';
  }
  return '<label class="'+(options.full?'full':'')+'" for="field-'+key+'">'+label+input+help+'</label>';
}
function bodyField(label,key,value,short=false){
  const tools=[['heading','Titre'],['bold','Gras'],['italic','Italique'],['list','Liste'],['math','Formule'],['display','Équation'],['code','Code'],['image','Image']];
  return '<div class="body-field'+(short?' body-field--short':'')+'"><div class="editor-tools" role="group" aria-label="Mise en forme de '+label+'">'+tools.map(([action,text])=>'<button type="button" data-tool="'+action+'" data-target="field-'+key+'">'+text+'</button>').join('')+'</div>'+field(label,key,value,{textarea:true,rows:short?5:18})+'</div>';
}
function renderForm(){
  const item=current(), empty=!item;
  $('editor-form').hidden=empty;$('empty-state').hidden=!empty;
  $('duplicate').disabled=empty;$('delete-item').disabled=empty;
  $('item-kind').textContent=KINDS[kind].toUpperCase();
  $('item-heading').textContent=empty?'Une nouvelle page':displayTitle(item.fr?.title);
  if(empty){$('editor-form').innerHTML='';updatePreview();return;}
  const c=item[lang] || {};
  let common=field('Date de publication','date',item.date,{common:true,type:'date'});
  if(kind==='articles'){
    common+=field('Catégorie','cat',item.cat,{common:true,select:site.cats.map(x=>[x.id,x.fr?.name||x.id])});
    common+=field('Temps de lecture (minutes)','read',item.read,{common:true,type:'number',min:1});
  }else if(kind==='projects'){
    common=field('Année','year',item.year,{common:true});
    common+=field('Technologies','tags',(item.tags||[]).join(', '),{common:true,help:'Sépare les technologies par une virgule.'});
    common+=field('Image de couverture','thumb',item.thumb,{common:true,full:true,help:'Par exemple : images/mon-projet.png. Tu peux aussi choisir dots, orbit, wave, tree, bars ou cells.'});
  }else{
    common+=field('Difficulté','level',item.level,{common:true,select:[[1,'1 · Accessible'],[2,'2 · Intermédiaire'],[3,'3 · Difficile']]});
    common+=field('Numéro du problème','id',item.id,{common:true});
    common+=field('Domaines et thèmes','tags',(item.tags||[]).join(', '),{common:true,help:'Sépare les thèmes par une virgule : math, analysis…'});
  }
  const language='<div class="language-bar" role="group" aria-label="Langue à rédiger"><button type="button" data-editor-lang="fr" aria-pressed="'+(lang==='fr')+'">Français</button><button type="button" data-editor-lang="en" aria-pressed="'+(lang==='en')+'">English</button><p>'+(!item.en?.[kind==='problems'?'statement':'body']?'Sans traduction, le site reprend le français.':'Les deux versions sont indépendantes.')+'</p></div>';
  let localized=field('Titre','title',c.title)+field('Résumé dans les listes','blurb',c.blurb,{textarea:true,rows:3});
  if(kind==='projects'){
    localized+=field('Type de projet','role',c.role)+field('Statut','status',c.status)+field('Introduction','lead',c.lead,{textarea:true,rows:5});
    localized+=field('Liens','links',(c.links||[]).map(x=>x.join(' | ')).join('\n'),{textarea:true,rows:2,help:'Un lien par ligne : Code source | https://github.com/…'});
  }
  localized+=kind==='problems' ? bodyField('Énoncé','statement',c.statement)+bodyField('Indice','hint',c.hint,true)+bodyField('Solution','solution',c.solution) : bodyField('Texte','body',c.body);
  $('editor-form').innerHTML='<fieldset><legend>Informations communes aux deux langues</legend><div class="metadata">'+common+'</div></fieldset><details><summary>Adresse de la page</summary><div class="metadata">'+field('Adresse','slug',item.slug,{common:true,full:true,help:routeFor(item)})+'</div></details>'+language+'<div class="localized-fields">'+localized+'</div>';
}
function render(){renderList();renderForm();renderValidation();updatePreview();}
function updatePreview(){
  if(!previewReady) return;
  const item=current(), frame=$('preview');
  if(!item){$('preview-status').textContent='Crée un contenu pour voir son aperçu.';return;}
  try{
    const win=frame.contentWindow;
    if(!win.SITE || !win.document.querySelector('[data-lang]')){ $('preview-status').textContent='Chargement du site…';return; }
    Object.keys(win.SITE).forEach(key=>delete win.SITE[key]);
    Object.assign(win.SITE,clone(site));
    const target=routeFor(item), hashChanges=win.location.hash!==target, scrollY=win.scrollY;
    if(hashChanges) win.location.hash=target;
    const languageButton=win.document.querySelector('[data-lang="'+lang+'"]');
    const languageChanges=languageButton.getAttribute('aria-pressed')!=='true';
    if(languageChanges) languageButton.click();
    else if(!hashChanges) win.dispatchEvent(new win.Event('hashchange'));
    if(!hashChanges) win.requestAnimationFrame(()=>win.scrollTo(0,scrollY));
    $('preview-status').textContent=lang==='fr'?'Version française':'English version';
  }catch(error){
    $('preview-status').textContent='Pour l’aperçu, ouvre cet atelier via un serveur local (voir le README).';
  }
}
function setField(input){
  const item=current();if(!item)return;
  const common=input.dataset.commonField, key=common || input.dataset.localField;
  if(!key)return;
  let value=input.value;
  if(common){
    if(key==='tags') value=value.split(',').map(x=>x.trim()).filter(Boolean);
    if(key==='read' || key==='level') value=value===''?null:Number(value);
    if(key==='slug'){autoSlugs.delete(item);selected=value;}
    item[key]=value;
  }else{
    if(!item[lang]) item[lang]={};
    if(key==='links') value=value.split('\n').map(line=>line.split('|').map(x=>x.trim())).filter(x=>x.length===2 && x[0] && x[1]);
    // Les champs EN vides sont omis pour conserver le repli champ par champ.
    if(lang==='en' && (Array.isArray(value)?!value.length:!value.trim())) delete item.en[key];
    else item[lang][key]=value;
    if(key==='title'){
      $('item-heading').textContent=displayTitle(item.fr?.title);
      if(lang==='fr' && autoSlugs.has(item)){
        item.slug=uniqueSlug(slugify(value),item);selected=item.slug;
        $('field-slug').value=item.slug;
      }
    }
  }
  changed();
}
function newItem(){
  const date=today(), item={slug:uniqueSlug('nouvel-'+(kind==='articles'?'article':kind==='projects'?'projet':'probleme')),fr:{title:'',blurb:''}};
  if(kind==='articles') Object.assign(item,{cat:site.cats[0]?.id||'math',date,read:5}),item.fr.body='';
  if(kind==='projects') Object.assign(item,{thumb:'dots',year:date.slice(0,4),tags:[]}),Object.assign(item.fr,{role:'Projet personnel',status:'En cours',lead:'',links:[],body:''});
  if(kind==='problems'){
    const n=Math.max(0,...site.problems.map(x=>Number(x.id?.match(/^P-(\d+)$/)?.[1])||0))+1;
    Object.assign(item,{id:'P-'+String(n).padStart(3,'0'),date,level:1,tags:['math']});
    Object.assign(item.fr,{statement:'',hint:'',solution:''});
  }
  site[kind].unshift(item);selected=item.slug;lang='fr';autoSlugs.add(item);
  $('item-search').value='';render();changed();$('field-title').focus();
}
function openNew(){const dialog=$('new-dialog');dialog.querySelector('[name=kind]').value=kind;dialog.showModal();}
function duplicate(){
  const item=current();if(!item)return;
  const copy=clone(item);copy.slug=uniqueSlug(item.slug+'-copie');copy.fr.title+=' (copie)';
  if(kind==='problems'){
    const n=Math.max(0,...site.problems.map(x=>Number(x.id?.match(/^P-(\d+)$/)?.[1])||0))+1;
    copy.id='P-'+String(n).padStart(3,'0');
  }
  site[kind].unshift(copy);selected=copy.slug;$('item-search').value='';render();changed();
}
function insert(target,before,after='',placeholder='',useSelection=true){
  const input=$(target);if(!input)return;
  const start=input.selectionStart,end=input.selectionEnd,selection=(useSelection && input.value.slice(start,end))||placeholder;
  input.setRangeText(before+selection+after,start,end,'end');input.focus();
  input.setSelectionRange(start+before.length,start+before.length+selection.length);
  input.dispatchEvent(new Event('input',{bubbles:true}));
}
let imageTarget;
function applyTool(button){
  const target=button.dataset.target;
  const actions={heading:['\n\n## ','\n\n','Titre de section'],bold:['**','**','texte'],italic:['*','*','texte'],list:['\n\n- ','\n\n','Premier élément'],math:['$','$','x^2'],display:['\n\n$$','$$\n\n','\\sum_{k=1}^{n} k'],code:['\n\n~~~python\n','\n~~~\n\n','print("Bonjour")']};
  if(button.dataset.tool==='image'){imageTarget=target;$('image-dialog').showModal();return;}
  insert(target,...actions[button.dataset.tool]);
}
function download(name,text,type){
  const url=URL.createObjectURL(new Blob([text],{type}));
  const link=document.createElement('a');link.href=url;link.download=name;document.body.appendChild(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),10000);
}
function contentSource(){
  return '/* Contenu du site — exporté depuis l’atelier. */\nwindow.SITE = '+JSON.stringify(site,null,2)+';\n';
}
async function exportContent(){
  if(validate().length){renderValidation();$('validation').scrollIntoView({behavior:'smooth',block:'center'});return;}
  const text=contentSource(), snapshotFingerprint=fingerprint(site);
  try{
    if(window.showSaveFilePicker){
      const handle=await window.showSaveFilePicker({suggestedName:'content.js',types:[{description:'Contenu du site',accept:{'text/javascript':['.js']}}]});
      const writable=await handle.createWritable();await writable.write(text);await writable.close();
      status('Contenu enregistré. Recharge le site pour voir les modifications.');
    }else{
      download('content.js',text,'text/javascript');
      status('Fichier téléchargé : remplace content.js dans le dossier du site, puis recharge la page.');
    }
    exportedFingerprint=snapshotFingerprint;persistQuietly();
  }catch(error){if(error.name!=='AbortError')status('Enregistrement impossible. Tu peux sauvegarder les brouillons puis réessayer.');}
}
function persistQuietly(){
  const text=$('save-status').textContent;persist();if(storageAvailable)status(text);
}
async function importDraft(file){
  if(!file)return;
  try{
    const data=JSON.parse(await file.text()), imported=data.site || data;
    if(!validShape(imported)) throw new Error('Ce fichier ne contient pas un brouillon compatible.');
    site=clone(imported);selected=site[kind][0]?.slug||'';$('item-search').value='';render();changed();
    status('Brouillons importés. Vérifie l’aperçu avant d’enregistrer le contenu.');
  }catch(error){status('Import impossible : '+error.message);}
  $('import-file').value='';
}
$('editor-form').addEventListener('submit',event=>event.preventDefault());
$('editor-form').addEventListener('input',event=>setField(event.target));
$('editor-form').addEventListener('click',event=>{
  const language=event.target.closest('[data-editor-lang]');
  if(language){lang=language.dataset.editorLang;renderForm();updatePreview();persist();}
  const tool=event.target.closest('[data-tool]');if(tool)applyTool(tool);
});
$('item-list').addEventListener('click',event=>{const button=event.target.closest('[data-slug]');if(button){selected=button.dataset.slug;render();persist();}});
document.querySelectorAll('[data-kind]').forEach(button=>button.addEventListener('click',()=>{kind=button.dataset.kind;selected=site[kind][0]?.slug||'';$('item-search').value='';render();persist();}));
$('item-search').addEventListener('input',renderList);
$('new-item').addEventListener('click',openNew);$('empty-new').addEventListener('click',openNew);
$('new-dialog').addEventListener('close',()=>{if($('new-dialog').returnValue==='create'){kind=$('new-dialog').querySelector('[name=kind]').value;newItem();}});
$('duplicate').addEventListener('click',duplicate);
$('delete-item').addEventListener('click',()=>$('delete-dialog').showModal());
$('delete-dialog').addEventListener('close',()=>{if($('delete-dialog').returnValue==='delete'){site[kind]=site[kind].filter(x=>x.slug!==selected);selected=site[kind][0]?.slug||'';render();changed();}});
$('image-dialog').addEventListener('close',()=>{
  if($('image-dialog').returnValue!=='insert')return;
  const path=$('image-dialog').querySelector('[name=image-path]').value.trim(),caption=$('image-dialog').querySelector('[name=image-caption]').value.trim();
  if(path && !/[\s()"'<>]/.test(path))insert(imageTarget,'\n\n![',']('+path+')\n\n',caption || 'Légende',false);
  else status('Choisis un chemin d’image sans espace ni parenthèses.');
});
$('export').addEventListener('click',exportContent);
$('backup').addEventListener('click',()=>{persistQuietly();download('brouillons-site-'+today()+'.json',JSON.stringify({version:1,site},null,2),'application/json');status('Brouillons téléchargés. Tu pourras les réimporter dans l’atelier.');});
$('import').addEventListener('click',()=>$('import-file').click());$('import-file').addEventListener('change',event=>importDraft(event.target.files[0]));
$('restore-draft').addEventListener('click',()=>{site=clone(staleDraft.site);selected=site[kind][0]?.slug||'';$('draft-notice').hidden=true;staleDraft=null;render();changed();});
$('discard-draft').addEventListener('click',()=>{$('draft-notice').hidden=true;staleDraft=null;persist();});
$('preview').addEventListener('load',()=>{previewReady=true;updatePreview();});
$('preview-size').addEventListener('change',()=>{$('preview').style.width=$('preview-size').value==='auto'?'100%':$('preview-size').value+'px';$('preview').style.flexShrink='0';});
document.addEventListener('keydown',event=>{if((event.ctrlKey||event.metaKey) && event.key.toLowerCase()==='s'){event.preventDefault();exportContent();}});
window.addEventListener('pagehide',()=>{if(!staleDraft)persistQuietly();});
window.addEventListener('beforeunload',event=>{if(!storageAvailable && fingerprint(site)!==exportedFingerprint){event.preventDefault();event.returnValue='';}});
loadDraft();
Object.keys(KINDS).forEach(key=>site[key].forEach(item=>{if(!item.fr?.title)autoSlugs.add(item);}));
render();
if(!$('save-status').textContent.startsWith('Brouillon') && storageAvailable)status('Contenu chargé. Les modifications restent en brouillon jusqu’à l’enregistrement.');
// L’iframe peut avoir terminé son chargement avant que l’atelier soit initialisé.
try{if($('preview').contentDocument?.readyState==='complete' && $('preview').contentWindow.SITE){previewReady=true;updatePreview();}}catch(error){previewReady=true;updatePreview();}
})();
