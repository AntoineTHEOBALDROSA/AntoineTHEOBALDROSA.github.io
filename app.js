/* =========================================================
   app.js — routeur, i18n, moteur Markdown + LaTeX (KaTeX)
   Aucune dépendance à part KaTeX (rendu des maths) et Lucide (icônes),
   tous deux chargés depuis index.html.
   ========================================================= */
(function(){
'use strict';

const S = window.SITE;
const main = document.getElementById('main');
if(!S){ main.innerHTML = '<div class="wrap"><p class="noscript">content.js n’a pas pu être chargé. Vérifiez que index.html, styles.css, app.js et content.js sont dans le même dossier.</p></div>'; return; }

/* =========================================================
   1. i18n — libellés d’interface
   ========================================================= */
const UI = {
fr:{
  code:'fr', locale:'fr-FR', other:'en',
  nav:{home:'Accueil',projects:'Projets',articles:'Articles',problems:'Problèmes',contact:'Contact'},
  crumbHome:'Accueil',
  n:{project:n=>n+(n>1?' projets':' projet'),article:n=>n+(n>1?' articles':' article'),
     problem:n=>n+(n>1?' problèmes':' problème'),category:n=>n+(n>1?' catégories':' catégorie')},
  readTime:n=>n+' min de lecture',
  home:{recent:'Ajouté récemment',kinds:{article:'Article',problem:'Problème',project:'Projet'},
    edu:'Formation',skills:'Compétences',elsewhere:'Ailleurs',ongoing:'en cours',
    doors:[
      'Les projets que j’ai réalisé, que ce soit pour les cours, parce que les outils n’existaient pas.. ou simplement par curiosité. Parce qu’on apprend par la pratique!',
      'Des articles que j’écris sur ce que je trouve fascinant. Ils sont rangés par domaine : mathématiques, informatique et physique.',
      'Une compilation des plus beaux exercices que j’ai rencontré. Venez vous casser la tête sur des exercices pas toujours faciles!']},
  projects:{h1:'Projets',lead:'Vous trouverez ici une liste des projets que j’ai réalisé. Ces projets ont parfois été menés pour les cours, mais plus souvent ils l’ont été pour répondre à des besoins personnels. Vous trouverez pour la plupart des projets la motivation du projet, les fonctionnalités du produit final, les problèmes rencontrés et ce que j’ai appris lors de sa conception.<br><br>Comme la plupart des projets sont en libre accès sur mon Github, amusez-vous à les installer et à jouer avec!',
    sheet:'Fiche technique',links:'Liens',stack:'Techniques',prev:'Projet précédent',next:'Projet suivant'},
  articles:{h1:'Articles',lead:n=>'Parfois on tombe sur un résultat qui nous ébahit tant qu’on est soudainement pris d’une forte envie d’en parler à tout le monde. C’est de là que viennent ces articles.<br><br>Il y a actuellement '+n+' articles : bonne lecture !',
    allCats:'Toutes les catégories',prev:'Article précédent',next:'Article suivant'},
  problems:{h1:'Problèmes',lead:'Vous trouverez ici un recueil de problèmes et d’exercices, parmi les plus élégants et surprenants que j’ai rencontré au cours de ma scolarité et de mes lectures personnelles.<br><br>Chacun vient avec un indice, puis une solution détaillée. Mais prenez le temps de chercher une solution, une piste tout du moins, pour que le problème vous soit utile et que vous en perceviez l’élégance. Mais surtout, prenez du plaisir à réfléchir à ces jolis problèmes... en somme, amusez-vous.',
    domain:'Domaine',theme:'Thème',search:'Rechercher un mot, un thème, un identifiant…',clear:'Effacer la recherche',
    results:(n,t)=>n+(n>1?' problèmes':' problème')+' sur '+t,none:'aucun résultat',reset:'Réinitialiser',
    empty:'Aucun problème ne correspond. Les filtres se cumulent : un problème doit porter <em>tous</em> les tags sélectionnés.',
    showAll:'Tout afficher',hint:'Indice',solution:'Solution complète',written:'rédigé le',
    difficulty:n=>'Difficulté '+n+' sur 3',all:'Tous les problèmes',prev:'Précédent',next:'Suivant'},
  contact:{h1:'Contact',
    lead:'Une question sur un article, une erreur dans une solution, une envie de travailler ensemble : écrivez-moi, je réponds sous quelques jours.',
    p:['Le plus simple reste le courriel. Si votre message porte sur un problème ou un article précis, mentionnez son identifiant ou son titre : cela m’évite de chercher.',
       'Les corrections sont particulièrement bienvenues. Trois solutions ont déjà été rectifiées grâce à des lecteurs, et j’indique la correction en bas de page quand elle change le résultat.'],
    copy:'Copier l’adresse',copied:'Copié',copyFail:'Copie impossible',
    elsewhere:'Ailleurs',recent:'Projets récents',avail:'Disponibilité',
    rows:[['Stage','À partir de juin 2027'],['Sujets','Intelligence Artificielle, Finance'],['Lieu','France ou à l’étranger']]},
  nf:{eyebrow:'Erreur 404',h1:'Cette page n’existe pas',
    lead:'Le lien est peut-être ancien, ou l’adresse comporte une faute. Les quatre sections du site sont accessibles depuis le menu.'},
  foot:{about:'Antoine THEOBALD--ROSA — Paris.',updated:'Dernière mise à jour : juillet 2026.'},
  pending:null,
  langLabel:'Passer en anglais'
},
en:{
  code:'en', locale:'en-GB', other:'fr',
  nav:{home:'Home',projects:'Projects',articles:'Articles',problems:'Problems',contact:'Contact'},
  crumbHome:'Home',
  n:{project:n=>n+' project'+(n>1?'s':''),article:n=>n+' article'+(n>1?'s':''),
     problem:n=>n+' problem'+(n>1?'s':''),category:n=>n+' categor'+(n>1?'ies':'y')},
  readTime:n=>n+' min read',
  home:{recent:'Recently added',kinds:{article:'Article',problem:'Problem',project:'Project'},
    edu:'Education',skills:'Skills',elsewhere:'Elsewhere',ongoing:'in progress',
    doors: [
      "The projects I have worked on, whether for coursework, because the tools did not exist yet, or simply out of curiosity. Because the best way to learn is by doing!",
      "Articles I write about what I find fascinating. They are organized by field: mathematics, computer science, and physics.",
      "A collection of the finest problems I have come across. Come challenge yourself with exercises that are not always easy!"
    ]},
  projects:{h1:'Projects',lead:'Here you will find a list of the projects I have worked on. These projects were sometimes carried out for coursework, but more often they were undertaken to address needs I had. For most projects, you will find the motivation behind the project, the features of the final product, the challenges encountered, and what I learned during its development.<br><br>As most projects are freely available on my GitHub, feel free to install them and play around with them!',
    sheet:'Tech sheet',links:'Links',stack:'Stack',prev:'Previous project',next:'Next project'},
  articles:{h1:'Articles',lead:n=>'Sometimes you come across a result that leaves you so awestruck that you suddenly feel compelled to tell everyone about it. That is where these articles come from.<br><br>There are currently '+n+' articles: happy reading!',
    allCats:'All categories',prev:'Previous article',next:'Next article'},
  problems:{h1:'Problems',lead:'Here you will find a collection of problems and exercises, among the most elegant and surprising I have encountered during my studies and personal reading.<br><br>Each comes with a hint, followed by a detailed solution. But take the time to search for a solution, or at least a starting point, so that the problem becomes useful to you, so that you can appreciate its elegance at the very least. Most importantly, take pleasure in thinking through these beautiful problems... in short, have fun.F',
    domain:'Field',theme:'Topic',search:'Search a word, a topic, an identifier…',clear:'Clear search',
    results:(n,t)=>n+' of '+t+' problem'+(t>1?'s':''),none:'no result',reset:'Reset',
    empty:'No problem matches. Filters combine: a problem must carry <em>all</em> selected tags.',
    showAll:'Show all',hint:'Hint',solution:'Full solution',written:'written on',
    difficulty:n=>'Difficulty '+n+' out of 3',all:'All problems',prev:'Previous',next:'Next'},
  contact:{h1:'Contact',
    lead:'A question about an article, a mistake in a solution, an idea worth building together: write to me, I answer within a few days.',
    p:['Email is simplest. If your message is about a specific problem or article, mention its identifier or title so I do not have to hunt for it.',
       'Corrections are especially welcome. Three solutions have already been fixed thanks to readers, and I note the correction at the bottom of the page whenever it changes the result.'],
    copy:'Copy address',copied:'Copied',copyFail:'Copy failed',
    elsewhere:'Elsewhere',recent:'Recent projects',avail:'Availability',
    rows:[['Internship','From June 2027'],['Topics','Artificial Intelligence, Finance'],['Location','Anywhere']]},
  nf:{eyebrow:'Error 404',h1:'This page does not exist',
    lead:'The link may be old, or the address has a typo. All four sections are reachable from the menu.'},
  foot:{about:'Antoine THEOBALD--ROSA — Paris.',updated:'Last updated: July 2026.'},
  pending:'Pas encore traduit / Not translated yet: the text below is in French.',
  langLabel:'Switch to French'
}};

let LANG = (function(){
  const saved = localStorage.getItem('lang');
  if(saved === 'fr' || saved === 'en') return saved;
  return (navigator.language || 'fr').toLowerCase().startsWith('en') ? 'en' : 'fr';
})();
const T = () => UI[LANG];

/* Champ localisé : accepte une string, ou un objet {fr, en}. */
function loc(v){
  if(v == null) return '';
  if(typeof v === 'string') return v;
  return v[LANG] != null ? v[LANG] : v.fr;
}
/* Objet localisé avec repli champ par champ sur le français. */
function pick(o){ return Object.assign({}, o.fr, o[LANG] || {}); }
function isPending(o, field){ return LANG !== 'fr' && !(o[LANG] && o[LANG][field]); }

const tagLabel = id => (S.tags[id] ? loc(S.tags[id]) : id);
const catOf = id => S.cats.find(c => c.id === id);
const artsOf = id => S.articles.filter(a => a.cat === id).sort((a,b) => b.date.localeCompare(a.date));
const fmtDate = iso => new Date(iso + 'T12:00:00').toLocaleDateString(T().locale, {day:'numeric', month:'long', year:'numeric'});

/* =========================================================
   2. Moteur Markdown + LaTeX
   ========================================================= */
const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

function tex(src, display){
  const clean = src.trim();
  if(window.katex){
    try{
      return katex.renderToString(clean, {displayMode:!!display, throwOnError:false, strict:false,
        macros:{'\\R':'\\mathbb{R}','\\N':'\\mathbb{N}','\\Z':'\\mathbb{Z}','\\eps':'\\varepsilon'}});
    }catch(e){ /* tombe dans le repli */ }
  }
  return '<span class="tex-fallback' + (display ? ' tex-fallback--block' : '') + '">' + esc(clean) + '</span>';
}

/* Rendu en ligne : maths, gras, italique, code, liens. */
function inline(src){
  const m = [];
  let s = String(src).replace(/\\`/g, '`');
  s = s.replace(/\$\$([\s\S]+?)\$\$/g, (_, t) => { m.push([t, true]); return '\u0001' + (m.length-1) + '\u0001'; });
  s = s.replace(/\$([^$\n]+?)\$/g,   (_, t) => { m.push([t, false]); return '\u0001' + (m.length-1) + '\u0001'; });
  s = s.replace(/`([^`]+)`/g, (_, c) => '<code>' + esc(c) + '</code>');
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em>$2</em>');
  s = s.replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, (_, alt, src) =>
    '<img src="' + esc(src) + '" alt="' + esc(alt) + '" loading="lazy">'
  );
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, txt, href) =>
    '<a href="' + href + '"' + (/^https?:/.test(href) ? ' target="_blank" rel="noopener"' : '') + '>' + txt + '</a>');
  return s.replace(/\u0001(\d+)\u0001/g, (_, i) => tex(m[+i][0], m[+i][1]));
}


/* Rendu bloc : titres, listes, citations, code, figures, maths centrées. */
function md(src){
  if(!src) return '';
  let s = String(src).replace(/\r/g, '').replace(/\\`/g, '`');
  const code = [];
  s = s.replace(/(?:```|~~~)\n?([\s\S]*?)(?:```|~~~)/g, (_, c) => {
    code.push(c.replace(/\n$/, '')); return '\u0002' + (code.length-1) + '\u0002';
  });

  const blocks = s.split(/\n{2,}/).map(b => b.trim()).filter(Boolean).map(b => {
    let mm;
    if((mm = b.match(/^!\[([^\]]*)\]\(([^)\s]+)\)$/))) {
      const src = mm[2];
      if(/^(https?:\/\/|\/|\.\/|\.\.\/)/.test(src)) {
        return '<figure><img src="' + esc(src) + '" alt="' + esc(mm[1]) + '">'
          + '<figcaption>' + inline(mm[1]) + '</figcaption></figure>';
      }
      if(/^fig:[a-z]+$/.test(src)) return figure(src.slice(4), inline(mm[1]));
    }
    if((mm = b.match(/^\u0002(\d+)\u0002$/))) return '<div class="pre">' + esc(code[+mm[1]]) + '</div>';
    if(/^###\s/.test(b))  return '<h3>' + inline(b.slice(4)) + '</h3>';
    if(/^##\s/.test(b))   return '<h2>' + inline(b.slice(3)) + '</h2>';
    if(/^>\s?/.test(b))   return '<blockquote>' + inline(b.replace(/^>\s?/gm, ' ').trim()) + '</blockquote>';
    if((mm = b.match(/^!\[([^\]]*)\]\((?:fig|thumb):([a-z]+)\)$/))) {
      return figure(mm[2], inline(mm[1]));
    }

    if((mm = b.match(/^!\[([^\]]*)\]\(([^)\s]+)\)$/))) {
      return '<figure><img src="' + esc(mm[2]) + '" alt="' + esc(mm[1]) + '" loading="lazy">' +
            '<figcaption>' + inline(mm[1]) + '</figcaption></figure>';
    }
    if(/^[-*]\s/.test(b)) return '<ul>' + listItems(b) + '</ul>';
    if(/^\d+[.)]\s/.test(b)) return '<ol>' + listItems(b) + '</ol>';
    if(/^\$\$[\s\S]+\$\$$/.test(b)) return tex(b.slice(2, -2), true);
    return '<p>' + inline(b) + '</p>';
  });
  return blocks.join('\n');
}
function listItems(block){
  const out = [];
  block.split('\n').forEach(line => {
    const m = line.match(/^\s*(?:[-*]|\d+[.)])\s+(.*)$/);
    if(m) out.push('<li>' + inline(m[1]) + '</li>');
    else if(out.length) out[out.length-1] = out[out.length-1].replace(/<\/li>$/, ' ' + inline(line.trim()) + '</li>');
  });
  return out.join('');
}
/* Titre nu, pour <title> et attributs */
const plain = s => String(s).replace(/\$[^$]*\$/g, '').replace(/[*`\\]/g, '').replace(/\s{2,}/g,' ').trim();

/* =========================================================
   3. Figures génératives (SVG déterministe, une par clé)
   ========================================================= */
const W = 168, H = 120;
const rng = seed => { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; };
const svg = inner => '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-hidden="true">' + inner + '</svg>';
const FIG = {
  dots(){ let o = '', r = rng(7);
    for(let y=0;y<7;y++) for(let x=0;x<10;x++){ const cx=14+x*15, cy=12+y*16, acc=r()>.82;
      o += '<circle cx="'+cx+'" cy="'+cy+'" r="'+(acc?3:1.6)+'" class="'+(acc?'fa':'fl')+'"/>'; }
    return svg(o + '<path d="M4 60 H164" class="l" stroke-width=".75" stroke-dasharray="2 4"/>'); },
  orbit(){ let o = '<circle cx="84" cy="60" r="4" class="fa"/>';
    [18,32,46].forEach(rr => { o += '<ellipse cx="84" cy="60" rx="'+(rr*1.5)+'" ry="'+rr+'" class="l" stroke-width=".8"/>'; });
    [[111,48],[46,69],[142,82],[22,42],[94,102]].forEach((p,i) =>
      o += '<circle cx="'+p[0]+'" cy="'+p[1]+'" r="'+(i%2?2:2.8)+'" class="'+(i===0?'fa':'fl')+'"/>');
    return svg(o); },
  wave(){ let d='', a='';
    for(let x=0;x<=160;x+=2){ const y = 60 - 22*Math.sin(x/13)*Math.exp(-Math.pow((x-70)/60,2)) - 8*Math.sin(x/4.2);
      d += (x?'L':'M') + (x+4) + ' ' + y.toFixed(1) + ' '; }
    for(let x=0;x<=160;x+=2){ const y = 60 - 30*Math.exp(-Math.pow((x-52)/9,2)) - 19*Math.exp(-Math.pow((x-104)/7,2));
      a += (x?'L':'M') + (x+4) + ' ' + y.toFixed(1) + ' '; }
    return svg('<path d="M4 96 H164" class="l" stroke-width=".75"/><path d="'+d+'" class="l" stroke-width="1"/><path d="'+a+'" class="a" stroke-width="1.4"/>'); },
  tree(){ const o = [];
    const node = (x,y,r,acc) => o.push('<circle cx="'+x+'" cy="'+y+'" r="'+(r||2.6)+'" class="'+(acc?'fa':'fl')+'"/>');
    const edge = (a,b,c,d) => o.push('<path d="M'+a+' '+b+' L'+c+' '+d+'" class="l" stroke-width=".9"/>');
    [[84],[46,122],[26,66,102,142],[16,36,56,76,112,132]].forEach((row,i) =>
      row.forEach(x => node(x, 16+i*30, i===0?3.4:2.6, i===3)));
    edge(84,16,46,46); edge(84,16,122,46);
    edge(46,46,26,76); edge(46,46,66,76); edge(122,46,102,76); edge(122,46,142,76);
    edge(26,76,16,106); edge(26,76,36,106); edge(66,76,56,106); edge(66,76,76,106);
    edge(102,76,112,106); edge(142,76,132,106);
    return svg(o.join('')); },
  bars(){ let o = '', r = rng(19), hs = [];
    for(let i=0;i<13;i++) hs.push(8 + Math.pow(1-i/13,1.7)*72 + r()*6);
    hs.forEach((h,i) => o += '<rect x="'+(9+i*12)+'" y="'+(98-h)+'" width="6" height="'+h.toFixed(1)+'" class="'+(i<2?'fa':'fl')+'"/>');
    return svg(o + '<path d="M4 98 H164" class="l" stroke-width=".75"/>'); },
  cells(){ let o = '', r = rng(41);
    for(let y=0;y<8;y++) for(let x=0;x<12;x++){ const on = r()>.55, acc = on && r()>.72;
      o += on
        ? '<rect x="'+(8+x*13)+'" y="'+(8+y*13)+'" width="11" height="11" class="'+(acc?'fa':'fl')+'" opacity="'+(acc?1:.55)+'"/>'
        : '<rect x="'+(8+x*13)+'" y="'+(8+y*13)+'" width="11" height="11" class="l" stroke-width=".5"/>'; }
    return svg(o); }
};
const thumb = (value, alt = '') => {
  const isImage =
    typeof value === 'string' &&
    /^(https?:\/\/|\.?\.?\/|images\/)/.test(value);

  if (isImage) {
    return '<div class="thumb thumb--image">' +
      '<img src="' + esc(value) + '" alt="' + esc(alt) + '" loading="lazy">' +
      '</div>';
  }

  return '<div class="thumb">' + (FIG[value] || FIG.dots)() + '</div>';
};
const figure = (k, caption) =>
  '<figure><div class="shot"><div class="shot__bar"><b></b><b></b><b></b></div>' +
  '<div class="shot__body">' + (FIG[k] || FIG.dots)() + '</div></div>' +
  '<figcaption>' + caption + '</figcaption></figure>';

/* =========================================================
   4. Fragments réutilisables
   ========================================================= */
const crumbs = items => '<nav class="crumbs" aria-label="' + (LANG==='fr' ? 'Fil d’Ariane' : 'Breadcrumb') + '">' +
  items.map((it,i) => (i ? '<span aria-hidden="true">/</span>' : '') +
    (it[1] ? '<a href="'+it[1]+'">'+it[0]+'</a>' : '<span>'+it[0]+'</span>')).join('') + '</nav>';

const levelDots = n => '<span class="level" aria-label="' + T().problems.difficulty(n) + '">' +
  [1,2,3].map(i => '<b class="' + (i<=n ? 'on' : '') + '"></b>').join('') + '</span>';

const notice = () => T().pending
  ? '<div class="notice"><i data-lucide="languages"></i><p>' + T().pending +
    ' <a href="#" data-lang="fr">Lire en français →</a></p></div>'
  : '';

function pager(prev, next){
  if(!prev && !next) return '';
  const cell = (x, align) => x
    ? '<a href="'+x[2]+'" style="text-align:'+align+'"><span class="eyebrow">'+x[0]+'</span><strong>'+inline(x[1])+'</strong></a>'
    : '<span></span>';
  return '<nav class="pager" aria-label="' + (LANG==='fr'?'Pages voisines':'Adjacent pages') + '">' +
    cell(prev,'left') + cell(next,'right') + '</nav>';
}

/* =========================================================
   5. Vues
   ========================================================= */
function viewHome(){
  const p = S.profile, u = T();
  const a0 = S.articles[0], pb0 = S.problems[0], pj = S.projects.find(x => x.slug === 'recherche') || S.projects[0];
  const rec = [
    [u.home.kinds.article, pick(a0).title, '#/articles/'+a0.cat+'/'+a0.slug, fmtDate(a0.date)],
    [u.home.kinds.problem, pick(pb0).title, '#/problemes/'+pb0.slug, pb0.id],
    [u.home.kinds.project, pick(pj).title, '#/projets/'+pj.slug, u.home.ongoing]
  ];
  const doors = [
    ['01', u.nav.projects, '#/projets', u.home.doors[0], u.n.project(S.projects.length)],
    ['02', u.nav.articles, '#/articles', u.home.doors[1], u.n.article(S.articles.length)],
    ['03', u.nav.problems, '#/problemes', u.home.doors[2], u.n.problem(S.problems.length)]
  ];
  return '<div class="wrap view">' +
    '<section class="hero"><div class="hero__main">' +
      '<p class="eyebrow">' + loc(p.location) + '</p>' +
      '<h1>' + p.first + ' <em>' + p.last + '</em></h1>' +
      '<p class="hero__title">' + inline(loc(p.title)) + '</p>' +
      '<div class="hero__bio prose">' + loc(p.bio).map(x => '<p>'+inline(x)+'</p>').join('') + '</div>' +
    '</div><aside class="rail">' +
      '<section><h2>' + u.home.edu + '</h2><ul class="timeline">' +
        p.formation.map(f => { const d = pick(f); return '<li><span>'+f.y+'</span><div><b>'+d.t+'</b><i>'+d.s+'</i></div></li>'; }).join('') +
      '</ul></section>' +
      '<section><h2>' + u.home.skills + '</h2><div class="chips">' +
        p.skills.map(s => '<span class="chip">'+loc(s)+'</span>').join('') + '</div></section>' +
      '<section><h2>' + u.home.elsewhere + '</h2><div class="socials">' +
        p.socials.map(s => '<a href="'+s.href+'"' + (/^https?:/.test(s.href)?' target="_blank" rel="noopener"':'') + '>' +
          loc(s.label) + '<span aria-hidden="true">'+s.glyph+'</span></a>').join('') + '</div></section>' +
    '</aside></section>' +

    '<div class="doors stagger">' + doors.map(d =>
      '<a class="door" href="'+d[2]+'"><span class="door__n">'+d[0]+'</span><h2>'+d[1]+'</h2>' +
      '<p>'+d[3]+'</p><span class="door__go">'+d[4]+' &nbsp;→</span></a>').join('') + '</div>' +

    '<section style="margin-bottom:var(--s9)"><h2 class="eyebrow" style="margin-bottom:var(--s4)">' + u.home.recent + '</h2>' +
      '<div class="linklist">' + rec.map(r =>
        '<a href="'+r[2]+'"><span class="kind">'+r[0]+'</span><b>'+inline(r[1])+'</b><span>'+r[3]+'</span></a>').join('') +
      '</div></section></div>';
}

function viewProjects(){
  const u = T().projects;
  return '<div class="wrap view">' + crumbs([[T().crumbHome,'#/'],[T().nav.projects]]) +
    '<header class="pagehead"><h1>'+u.h1+'</h1><p class="lead">'+u.lead+'</p></header>' +
    '<div class="rows stagger">' + S.projects.map((p,i) => { const c = pick(p);
      return '<a class="row row--project" href="#/projets/'+p.slug+'" style="--i:'+i+'">' + thumb(p.thumb, c.title) +
        '<div class="row__body"><div class="row__meta"><span class="year">'+p.year+'</span><span class="tag">'+c.status+'</span></div>' +
        '<h2>'+inline(c.title)+'</h2><p>'+inline(c.blurb)+'</p>' +
        '<div class="row__meta">' + p.tags.map(t => '<span class="tag">'+t+'</span>').join('') + '</div></div></a>';
    }).join('') + '</div></div>';
}

function viewProject(slug){
  const i = S.projects.findIndex(p => p.slug === slug);
  if(i < 0) return viewNotFound();
  const p = S.projects[i], c = pick(p), u = T().projects;
  const prev = S.projects[i-1], next = S.projects[i+1];
  const t = plain(c.title);
  return '<div class="wrap view">' + crumbs([[T().crumbHome,'#/'],[T().nav.projects,'#/projets'],[t.length>34?t.slice(0,32)+'…':t]]) +
    '<header class="pagehead"><div class="row__meta"><span class="year">'+p.year+'</span>' +
      '<span class="tag">'+c.role+'</span><span class="tag">'+c.status+'</span></div>' +
      '<h1>'+inline(c.title)+'</h1><p class="lead">'+inline(c.lead)+'</p></header>' +
    '<div class="detail detail--split"><div>' + (isPending(p,'body') ? notice() : '') +
      '<article class="prose" style="margin-top:var(--s6)">' + md(c.body) + '</article></div>' +
      '<aside class="detail__rail">' +
        '<section><h2>'+u.sheet+'</h2><dl class="kv">' +
          c.stack.map(s => '<div><dt>'+s[0]+'</dt><dd>'+inline(s[1])+'</dd></div>').join('') + '</dl></section>' +
        '<section><h2>'+u.links+'</h2><div class="linklist">' +
          c.links.map(l => '<a href="'+l[1]+'"' + (/^https?:/.test(l[1])?' target="_blank" rel="noopener"':'') + '>' +
            l[0] + '<span aria-hidden="true">→</span></a>').join('') + '</div></section>' +
        '<section><h2>'+u.stack+'</h2><div class="chips">' + p.tags.map(x => '<span class="chip">'+x+'</span>').join('') + '</div></section>' +
      '</aside></div>' +
    pager(prev && [u.prev, pick(prev).title, '#/projets/'+prev.slug], next && [u.next, pick(next).title, '#/projets/'+next.slug]) +
    '</div>';
}

function viewArticles(){
  const u = T().articles;
  return '<div class="wrap view">' + crumbs([[T().crumbHome,'#/'],[T().nav.articles]]) +
    '<header class="pagehead"><h1>'+u.h1+'</h1><p class="lead">'+u.lead(S.articles.length)+'</p></header>' +
    '<div class="rows stagger">' + S.cats.map((c,i) => { const d = pick(c), n = artsOf(c.id).length;
      return '<a class="cat" href="#/articles/'+c.id+'" style="--i:'+i+'"><h2>'+d.name+'</h2>' +
        '<span class="cat__count">'+T().n.article(n)+' &nbsp;→</span><p>'+inline(d.blurb)+'</p></a>';
    }).join('') + '</div></div>';
}

function viewCategory(id){
  const cat = catOf(id); if(!cat) return viewNotFound();
  const d = pick(cat), arts = artsOf(id);
  return '<div class="wrap view">' + crumbs([[T().crumbHome,'#/'],[T().nav.articles,'#/articles'],[d.name]]) +
    '<header class="pagehead"><h1>'+d.name+'</h1><p class="lead">'+inline(d.blurb)+'</p></header>' +
    '<div class="rows stagger">' + arts.map((a,i) => { const c = pick(a);
      return '<a class="row" href="#/articles/'+id+'/'+a.slug+'" style="--i:'+i+'"><div class="row__body">' +
        '<div class="row__meta"><span class="year">'+fmtDate(a.date)+'</span><span class="tag">'+T().readTime(a.read)+'</span></div>' +
        '<h2>'+inline(c.title)+'</h2><p>'+inline(c.blurb)+'</p></div></a>';
    }).join('') + '</div>' +
    '<div style="margin-bottom:var(--s9)"><a class="btn" href="#/articles">← '+T().articles.allCats+'</a></div></div>';
}

function viewArticle(catId, slug){
  const cat = catOf(catId); if(!cat) return viewNotFound();
  const arts = artsOf(catId), i = arts.findIndex(a => a.slug === slug);
  if(i < 0) return viewNotFound();
  const a = arts[i], c = pick(a), d = pick(cat), u = T().articles;
  const prev = arts[i-1], next = arts[i+1], t = plain(c.title);
  return '<div class="wrap view">' + crumbs([[T().crumbHome,'#/'],[T().nav.articles,'#/articles'],[d.name,'#/articles/'+catId],[t.length>30?t.slice(0,28)+'…':t]]) +
    '<header class="pagehead"><p class="eyebrow">'+d.name+' · '+fmtDate(a.date)+' · '+T().readTime(a.read)+'</p>' +
    '<h1>'+inline(c.title)+'</h1><p class="lead">'+inline(c.blurb)+'</p></header>' +
    '<div class="detail">' + (isPending(a,'body') ? notice() : '') +
      '<article class="prose">' + md(c.body) + '</article>' +
      '<div><a class="btn btn--a" href="#/articles/'+catId+'">← '+d.name+'</a></div></div>' +
    pager(prev && [u.prev, pick(prev).title, '#/articles/'+catId+'/'+prev.slug],
          next && [u.next, pick(next).title, '#/articles/'+catId+'/'+next.slug]) + '</div>';
}

/* ---------- problèmes : filtres ---------- */
const THEMES = [...new Set(S.problems.flatMap(p => p.tags))].filter(t => S.domains.indexOf(t) < 0).sort();
let F = {tags:new Set(), q:''};

function viewProblems(){
  const u = T().problems;
  return '<div class="wrap view">' + crumbs([[T().crumbHome,'#/'],[T().nav.problems]]) +
    '<header class="pagehead"><h1>'+u.h1+'</h1><p class="lead">'+u.lead+'</p></header>' +
    '<div class="filters">' +
      '<div class="search"><i data-lucide="search"></i>' +
        '<input id="q" type="search" placeholder="'+u.search+'" aria-label="'+u.search+'" value="'+F.q.replace(/"/g,'&quot;')+'">' +
        '<button id="qclear" type="button" aria-label="'+u.clear+'"'+(F.q?'':' hidden')+'><i data-lucide="x"></i></button></div>' +
      '<div class="filtergroup"><span class="eyebrow">'+u.domain+'</span>' + S.domains.map(fchip).join('') + '</div>' +
      '<div class="filtergroup"><span class="eyebrow">'+u.theme+'</span>' + THEMES.map(fchip).join('') + '</div>' +
    '</div><div id="plist-wrap">' + problemList() + '</div></div>';
}
const fchip = id => '<button class="fchip" type="button" data-tag="'+id+'" aria-pressed="'+F.tags.has(id)+'">' + tagLabel(id) + '</button>';

function haystack(p){
  const bits = [p.id, p.tags.join(' ')];
  ['fr','en'].forEach(l => { if(p[l]) bits.push(p[l].title || '', p[l].blurb || ''); });
  p.tags.forEach(t => { if(S.tags[t]) bits.push(S.tags[t].fr, S.tags[t].en); });
  return bits.join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
function matches(p){
  if(![...F.tags].every(t => p.tags.indexOf(t) >= 0)) return false;
  if(!F.q) return true;
  return haystack(p).includes(F.q.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
}
function problemList(){
  const u = T().problems, list = S.problems.filter(matches), active = F.tags.size || F.q;
  let out = '<div class="resultline" role="status">' +
    (list.length ? u.results(list.length, S.problems.length) : u.none) +
    (active ? '<button id="reset" type="button">'+u.reset+'</button>' : '') + '</div>';
  if(!list.length){
    return out + '<div class="empty"><i data-lucide="search-x" width="26" height="26"></i><p>' + u.empty + '</p>' +
      '<button class="btn" id="reset2" type="button">' + u.showAll + '</button></div>';
  }
  return out + '<div class="plist stagger">' + list.map((p,i) => { const c = pick(p);
    return '<a class="prob" href="#/problemes/'+p.slug+'" style="--i:'+Math.min(i,8)+'">' +
      '<span class="prob__id">'+p.id+'</span><div><h2>'+inline(c.title)+'</h2>' +
      '<div class="prob__tags">' + p.tags.map(t => '<span class="tag">'+tagLabel(t)+'</span>').join('') + '</div></div>' +
      levelDots(p.level) + '</a>';
  }).join('') + '</div>';
}
function bindProblems(){
  const wrap = document.getElementById('plist-wrap');
  if(!wrap) return;
  const q = document.getElementById('q'), clear = document.getElementById('qclear');
  const refresh = () => { wrap.innerHTML = problemList(); icons(); bindReset(); };
  function bindReset(){
    ['reset','reset2'].forEach(id => { const el = document.getElementById(id); if(el) el.addEventListener('click', () => {
      F = {tags:new Set(), q:''}; q.value = ''; clear.hidden = true;
      document.querySelectorAll('.fchip').forEach(b => b.setAttribute('aria-pressed','false')); refresh();
    }); });
  }
  document.querySelectorAll('.fchip').forEach(b => b.addEventListener('click', () => {
    const t = b.dataset.tag;
    F.tags.has(t) ? F.tags.delete(t) : F.tags.add(t);
    b.setAttribute('aria-pressed', F.tags.has(t)); refresh();
  }));
  q.addEventListener('input', () => { F.q = q.value; clear.hidden = !F.q; refresh(); });
  clear.addEventListener('click', () => { F.q = ''; q.value = ''; clear.hidden = true; q.focus(); refresh(); });
  bindReset();
}

function viewProblem(slug){
  const i = S.problems.findIndex(p => p.slug === slug);
  if(i < 0) return viewNotFound();
  const p = S.problems[i], c = pick(p), u = T().problems;
  const prev = S.problems[i-1], next = S.problems[i+1];
  const disc = (label, html) => '<details class="disc"><summary><i data-lucide="chevron-right"></i>' + label +
    '</summary><div class="disc__in prose">' + md(html) + '</div></details>';
  return '<div class="wrap view">' + crumbs([[T().crumbHome,'#/'],[T().nav.problems,'#/problemes'],[p.id]]) +
    '<header class="pagehead"><div class="row__meta"><span class="prob__id">'+p.id+'</span>' + levelDots(p.level) +
      '<span class="tag">'+u.written+' '+fmtDate(p.date)+'</span></div>' +
      '<h1>'+inline(c.title)+'</h1><p class="lead">'+inline(c.blurb)+'</p>' +
      '<div class="chips">' + p.tags.map(t => '<span class="chip">'+tagLabel(t)+'</span>').join('') + '</div></header>' +
    '<div class="detail">' + (isPending(p,'statement') ? notice() : '') +
      '<article class="prose">' + md(c.statement) + '</article>' +
      '<div style="max-width:70ch">' + disc(u.hint, c.hint) + disc(u.solution, c.solution) + '</div>' +
      '<div><a class="btn btn--a" href="#/problemes">← '+u.all+'</a></div></div>' +
    pager(prev && [u.prev, pick(prev).title, '#/problemes/'+prev.slug],
          next && [u.next, pick(next).title, '#/problemes/'+next.slug]) + '</div>';
}

function viewContact(){
  const u = T().contact, p = S.profile;
  return '<div class="wrap view">' + crumbs([[T().crumbHome,'#/'],[T().nav.contact]]) +
    '<header class="pagehead"><h1>'+u.h1+'</h1><p class="lead">'+u.lead+'</p></header>' +
    '<div class="contact"><div class="prose">' + u.p.map(x => '<p>'+inline(x)+'</p>').join('') +
      '<p class="btnrow" style="margin-top:var(--s6)">' +
        '<a class="btn btn--a" href="mailto:'+p.email+'"><i data-lucide="mail"></i>'+p.email+'</a>' +
        '<button class="btn" id="copy" type="button"><i data-lucide="copy"></i><span>'+u.copy+'</span></button></p></div>' +
    '<aside class="detail__rail" style="border-left:1px solid var(--rule);padding-left:var(--s5)">' +
      '<section><h2>'+u.elsewhere+'</h2><div class="linklist">' +
        '<a href="https://github.com/AntoineTHEOBALDROSA" target="_blank" rel="noopener">GitHub<span aria-hidden="true">↗</span></a>' +
        '<a href="https://www.linkedin.com/in/antoine-theobald-rosa-696087381/" target="_blank" rel="noopener">LinkedIn<span aria-hidden="true">↗</span></a>' +
        '<a href="#/projets">'+u.recent+'<span aria-hidden="true">→</span></a></div></section>' +
      '<section><h2>'+u.avail+'</h2><dl class="kv">' +
        u.rows.map(r => '<div><dt>'+r[0]+'</dt><dd>'+r[1]+'</dd></div>').join('') + '</dl></section>' +
    '</aside></div></div>';
}
function bindContact(){
  const b = document.getElementById('copy');
  if(!b) return;
  b.addEventListener('click', async () => {
    const span = b.querySelector('span'), ico = b.querySelector('i'), old = span.textContent;
    try{ await navigator.clipboard.writeText(S.profile.email); span.textContent = T().contact.copied; }
    catch(e){ span.textContent = T().contact.copyFail; }
    ico.setAttribute('data-lucide','check'); icons();
    setTimeout(() => { span.textContent = old; b.querySelector('i').setAttribute('data-lucide','copy'); icons(); }, 1900);
  });
}

function viewNotFound(){
  const u = T().nf;
  return '<div class="wrap view"><header class="pagehead"><p class="eyebrow">'+u.eyebrow+'</p>' +
    '<h1>'+u.h1+'</h1><p class="lead">'+u.lead+'</p></header>' +
    '<div class="btnrow" style="margin-bottom:var(--s9)">' +
      '<a class="btn btn--a" href="#/">'+T().nav.home+'</a>' +
      '<a class="btn" href="#/projets">'+T().nav.projects+'</a>' +
      '<a class="btn" href="#/articles">'+T().nav.articles+'</a>' +
      '<a class="btn" href="#/problemes">'+T().nav.problems+'</a></div></div>';
}

/* =========================================================
   6. Chrome : nav, switch de langue, pied de page
   ========================================================= */
const NAVITEMS = [
  ['home','#/','home'],['projects','#/projets','layers'],['articles','#/articles','notebook-text'],
  ['problems','#/problemes','sigma'],['contact','#/contact','at-sign']
];
function renderChrome(){
  const u = T();
  document.getElementById('nav').innerHTML = NAVITEMS.map(n =>
    '<a href="'+n[1]+'" data-k="'+n[0]+'">'+u.nav[n[0]]+'</a>').join('');
  document.getElementById('tabbar').innerHTML = NAVITEMS.map(n =>
    '<a href="'+n[1]+'" data-k="'+n[0]+'"><i data-lucide="'+n[2]+'"></i>'+u.nav[n[0]]+'</a>').join('');
  document.getElementById('lang').innerHTML = ['fr','en'].map(l =>
    '<button type="button" data-lang="'+l+'" aria-pressed="'+(l===LANG)+'" lang="'+l+'">'+l.toUpperCase()+'</button>').join('');
  document.getElementById('foot').innerHTML =
    '<p>'+u.foot.about+'<br>'+u.foot.updated+'</p>' +
    '<nav>' + NAVITEMS.slice(1).map(n => '<a href="'+n[1]+'">'+u.nav[n[0]]+'</a>').join('') + '</nav>' +
    '<p><a href="https://github.com/AntoineTHEOBALDROSA" target="_blank" rel="noopener">GitHub</a> · ' +
    '<a href="https://www.linkedin.com/in/antoine-theobald-rosa-696087381/" target="_blank" rel="noopener">LinkedIn</a></p>';
  document.documentElement.lang = LANG;
}
function setLang(l){
  if(l === LANG) return;
  LANG = l;
  try{ localStorage.setItem('lang', l); }catch(e){}
  renderChrome();
  route(true);
}
document.addEventListener('click', e => {
  const b = e.target.closest('[data-lang]');
  if(!b) return;
  e.preventDefault();
  setLang(b.dataset.lang);
});

/* =========================================================
   7. Routeur
   ========================================================= */
function icons(){ if(window.lucide && window.lucide.createIcons) window.lucide.createIcons(); }

let firstRender = true;
function route(keepScroll){
  const parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean).map(decodeURIComponent);
  const sec = parts[0] || 'home';
  let html, key = sec === 'home' ? 'home' : null;

  if(sec === 'home'){ html = viewHome(); }
  else if(sec === 'projets'){ html = parts[1] ? viewProject(parts[1]) : viewProjects(); key = 'projects'; }
  else if(sec === 'articles'){ html = parts[2] ? viewArticle(parts[1], parts[2]) : (parts[1] ? viewCategory(parts[1]) : viewArticles()); key = 'articles'; }
  else if(sec === 'problemes'){ html = parts[1] ? viewProblem(parts[1]) : viewProblems(); key = 'problems'; }
  else if(sec === 'contact'){ html = viewContact(); key = 'contact'; }
  else { html = viewNotFound(); }

  main.innerHTML = html;
  document.querySelectorAll('.stagger').forEach(g =>
    [...g.children].forEach((c,i) => c.style.setProperty('--i', Math.min(i,10))));

  const h1 = main.querySelector('h1');
  document.title = 'Antoine THEOBALD--ROSA';
  document.querySelectorAll('#nav a, #tabbar a').forEach(a =>
    a.dataset.k === key ? a.setAttribute('aria-current','page') : a.removeAttribute('aria-current'));

  icons(); bindProblems(); bindContact();
  if(!firstRender && !keepScroll) window.scrollTo(0,0);
  firstRender = false;
}

window.addEventListener('hashchange', () => route());
/* KaTeX arrive de façon asynchrone : on redessine la vue dès qu’il est prêt. */
document.addEventListener('katex:ready', () => route(true));

renderChrome();
route();
})();
