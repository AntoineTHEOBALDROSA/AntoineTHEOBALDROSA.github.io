/* =========================================================
   content.js — TOUT le contenu du site vit ici.
   ---------------------------------------------------------
   Format des textes longs (body / statement / hint / solution) :
   Markdown léger + LaTeX réel. Voir README.md.

     ## Titre de section        ### Sous-titre
     - liste à puces            1. liste numérotée
     > citation
     **gras**  *italique*  \`code\`  [lien](url)
     $x^2$  (maths en ligne)    $$ \int_0^1 f $$  (maths centrées)
     ~~~ ... ~~~                (bloc de code)
     ![Légende](fig:wave)       (figure générée : dots orbit wave tree bars cells)

   IMPORTANT : les textes sont écrits dans String.raw`...`, donc les
   antislashs LaTeX passent tels quels. Un backtick de code s'écrit \`
   (le moteur le normalise).

   Traduction : chaque objet a un bloc fr et un bloc en. Si en.body
   est absent, le site affiche le texte français avec un avis.
   ========================================================= */

window.SITE = {

/* =========================================================
   1. PROFIL
   ========================================================= */
profile:{
  first:'Antoine', last:'C.',
  email:'antoine@exemple.fr',
  location:{fr:'Paris · mathématiques appliquées & informatique',
            en:'Paris · applied mathematics & computer science'},
  title:{
    fr:'Étudiant test en mathématiques appliquées et informatique. J’écris du code, des articles, et des problèmes pour ceux qui aiment se casser la tête.',
    en:'Graduate student in applied mathematics and computer science. I write code, essays, and problems for people who enjoy getting stuck.'},
  bio:{
    fr:[
     'Je m’intéresse à ce qui se passe à la frontière entre le théorème et l’implémentation : les algorithmes qui marchent en théorie mais pas en cache, les modèles physiques qui tiennent jusqu’au troisième chiffre significatif, les démonstrations qu’on croit comprendre avant d’essayer de les coder.',
     'Ce site rassemble trois choses : les [projets](#/projets) que je construis, un [carnet](#/carnet) où j’explique ce que je viens de comprendre, et une collection de [problèmes](#/problemes) que je rédige et que je donne en colle.'],
    en:[
     'I care about the seam between a theorem and its implementation: algorithms that work in theory but not in cache, physical models that hold to three significant figures, proofs you think you understand until you try to code them.',
     'This site holds three things: the [projects](#/projets) I build, a [notebook](#/carnet) where I explain whatever I have just understood, and a collection of [problems](#/problemes) I write and hand out in oral exams.']},
  formation:[
    {y:'2025—26',fr:{t:'M2 Mathématiques appliquées & informatique',s:'Optimisation, probabilités numériques, calcul haute performance'},
                 en:{t:'MSc Applied Mathematics & Computer Science',s:'Optimisation, numerical probability, high performance computing'}},
    {y:'2023—25',fr:{t:'Licence de mathématiques, mineure informatique',s:'Mention très bien · TIPE sur les méthodes spectrales'},
                 en:{t:'BSc Mathematics, CS minor',s:'First class honours · research project on spectral methods'}},
    {y:'2021—23',fr:{t:'CPGE MP*',s:'Mathématiques, physique, informatique'},
                 en:{t:'French \u00ab classes préparatoires \u00bb, MP*',s:'Mathematics, physics, computer science'}}
  ],
  skills:['Python','C++','OCaml','Rust','TypeScript','NumPy / SciPy','LaTeX','Git',
          {fr:'Algorithmique',en:'Algorithms'},{fr:'Probabilités',en:'Probability'},
          {fr:'Analyse numérique',en:'Numerical analysis'},{fr:'Calcul parallèle',en:'Parallel computing'}],
  socials:[
    {label:'GitHub',href:'https://github.com',glyph:'↗'},
    {label:'LinkedIn',href:'https://linkedin.com',glyph:'↗'},
    {label:'antoine@exemple.fr',href:'mailto:antoine@exemple.fr',glyph:'✉'},
    {label:{fr:'CV (PDF)',en:'Résumé (PDF)'},href:'#/contact',glyph:'↓'}
  ]
},

/* =========================================================
   2. TAGS (libellés bilingues des tags de problèmes)
   ========================================================= */
tags:{
  math:{fr:'Mathématiques',en:'Mathematics'},
  cs:{fr:'Informatique',en:'Computer science'},
  physics:{fr:'Physique',en:'Physics'},
  probability:{fr:'probabilités',en:'probability'},
  algorithms:{fr:'algorithmique',en:'algorithms'},
  analysis:{fr:'analyse',en:'analysis'},
  algebra:{fr:'algèbre',en:'algebra'},
  combinatorics:{fr:'combinatoire',en:'combinatorics'},
  mechanics:{fr:'mécanique',en:'mechanics'},
  optics:{fr:'optique',en:'optics'}
},
domains:['math','cs','physics'],

/* =========================================================
   3. CATÉGORIES DU CARNET
   ========================================================= */
cats:[
 {id:'math',
  fr:{name:'Mathématiques',blurb:'Des objets que je croyais comprendre, jusqu’à ce que j’essaie de les expliquer sans formule inutile.'},
  en:{name:'Mathematics',blurb:'Objects I thought I understood, until I tried explaining them without a single needless formula.'}},
 {id:'cs',
  fr:{name:'Informatique',blurb:'Structures de données, compilation, performance. Surtout : pourquoi le code rapide n’est presque jamais celui qu’on croit.'},
  en:{name:'Computer science',blurb:'Data structures, compilers, performance. Mostly: why the fast code is almost never the code you expected.'}},
 {id:'physics',
  fr:{name:'Physique',blurb:'Modèles, ordres de grandeur, et les endroits où l’intuition physique se trompe pour de bonnes raisons.'},
  en:{name:'Physics',blurb:'Models, orders of magnitude, and the places where physical intuition fails for good reasons.'}}
],

/* =========================================================
   4. PROJETS
   ========================================================= */
projects:[

{slug:'sudoku',thumb:'images/fft.png',year:'2025',tags:['Python','CSP','CLI'],
 fr:{title:'Solveur de Sudoku par propagation de contraintes',role:'Projet personnel',status:'Terminé',
  blurb:'Un solveur qui ne devine presque jamais : AC-3 pour réduire les domaines, puis backtracking guidé par l’heuristique MRV.',
  lead:'Résoudre un Sudoku par force brute prend des millions d’essais. En traitant la grille comme un problème de satisfaction de contraintes, on tombe à quelques dizaines de branchements.',
  stack:[['Langage','Python 3.12'],['Cœur','AC-3, MRV, degré'],['Tests','pytest, 4 200 grilles'],['Interface','CLI + trace texte']],
  links:[['Code source','https://github.com'],['Notes d’implémentation','#/carnet/cs']],
  body:String.raw`
## Contexte

J’ai commencé ce projet après un cours de programmation par contraintes où l’exemple canonique était justement le Sudoku. L’implémentation du cours était élégante mais lente ; je voulais comprendre où passait réellement le temps.

Le solveur modélise chaque case comme une variable de domaine $D_{ij} \subseteq \{1,\dots,9\}$ et chaque ligne, colonne, bloc comme une contrainte de différence mutuelle :

$$\forall (i,j) \neq (k,l) \text{ dans la même unité}, \quad x_{ij} \neq x_{kl}$$

La résolution combine deux phases : réduction des domaines par propagation, puis recherche.

## Objectifs

- Résoudre toute grille valide sans supposition arbitraire quand c’est possible.
- Mesurer le nombre de branchements, pas seulement le temps, pour comparer les heuristiques honnêtement.
- Produire une trace lisible : à chaque étape, quelle contrainte a éliminé quelle valeur.

## Ce que ça a donné

Sur un jeu de 4 200 grilles publiques, la propagation seule résout 71 % des grilles sans aucun branchement. Le reste demande en moyenne 9 branchements avec MRV, contre 340 avec un ordre naïf des variables. La grille réputée « la plus difficile du monde » d’Arto Inkala tombe en 1 271 branchements.

![Trace de propagation : en rouge, les valeurs déduites sans branchement.](fig:dots)

L’heuristique MRV choisit à chaque étape la variable dont le domaine est le plus petit :

$$v^\star = \arg\min_{v \,\in\, V_{\text{libres}}} |D_v|$$

La leçon inattendue : la structure de données des domaines compte plus que l’heuristique. Passer d’un \`set\` Python à un masque de 9 bits par case a divisé le temps par onze, sans changer une ligne de la logique.

![Distribution du nombre de branchements sur le corpus de test.](fig:bars)
`},
 en:{title:'Sudoku solver by constraint propagation',role:'Personal project',status:'Finished',
  blurb:'A solver that almost never guesses: AC-3 to shrink the domains, then backtracking driven by the MRV heuristic.',
  lead:'Brute force needs millions of attempts. Treat the grid as a constraint satisfaction problem and you are down to a few dozen branchings.',
  stack:[['Language','Python 3.12'],['Core','AC-3, MRV, degree'],['Tests','pytest, 4,200 grids'],['Interface','CLI + text trace']],
  links:[['Source code','https://github.com'],['Implementation notes','#/carnet/cs']],
  body:String.raw`
## Context

I started this after a constraint programming course whose canonical example was, of course, Sudoku. The course implementation was elegant but slow, and I wanted to know where the time actually went.

Each cell is a variable with domain $D_{ij} \subseteq \{1,\dots,9\}$, and every row, column and block is an all-different constraint:

$$\forall (i,j) \neq (k,l) \text{ in the same unit}, \quad x_{ij} \neq x_{kl}$$

Solving happens in two phases: shrink the domains by propagation, then search.

## Goals

- Solve any valid grid without arbitrary guessing whenever that is possible.
- Count branchings, not just seconds, so heuristics can be compared honestly.
- Emit a readable trace: at each step, which constraint eliminated which value.

## Results

On a corpus of 4,200 public grids, propagation alone solves 71 % with zero branching. The rest needs 9 branchings on average with MRV, against 340 with a naive variable order. Arto Inkala’s so-called hardest grid in the world falls in 1,271 branchings.

![Propagation trace: in red, values deduced without branching.](fig:dots)

MRV picks, at every step, the variable with the smallest remaining domain:

$$v^\star = \arg\min_{v \,\in\, V_{\text{free}}} |D_v|$$

The unexpected lesson: the domain data structure mattered more than the heuristic. Replacing a Python \`set\` with a 9-bit mask per cell divided the runtime by eleven without touching a single line of logic.

![Branching count distribution over the test corpus.](fig:bars)
`}},

{slug:'nbody',thumb:'orbit',year:'2025',tags:['C++','OpenGL','Barnes-Hut'],
 fr:{title:'Simulation de N-corps en Barnes-Hut',role:'Projet à deux',status:'En cours',
  blurb:'50 000 particules à 60 images par seconde : un octree, une approximation multipolaire et beaucoup de temps passé à débusquer des fuites de cache.',
  lead:'Le calcul naïf des forces gravitationnelles est en $O(n^2)$. Barnes-Hut le ramène à $O(n \log n)$ en admettant qu’un amas lointain peut être remplacé par son centre de masse.',
  stack:[['Langage','C++20'],['Rendu','OpenGL 4.1, instancing'],['Parallélisme','std::jthread, 8 fils'],['Mesures','perf, tracy']],
  links:[['Code source','https://github.com'],['Vidéo de la collision de deux amas','https://github.com']],
  body:String.raw`
## Contexte

Une simulation de galaxie était l’occasion parfaite d’écrire du C++ moderne sur un problème où la performance se voit à l’œil nu : si ça rame, l’image saccade.

Le cœur est un octree reconstruit à chaque pas de temps. Pour chaque particule, on descend l’arbre et on s’arrête dès que le critère d’ouverture est satisfait :

$$\frac{s}{d} < \theta$$

où $s$ est la taille de la cellule et $d$ la distance à son barycentre. La cellule est alors résumée par sa masse totale et son centre de masse, et la force devient

$$\vec{F}_i = -G m_i \sum_{c \,\in\, \mathcal{C}(i)} \frac{M_c \, (\vec{r}_i - \vec{R}_c)}{\lVert \vec{r}_i - \vec{R}_c \rVert^3}$$

## Objectifs

- Tenir 50 000 corps en temps réel sur un portable, sans GPU pour la physique.
- Conserver l’énergie totale à mieux que 1 % sur 10 000 pas, avec un intégrateur leapfrog.
- Rendre le tout observable : afficher l’arbre, les cellules ouvertes, l’erreur d’énergie.

## Ce que ça a donné

Avec $\theta = 0{,}7$, l’erreur relative sur les forces reste sous 0,3 % et la simulation tourne à 62 ips pour 50 000 corps sur un seul cœur, 240 ips sur huit. La première version, correcte mais naïve, plafonnait à 9 ips : l’essentiel du gain vient d’un stockage de l’arbre en tableau contigu avec parcours en profondeur pré-calculé, pas du parallélisme.

![Collision de deux amas de 25 000 corps, 4 000 pas de temps.](fig:orbit)

> Le profileur a dit ce qu’aucune relecture de code n’aurait dit : 68 % du temps était perdu en défauts de cache, pas en calcul flottant.

Le schéma leapfrog est symplectique, ce qui explique que l’énergie oscille sans dériver :

$$\vec{v}_{n+1/2} = \vec{v}_{n-1/2} + \vec{a}_n \, \Delta t, \qquad \vec{r}_{n+1} = \vec{r}_n + \vec{v}_{n+1/2} \, \Delta t$$

![Dérive de l’énergie totale selon le pas de temps.](fig:wave)
`},
 en:{title:'Barnes-Hut N-body simulation',role:'Two-person project',status:'In progress',
  blurb:'50,000 particles at 60 frames per second: an octree, a multipole approximation, and a lot of time spent hunting cache misses.',
  lead:'Naive gravitational force computation is $O(n^2)$. Barnes-Hut brings it down to $O(n \log n)$ by accepting that a distant cluster can be replaced by its centre of mass.',
  stack:[['Language','C++20'],['Rendering','OpenGL 4.1, instancing'],['Parallelism','std::jthread, 8 threads'],['Profiling','perf, tracy']],
  links:[['Source code','https://github.com'],['Video: two clusters colliding','https://github.com']],
  body:String.raw`
## Context

A galaxy simulation was the perfect excuse to write modern C++ on a problem where performance is visible to the naked eye: if it is slow, the image stutters.

The core is an octree rebuilt at every time step. For each particle we walk down the tree and stop as soon as the opening criterion holds:

$$\frac{s}{d} < \theta$$

with $s$ the cell size and $d$ the distance to its barycentre. The cell is then summarised by its total mass and centre of mass, and the force becomes

$$\vec{F}_i = -G m_i \sum_{c \,\in\, \mathcal{C}(i)} \frac{M_c \, (\vec{r}_i - \vec{R}_c)}{\lVert \vec{r}_i - \vec{R}_c \rVert^3}$$

## Goals

- Keep 50,000 bodies real time on a laptop, with no GPU doing physics.
- Conserve total energy to better than 1 % over 10,000 steps, using a leapfrog integrator.
- Make everything observable: draw the tree, the opened cells, the energy error.

## Results

With $\theta = 0.7$ the relative force error stays under 0.3 % and the simulation runs at 62 fps for 50,000 bodies on a single core, 240 fps on eight. The first version, correct but naive, capped at 9 fps: most of the gain came from storing the tree in a contiguous array with a precomputed depth-first order, not from parallelism.

![Two clusters of 25,000 bodies colliding, 4,000 time steps.](fig:orbit)

> The profiler said what no code review would have: 68 % of the time was lost to cache misses, not to floating point work.

Leapfrog is symplectic, which is why the energy oscillates instead of drifting:

$$\vec{v}_{n+1/2} = \vec{v}_{n-1/2} + \vec{a}_n \, \Delta t, \qquad \vec{r}_{n+1} = \vec{r}_n + \vec{v}_{n+1/2} \, \Delta t$$

![Total energy drift as a function of the time step.](fig:wave)
`}},

{slug:'spectres',thumb:'wave',year:'2024',tags:['Python','SciPy','Signal'],
 fr:{title:'Analyseur de spectres pour travaux pratiques',role:'Outil de laboratoire',status:'Utilisé en TP',
  blurb:'Un outil de dépouillement de spectres : détection de pics, ajustement de profils de Voigt, export d’un tableau prêt à mettre dans un compte rendu.',
  lead:'Nous perdions plus de temps à pointer les pics à la souris qu’à comprendre les spectres. Ce script fait le pointage, nous laissons la physique.',
  stack:[['Langage','Python 3.11'],['Traitement','SciPy, lmfit'],['Sortie','CSV + figure PDF'],['Validation','Raies du Hg et du Ne']],
  links:[['Code source','https://github.com'],['Article : ligne de base','#/carnet/physics/ligne-de-base-spectres']],
  body:String.raw`
## Contexte

En TP de spectroscopie, chaque binôme repartait avec un fichier de 16 000 points et une heure de pointage manuel devant soi. Les résultats variaient d’un binôme à l’autre de plusieurs pour cent, uniquement à cause de la méthode de lecture.

L’outil enchaîne : lissage de Savitzky-Golay, estimation de la ligne de base par régression quantile, détection des maxima locaux avec seuil sur la dérivée seconde, puis ajustement local d’un profil de Voigt sur chaque pic retenu. Ce profil est la convolution d’une gaussienne (élargissement Doppler) et d’une lorentzienne (élargissement naturel) :

$$V(x;\sigma,\gamma) = \int_{-\infty}^{+\infty} G(x';\sigma)\, L(x-x';\gamma)\, \mathrm{d}x'$$

## Objectifs

- Reproductibilité : deux personnes, le même fichier, le même tableau de résultats.
- Propagation correcte des incertitudes jusqu’aux longueurs d’onde et aux largeurs.
- Zéro installation compliquée : un fichier, deux dépendances.

## Ce que ça a donné

Sur les spectres de référence du mercure, l’écart aux valeurs tabulées reste sous $0{,}04\ \mathrm{nm}$, soit mieux que le pointage manuel d’un facteur trois. L’outil est utilisé par deux groupes de TP ; le gain de temps déclaré est d’environ quarante minutes par séance.

![Spectre brut, ligne de base estimée, et pics ajustés.](fig:wave)

Le piège le plus coûteux a été la ligne de base : tant qu’on l’estimait par moindres carrés, les pics eux-mêmes tiraient la ligne vers le haut et biaisaient toutes les aires. J’ai écrit [un article entier](#/carnet/physics/ligne-de-base-spectres) sur ce biais.

![Résidus d’ajustement pour les douze raies de référence.](fig:bars)
`},
 en:{title:'Spectrum analyser for lab sessions',role:'Lab tool',status:'In use in labs',
  blurb:'A spectrum reduction tool: peak detection, Voigt profile fitting, and a results table ready to paste into a report.',
  lead:'We spent more time clicking on peaks than understanding spectra. This script does the clicking; we keep the physics.',
  stack:[['Language','Python 3.11'],['Processing','SciPy, lmfit'],['Output','CSV + PDF figure'],['Validation','Hg and Ne lines']],
  links:[['Source code','https://github.com'],['Article: baseline estimation','#/carnet/physics/ligne-de-base-spectres']]}},

{slug:'minipascal',thumb:'tree',year:'2024',tags:['OCaml','LLVM','Compilation'],
 fr:{title:'Compilateur d’un langage jouet vers LLVM',role:'Projet de cours, étendu',status:'Terminé',
  blurb:'De l’analyse lexicale à l’émission de code : un langage impératif minimal, typé, compilé en natif via LLVM.',
  lead:'Écrire un compilateur est la meilleure façon d’arrêter de croire que les langages sont magiques.',
  stack:[['Langage','OCaml 5'],['Analyse','ocamllex, Menhir'],['Cible','LLVM 17 IR'],['Tests','140 programmes']],
  links:[['Code source','https://github.com'],['Grammaire du langage','https://github.com']],
  body:String.raw`
## Contexte

Le projet de cours s’arrêtait à l’interprétation de l’arbre syntaxique. J’ai continué jusqu’à la génération de code natif, ce qui obligeait à répondre à toutes les questions qu’un interprète permet d’éluder : représentation mémoire, conventions d’appel, durée de vie des valeurs.

Le langage possède entiers, flottants, booléens, tableaux, fonctions récursives et procédures. Pas de fermetures : la frontière a été tracée là, exprès, parce que les fermetures obligent à choisir une stratégie d’allocation.

## Objectifs

- Une chaîne complète : lexeur, analyseur LR, typage, forme SSA, LLVM IR.
- Des messages d’erreur qui indiquent la ligne, la colonne et la cause probable.
- Des tests de bout en bout : chaque programme d’exemple a une sortie attendue.

## Le typage, écrit comme des règles d’inférence

Le vérificateur suit littéralement les règles du cours. Par exemple, pour l’affectation :

$$\frac{\Gamma \vdash e : \tau \qquad \Gamma(x) = \tau}{\Gamma \vdash x := e \;:\; \mathtt{unit}}$$

Chaque règle est une fonction OCaml de quinze lignes, et le filtrage exhaustif garantit qu’aucun cas n’est oublié.

![Arbre syntaxique annoté après la phase de typage.](fig:tree)

## Ce que ça a donné

140 programmes de test passent, dont trente cas d’erreurs volontaires vérifiant le message produit. Sur une boucle de calcul de nombres premiers, le code émis tourne à $1{,}4\times$ le temps de la version C équivalente compilée avec \`-O2\`, l’écart venant essentiellement des vérifications de bornes sur les tableaux, que j’ai choisi de garder.

La partie la plus instructive n’était ni l’analyse syntaxique ni LLVM : c’était le typage. Un bon vérificateur de types est une démonstration écrite en OCaml.
`},
 en:{title:'A toy language compiler targeting LLVM',role:'Coursework, extended',status:'Finished',
  blurb:'From lexing to code emission: a minimal typed imperative language, compiled to native code through LLVM.',
  lead:'Writing a compiler is the fastest way to stop believing that programming languages are magic.',
  stack:[['Language','OCaml 5'],['Parsing','ocamllex, Menhir'],['Target','LLVM 17 IR'],['Tests','140 programs']],
  links:[['Source code','https://github.com'],['Language grammar','https://github.com']]}},

{slug:'recherche',thumb:'bars',year:'2026',tags:['Rust','BM25','Index'],
 fr:{title:'Moteur de recherche plein texte sur mes notes',role:'Projet personnel',status:'En cours',
  blurb:'Index inversé, BM25, tolérance aux fautes : 12 000 pages de notes interrogées en moins de deux millisecondes.',
  lead:'J’avais douze mille pages de notes et aucun moyen de retrouver quoi que ce soit. grep était trop littéral, les outils existants trop lourds.',
  stack:[['Langage','Rust 1.86'],['Classement','BM25 · $k_1=1{,}2$, $b=0{,}75$'],['Flou','Automate de Levenshtein'],['Interface','TUI + serveur local']],
  links:[['Code source','https://github.com'],['Article : les tries','#/carnet/cs/tries-sous-estimes']],
  body:String.raw`
## Contexte

Mes notes de cours, mes brouillons de démonstrations et mes fiches de lecture vivent dans des fichiers texte. Le problème n’est pas le stockage, c’est le rappel : je sais qu’il y a une remarque sur la convergence dominée quelque part, sans savoir où.

L’outil construit un index inversé en mémoire, avec normalisation Unicode, suppression des accents, racinisation légère pour le français, et un automate de Levenshtein pour tolérer une faute de frappe.

## Le classement

Le score BM25 d’un document $d$ pour une requête $q$ vaut

$$\mathrm{score}(d,q) = \sum_{t \in q} \mathrm{IDF}(t) \cdot \frac{f(t,d)\,(k_1+1)}{f(t,d) + k_1\left(1 - b + b\,\dfrac{|d|}{\overline{|d|}}\right)}$$

avec

$$\mathrm{IDF}(t) = \ln\!\left(\frac{N - n_t + 0{,}5}{n_t + 0{,}5} + 1\right)$$

Deux idées s’y cachent : la fréquence d’un terme sature (contrairement à TF-IDF brut), et un document long est pénalisé proportionnellement à son écart à la longueur moyenne.

## Objectifs

- Réponse en moins de 5 ms sur 12 000 documents, index reconstruit en moins de 3 s.
- Classement pertinent : BM25 plutôt que le simple compte d’occurrences.
- Recherche par expression exacte et par proximité, pas seulement par sac de mots.

## Ce que ça a donné

L’index complet occupe 41 Mo pour 380 Mo de texte source ; une requête de trois termes est servie en 1,8 ms médian. La tolérance aux fautes coûte cher : elle triple le temps de requête, elle reste donc désactivée par défaut et n’est déclenchée que si la recherche exacte ne renvoie rien.

![Scores BM25 des dix premiers résultats pour une requête de trois termes.](fig:bars)

Reste à faire : la recherche par expression régulière sur les listes de positions, et un mode incrémental qui ne réindexe que les fichiers modifiés.

![Occupation de l’index : listes de positions par terme.](fig:cells)
`},
 en:{title:'Full-text search engine over my notes',role:'Personal project',status:'In progress',
  blurb:'Inverted index, BM25, typo tolerance: 12,000 pages of notes queried in under two milliseconds.',
  lead:'I had twelve thousand pages of notes and no way to find anything. grep was too literal, existing tools too heavy.',
  stack:[['Language','Rust 1.86'],['Ranking','BM25 · $k_1=1.2$, $b=0.75$'],['Fuzzy','Levenshtein automaton'],['Interface','TUI + local server']],
  links:[['Source code','https://github.com'],['Article: tries','#/carnet/cs/tries-sous-estimes']]}},

{slug:'automates',thumb:'cells',year:'2023',tags:['TypeScript','Canvas','Automates'],
 fr:{title:'Visualiseur d’automates cellulaires',role:'Projet personnel',status:'Terminé',
  blurb:'Les 256 règles élémentaires, le Jeu de la vie, les automates totalistiques : un bac à sable pour regarder la complexité apparaître.',
  lead:'La règle 110 est Turing-complète. Elle tient en huit bits. Ce genre de fait mérite qu’on le regarde tourner en direct.',
  stack:[['Langage','TypeScript'],['Rendu','Canvas 2D, ImageData'],['État','Encodé dans l’URL'],['Poids','24 ko, sans dépendance']],
  links:[['Démonstration en ligne','https://github.com'],['Code source','https://github.com']],
  body:String.raw`
## Contexte

Après avoir lu la démonstration de l’universalité de la règle 110, je voulais voir les structures dont il est question : les planeurs, les fonds périodiques, les collisions qui encodent le calcul.

Un automate élémentaire est entièrement décrit par une fonction de trois bits vers un bit :

$$x_i^{t+1} = \varphi\!\left(x_{i-1}^{t},\, x_i^{t},\, x_{i+1}^{t}\right), \qquad \varphi : \{0,1\}^3 \to \{0,1\}$$

Il y a donc $2^{2^3} = 256$ règles, chacune identifiée par le nombre binaire formé de ses huit sorties.

## Objectifs

- Les 256 règles élémentaires accessibles en un geste, avec leur classification de Wolfram.
- Grilles jusqu’à $2048 \times 2048$ sans saccade.
- Détection automatique des cycles et des configurations stables.

## Ce que ça a donné

Le rendu tient 60 images par seconde jusqu’à 4 millions de cellules, en écrivant directement dans un \`ImageData\` plutôt qu’en appelant \`fillRect\` des millions de fois. Le détecteur de cycles, qui hache chaque génération, repère les périodes jusqu’à 512 et a mis en évidence un comportement que je croyais chaotique et qui était en fait de période 43.

![Règle 110 sur 512 générations, condition initiale à une cellule.](fig:cells)

Utilisé deux fois en atelier de vulgarisation auprès de lycéens : l’effet « la règle 30 est déterministe mais illisible » fonctionne à chaque fois.
`},
 en:{title:'Cellular automata explorer',role:'Personal project',status:'Finished',
  blurb:'The 256 elementary rules, the Game of Life, totalistic automata: a sandbox for watching complexity appear.',
  lead:'Rule 110 is Turing complete. It fits in eight bits. That kind of fact deserves to be watched live.',
  stack:[['Language','TypeScript'],['Rendering','Canvas 2D, ImageData'],['State','Encoded in the URL'],['Size','24 kB, no dependencies']],
  links:[['Live demo','https://github.com'],['Source code','https://github.com']]}}
],

/* =========================================================
   5. ARTICLES DU CARNET
   ========================================================= */
articles:[

{slug:'fourier-changement-de-base',cat:'math',date:'2026-06-14',read:9,
 fr:{title:'La transformée de Fourier est un changement de base',
  blurb:'On l’enseigne comme une intégrale intimidante. C’est d’abord une projection sur une famille orthogonale, et tout le reste en découle.',
  body:String.raw`
La première fois qu’on rencontre la transformée de Fourier, elle arrive sous cette forme :

$$\hat{f}(\xi) = \int_{\mathbb{R}} f(x)\, e^{-2i\pi x \xi}\, \mathrm{d}x$$

et l’on passe le semestre à manipuler des propriétés sans jamais savoir ce que l’objet *est*. Pourtant l’idée tient en une phrase : on écrit une fonction dans une autre base, et cette base a la propriété remarquable de diagonaliser la dérivation.

## Le cas fini, d’abord

Prenons un vecteur de $\mathbb{R}^n$. Personne ne trouve mystérieux de l’écrire dans une base orthonormée : on projette sur chaque vecteur de base avec un produit scalaire, on récupère $n$ coordonnées, et le vecteur est la somme des coordonnées fois les vecteurs de base. La transformée de Fourier discrète ne fait rien d’autre. La base choisie est

$$e_k(j) = e^{2i\pi jk/n}, \qquad k = 0,\dots,n-1$$

et le produit scalaire est le produit hermitien usuel $\langle u, v\rangle = \sum_j u_j \overline{v_j}$.

Le coefficient $k$ n’est donc pas une quantité exotique : c’est $\langle f, e_k \rangle$, la coordonnée de $f$ selon la $k$-ième direction. La formule d’inversion n’est pas un théorème profond, c’est la reconstruction d’un vecteur à partir de ses coordonnées.

## Pourquoi cette base et pas une autre

Il existe une infinité de bases orthonormées. Celle-ci mérite son statut pour une raison précise : les exponentielles sont les vecteurs propres de la dérivation.

$$\frac{\mathrm{d}}{\mathrm{d}x} e^{2i\pi \xi x} = 2i\pi\xi \cdot e^{2i\pi \xi x}$$

Dériver, dans cette base, c’est multiplier chaque coordonnée par un scalaire. Une équation différentielle linéaire à coefficients constants, qui couple les valeurs d’une fonction et de ses dérivées en chaque point, devient un système d’équations indépendantes, une par fréquence. C’est tout l’intérêt : la base de Fourier est celle où l’opérateur qui nous intéresse est diagonal.

> Tout ce qu’on appelle « propriété de la transformée de Fourier » est une conséquence de cette diagonalisation, ou de la structure de groupe de $\mathbb{R}$.

## La convolution, gratuitement

Le théorème de convolution semble miraculeux :

$$\widehat{f * g} = \hat{f} \cdot \hat{g}$$

Il cesse de l’être si l’on remarque que la convolution est l’opération de composition des opérateurs de translation, et que les exponentielles sont vecteurs propres des translations aussi :

$$\tau_a e^{2i\pi \xi x} = e^{2i\pi \xi (x-a)} = e^{-2i\pi \xi a} \cdot e^{2i\pi \xi x}$$

Un opérateur qui commute avec toutes les translations est donc diagonal dans la base des exponentielles. Sa matrice, en base de Fourier, est une multiplication point par point. Le théorème de convolution est cette phrase, traduite.

## Ce que le cas continu ajoute vraiment

Passer de $n$ dimensions à $\mathbb{R}$ n’ajoute pas d’idée, il ajoute des difficultés techniques : la famille des exponentielles n’est plus dénombrable, elles n’appartiennent pas à $L^2(\mathbb{R})$, et la somme devient une intégrale qui demande des hypothèses de décroissance. C’est réel, c’est l’objet de l’analyse fonctionnelle, mais ce n’est pas ce qui donne son sens à l’objet.

Alors si la formule vous intimide encore, lisez-la comme une liste de coordonnées. La fonction n’a pas changé. On l’a simplement regardée depuis un autre repère, celui où la dérivation est une homothétie.
`},
 en:{title:'The Fourier transform is a change of basis',
  blurb:'It is taught as an intimidating integral. It is first a projection onto an orthogonal family, and everything else follows.',
  body:String.raw`
The first time you meet the Fourier transform, it arrives in this shape:

$$\hat{f}(\xi) = \int_{\mathbb{R}} f(x)\, e^{-2i\pi x \xi}\, \mathrm{d}x$$

and you spend a semester manipulating its properties without ever learning what the object *is*. Yet the idea fits in one sentence: you write a function in another basis, and that basis happens to diagonalise differentiation.

## The finite case first

Take a vector in $\mathbb{R}^n$. Nobody finds it mysterious to write it in an orthonormal basis: project onto each basis vector with an inner product, collect $n$ coordinates, and the vector is the sum of coordinates times basis vectors. The discrete Fourier transform does exactly that, with the basis

$$e_k(j) = e^{2i\pi jk/n}, \qquad k = 0,\dots,n-1$$

and the usual Hermitian product $\langle u, v\rangle = \sum_j u_j \overline{v_j}$.

Coefficient $k$ is therefore not an exotic quantity: it is $\langle f, e_k \rangle$, the coordinate of $f$ along the $k$-th direction. The inversion formula is not a deep theorem, it is the reconstruction of a vector from its coordinates.

## Why this basis and no other

There are infinitely many orthonormal bases. This one earns its status for a precise reason: exponentials are the eigenvectors of differentiation.

$$\frac{\mathrm{d}}{\mathrm{d}x} e^{2i\pi \xi x} = 2i\pi\xi \cdot e^{2i\pi \xi x}$$

In this basis, differentiating means multiplying each coordinate by a scalar. A linear ODE with constant coefficients, which couples the values of a function and its derivatives at every point, becomes a family of independent equations, one per frequency. That is the whole point: the Fourier basis is the one where the operator you care about is diagonal.

> Everything called a "property of the Fourier transform" is a consequence of that diagonalisation, or of the group structure of $\mathbb{R}$.

## Convolution, for free

The convolution theorem looks miraculous:

$$\widehat{f * g} = \hat{f} \cdot \hat{g}$$

It stops being so once you notice that convolution composes translation operators, and that exponentials are eigenvectors of translations too:

$$\tau_a e^{2i\pi \xi x} = e^{2i\pi \xi (x-a)} = e^{-2i\pi \xi a} \cdot e^{2i\pi \xi x}$$

An operator commuting with every translation is thus diagonal in the exponential basis. Its matrix, in Fourier coordinates, is a pointwise multiplication. The convolution theorem is that sentence, translated.

## What the continuous case actually adds

Going from $n$ dimensions to $\mathbb{R}$ adds no idea, it adds technical difficulty: the family of exponentials is no longer countable, they do not belong to $L^2(\mathbb{R})$, and the sum becomes an integral demanding decay hypotheses. That is real, it is what functional analysis is for, but it is not what gives the object its meaning.

So if the formula still intimidates you, read it as a list of coordinates. The function has not changed. You are simply looking at it from another frame, the one where differentiation is a scaling.
`}},

{slug:'euler-pas-mysterieux',cat:'math',date:'2026-04-02',read:6,
 fr:{title:'Pourquoi $e^{i\pi} = -1$ n’a rien de mystérieux',
  blurb:'La formule est présentée comme un miracle. Elle devient évidente dès qu’on accepte que l’exponentielle mesure une rotation.',
  body:String.raw`
On répète que l’identité d’Euler est la plus belle formule des mathématiques parce qu’elle relie cinq constantes fondamentales. C’est joli à dire et ça n’explique rien. Voici la lecture qui, pour moi, a tout débloqué.

## Que fait l’exponentielle

L’exponentielle est la solution de $y' = y$ avec $y(0) = 1$. Lue comme une trajectoire : à chaque instant, ma vitesse est égale à ma position. Pour un réel, cela donne une croissance qui s’accélère. Remplaçons maintenant le coefficient $1$ par $i$ :

$$y' = i\,y, \qquad y(0) = 1$$

Multiplier par $i$, dans le plan complexe, c’est tourner d’un quart de tour. La condition devient : à chaque instant, ma vitesse est perpendiculaire à ma position, et de même norme. Cette description est exactement celle d’un mouvement circulaire uniforme sur le cercle unité, à vitesse angulaire $1$.

## L’identité, alors

Si $e^{it}$ parcourt le cercle unité à vitesse angulaire 1 en partant de $1$, alors après un temps $t$ j’ai tourné d’un angle $t$. Pour $t = \pi$, j’ai fait un demi-tour, et un demi-tour depuis $1$ mène à $-1$. Il n’y a plus rien à démontrer.

Le vrai contenu de la formule n’est donc pas numérique, il est structurel : l’addition des exposants correspond à la composition des rotations, ce qui fait de $t \mapsto e^{it}$ un morphisme de groupes

$$(\mathbb{R}, +) \longrightarrow (\mathbb{U}, \times), \qquad e^{i(s+t)} = e^{is}\,e^{it}$$

Le nombre $\pi$ apparaît uniquement parce que nous avons choisi de mesurer les angles en radians.

## Le sentiment de mystère, d’où vient-il

Il vient de l’ordre d’exposition. On apprend l’exponentielle comme une machine à faire grandir les intérêts composés, puis on lui donne un argument imaginaire, et on s’étonne qu’une machine à croissance produise une rotation. Mais la croissance n’était pas la définition, elle était un cas particulier, celui où la direction de la vitesse coïncide avec celle de la position.

Une fois cette image en tête, plusieurs choses deviennent immédiates : les formules d’addition

$$\cos(a+b) = \cos a \cos b - \sin a \sin b$$

(composer deux rotations), la dérivée du cosinus, et la raison pour laquelle les solutions de $y'' + \omega^2 y = 0$ oscillent. La même idée continue de servir en algèbre linéaire, où $e^{tA}$ décrit le flot d’un système linéaire : la matrice dit dans quelle direction on est poussé, l’exponentielle intègre cette poussée.
`},
 en:{title:'Why $e^{i\pi} = -1$ is not mysterious',
  blurb:'The formula is sold as a miracle. It becomes obvious once you accept that the exponential measures a rotation.'}},

{slug:'benchmarks-mentent',cat:'cs',date:'2026-05-21',read:11,
 fr:{title:'Vos mesures de performance mentent, et voici comment',
  blurb:'Cache, prédiction de branche, montée en fréquence, allocateur : quatre raisons pour lesquelles le code « plus rapide » ne l’est que dans votre boucle de test.',
  body:String.raw`
J’ai passé une semaine à optimiser une fonction de tri. Gain mesuré : 40 %. Gain constaté dans le programme réel : zéro. Ce n’est pas une erreur de mesure, c’est une erreur de modèle, et c’est extrêmement commun.

## 1. Le cache que votre boucle a réchauffé

Une boucle de test appelle mille fois la même fonction sur les mêmes données. Au deuxième tour, tout tient en cache L1. Dans le programme réel, la fonction est appelée une fois entre deux traitements qui ont vidé le cache. Vous avez mesuré le coût de l’arithmétique, alors que le coût réel était celui des accès mémoire.

~~~
Latences typiques (cycles, ordre de grandeur)
L1        ~4
L2       ~14
L3       ~45
RAM     ~200
~~~

Le test à faire : mesurer sur des données plus grandes que le dernier niveau de cache, et alterner les jeux de données entre les appels.

## 2. Le prédicteur de branche qui a appris votre jeu de test

Si vos données de test sont triées, ou générées par un générateur pseudo-aléatoire à graine fixe, le prédicteur finit par deviner correctement presque toutes les branches. Une comparaison mal prédite coûte une quinzaine de cycles ; bien prédite, elle est quasiment gratuite. Le même code peut être trois fois plus lent uniquement parce que les données sont devenues imprévisibles.

C’est la raison pour laquelle un tri sans branchement peut perdre face à un tri classique sur des données presque triées, et gagner largement sur des données aléatoires.

## 3. La fréquence qui bouge sous vos pieds

Un processeur portable monte en fréquence pendant les premières secondes de charge, puis redescend en régime thermique. Mesurer une fonction juste après le lancement du programme, c’est mesurer un état transitoire. Pire, l’usage d’instructions vectorielles larges peut faire baisser la fréquence de tout le cœur : le code vectorisé « fait plus de travail par cycle » et vos cycles sont devenus plus lents.

Remède minimal : plusieurs séries de mesures, ordre alterné entre les variantes, et publication de la médiane avec l’écart interquartile plutôt que du meilleur temps observé. Le meilleur temps est la mesure la plus flatteuse et la moins informative.

## 4. L’allocateur qui vous rend service une fois

Le premier appel à l’allocateur demande des pages au système ; les suivants réutilisent une arène déjà chaude. Une variante qui alloue beaucoup paraît donc peu coûteuse dans une boucle serrée, et devient un problème dans un programme qui alloue par ailleurs, où la fragmentation entre en jeu.

## Ce que dit la loi d’Amdahl, et qu’on oublie

Si une portion $p$ du temps total est accélérée d’un facteur $s$, le gain global vaut

$$G = \frac{1}{(1-p) + \dfrac{p}{s}}$$

Avec $p = 0{,}03$ et $s = 1{,}4$, on obtient $G \approx 1{,}009$ : neuf millièmes. C’est exactement ma semaine perdue.

## La méthode que j’applique maintenant

- Mesurer dans le programme réel avant de mesurer en isolation. Une micro-mesure ne sert qu’à expliquer un écart déjà observé.
- Compter les événements, pas seulement le temps : défauts de cache, branches mal prédites, instructions retirées.
- Garder la version naïve dans les tests et comparer les sorties. Une optimisation qui change les résultats n’est pas une optimisation.
- Écrire l’hypothèse avant la mesure. Si je ne sais pas dire ce que je m’attends à voir, je ne saurai pas interpréter ce que je vois.

La conclusion agaçante : mon tri était bien 40 % plus rapide. Simplement, le tri représentait 3 % du temps total. La première question n’était pas « ce code est-il rapide », mais « ce code compte-t-il ».
`},
 en:{title:'Your benchmarks are lying, and here is how',
  blurb:'Cache, branch prediction, frequency scaling, allocator: four reasons the "faster" code is only faster inside your test loop.',
  body:String.raw`
I spent a week optimising a sort function. Measured gain: 40 %. Gain in the real program: zero. That is not a measurement error, it is a modelling error, and it is extremely common.

## 1. The cache your loop warmed up

A benchmark loop calls the same function a thousand times on the same data. By the second iteration everything sits in L1. In the real program the function is called once, between two workloads that flushed the cache. You measured arithmetic; the real cost was memory.

~~~
Typical latencies (cycles, order of magnitude)
L1        ~4
L2       ~14
L3       ~45
RAM     ~200
~~~

The fix: measure on data larger than the last level cache, and rotate data sets between calls.

## 2. The branch predictor that learned your test set

If your test data is sorted, or generated from a fixed seed, the predictor eventually guesses almost every branch. A mispredicted comparison costs around fifteen cycles; a predicted one is nearly free. The same code can be three times slower purely because the data became unpredictable.

That is why a branchless sort can lose against a classic one on nearly sorted data, and win by a mile on random data.

## 3. The clock moving under your feet

A laptop CPU boosts during the first seconds of load, then settles under thermal limits. Timing a function right after start-up means timing a transient. Worse, wide vector instructions can lower the frequency of the whole core: the vectorised code does more work per cycle, and your cycles just got slower.

Minimum remedy: several measurement runs, alternating variant order, and report the median with the interquartile range rather than the best observed time. The best time is the most flattering and least informative number you have.

## 4. The allocator that helps you exactly once

The first allocation asks the OS for pages; the next ones reuse a warm arena. An allocation-heavy variant therefore looks cheap in a tight loop and becomes a problem in a program that allocates elsewhere, where fragmentation kicks in.

## What Amdahl's law says, and we forget

If a fraction $p$ of total time is sped up by a factor $s$, the overall gain is

$$G = \frac{1}{(1-p) + \dfrac{p}{s}}$$

With $p = 0.03$ and $s = 1.4$, $G \approx 1.009$: nine parts in a thousand. That is precisely my wasted week.

## The method I use now

- Measure in the real program before measuring in isolation. A micro-benchmark only explains a gap you already observed.
- Count events, not just time: cache misses, mispredicted branches, retired instructions.
- Keep the naive version in the tests and compare outputs. An optimisation that changes results is not an optimisation.
- Write the hypothesis before the measurement. If I cannot say what I expect to see, I cannot interpret what I see.

The annoying conclusion: my sort really was 40 % faster. It just happened to be 3 % of total runtime. The first question was never "is this code fast", it was "does this code matter".
`}},

{slug:'monades-parseur',cat:'cs',date:'2026-02-18',read:8,
 fr:{title:'Ce que j’ai compris des monades en écrivant un parseur',
  blurb:'Pas d’analogie avec des burritos. Un parseur, un problème de plomberie, et le moment où l’abstraction devient inévitable.',
  body:String.raw`
J’ai lu une dizaine d’explications des monades sans rien retenir. Ce qui a fonctionné, c’est d’écrire un analyseur syntaxique à la main et de me heurter au problème que les monades résolvent.

## Le point de départ

Un analyseur est une fonction qui prend une chaîne et renvoie, soit un échec, soit une valeur accompagnée du reste de la chaîne :

~~~
type 'a parser = string -> ('a * string) option
~~~

Rien d’abstrait. Un analyseur de chiffre regarde le premier caractère, un analyseur de mot-clé compare un préfixe. Le problème apparaît quand on veut les enchaîner : analyser un nombre, *puis* un signe, *puis* un autre nombre. Chaque étape doit propager le reste de la chaîne, et court-circuiter si l’une échoue.

## La plomberie qu’on écrit trois fois

Écrit naïvement, chaque enchaînement produit la même cascade de filtrage : déballer l’option, traiter l’échec, passer le reste à l’étape suivante. Au troisième ou quatrième cas, le motif se voit. On l’extrait :

~~~
let ( >>= ) p f = fun s ->
  match p s with
  | None -> None
  | Some (v, rest) -> (f v) rest

let return v = fun s -> Some (v, s)
~~~

Ces deux fonctions sont la monade. Ce n’est pas une métaphore, c’est le nom de ce couple d’opérations : un moyen d’injecter une valeur ordinaire dans le contexte (\`return\`) et un moyen d’enchaîner des calculs qui vivent dans ce contexte (\`>>=\`). Le contexte, ici, c’est « peut échouer et consomme de l’entrée ».

## Ce que ça change concrètement

Une fois ces deux briques posées, la grammaire s’écrit presque telle qu’on l’énonce. L’enchaînement, l’alternative et la répétition deviennent des combinateurs de quelques lignes, et le code de l’analyseur cesse de parler de chaînes de caractères pour parler de règles de grammaire. C’est le vrai bénéfice : la plomberie disparaît du texte.

## Pourquoi les explications habituelles échouent

Elles présentent l’abstraction avant le problème. Or une abstraction est une réponse ; sans la question, elle ressemble à une décoration. Les lois de la monade

$$\mathrm{return}\ a \gg\!= f \;=\; f\,a, \qquad m \gg\!= \mathrm{return} \;=\; m$$

$$(m \gg\!= f) \gg\!= g \;=\; m \gg\!= (\lambda x.\, f\,x \gg\!= g)$$

m’ont paru arbitraires jusqu’au moment où j’ai remarqué qu’elles disent exactement : « regrouper les étapes autrement ne change pas le résultat ». Sans elles, un refactoring innocent casserait l’analyseur.

Depuis, je reconnais le motif ailleurs : les promesses en JavaScript, \`Result\` en Rust, les générateurs de nombres aléatoires qui trimballent un état. Même forme, même bénéfice. L’intérêt n’a jamais été la théorie des catégories ; l’intérêt, c’est de n’écrire la plomberie qu’une fois.
`},
 en:{title:'What I understood about monads by writing a parser',
  blurb:'No burrito analogy. A parser, a plumbing problem, and the moment the abstraction becomes unavoidable.'}},

{slug:'tries-sous-estimes',cat:'cs',date:'2025-09-15',read:6,
 fr:{title:'Le trie, structure sous-estimée',
  blurb:'Entre la table de hachage et l’arbre équilibré, il existe une structure qui répond à des questions que ni l’une ni l’autre ne sait traiter.',
  body:String.raw`
Pour stocker des chaînes, le réflexe est la table de hachage. Elle est excellente pour une seule question : cette clé exacte est-elle présente ? Dès que la question devient « quelles clés commencent par ce préfixe », le hachage n’a rien à offrir, parce qu’il détruit délibérément toute structure de la clé.

## Ce que le trie conserve

Un trie range les chaînes caractère par caractère le long des branches. Deux clés partageant un préfixe partagent un chemin. Cette propriété donne directement la recherche par préfixe, l’énumération en ordre lexicographique, la plus longue correspondance de préfixe, et la complétion automatique. Le coût d’une recherche est

$$O(|k|) \quad \text{et non} \quad O\!\left(|k| + \text{collisions}\right)$$

c’est-à-dire qu’il dépend de la longueur de la clé, pas du nombre de clés stockées.

![Trie compressé : chaque nœud à un seul enfant est fusionné avec son parent.](fig:tree)

## Les objections, et ce qu’elles valent

« Ça consomme trop de mémoire. » Vrai pour l’implémentation naïve à 256 pointeurs par nœud. Un trie compressé, qui fusionne les chaînes de nœuds à un seul enfant, réduit fortement l’empreinte ; les variantes à tableaux triés ou à mots de bits par nœud vont plus loin. Sur des jeux de clés très partagés, un trie compressé peut consommer moins qu’une table de hachage, parce que les préfixes communs ne sont stockés qu’une fois.

« Le hachage est plus rapide. » En moyenne, sur des clés courtes et des recherches exactes, oui. Mais le hachage doit lire toute la clé pour calculer l’empreinte, alors qu’un trie s’arrête au premier caractère qui diffère. Et le trie n’a pas de pire cas de collision.

## Où je m’en sers

Dans [mon moteur de recherche](#/projets/recherche), le dictionnaire de termes est un trie compressé : il sert à la complétion, mais surtout à la recherche tolérante aux fautes. Un automate de Levenshtein parcouru en parallèle du trie élimine des sous-arbres entiers dès que la distance minimale possible dépasse le seuil. Avec une table de hachage, la même fonctionnalité exigerait de tester chaque terme du vocabulaire.

Retenez la question de sélection : mes clés ont-elles une structure que je veux interroger ? Si oui, ne la détruisez pas au moment de les ranger.
`},
 en:{title:'The trie is underrated',
  blurb:'Between the hash table and the balanced tree sits a structure that answers questions neither of them can.'}},

{slug:'entropie-pas-le-desordre',cat:'physics',date:'2026-07-08',read:10,
 fr:{title:'L’entropie n’est pas le désordre',
  blurb:'La métaphore de la chambre en désordre fait plus de dégâts qu’elle n’en évite. Ce que compte l’entropie, ce sont des états, pas de l’esthétique.',
  body:String.raw`
« L’entropie mesure le désordre. » Cette phrase, répétée partout, produit des raisonnements faux dès qu’on lui fait porter du poids. Le désordre est un jugement visuel ; l’entropie est un décompte.

## Ce que dit la définition

Pour un système isolé dont tous les micro-états accessibles sont équiprobables, Boltzmann écrit :

$$S = k_{\mathrm{B}} \ln \Omega$$

$\Omega$ est le nombre de configurations microscopiques compatibles avec ce que l’on connaît macroscopiquement. Rien dans cette formule ne parle d’ordre. Elle dit : plus il y a de façons d’être dans l’état macroscopique où je suis, plus l’entropie est grande. L’entropie est une propriété de notre description, autant que du système.

## Où la métaphore casse

Prenez un cristal parfait de glace et de l’eau liquide à la même température. Le cristal a l’air ordonné, et son entropie est effectivement plus faible : la métaphore semble tenir. Prenez maintenant un mélange de sphères dures de deux tailles : au-delà d’une certaine densité, le système cristallise *spontanément*, en augmentant son entropie. Il s’ordonne visuellement parce qu’un arrangement régulier laisse plus de liberté de mouvement local, donc plus de micro-états. Le désordre visuel et l’entropie viennent de s’opposer.

> Un système peut devenir plus régulier à l’œil en augmentant son entropie. La cristallisation entropique n’est pas une curiosité de laboratoire, c’est un contre-exemple décisif.

## La bonne image : compter, pas juger

Si l’on veut une intuition, prenons celle du jeu de dés. Deux dés, somme 7 : six combinaisons. Somme 12 : une seule. La somme 7 n’est pas « plus désordonnée » que 12, elle est simplement plus réalisable. Le deuxième principe dit que le système évolue vers des états macroscopiques largement plus réalisables, ce qui est un énoncé de probabilité, pas d’esthétique.

Les nombres impliqués rendent l’irréversibilité écrasante. Pour un gaz de $N = 10^{23}$ particules, le rapport de réalisabilité entre « réparti dans la boîte » et « tout dans la moitié gauche » vaut

$$\frac{\Omega_{\text{boîte}}}{\Omega_{\text{moitié}}} = 2^{N} = 2^{10^{23}}$$

Ce n’est pas interdit, c’est perdu dans le bruit.

## Ce que la formulation correcte permet

Elle rend l’entropie de Shannon reconnaissable :

$$H = -\sum_i p_i \ln p_i$$

même formule, même interprétation en termes de nombre d’états compatibles avec une information donnée. Elle rend le paradoxe de Gibbs traitable : la question « ces deux gaz sont-ils distinguables ? » est une question sur la description, et la formule répond en conséquence. Et elle désamorce le démon de Maxwell : trier des molécules demande de l’information, et effacer un bit coûte au minimum $k_{\mathrm{B}} T \ln 2$ d’énergie dissipée.

Le prix à payer est modeste. Il suffit de remplacer une phrase par une autre : l’entropie ne mesure pas le désordre, elle mesure le nombre de micro-états compatibles avec ce que nous savons.
`},
 en:{title:'Entropy is not disorder',
  blurb:'The messy bedroom metaphor causes more damage than it prevents. Entropy counts states, not aesthetics.',
  body:String.raw`
"Entropy measures disorder." That sentence, repeated everywhere, produces wrong reasoning as soon as you make it carry weight. Disorder is a visual judgement; entropy is a count.

## What the definition says

For an isolated system whose accessible microstates are equiprobable, Boltzmann writes:

$$S = k_{\mathrm{B}} \ln \Omega$$

$\Omega$ is the number of microscopic configurations compatible with what you know macroscopically. Nothing in that formula mentions order. It says: the more ways there are to be in the macrostate I am in, the higher the entropy. Entropy is a property of our description as much as of the system.

## Where the metaphor breaks

Take a perfect ice crystal and liquid water at the same temperature. The crystal looks ordered, and its entropy is indeed lower, so the metaphor seems to hold. Now take a mixture of hard spheres of two sizes: above a certain density the system crystallises *spontaneously*, increasing its entropy. It becomes visually ordered because a regular packing leaves more local freedom of movement, hence more microstates. Visual disorder and entropy have just moved in opposite directions.

> A system can look more regular while increasing its entropy. Entropic crystallisation is not a laboratory curiosity, it is a decisive counterexample.

## The right picture: count, do not judge

If you want intuition, use dice. Two dice, sum 7: six combinations. Sum 12: one. Sum 7 is not "more disordered" than 12, it is simply more realisable. The second law says the system evolves towards vastly more realisable macrostates, which is a statement about probability, not aesthetics.

The numbers involved make irreversibility overwhelming. For a gas of $N = 10^{23}$ particles, the ratio between "spread over the box" and "all in the left half" is

$$\frac{\Omega_{\text{box}}}{\Omega_{\text{half}}} = 2^{N} = 2^{10^{23}}$$

It is not forbidden, it is lost in the noise.

## What the correct phrasing buys you

It makes Shannon entropy recognisable:

$$H = -\sum_i p_i \ln p_i$$

same formula, same reading in terms of the number of states compatible with given information. It makes the Gibbs paradox tractable: "are these two gases distinguishable" is a question about the description, and the formula answers accordingly. And it defuses Maxwell's demon: sorting molecules requires information, and erasing one bit costs at least $k_{\mathrm{B}} T \ln 2$ of dissipated energy.

The price is modest. Replace one sentence with another: entropy does not measure disorder, it measures the number of microstates compatible with what we know.
`}},

{slug:'moindre-action-en-pratique',cat:'physics',date:'2026-03-11',read:9,
 fr:{title:'Le principe de moindre action, en pratique',
  blurb:'Reformuler la mécanique avec une intégrale à minimiser n’est pas une coquetterie : cela remplace la chasse aux forces par un choix de coordonnées.',
  body:String.raw`
La première rencontre avec le lagrangien laisse souvent une impression de tour de passe-passe : on pose $L = T - V$, on applique une équation, et les résultats de Newton tombent. D’où vient cette recette, et surtout, à quoi sert-elle ?

## Le changement de point de vue

Newton décrit le mouvement localement : connaissant l’état à un instant, les forces donnent l’accélération. La formulation variationnelle décrit le mouvement globalement : parmi tous les chemins reliant un point de départ à un point d’arrivée, la trajectoire réelle est celle qui rend stationnaire l’action

$$S[q] = \int_{t_1}^{t_2} L(q, \dot{q}, t)\, \mathrm{d}t, \qquad \delta S = 0$$

ce qui donne les équations d’Euler-Lagrange

$$\frac{\mathrm{d}}{\mathrm{d}t}\!\left(\frac{\partial L}{\partial \dot{q}_i}\right) - \frac{\partial L}{\partial q_i} = 0$$

Précision utile : stationnaire, pas nécessairement minimale. Le nom « moindre action » est un abus historique, et pour des temps de parcours longs la trajectoire est souvent un point selle.

## Ce que l’on gagne vraiment

Le gain n’est pas philosophique, il est calculatoire, et il apparaît dès qu’il y a des contraintes. Une bille dans une gouttière, un pendule double, une perle sur un cerceau qui tourne : en newtonien, chaque contrainte introduit une force de réaction inconnue qu’il faut éliminer. En lagrangien, on choisit des coordonnées qui satisfont automatiquement les contraintes, et les réactions n’apparaissent jamais dans les équations.

Pour le pendule double, deux angles suffisent, et l’énergie cinétique s’écrit

$$T = \tfrac{1}{2}(m_1+m_2)\ell_1^2\dot{\theta}_1^2 + \tfrac{1}{2}m_2\ell_2^2\dot{\theta}_2^2 + m_2\ell_1\ell_2\dot{\theta}_1\dot{\theta}_2\cos(\theta_1-\theta_2)$$

Les deux équations du mouvement sortent sans qu’on ait dessiné une seule force de liaison.

## La conséquence structurelle

Le vrai théorème derrière tout cela est celui de Noether : à toute symétrie continue de l’action correspond une quantité conservée. L’invariance par translation dans le temps donne l’énergie, par translation dans l’espace la quantité de mouvement, par rotation le moment cinétique. Les lois de conservation cessent d’être des faits à retenir séparément ; elles deviennent la lecture des symétries du lagrangien.

C’est aussi pour cette raison que la formulation se transporte là où les forces n’ont plus de sens évident : théorie des champs, relativité générale, mécanique quantique via l’intégrale de chemin, où l’amplitude s’écrit

$$\langle q_f | q_i \rangle = \int \mathcal{D}q \; e^{\,i S[q]/\hbar}$$

## Le conseil que je me donnerais

Ne commencez pas par la démonstration des équations d’Euler-Lagrange. Prenez trois systèmes contraints, résolvez-les des deux façons, et chronométrez. L’argument le plus convaincant en faveur du lagrangien est le nombre de lignes de calcul économisées.
`},
 en:{title:'The principle of least action, in practice',
  blurb:'Recasting mechanics as an integral to minimise is not a flourish: it trades hunting for forces against choosing coordinates.'}},

{slug:'ligne-de-base-spectres',cat:'physics',date:'2025-11-27',read:7,
 fr:{title:'Estimer une ligne de base sans se faire piéger par ses propres pics',
  blurb:'Retour d’expérience sur un biais discret : la régression des moindres carrés se laisse tirer par le signal qu’elle est censée ignorer.',
  body:String.raw`
Dans [l’analyseur de spectres](#/projets/spectres) que j’utilise en TP, l’erreur la plus coûteuse ne venait ni de la détection de pics ni de l’ajustement, mais de l’étape qu’on considère comme un détail : la soustraction de la ligne de base.

## Le symptôme

Les aires de pics étaient systématiquement sous-estimées, d’autant plus que le pic était intense. Une erreur qui dépend de l’amplitude du signal n’est pas du bruit : c’est un biais, et il faut chercher un couplage.

## La cause

La ligne de base était ajustée par un polynôme au sens des moindres carrés, c’est-à-dire en minimisant

$$\sum_{i=1}^{n} \left(y_i - P(x_i)\right)^2$$

Or cette somme pénalise le carré des écarts, symétriquement. Un pic, qui est un écart positif énorme sur quelques points, tire donc la ligne de base vers le haut. Plus le pic est grand, plus la base est surestimée sous ce pic, et plus l’aire calculée est petite. Le signal contaminait l’estimation du fond.

## Trois corrections, par ordre d’efficacité

- **Régression quantile** plutôt que moindres carrés : on minimise $\sum \rho_\tau(y_i - P(x_i))$ avec $\rho_\tau(u) = u(\tau - \mathbf{1}_{u<0})$ et $\tau = 0{,}1$. Les écarts positifs cessent d’être surpondérés.
- **Réajustement itératif avec écrêtage** : ajuster, retirer les points au-dessus de $P(x) + 2\sigma$, recommencer. Trois itérations suffisent en pratique.
- **Fenêtres sans pic** déclarées à la main sur les spectres de référence : très fiable, mais non automatisable.

La régression quantile a réduit le biais sur les aires d’un facteur cinq, pour quinze lignes de code. Le contrôle qui a permis de le vérifier : ajouter un pic synthétique d’aire connue à un spectre réel et comparer l’aire retrouvée. Aucun contrôle interne n’aurait révélé le biais, puisque le code faisait exactement ce qu’on lui demandait.

> Quand une erreur croît avec l’amplitude du signal, cherchez l’endroit où l’estimation du fond regarde le signal.
`},
 en:{title:'Estimating a baseline without being fooled by your own peaks',
  blurb:'A field report on a quiet bias: least squares regression gets pulled by the very signal it is supposed to ignore.'}}
],

/* =========================================================
   6. PROBLÈMES
   ========================================================= */
problems:[

{id:'P-021',slug:'marche-tetraedre',date:'2026-07-12',level:2,tags:['math','probability'],
 fr:{title:'Marche aléatoire sur un tétraèdre',
  blurb:'Une fourmi se promène sur les arêtes. Combien de temps met-elle à revenir chez elle ?',
  statement:String.raw`
Une fourmi part d’un sommet $A$ d’un tétraèdre régulier $ABCD$. À chaque étape, elle choisit uniformément au hasard l’une des trois arêtes partant de son sommet actuel et l’emprunte.

1. Calculer l’espérance du nombre d’étapes nécessaires pour revenir en $A$ pour la première fois.
2. Calculer la probabilité $p_n$ que la fourmi se trouve en $A$ après $n$ étapes, et en donner la limite.
3. Généraliser au graphe complet $K_k$ et commenter le comportement lorsque $k \to \infty$.
`,
  hint:String.raw`
Les trois sommets autres que $A$ jouent exactement le même rôle. Le processus se réduit donc à une chaîne de Markov à deux états, « en $A$ » et « ailleurs », de matrice de transition

$$P = \begin{pmatrix} 0 & 1 \\ 1/3 & 2/3 \end{pmatrix}$$
`,
  solution:String.raw`
**1.** Notons $e$ l’espérance du temps d’atteinte de $A$ depuis un sommet différent de $A$. Depuis $A$, la fourmi arrive nécessairement sur un autre sommet en une étape, donc le temps de retour vaut $1 + e$. Depuis un sommet $\neq A$, elle atteint $A$ avec probabilité $1/3$, sinon elle se retrouve dans un état équivalent :

$$e = 1 + \tfrac{2}{3}\,e \quad \Longrightarrow \quad e = 3$$

Le temps de retour attendu vaut donc $\mathbb{E}[T_A] = 4$ étapes. C’est cohérent avec le résultat général sur les chaînes irréductibles : $\mathbb{E}[T_A] = 1/\pi_A$, ici $\pi_A = 1/4$ par symétrie.

**2.** La relation de récurrence est

$$p_{n+1} = \frac{1 - p_n}{3}, \qquad p_0 = 1$$

Suite arithmético-géométrique de point fixe $1/4$, d’où

$$p_n = \frac{1}{4} + \frac{3}{4}\left(-\frac{1}{3}\right)^{n} \xrightarrow[n\to\infty]{} \frac{1}{4}$$

La convergence est géométrique de raison $1/3$, en oscillant autour de la limite.

**3.** Sur $K_k$, le même raisonnement donne $\mathbb{E}[T_A] = k$ et

$$p_n = \frac{1}{k} + \left(1 - \frac{1}{k}\right)\left(\frac{-1}{k-1}\right)^{n}$$

Quand $k$ grandit, la convergence vers l’équilibre s’accélère (raison $1/(k-1)$) alors que le temps de retour croît linéairement : le marcheur oublie vite d’où il vient, mais met longtemps à y retourner.
`},
 en:{title:'Random walk on a tetrahedron',
  blurb:'An ant wanders along the edges. How long until it gets back home?',
  statement:String.raw`
An ant starts at a vertex $A$ of a regular tetrahedron $ABCD$. At each step it picks one of the three edges leaving its current vertex uniformly at random and walks along it.

1. Compute the expected number of steps needed to return to $A$ for the first time.
2. Compute the probability $p_n$ of being at $A$ after $n$ steps, and give its limit.
3. Generalise to the complete graph $K_k$ and comment on the behaviour as $k \to \infty$.
`,
  hint:String.raw`
The three vertices other than $A$ play exactly the same role. The process therefore reduces to a two-state Markov chain, "at $A$" and "elsewhere", with transition matrix

$$P = \begin{pmatrix} 0 & 1 \\ 1/3 & 2/3 \end{pmatrix}$$
`,
  solution:String.raw`
**1.** Let $e$ be the expected hitting time of $A$ from any vertex other than $A$. From $A$ the ant necessarily lands on another vertex in one step, so the return time is $1 + e$. From a vertex $\neq A$ it reaches $A$ with probability $1/3$, otherwise it lands in an equivalent state:

$$e = 1 + \tfrac{2}{3}\,e \quad \Longrightarrow \quad e = 3$$

Hence $\mathbb{E}[T_A] = 4$ steps, consistent with the general result for irreducible chains, $\mathbb{E}[T_A] = 1/\pi_A$, with $\pi_A = 1/4$ by symmetry.

**2.** The recursion is

$$p_{n+1} = \frac{1 - p_n}{3}, \qquad p_0 = 1$$

an affine recursion with fixed point $1/4$, so

$$p_n = \frac{1}{4} + \frac{3}{4}\left(-\frac{1}{3}\right)^{n} \xrightarrow[n\to\infty]{} \frac{1}{4}$$

Convergence is geometric with ratio $1/3$, oscillating around the limit.

**3.** On $K_k$ the same argument gives $\mathbb{E}[T_A] = k$ and

$$p_n = \frac{1}{k} + \left(1 - \frac{1}{k}\right)\left(\frac{-1}{k-1}\right)^{n}$$

As $k$ grows, convergence to equilibrium accelerates (ratio $1/(k-1)$) while the return time grows linearly: the walker forgets where it came from quickly, but takes a long time to go back.
`}},

{id:'P-020',slug:'tri-qui-nen-est-pas-un',date:'2026-06-30',level:1,tags:['cs','algorithms'],
 fr:{title:'Le tri qui n’en est pas un',
  blurb:'Un algorithme de tri en apparence correct, un contre-exemple à trouver, et une borne inférieure à justifier.',
  statement:String.raw`
On propose l’algorithme suivant pour trier un tableau \`t\` de $n$ entiers :

~~~
pour i de 0 à n-1 :
    pour j de 0 à n-3 :
        si t[j] > t[j+2] :
            échanger t[j] et t[j+2]
~~~

1. Que fait réellement cet algorithme ? Le prouver.
2. Exhiber le plus petit tableau non trié en sortie.
3. Proposer une correction minimale, puis justifier qu’aucun tri par comparaisons ne peut être en $O(n)$ dans le pire cas.
`,
  hint:String.raw`
Regardez ce que devient un élément d’indice pair. Peut-il jamais occuper une position impaire ?
`,
  solution:String.raw`
**1.** Un échange entre les indices $j$ et $j+2$ préserve la parité de l’indice de chaque élément. L’algorithme trie donc indépendamment le sous-tableau des indices pairs et celui des indices impairs, sans jamais les mélanger. En sortie, ces deux sous-suites sont croissantes, mais leur entrelacement n’a aucune raison de l’être.

**2.** Le tableau $[2, 1]$ reste inchangé, puisque les indices $0$ et $1$ ne sont jamais comparés. Le plus petit tableau non trié en sortie est donc de taille 2. Exemple plus parlant en taille 4 : $[1, 4, 2, 3]$ est déjà stable, alors que $[1,2,3,4]$ serait la sortie attendue.

**3.** Remplacer \`t[j+2]\` par \`t[j+1]\` donne le tri à bulles usuel, correct en $O(n^2)$. Quant à la borne inférieure : un tri par comparaisons est un arbre de décision binaire dont les feuilles doivent couvrir les $n!$ permutations. Sa hauteur $h$ vérifie donc $2^h \geq n!$, soit

$$h \;\geq\; \log_2(n!) \;=\; n\log_2 n - \frac{n}{\ln 2} + O(\log n) \;=\; \Theta(n \log n)$$

par la formule de Stirling. Aucun tri par comparaisons ne peut donc être linéaire dans le pire cas, ce qui n’interdit rien aux tris exploitant la structure des clés, comme le tri par base.
`},
 en:{title:'The sort that is not one',
  blurb:'A seemingly correct sorting algorithm, a counterexample to find, and a lower bound to justify.',
  statement:String.raw`
Consider the following algorithm, meant to sort an array \`t\` of $n$ integers:

~~~
for i from 0 to n-1:
    for j from 0 to n-3:
        if t[j] > t[j+2]:
            swap t[j] and t[j+2]
~~~

1. What does this algorithm actually do? Prove it.
2. Exhibit the smallest array that comes out unsorted.
3. Propose a minimal fix, then justify that no comparison sort can run in $O(n)$ in the worst case.
`,
  hint:String.raw`
Look at what happens to an element sitting at an even index. Can it ever end up at an odd position?
`,
  solution:String.raw`
**1.** Swapping indices $j$ and $j+2$ preserves the parity of each element's index. The algorithm therefore sorts the even-index subarray and the odd-index subarray independently, never mixing them. Both subsequences come out increasing, but their interleaving has no reason to be.

**2.** The array $[2, 1]$ is left untouched, since indices $0$ and $1$ are never compared, so the smallest unsorted output has size 2. A more telling size-4 example: $[1, 4, 2, 3]$ is stable under the algorithm, while $[1,2,3,4]$ is the expected output.

**3.** Replacing \`t[j+2]\` with \`t[j+1]\` gives the usual bubble sort, correct in $O(n^2)$. As for the lower bound: a comparison sort is a binary decision tree whose leaves must cover all $n!$ permutations, so its height $h$ satisfies $2^h \geq n!$, hence

$$h \;\geq\; \log_2(n!) \;=\; n\log_2 n - \frac{n}{\ln 2} + O(\log n) \;=\; \Theta(n \log n)$$

by Stirling's formula. No comparison sort can be linear in the worst case, which says nothing against sorts exploiting key structure, such as radix sort.
`}},

{id:'P-019',slug:'deux-cordes-une-poulie',date:'2026-06-05',level:2,tags:['physics','mechanics'],
 fr:{title:'Deux cordes et une poulie',
  blurb:'Un problème de statique où l’intuition se trompe d’un facteur deux, et une question d’énergie pour trancher.',
  statement:String.raw`
Une poulie idéale, de masse négligeable, est suspendue au plafond. Une corde inextensible passe dessus ; à ses extrémités pendent deux masses $m_1 = 3\ \mathrm{kg}$ et $m_2 = 5\ \mathrm{kg}$. On lâche le système sans vitesse initiale.

1. Calculer l’accélération des masses et la tension de la corde.
2. Calculer la force exercée par la poulie sur le plafond. Est-elle égale au poids total ?
3. Vérifier le résultat par un bilan d’énergie après une chute de hauteur $h$.
`,
  hint:String.raw`
Pour la question 2, écrivez l’équilibre de la poulie seule : elle est de masse négligeable, donc la somme des forces qu’elle subit est nulle. Combien de brins de corde tirent vers le bas ?
`,
  solution:String.raw`
**1.** Avec l’axe orienté dans le sens du mouvement, les deux équations du mouvement donnent

$$a = g\,\frac{m_2 - m_1}{m_1 + m_2} = 2{,}45\ \mathrm{m\cdot s^{-2}}, \qquad T = \frac{2 m_1 m_2 g}{m_1 + m_2} = 36{,}8\ \mathrm{N}$$

**2.** La poulie subit deux brins tendus, chacun à la tension $T$, et la force du plafond. Sa masse étant négligeable,

$$F = 2T = 73{,}5\ \mathrm{N} \quad < \quad (m_1 + m_2)g = 78{,}5\ \mathrm{N}$$

La force sur le plafond est donc **inférieure** au poids total, d’environ $5\ \mathrm{N}$, parce que le centre de masse du système accélère vers le bas : la masse qui descend est la plus lourde. La différence vaut exactement $(m_2 - m_1)a$.

**3.** Après une chute de hauteur $h$, l’énergie potentielle perdue est $(m_2 - m_1)gh$ et l’énergie cinétique gagnée $\tfrac{1}{2}(m_1+m_2)v^2$. L’égalité donne

$$v^2 = \frac{2gh\,(m_2-m_1)}{m_1+m_2} = 2ah$$

ce qui est bien la relation du mouvement uniformément accéléré et confirme la valeur de $a$.
`},
 en:{title:'Two ropes and a pulley',
  blurb:'A statics problem where intuition is off by a factor of two, and an energy argument to settle it.'}},

{id:'P-018',slug:'somme-inverses-carres',date:'2026-05-19',level:3,tags:['math','analysis'],
 fr:{title:'Somme des inverses des carrés, sans Fourier',
  blurb:String.raw`Établir $\zeta(2)=\pi^2/6$... avec pour seuls outils une inégalité trigonométrique et un théorème des gendarmes.`,
  statement:String.raw`
On souhaite démontrer que

![FFT](images/fft.png)

$$\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}$$

sans utiliser de séries de Fourier ni d’intégrale de contour.

1. Montrer que pour tout $x \in \left]0, \tfrac{\pi}{2}\right[$ on a $\cot^2 x < \dfrac{1}{x^2} < 1 + \cot^2 x$.
2. En sommant cette inégalité aux points $x_k = \dfrac{k\pi}{2n+1}$ pour $k = 1,\dots,n$, et sachant que $\displaystyle\sum_{k=1}^{n} \cot^2 x_k = \frac{n(2n-1)}{3}$, conclure.
3. Où intervient précisément l’hypothèse que $2n+1$ est impair ?
`,
  hint:String.raw`
Pour la première inégalité, partez de $\sin x < x < \tan x$ sur $\left]0, \tfrac{\pi}{2}\right[$ et passez aux inverses au carré. L’identité de la question 2 vient des racines du polynôme dont les $\cot^2 x_k$ sont solutions.
`,
  solution:String.raw`
**1.** Sur $\left]0, \tfrac{\pi}{2}\right[$ on a $\sin x < x < \tan x$. En passant aux carrés puis aux inverses :

$$\cot^2 x = \frac{\cos^2 x}{\sin^2 x} < \frac{1}{x^2} < \frac{1}{\sin^2 x} = 1 + \cot^2 x$$

**2.** Posons $N = 2n+1$ et $x_k = k\pi/N$. En sommant sur $k$ de $1$ à $n$ :

$$\frac{n(2n-1)}{3} \;<\; \frac{N^2}{\pi^2}\sum_{k=1}^{n} \frac{1}{k^2} \;<\; n + \frac{n(2n-1)}{3}$$

Multiplions par $\pi^2/N^2$ :

$$\frac{\pi^2 n(2n-1)}{3(2n+1)^2} \;<\; \sum_{k=1}^{n} \frac{1}{k^2} \;<\; \frac{\pi^2\big(n + n(2n-1)/3\big)}{(2n+1)^2}$$

Les deux bornes tendent vers $\dfrac{2\pi^2 n^2}{12 n^2} = \dfrac{\pi^2}{6}$, le terme supplémentaire $\pi^2 n/(2n+1)^2$ tendant vers $0$. Le théorème des gendarmes donne la conclusion.

**3.** L’imparité de $N$ garantit que les $n$ valeurs $\cot^2(k\pi/N)$, pour $k = 1,\dots,n$, sont exactement les $n$ racines distinctes du polynôme obtenu en développant $\sin(Nx)$ : aucun des $x_k$ ne vaut $\pi/2$, où la cotangente s’annulerait et ferait chuter le degré. C’est ce qui permet d’identifier la somme des racines à $n(2n-1)/3$ par les relations coefficients-racines.
`},
 en:{title:'Sum of reciprocal squares, without Fourier',
  blurb:'Proving $\zeta(2) = \pi^2/6$ with nothing but a trigonometric inequality and the squeeze theorem.'}},

{id:'P-017',slug:'compter-arbres-binaires',date:'2026-04-24',level:2,tags:['cs','combinatorics'],
 fr:{title:'Compter les arbres binaires',
  blurb:'Une récurrence, une série génératrice, et une borne asymptotique qui explique pourquoi l’énumération exhaustive est sans espoir.',
  statement:String.raw`
Soit $C_n$ le nombre d’arbres binaires à $n$ nœuds internes, les sous-arbres gauche et droit étant distingués.

1. Établir une relation de récurrence sur $C_n$ et calculer les six premiers termes.
2. En déduire l’équation vérifiée par la série génératrice $C(x) = \sum_{n\geq 0} C_n x^n$, puis une formule fermée pour $C_n$.
3. Donner l’équivalent asymptotique et estimer $C_{30}$. Que conclure sur une recherche exhaustive d’arbres de décision à 30 tests ?
`,
  hint:String.raw`
Décomposez selon la taille du sous-arbre gauche. Si celui-ci a $k$ nœuds, combien en a le droit ? La récurrence obtenue est une convolution, ce qui suggère un produit de séries.
`,
  solution:String.raw`
**1.** Un arbre à $n \geq 1$ nœuds internes possède une racine, un sous-arbre gauche à $k$ nœuds et un sous-arbre droit à $n-1-k$ nœuds :

$$C_n = \sum_{k=0}^{n-1} C_k\, C_{n-1-k}, \qquad C_0 = 1$$

On obtient $1, 1, 2, 5, 14, 42$.

**2.** La convolution se traduit par $C(x) = 1 + x\,C(x)^2$, équation du second degré dont la racine analytique en $0$ est

$$C(x) = \frac{1 - \sqrt{1-4x}}{2x}$$

Le développement du binôme donne les nombres de Catalan :

$$C_n = \frac{1}{n+1}\binom{2n}{n}$$

**3.** Par la formule de Stirling,

$$C_n \sim \frac{4^n}{n^{3/2}\sqrt{\pi}}$$

Le facteur $4^n$ domine tout : $C_{30} \approx 3{,}8 \times 10^{15}$. Énumérer tous les arbres de décision à 30 tests est donc hors de portée, même à un milliard d’arbres par seconde (plus de six semaines de calcul, et chaque test supplémentaire multiplie le coût par près de quatre). C’est exactement la raison pour laquelle l’apprentissage d’arbres de décision se fait par heuristique gloutonne, et pourquoi trouver l’arbre optimal est NP-difficile.
`},
 en:{title:'Counting binary trees',
  blurb:'A recursion, a generating function, and an asymptotic bound explaining why exhaustive enumeration is hopeless.'}},

{id:'P-016',slug:'ciel-pas-violet',date:'2026-03-30',level:2,tags:['physics','optics'],
 fr:{title:'Pourquoi le ciel n’est pas violet',
  blurb:'La diffusion de Rayleigh varie comme $\lambda^{-4}$, donc le violet devrait gagner. Il ne gagne pas. Trouver les deux raisons.',
  statement:String.raw`
L’intensité diffusée par les molécules de l’atmosphère varie comme $\lambda^{-4}$ (diffusion de Rayleigh).

1. Calculer le rapport d’intensité diffusée entre le violet ($400\ \mathrm{nm}$) et le bleu ($470\ \mathrm{nm}$), puis entre le violet et le rouge ($700\ \mathrm{nm}$).
2. Le violet étant plus diffusé que le bleu, expliquer quantitativement pourquoi le ciel apparaît bleu.
3. Prédire la couleur du ciel au zénith sur une planète dont l’atmosphère aurait la même loi de diffusion, mais dont l’étoile émettrait son maximum dans l’infrarouge.
`,
  hint:String.raw`
Deux facteurs multiplient le spectre diffusé avant qu’il n’arrive au cerveau : le spectre incident de l’étoile, et la sensibilité des cônes de l’œil. Regardez où se situent leurs maxima respectifs.
`,
  solution:String.raw`
**1.** Le rapport vaut

$$\frac{I_{400}}{I_{470}} = \left(\frac{470}{400}\right)^{4} \approx 1{,}9, \qquad \frac{I_{400}}{I_{700}} = \left(\frac{700}{400}\right)^{4} \approx 9{,}4$$

**2.** Deux effets s’opposent à ce facteur $1{,}9$. D’abord le spectre solaire : le rayonnement du Soleil atteint son maximum vers $500\ \mathrm{nm}$ et décroît nettement en dessous de $420\ \mathrm{nm}$, si bien qu’il y a moins de violet disponible à diffuser. Ensuite la réponse de l’œil : les trois types de cônes ont une sensibilité faible vers $400\ \mathrm{nm}$. La couleur perçue résulte du produit des trois courbes,

$$C \;=\; \int I_\odot(\lambda)\, \lambda^{-4}\, \bar{s}(\lambda)\, \mathrm{d}\lambda$$

et ce produit culmine dans le bleu. Le ciel n’est pas bleu parce que le bleu est le plus diffusé, mais parce que le bleu est le plus diffusé *parmi ce que l’on reçoit et que l’on peut voir*.

**3.** Avec une étoile émettant surtout dans l’infrarouge, la partie visible du spectre incident serait fortement déséquilibrée vers le rouge. La loi en $\lambda^{-4}$ favoriserait toujours les courtes longueurs d’onde, mais il y en aurait très peu à diffuser : le ciel apparaîtrait terne, grisâtre à rougeâtre, et surtout beaucoup plus sombre au zénith. On retrouve, en version permanente, ce que produit chez nous un coucher de soleil, où le trajet allongé dans l’atmosphère appauvrit la lumière incidente en courtes longueurs d’onde.
`},
 en:{title:'Why the sky is not violet',
  blurb:'Rayleigh scattering goes as $\lambda^{-4}$, so violet should win. It does not. Find the two reasons.'}},

{id:'P-015',slug:'invariant-jetons',date:'2026-02-11',level:2,tags:['math','algebra'],
 fr:{title:'Un invariant pour un jeu de jetons',
  blurb:'Un tableau, trois jetons, une règle de déplacement. Certaines configurations sont inaccessibles : le prouver.',
  statement:String.raw`
Trois jetons occupent les cases $(0,0)$, $(0,1)$ et $(1,0)$ d’une grille $\mathbb{N} \times \mathbb{N}$. Un coup consiste à retirer un jeton d’une case $(i,j)$ et à placer un jeton en $(i+1,j)$ et un en $(i,j+1)$, à condition que ces deux cases soient libres.

1. Montrer qu’il est impossible de vider entièrement le carré $2 \times 2$ formé des cases $(0,0)$, $(0,1)$, $(1,0)$, $(1,1)$.
2. Généraliser : caractériser les régions qu’il est impossible de vider.
3. Que devient le résultat si l’on autorise plusieurs jetons sur une même case ?
`,
  hint:String.raw`
Cherchez une fonction de poids $w(i,j)$ telle que la somme des poids des jetons soit invariante. Essayez $w(i,j) = x^i y^j$ et déterminez les contraintes sur $x$ et $y$.
`,
  solution:String.raw`
**1.** Cherchons un poids multiplicatif $w(i,j) = x^i y^j$. Un coup remplace $x^i y^j$ par $x^{i+1}y^j + x^i y^{j+1}$, donc la somme est invariante si et seulement si

$$1 = x + y$$

Prenons $x = y = \tfrac{1}{2}$ : le poids d’une case vaut $2^{-(i+j)}$ et la somme totale est conservée par tout coup. La configuration initiale pèse

$$1 + \tfrac{1}{2} + \tfrac{1}{2} = 2$$

Or le poids de la grille entière vaut $\sum_{i,j\geq 0} 2^{-(i+j)} = 4$, et celui du carré $2\times 2$ vaut $1 + \tfrac12 + \tfrac12 + \tfrac14 = \tfrac94$. Le complémentaire du carré pèse donc $4 - \tfrac94 = \tfrac74 < 2$. Une configuration entièrement située hors du carré pèserait au plus $\tfrac74$, strictement moins que $2$ : vider le carré est impossible.

**2.** Le même argument s’applique à toute région $R$ dont le complémentaire a un poids total strictement inférieur au poids initial :

$$\sum_{(i,j)\notin R} 2^{-(i+j)} \;<\; \sum_{\text{jetons}} 2^{-(i+j)}$$

C’est le cas pour tout escalier contenant la diagonale $i + j \leq 1$. L’invariant fournit une obstruction, pas une condition suffisante : montrer qu’une configuration est atteignable demande une construction explicite.

**3.** L’invariant de poids ne dépend pas de la condition « cases libres » : il reste valable si l’on empile des jetons. L’impossibilité subsiste donc, et c’est ce qui rend cet argument robuste : il ne repose sur aucune contrainte géométrique, seulement sur une identité algébrique.
`},
 en:{title:'An invariant for a token game',
  blurb:'A grid, three tokens, one move rule. Some configurations are unreachable: prove it.'}},

{id:'P-014',slug:'hachage-anniversaires',date:'2025-12-08',level:1,tags:['cs','probability'],
 fr:{title:'Hachage et anniversaires',
  blurb:'Combien de clés avant la première collision ? La réponse est plus petite que tout le monde ne le pense.',
  statement:String.raw`
Une fonction de hachage renvoie une valeur uniforme parmi $m$ possibles.

1. Donner la probabilité qu’aucune collision n’apparaisse après insertion de $n$ clés distinctes.
2. Estimer le $n$ pour lequel cette probabilité passe sous $1/2$, en fonction de $m$.
3. Combien d’identifiants aléatoires de 64 bits peut-on tirer avant d’avoir une chance sur un million de collision ?
`,
  hint:String.raw`
Utilisez $\ln(1-u) \approx -u$ pour $u$ petit, ainsi que $\sum_{k=0}^{n-1} k = \frac{n(n-1)}{2}$.
`,
  solution:String.raw`
**1.** En insérant les clés une à une, la $k$-ième trouve $k-1$ cases occupées :

$$\mathbb{P}(\text{aucune collision}) = \prod_{k=0}^{n-1}\left(1 - \frac{k}{m}\right)$$

**2.** En passant au logarithme et en approchant $\ln(1 - k/m) \approx -k/m$ :

$$\ln \mathbb{P} \approx -\frac{n(n-1)}{2m}$$

Ce logarithme atteint $-\ln 2$ pour

$$n \approx \sqrt{2m\ln 2} \approx 1{,}177\sqrt{m}$$

C’est le paradoxe des anniversaires : le seuil est en $\sqrt{m}$, pas en $m$. Pour $m = 365$ on retrouve $n \approx 22{,}5$, cohérent avec la valeur exacte $23$.

**3.** Pour une probabilité de collision $p$ petite, $p \approx \dfrac{n^2}{2m}$, donc $n \approx \sqrt{2mp}$. Avec $m = 2^{64}$ et $p = 10^{-6}$ :

$$n \approx \sqrt{2 \cdot 1{,}8\times10^{19} \cdot 10^{-6}} \approx 6\times 10^{6}$$

Six millions d’identifiants suffisent pour atteindre ce risque : c’est peu à l’échelle d’une base de données, et c’est la raison pour laquelle les identifiants uniques sérieux font 128 bits.
`},
 en:{title:'Hashing and birthdays',
  blurb:'How many keys before the first collision? The answer is smaller than everyone expects.'}},

{id:'P-013',slug:'tunnel-terre',date:'2025-10-22',level:3,tags:['physics','mechanics'],
 fr:{title:'Chute dans un tunnel traversant la Terre',
  blurb:'Un tunnel rectiligne quelconque, pas seulement diamétral. Le temps de trajet ne dépend pas de la destination.',
  statement:String.raw`
On suppose la Terre sphérique, de rayon $R$, de masse volumique uniforme $\rho$, et l’on néglige tout frottement ainsi que la rotation.

1. Montrer que le champ de gravitation à l’intérieur est proportionnel à la distance au centre.
2. On creuse un tunnel rectiligne entre deux points de la surface, sans passer par le centre. Établir l’équation du mouvement d’un objet lâché sans vitesse initiale et calculer la durée du trajet.
3. Commenter le résultat et calculer la valeur numérique avec les données terrestres moyennes.
`,
  hint:String.raw`
Question 2 : projetez le champ sur l’axe du tunnel. La composante utile est proportionnelle à la coordonnée le long du tunnel, indépendamment de la distance minimale au centre.
`,
  solution:String.raw`
**1.** Le théorème de Gauss appliqué à une sphère de rayon $r < R$ ne retient que la masse intérieure $M(r) = \tfrac{4}{3}\pi\rho r^3$, d’où

$$g(r) = \frac{G M(r)}{r^2} = \frac{4}{3}\pi G \rho\, r$$

dirigé vers le centre : le champ croît linéairement du centre vers la surface.

**2.** Soit $s$ l’abscisse le long du tunnel comptée depuis son milieu, et $d$ la distance du centre de la Terre au tunnel, de sorte que $r^2 = s^2 + d^2$. La composante du champ le long du tunnel vaut

$$g(r)\,\frac{s}{r} = \frac{4}{3}\pi G \rho\, s$$

Le terme $d$ disparaît. L’équation du mouvement est donc celle d’un oscillateur harmonique :

$$\ddot{s} + \omega^2 s = 0, \qquad \omega^2 = \frac{4}{3}\pi G \rho = \frac{g_0}{R}$$

Le trajet d’un bout à l’autre correspond à une demi-période :

$$t = \frac{T}{2} = \pi\sqrt{\frac{R}{g_0}}$$

indépendante de la longueur du tunnel.

**3.** Avec $R = 6371\ \mathrm{km}$ et $g_0 = 9{,}81\ \mathrm{m\cdot s^{-2}}$, on trouve $t \approx 2530\ \mathrm{s}$, soit environ 42 minutes, quelle que soit la destination. Ce temps est exactement la moitié de la période d’un satellite en orbite rasante, ce qui n’est pas une coïncidence : les deux mouvements sont des projections du même oscillateur. L’hypothèse la plus fausse ici est l’uniformité de $\rho$ ; avec le profil réel, plus dense au centre, la durée descend à environ 38 minutes.
`},
 en:{title:'Falling through a tunnel across the Earth',
  blurb:'Any straight tunnel, not just a diametral one. The travel time does not depend on the destination.'}},

{id:'P-012',slug:'determinant-volume',date:'2025-09-03',level:1,tags:['math','algebra'],
 fr:{title:'Le déterminant comme volume',
  blurb:'Retrouver les propriétés du déterminant sans jamais écrire de formule de développement.',
  statement:String.raw`
On admet qu’il existe une unique application $\det : (\mathbb{R}^n)^n \to \mathbb{R}$ qui soit $n$-linéaire, alternée, et qui vaille $1$ sur la base canonique.

1. Interpréter géométriquement chacune de ces trois propriétés en termes de volume orienté.
2. En déduire, sans calcul de coefficients, que $\det(v_1,\dots,v_n) = 0$ si et seulement si les vecteurs sont liés.
3. Justifier géométriquement la multiplicativité $\det(AB) = \det(A)\det(B)$.
`,
  hint:String.raw`
Pensez au parallélépipède engendré par les vecteurs colonnes. Que fait à son volume la multiplication d’une arête par un scalaire ? L’échange de deux arêtes ?
`,
  solution:String.raw`
**1.** La $n$-linéarité traduit que $\det(\dots,\lambda v_i,\dots) = \lambda \det(\dots,v_i,\dots)$ : étirer une arête d’un facteur $\lambda$ multiplie le volume par $\lambda$, et l’additivité selon une arête correspond au découpage du parallélépipède. Le caractère alterné encode l’orientation : échanger deux vecteurs change le signe, donc $\det$ est un volume *signé*. La normalisation $\det(e_1,\dots,e_n) = 1$ dit que le cube unité a pour volume $1$, ce qui fixe l’unité de mesure.

**2.** Si les vecteurs sont liés, l’un s’écrit $v_n = \sum_{i<n}\lambda_i v_i$ ; par linéarité, le déterminant se décompose en termes contenant chacun deux fois le même vecteur, tous nuls par antisymétrie. Géométriquement, le parallélépipède est aplati dans un hyperplan : volume nul. Réciproquement, si les vecteurs sont libres, ils forment une base, et l’unicité impose une valeur non nulle.

**3.** Appliquer $B$ puis $A$, c’est composer deux transformations de l’espace. Or le déterminant mesure le facteur par lequel une application linéaire multiplie tous les volumes, ce facteur ne dépendant pas de la figure choisie (conséquence de l’unicité) :

$$\mathrm{vol}\big(A(B(K))\big) = \det(A)\,\mathrm{vol}\big(B(K)\big) = \det(A)\det(B)\,\mathrm{vol}(K)$$

Composer deux dilatations de volumes multiplie donc les facteurs. Le signe suit la même logique : deux inversions d’orientation se compensent.
`},
 en:{title:'The determinant as a volume',
  blurb:'Recovering the properties of the determinant without ever writing an expansion formula.'}}
]

};
