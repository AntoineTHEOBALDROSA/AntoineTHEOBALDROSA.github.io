# Site personnel — Antoine THEOBALD--ROSA

Site statique, sans build, sans framework. Quatre fichiers HTML/CSS/JS séparés, formules rendues par KaTeX et figures TikZ rendues par TikZJax. Les images et le CV sont conservés dans `images/` et `pdf/`.

```
index.html     coquille : <head>, barre de nav, pied de page, chargement des scripts
styles.css     design system complet (tokens OKLCH, layout, composants)
content.js     TOUT le contenu : profil, projets, articles, problèmes  ← c'est ici qu'on écrit
app.js         routeur, bilingue FR/EN, moteur Markdown + LaTeX, filtres
```

Les quatre fichiers doivent rester **dans le même dossier**.

## Lancer en local

Ouvrir `index.html` suffit pour parcourir le site. Une connexion Internet est nécessaire pour charger les bibliothèques et les polices externes. Pour vérifier les figures TikZ et le bouton de copie dans les conditions d’un site hébergé, privilégier un serveur local :

```sh
python3 -m http.server 8000
```

Puis ouvrir `http://localhost:8000`. Sur le site publié, la copie de l’adresse utilise l’API presse-papiers du navigateur et nécessite HTTPS ; un refus est signalé sans bloquer la page.


---

# Rédiger avec l’atelier

Ouvrir `http://localhost:8000/editor.html` après avoir lancé le serveur local ci-dessus. L’atelier est une page séparée du site public, sans serveur supplémentaire ni compte à créer.

1. Choisir **Articles**, **Projets** ou **Problèmes**, puis sélectionner un contenu existant ou cliquer sur **+ Nouveau**.
2. Remplir les informations communes (date, catégorie, technologies, difficulté…) et rédiger les versions **Français** et **English** dans les onglets correspondants. Un champ anglais vide reprend le français sur le site.
3. Utiliser les boutons de mise en forme pour insérer titres, listes, code, images et formules. L’aperçu affiche le contenu avec le véritable rendu du site ; une largeur mobile est disponible.
4. Cliquer sur **Enregistrer le contenu**. Dans un navigateur qui permet l’enregistrement direct, sélectionner le `content.js` du projet. Sinon, remplacer ce fichier par le `content.js` téléchargé. Recharger ensuite le site.

Les brouillons sont sauvegardés automatiquement dans ce navigateur. **Sauvegarder les brouillons** télécharge une copie JSON ; **Importer des brouillons** permet de la récupérer, y compris dans un autre navigateur. Si le fichier du site a changé depuis la dernière rédaction, l’atelier propose de récupérer le brouillon précédent ou de garder le contenu actuel.

Les boutons **Dupliquer** et **Supprimer** agissent sur le brouillon. Le site ne change qu’au moment où son fichier `content.js` est remplacé. L’export conserve également le profil, les catégories, les tags et les champs qui ne sont pas édités dans le formulaire. Il génère un fichier JavaScript valide à partir des données ; les commentaires du fichier d’origine ne sont pas reproduits.

Les fichiers `editor.html`, `editor.css` et `editor.js` doivent rester à côté des quatre fichiers du site. L’atelier n’est pas lié dans la navigation publique.

# Écrire un nouvel article

Tout se passe dans `content.js`, tableau `articles`. Copier ce squelette, le coller en haut du tableau (l'ordre d'affichage est de toute façon calculé par date, la plus récente d'abord) :

```js
{slug:'nom-dans-lurl', cat:'math', date:'2026-08-14', read:7,
 fr:{title:'Titre de l’article',
  blurb:'Une ou deux phrases qui donnent envie de cliquer.',
  body:String.raw`
Premier paragraphe. Une ligne vide sépare deux blocs.

## Une section

Du texte avec $e^{i\pi} = -1$ en ligne, et une formule centrée :

$$\int_0^{+\infty} e^{-x^2}\,\mathrm{d}x = \frac{\sqrt{\pi}}{2}$$

- premier point
- deuxième point

> Une citation qui résume l’idée.

![Légende de la figure](fig:wave)
`},
 en:{title:'Article title',
  blurb:'One or two sentences.',
  body:String.raw`
Same thing, in English.
`}},
```

Trois champs obligatoires : `slug`, `cat` (`math`, `cs`, `finance` ou `physics`, ou une catégorie ajoutée à `cats`), `date` (ISO `AAAA-MM-JJ`). `read` est le temps de lecture en minutes.

L'article apparaît automatiquement dans sa catégorie, dans le compteur des articles, dans la navigation précédent/suivant, et sur la page d'accueil s'il est le plus récent. Rien d'autre à toucher.

## Nouvelle catégorie

Ajouter une entrée au tableau `cats` de `content.js` :

```js
{id:'chemistry',
 fr:{name:'Chimie', blurb:'Phrase d’accroche de la catégorie.'},
 en:{name:'Chemistry', blurb:'Category tagline.'}},
```

Puis utiliser `cat:'chemistry'` dans les articles. L'URL devient `#/articles/chemistry/mon-slug`.

---

# Écrire un nouveau problème

Tableau `problems` de `content.js`. Les trois parties (énoncé, indice, solution) sont trois champs distincts ; le site affiche l'énoncé et replie l'indice et la solution dans des blocs dépliables.

```js
{id:'P-022', slug:'nom-dans-lurl', date:'2026-08-20', level:2, tags:['math','probability'],
 fr:{title:'Titre du problème',
  blurb:'Le problème en une phrase, sans le résoudre.',
  statement:String.raw`
Soit $(X_n)_{n\geq 1}$ une suite de variables aléatoires indépendantes.

1. Première question.
2. Deuxième question.
`,
  hint:String.raw`
L’indice, une ou deux phrases, jamais la solution.
`,
  solution:String.raw`
**1.** La rédaction complète, avec les calculs :

$$\mathbb{E}\!\left[\sum_{k=1}^{n} X_k\right] = n\,\mathbb{E}[X_1]$$

**2.** Suite de la solution.
`},
 en:{title:'Problem title', blurb:'One sentence.'}},
```

`level` vaut 1, 2 ou 3 (les trois points de difficulté). `tags` mélange un domaine (`math`, `cs`, `physics`) et autant de thèmes que voulu (`probability`, `algorithms`, `analysis`, `algebra`, `combinatorics`, `mechanics`, `optics`). Un tag inconnu s'affiche tel quel ; pour lui donner un libellé bilingue, l'ajouter au dictionnaire `tags` :

```js
topology:{fr:'topologie', en:'topology'},
```

Les filtres de la page Problèmes se construisent automatiquement à partir des tags réellement utilisés. Aucune liste à maintenir à la main.

---

# Écrire un nouveau projet

Tableau `projects`. Les projets sont affichés dans l’ordre du tableau ; le premier est également mis en avant sur l’accueil avec son statut réel. Les champs `role`, `status`, `lead`, `tags` et `links` alimentent l’en-tête de la page de détail :

```js
{slug:'mon-projet', thumb:'orbit', year:'2026', tags:['Rust','WASM'],
 fr:{title:'Titre du projet', role:'Projet personnel', status:'En cours',
  blurb:'Résumé pour la liste.',
  lead:'La phrase d’accroche de la page de détail.',
  links:[['Code source','https://github.com/...']],
  body:String.raw`
## Contexte
...
## Objectifs
...
## Ce que ça a donné
...
`},
 en:{ /* idem */ }},
```

`thumb` choisit la vignette générée : `dots`, `orbit`, `wave`, `tree`, `bars`, `cells`. Pour utiliser une vraie image, remplacer dans `content.js` par exemple `thumb:'orbit'` par `thumb:'images/sudoku.jpg'`.

---

# Syntaxe des textes longs

Markdown + LaTeX. Le moteur se trouve dans `md()` et `inline()`, fichier `app.js`.

| Ce qu'on écrit | Résultat |
|---|---|
| `## Titre` / `### Sous-titre` | sections |
| ligne vide | nouveau paragraphe |
| `- item` / `1. item` | liste à puces / numérotée |
| `> texte` | citation en exergue |
| `**gras**` `*italique*` | emphase |
| `` \`code\` `` | code en ligne |
| `[texte](url)` | lien (externe = nouvel onglet) |
| `#/articles/math/slug` en url | lien interne vers une autre page du site |
| `$x^2$` | maths en ligne |
| `$$ ... $$` | maths centrées |
| `~~~` ... `~~~` | bloc de code |
| `![Légende](fig:bars)` | figure générée + légende |

## Figures TikZ

Un bloc `~~~tikz` est compilé en SVG. Sa première ligne peut déclarer les bibliothèques TikZ avec `%libs`. Le texte placé après `tikz` devient la légende :

````text
~~~tikz Légende de la figure
%libs arrows.meta
\begin{tikzpicture}
  \draw[-{Stealth}] (0,0) -- (2,0);
\end{tikzpicture}
~~~
````

## Composants visuels réutilisables

Le HTML est accepté dans les textes longs. Utiliser les classes de `styles.css` plutôt que recopier des attributs `style` :

- `theorem`, avec `theorem--purple`, `theorem--warning` ou `theorem--success` : encadrés ; `theorem-title` : titre.
- `faq`, `faq-heading`, `faq-question` et `explanation` : questions et explications.
- `steps-panel`, `steps-list`, `step` et `step-number` : étapes numérotées.
- `table-scroll`, `data-table`, `table-heading`, `table-row` et `table-cell` : tableaux défilants ; `metric`, `metric--positive` et `metric--negative` : valeurs numériques.
- `image-pair`, `image-pair__image` et `content-image` : illustrations. Les variantes `content-image--tiny`, `--small` et `--medium` règlent leur largeur.
- `content-rule` : séparateur ; `content-list` : liste avec interligne lisible ; `content-note` : note.

Par exemple :

```html
<div class="theorem">
  <strong class="theorem-title">Propriété</strong><br>
  Le texte, avec une formule $x^2$ si nécessaire.
</div>
```

L’apparence d’un composant se modifie désormais une seule fois dans `styles.css`, pour les deux langues. Les pages de projet utilisent un espacement partagé : aucun bloc vide à marge négative n’est nécessaire.

## LaTeX

C'est du vrai LaTeX, rendu par [KaTeX](https://katex.org) : `\frac`, `\sum`, `\int`, `\binom`, `\begin{pmatrix}`, `\mathbb{R}`, `\xrightarrow`, les environnements d'alignement, etc. La [liste des commandes supportées](https://katex.org/docs/support_table.html).

Sept macros sont définies dans `app.js` (fonction `tex()`) : `\R`, `\N`, `\Z`, `\eps`, ainsi que `\par{...}`, `\abs{...}` et `\norm{...}` pour les parenthèses, la valeur absolue et la norme. En ajouter est une ligne :

```js
macros:{'\\R':'\\mathbb{R}', '\\P':'\\mathbb{P}'}
```

Une formule invalide n'écroule pas la page : KaTeX l'affiche en rouge à sa place, ce qui rend l'erreur évidente à la relecture.

## Deux pièges à connaître

1. **Les textes sont écrits dans `` String.raw`...` ``**, justement pour que `\frac` reste `\frac` et non un caractère d'échappement. Ne pas doubler les antislashs.
2. **Un backtick de code s'écrit `` \` ``** dans ces mêmes chaînes (sinon il fermerait le littéral). Le moteur le normalise à l'affichage. Idem pour un `$` littéral hors formule : préférer `\$`.

---

# Bilingue FR/EN

Le bouton `FR | EN` en haut à droite bascule toute l'interface. Le choix est mémorisé dans le navigateur, et l'URL reste identique dans les deux langues (les liens partagés fonctionnent donc quelle que soit la langue du lecteur).

- Les libellés d'interface vivent dans l'objet `UI` en haut de `app.js`, un bloc `fr` et un bloc `en`.
- Le contenu vit dans `content.js`, chaque objet ayant un bloc `fr` et un bloc `en`.
- **Le repli est champ par champ.** Un article dont `en.title` existe mais pas `en.body` s'affiche avec le titre anglais et le corps français, précédé d'un avis discret « not translated yet ». Écrire d'abord en français puis traduire au fil du temps est donc parfaitement supporté.


---

# Dépendances

Les bibliothèques sont chargées par CDN dans `index.html` :

- **KaTeX 0.16.11** pour les formules. Sans lui, les formules s'affichent en source LaTeX monospace au lieu de casser la page.
- **Lucide** pour les quelques icônes. Sans lui, les libellés textuels restent lisibles.
- **TikZJax 1.6.0** (`@rod2ik/tikzjax`) pour convertir les figures TikZ en SVG dans le navigateur.
- **Highlight.js 11.9.0** pour colorer les blocs de code ; sans lui, le code reste lisible.
- **Google Fonts** pour Newsreader et IBM Plex Mono, avec des polices de repli dans `styles.css`.
