# Site personnel — Antoine C.

Site statique, sans build, sans framework. Quatre fichiers, HTML/CSS/JS séparés, LaTeX rendu par KaTeX.

```
index.html     coquille : <head>, barre de nav, pied de page, chargement des scripts
styles.css     design system complet (tokens OKLCH, layout, composants)
content.js     TOUT le contenu : profil, projets, articles, problèmes  ← c'est ici qu'on écrit
app.js         routeur, bilingue FR/EN, moteur Markdown + LaTeX, filtres
```

Les quatre fichiers doivent rester **dans le même dossier**.

## Lancer en local

Ouvrir `index.html` suffit dans la plupart des cas. Pour éviter toute restriction de sécurité liée à `file://` :

```
python3 -m http.server 8000
# puis http://localhost:8000
```

## Publier

N'importe quel hébergement statique : GitHub Pages (push sur `main`, activer Pages sur la racine), Netlify, Cloudflare Pages. Rien à compiler.

---

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

Trois champs obligatoires : `slug`, `cat` (`math`, `cs` ou `physics`), `date` (ISO `AAAA-MM-JJ`). `read` est le temps de lecture en minutes.

L'article apparaît automatiquement dans sa catégorie, dans le compteur du carnet, dans la navigation précédent/suivant, et sur la page d'accueil s'il est le plus récent. Rien d'autre à toucher.

## Nouvelle catégorie

Ajouter une entrée au tableau `cats` de `content.js` :

```js
{id:'chemistry',
 fr:{name:'Chimie', blurb:'Phrase d’accroche de la catégorie.'},
 en:{name:'Chemistry', blurb:'Category tagline.'}},
```

Puis utiliser `cat:'chemistry'` dans les articles. L'URL devient `#/carnet/chemistry/mon-slug`.

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

Tableau `projects`. Même principe, avec deux champs supplémentaires pour la colonne de droite :

```js
{slug:'mon-projet', thumb:'orbit', year:'2026', tags:['Rust','WASM'],
 fr:{title:'Titre du projet', role:'Projet personnel', status:'En cours',
  blurb:'Résumé pour la liste.',
  lead:'La phrase d’accroche de la page de détail.',
  stack:[['Langage','Rust 1.86'],['Rendu','WebGPU']],
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

`thumb` choisit la vignette générée : `dots`, `orbit`, `wave`, `tree`, `bars`, `cells`. Pour utiliser une vraie image, remplacer dans `app.js` la fonction `thumb()` par une balise `<img src="images/...">`.

---

# Syntaxe des textes longs

Markdown léger + LaTeX réel. Le moteur tient dans une soixantaine de lignes (`md()` et `inline()` dans `app.js`).

| Ce qu'on écrit | Résultat |
|---|---|
| `## Titre` / `### Sous-titre` | sections |
| ligne vide | nouveau paragraphe |
| `- item` / `1. item` | liste à puces / numérotée |
| `> texte` | citation en exergue |
| `**gras**` `*italique*` | emphase |
| `` \`code\` `` | code en ligne |
| `[texte](url)` | lien (externe = nouvel onglet) |
| `#/carnet/math/slug` en url | lien interne vers une autre page du site |
| `$x^2$` | maths en ligne |
| `$$ ... $$` | maths centrées |
| `~~~` ... `~~~` | bloc de code |
| `![Légende](fig:bars)` | figure générée + légende |

## LaTeX

C'est du vrai LaTeX, rendu par [KaTeX](https://katex.org) : `\frac`, `\sum`, `\int`, `\binom`, `\begin{pmatrix}`, `\mathbb{R}`, `\xrightarrow`, les environnements d'alignement, etc. La [liste des commandes supportées](https://katex.org/docs/support_table.html) est quasi exhaustive pour des maths de niveau licence/master.

Quatre macros maison sont déjà définies dans `app.js` (fonction `tex()`) : `\R`, `\N`, `\Z`, `\eps`. En ajouter est une ligne :

```js
macros:{'\\R':'\\mathbb{R}', '\\P':'\\mathbb{P}'}
```

Une formule invalide n'écroule pas la page : KaTeX l'affiche en rouge à sa place, ce qui rend l'erreur évidente à la relecture.

## Deux pièges à connaître

1. **Les textes vivent dans `` String.raw`...` ``**, justement pour que `\frac` reste `\frac` et non un caractère d'échappement. Ne pas doubler les antislashs.
2. **Un backtick de code s'écrit `` \` ``** dans ces mêmes chaînes (sinon il fermerait le littéral). Le moteur le normalise à l'affichage. Idem pour un `$` littéral hors formule : préférer `\$`.

---

# Bilingue FR/EN

Le bouton `FR | EN` en haut à droite bascule toute l'interface. Le choix est mémorisé dans le navigateur, et l'URL reste identique dans les deux langues (les liens partagés fonctionnent donc quelle que soit la langue du lecteur).

- Les libellés d'interface vivent dans l'objet `UI` en haut de `app.js`, un bloc `fr` et un bloc `en`.
- Le contenu vit dans `content.js`, chaque objet ayant un bloc `fr` et un bloc `en`.
- **Le repli est champ par champ.** Un article dont `en.title` existe mais pas `en.body` s'affiche avec le titre anglais et le corps français, précédé d'un avis discret « not translated yet ». Écrire d'abord en français puis traduire au fil du temps est donc parfaitement supporté.

Actuellement traduits en entier : les deux premiers projets, trois articles (Fourier, benchmarks, entropie) et deux problèmes (P-021, P-020). Les autres attendent leur `en.body`.

---

# Dépendances

Deux, toutes deux chargées par CDN dans `index.html` :

- **KaTeX 0.16** pour les formules. Sans lui, les formules s'affichent en source LaTeX monospace au lieu de casser la page.
- **Lucide** pour les quelques icônes. Sans lui, les libellés textuels restent lisibles.

Pour un site totalement autonome (hors ligne, ou si un CDN est bloqué) : `npm i katex lucide`, copier `katex/dist` et `lucide/dist/umd` dans `vendor/`, et remplacer les trois URLs de `index.html` par des chemins locaux. Rien d'autre à changer.
