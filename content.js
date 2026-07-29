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
  first:'Antoine', last:'THEOBALD--ROSA',
  email:'antoine.theobaldrosaa@gmail.com',
  location:{fr:'Paris · Mathématiques, Informatique & Finance',
            en:'Paris · Mathematics, Computer Science & Finance'},
  title:{
    fr:'Étudiant à l’École Polytechnique<br>Mathématiques, Informatique & Finance',
    en:'Student at École Polytechnique, Paris, France<br>Mathematics, Computer Science & Finance'},
  bio:{
    fr:[
     'Bienvenue sur ma page personnelle.<br>Étudiant en école d’ingénieur, je suis particulièrement passionné de mathétmatiques, d’informatique et de finance. Mes centres d’intérêts scientifiques sont plus précisément l’algèbre et l’arithmétique, l’algorithmique et le trading haute-fréquence. De manière tout à fait personnel, je m’intéresse à la psychologie, aux actualités technologiques et, peut-être par nostalgie, je suis également fasciné par l’histoire des dinosaures.',
     'Ce site rassemble trois choses : les [projets](#/projets) que je construis, des [articles](#/articles) où j’essaye de rendre clair des sujets peu traités mais tout à fait passionant, ainsi qu’une collection de [problèmes](#/problemes) sur lesquels j’ai aimé me casser la tête.',
     'Vous trouverez mon parcours et mon contact sur ce site. Je suis joignable à tout moment.'],
    en:[
     'Welcome to my personal page.<br>I am an engineering student with a strong passion for mathematics, computer science, and finance. My main scientific interests focus more specifically on algebra and number theory, algorithms, and high-frequency trading. On a more personal level, I am interested in psychology, technological news, and — perhaps out of nostalgia — I am also fascinated by the history of dinosaurs.',
     'This site brings together three things: the [projects](#/projets) I build, [articles](#/articles) where I try to make lesser-known yet fascinating topics clear, and a collection of [problems](#/problemes) that I have enjoyed working through.',
     'You will also find my background and contact information here. I am available to be reached at any time.']},
  formation:[
    {y:'2025—2029',
    fr:{t:'École Polytechnique',s:'Cycle ingénieur polytechnicien<br>Mathématiques, Informatique, Physique & Économie'},
    en:{t:'École Polytechnique',s:'Engineering program<br>Mathematics, Computer Science, Physics & Economics'}},

    {y:'2025—2025',
    fr:{t:'École Militaire des Aspirants de Coëtquidan',s:'Formation Militaire en tant qu’Officier de l’Armée de Terre'},
    en:{t:'École Militaire des Aspirants de Coëtquidan',s:'Military training as an officer in the French Army'}},

    {y:'2022—2025',
    fr:{t:'Lycée Janson de Sailly<br>Classe préparatoire MP2I/MPI*/MPI*',s:'Mathématiques, physique, informatique<br>Admis 18ème à l’École Polytechnique'},
    en:{t:'Lycée Janson de Sailly<br> Preparatory Classes (MP2I/MPI*/MPI*)',s:'Mathematics, Physics, Computer Science<br>Ranked 18th in the entrance examination to École Polytechnique'}},

    {y:'2019—2022',
    fr:{t:'Lycée Fabert (Metz)',s:'Mathématiques, Physique, Informatique<br>Baccalauréat Mention Très Bien'},
    en:{t:'Lycée Fabert (Metz)',s:'Mathematics, Physics, Computer Science<br>French Baccalaureate with highest honors (Très Bien)'}}
      ],
  skills:['Python', 'C', 'C++','OCaml','Java','SQL','NumPy / SciPy','LaTeX','Git / Github',
          {fr:'Data Science',en:'Data Science'}, {fr:'IA',en:'AI'}, {fr:'Algorithmique',en:'Algorithms'},{fr:'Informatique Graphique',en:'Probability'}],
  socials:[
    {label:'GitHub',href:'https://github.com/AntoineTHEOBALDROSA',glyph:'↗'},
    {label:'LinkedIn',href:'https://www.linkedin.com/in/antoine-theobald-rosa-696087381/',glyph:'↗'},
    {label:'antoine.theobaldrosaa@gmail.com',href:'mailto:antoine.theobaldrosaa@gmail.com',glyph:'✉'},
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
  algebra:{fr:'algèbre',en:'algebra'},
  numbertheory:{fr:'arithmétique',en:'number theory'},
  probability:{fr:'probabilités',en:'probability'},
  analysis:{fr:'analyse',en:'analysis'},
  combinatorics:{fr:'combinatoire',en:'combinatorics'},
  algorithms:{fr:'algorithmique',en:'algorithms'},
  mechanics:{fr:'mécanique',en:'mechanics'},
},
domains:['math','cs','physics'],

/* =========================================================
   3. CATÉGORIES DES ARTICLES
   ========================================================= */
cats:[
 {id:'math',
  fr:{name:'Mathématiques',blurb:'Parce que ça reste la plus belle des sciences...'},
  en:{name:'Mathematics',blurb:'Because it remains the most beautiful of all sciences...'}},
 {id:'cs',
  fr:{name:'Informatique',blurb:String.raw`Des structures de données monstrueuses pour gagner un facteur $\sqrt{n}$ : c'est la beauté de l'informatique!`},
  en:{name:'Computer science',blurb: String.raw`Monstrous data structures to gain a $\sqrt{n}$ factor: that’s the beauty of computer science!`}},
 {id:'physics',
  fr:{name:'Physique',blurb:'Souvent les articles les plus intuitifs, parce que la physique est la science du quotidien!'},
  en:{name:'Physics',blurb:'Often the most intuitive articles—because physics is the science of everyday life!'}}
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
  links:[['Code source','https://github.com'],['Notes d’implémentation','#/articles/cs']],
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
  links:[['Source code','https://github.com'],['Implementation notes','#/articles/cs']],
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
  links:[['Code source','https://github.com'],['Article : ligne de base','#/articles/physics/ligne-de-base-spectres']],
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

Le piège le plus coûteux a été la ligne de base : tant qu’on l’estimait par moindres carrés, les pics eux-mêmes tiraient la ligne vers le haut et biaisaient toutes les aires. J’ai écrit [un article entier](#/articles/physics/ligne-de-base-spectres) sur ce biais.

![Résidus d’ajustement pour les douze raies de référence.](fig:bars)
`},
 en:{title:'Spectrum analyser for lab sessions',role:'Lab tool',status:'In use in labs',
  blurb:'A spectrum reduction tool: peak detection, Voigt profile fitting, and a results table ready to paste into a report.',
  lead:'We spent more time clicking on peaks than understanding spectra. This script does the clicking; we keep the physics.',
  stack:[['Language','Python 3.11'],['Processing','SciPy, lmfit'],['Output','CSV + PDF figure'],['Validation','Hg and Ne lines']],
  links:[['Source code','https://github.com'],['Article: baseline estimation','#/articles/physics/ligne-de-base-spectres']]}},

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
  links:[['Code source','https://github.com'],['Article : les tries','#/articles/cs/tries-sous-estimes']],
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
  links:[['Source code','https://github.com'],['Article: tries','#/articles/cs/tries-sous-estimes']]}},

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
   5. ARTICLES 
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
  // P-002
{id:'P-002',slug:'harmonic-prime',date:'2026-07-30',level:2,tags:['math','numbertheory'],
 fr:{title:'Divisibilité et série harmonique',
  blurb:'Que peut-on dire de la divisiblité de la différence du numérateur par la dénominateur de la série harmonique ?',
  statement:String.raw`
Soit $p$ premier impair et $r, s$ tels que
$$H_p = 1 + \cdots + \frac{1}{p} = \frac{r}{ps}$$
Démontrer que $r-s$ est divisible par $p^3$.
`,
  hint:String.raw`
Essayer de mettre du $p$ en facteur dès que possible. $\\$
Regrouper les termes deux-par-deux.$\\$
Travailler modulo $p$ autant que possible.
`,
  solution:String.raw`
On peut réécrire
$$H_p = \frac{\frac{p!}1 + \cdots + \frac{p!}{p}}{p\cdot (p-1)!}$$
Comme le numérateur n'est pas divisible par $p$, un diviseur commun du dénominateur et du dénominateur est strictement inférieur à $p$ et on peut donc considérer
$$r = \frac{p!}1 + \cdots + \frac{p!}{p}, \qquad s = (p-1)!$$
(peut-être qu'on n'a pas réduit entièrement $r$ et $s$ en les posant comme tels, mais au moins on n'a pas introduit de facteurs $p$ qui fausseraient le résultat).$\\$
On a 
$$r - s = p\left(\frac{(p-1)!}{1} + \cdots + \frac{(p-1)!}{p-1}\right)$$
D'où le premier facteur $p$. De plus en regroupant deux-par-deux les termes extrémaux de la somme, on trouve que
$$\frac{(p-1)!}1 + \cdots + \frac{(p-1)!}{p-1} = \sum_{k=1}^{(p-1)/2}\frac{(p-1)!}{k(p-k)}(k + (p-k)) = p\sum_{k=1}^{(p-1)/2}\frac{(p-1)!}{k(p-k)}$$
D'où le deuxième facteur $p$. Enfin, comme $x\mapsto x^{-1}$ est une bijection de $(\Z/p\Z)^\times$,
$$\sum_{k=1}^{(p-1)/2}\frac{(p-1)!}{k(p-k)} \equiv \sum_{k=1}^{(p-1)/2}(p-1)!(k(p-k))^{-1} \equiv \sum_{k=1}^{(p-1)/2}(p-1)!k(p-k) \pmod p$$
Or $(p-1)!\equiv -1 \pmod p$ par Wilson et $k(p-k) \equiv -k\pmod p$ ; la somme est donc congrue à 
$$\sum_{k=1}^{(p-1)/2}k^2 = \frac{\frac{p-1}{2}\cdot \frac{p+1}{2}\cdot p}{6} \equiv 0 \pmod p$$
D'où le dernier facteur $p$.
`},
 en:{title:'Divisibility and the harmonic series',
  blurb:'What can be said about the divisibility of the difference between the numerator and denominator of the harmonic series?',
  statement:String.raw`
Let $p$ be an odd prime and $r, s$ such that
$$H_p = 1 + \cdots + \frac{1}{p} = \frac{r}{ps}$$
Prove that $r-s$ is divisible by $p^3$.
`,
  hint:String.raw`
Try to factor out $p$ whenever possible. $\\$
Group terms in pairs.$\\$
Work modulo $p$ as much as possible.
`,
  solution:String.raw`
We can rewrite
$$H_p = \frac{\frac{p!}1 + \cdots + \frac{p!}{p}}{p\cdot (p-1)!}$$
Since the numerator is not divisible by $p$, a common divisor of the numerator and denominator is strictly less than $p$, and we can therefore take
$$r = \frac{p!}1 + \cdots + \frac{p!}{p}, \qquad s = (p-1)!$$
(perhaps we have not fully reduced $r$ and $s$ by defining them this way, but at least we have not introduced any factors of $p$ that would distort the result).$\\$
We have
$$r - s = p\left(\frac{(p-1)!}{1} + \cdots + \frac{(p-1)!}{p-1}\right)$$
Hence the first factor of $p$. Moreover, by grouping the extreme terms of the sum in pairs, we find that
$$\frac{(p-1)!}1 + \cdots + \frac{(p-1)!}{p-1} = \sum_{k=1}^{(p-1)/2}\frac{(p-1)!}{k(p-k)}(k + (p-k)) = p\sum_{k=1}^{(p-1)/2}\frac{(p-1)!}{k(p-k)}$$
Hence the second factor of $p$. Finally, since $x\mapsto x^{-1}$ is a bijection of $(\Z/p\Z)^\times$,
$$\sum_{k=1}^{(p-1)/2}\frac{(p-1)!}{k(p-k)} \equiv \sum_{k=1}^{(p-1)/2}(p-1)!(k(p-k))^{-1} \equiv \sum_{k=1}^{(p-1)/2}(p-1)!k(p-k) \pmod p$$
But $(p-1)!\equiv -1 \pmod p$ by Wilson's theorem and $k(p-k) \equiv -k\pmod p$; the sum is therefore congruent to
$$\sum_{k=1}^{(p-1)/2}k^2 = \frac{\frac{p-1}{2}\cdot \frac{p+1}{2}\cdot p}{6} \equiv 0 \pmod p$$
Hence the last factor of $p$.
`}},

// P-001
{id:'P-001',slug:'gros-facteur-premier',date:'2026-07-29',level:2,tags:['math','numbertheory'],
 fr:{title:'Facteurs premiers de gros nombres',
  blurb:'Comment exhiber des facteurs premiers de nombres gigantesques ?',
  statement:String.raw`
Le premier exercice est le A2 du Putnam de 2015. Le deuxième exercice concerne les nombres de Fermat.

1. Soit $a_0=1, a_1 = 2$ et $a_n = 4a_{n-1} - a_{n-2}$ pour $n\geq 2$. Donner un facteur premier impair de $a_{2015}$.  
2. Donner un facteur premier de $F_5 = 2^{2^5} + 1$.
`,
  hint:String.raw`
1. Si $k$ est impair, démontrer que $a_n$ divise $a_{kn}$.
2. Si $p$ divise $F_n=2^{2^n} + 1$, quel est l'ordre de $2$ dans $(\Z/p\Z)^\times$ ? Qu'en déduire sur $p$ ? 
`,
  solution:String.raw`
**1.** Avec $\alpha = 2+\sqrt3$ et $\beta = 2-\sqrt3$ tels que $\alpha\beta = 1$, on a pour $n\geq 2$ :
$$a_n=\frac12 \left(\alpha^n +\beta^n\right)$$
Ainsi, si $k$ est impair, $a_{kn} = \frac{\left(\alpha^n +\beta^n\right)}{2} \cdot \sum_{i = 0}^{k-1}(-1)^i\alpha ^{ni}\beta^{n(k-1-i)}$ et la somme est entière car on peut grouper les termes par deux $(-1)^{k-1}\alpha^{n(k-1)} + \beta^{n(k-1)}$, $(-1)^{k-2}\alpha^{n(k-2)}\beta + \alpha\beta^{n(k-1)} = (-1)^k\alpha^{k-3} - \beta^{k-3}, \ldots$ et comme $k$ est impair ces termes valent respectivement $2a_{n(k-1)}, -2a_{n(k-3)}, \ldots$ et sont donc entiers, et leur somme aussi. $\\$ 
On a donc montré que $a_n$ divise $a_{kn}$. 

Comme $2015 = 5\cdot 403$, $a_5$ divise $a_{2015}$. Or $a_5 = 362 = 2\cdot 181$ et $181$ est premier. $\\$
Donc $181$ est un facteur premier impair de $a_{2015}$.

**2.** On raisonne sur $F_n=2^{2^n}+1$ pour trouver une condition sur $p$ dans le cas général.

Si $p$ est un facteur premier de $F_n = 2^{2^n}+1$, alors $2^{2^n}\equiv -1\pmod p$ ce qui montre que l'ordre de $2$ dans $(\Z/p\Z)^\times$ est $2^{n+1}$.
$\\ \emph{En effet}, \ 2^{2^{n+1}}\equiv1\pmod p$, donc l'ordre de $2$ est un diviseur de $2^{n+1}$ c'est à dire un $2^k$ et $2^{2^k} \neq 1 \pmod p$ pour $k \lt 2^{n+1}$ car on aurait $2^{2^n}\equiv 1 \pmod p$.

Comme l'ordre d'un élément divise le cardinal du groupe, $2^{n+1}$ divise $p-1$, c'est à dire 
$$p = k2^{n+1} + 1\quad \text{pour un } k\in \N$$
Pour $n=5$, un diviseur premier de $F_5$ est de la forme $p=64k +1$.
On essaye $p = 65, 129, 193, 257, 321, 385, 449, 513, 577, 641$ (en évitant $65, 129, 321, 385, 513$ qui ne sont pas premiers) pour finalement trouver que $641$ divise $F_5$.

$\underline{Bonus:}$ On peut faire mieux comme critère de divisibilité si on sait le fait suivant : 
$$\text{Si } 8 \mid p-1, \quad\text{ alors } 2 \text{ est un carré modulo }p$$ 
Supposons $n\geq 2$, de sorte que $2^{n+1}\geq 8$. Comme $p=k2^{n+1}+1$, alors $8 \mid p-1$ et donc $2$ est un carré modulo $p$, donc $2^{\frac{p-1}{2}}\equiv 1 \pmod p$ par le petit théorème de Fermat donc l'ordre de $2$, qui est $2^{n+1}$, divise $\frac{p-1}{2}$, donc $p$ est de la forme
$$p = k2^{n+2} + 1$$
Pour $n=5$, il faut tester $p=128k + 1$, soit en retirant les $p$ composés, il suffit de tester $p=257$ et $p=641$ seulement!
`},
 en:{title:'Prime factors of large numbers',
  blurb:'How can one exhibit prime factors of gigantic numbers?',
  statement:String.raw`
The first exercise is Putnam 2015 A2. The second exercise concerns Fermat numbers.

1. Let $a_0=1, a_1 = 2$ and $a_n = 4a_{n-1} - a_{n-2}$ for $n\geq 2$. Give an odd prime factor of $a_{2015}$.  
2. Give a prime factor of $F_5 = 2^{2^5} + 1$.
`,
  hint:String.raw`
1. If $k$ is odd, prove that $a_n$ divides $a_{kn}$.
2. If $p$ divides $F_n=2^{2^n} + 1$, what is the order of $2$ in $(\Z/p\Z)^\times$? What can you deduce about $p$? 
`,
  solution:String.raw`
**1.** With $\alpha = 2+\sqrt3$ and $\beta = 2-\sqrt3$ such that $\alpha\beta = 1$, for $n\geq 2$ we have:
$$a_n=\frac12 \left(\alpha^n +\beta^n\right)$$
Thus, if $k$ is odd, 
$a_{kn} = \frac{\left(\alpha^n +\beta^n\right)}{2} \cdot \sum_{i = 0}^{k-1}(-1)^i\alpha ^{ni}\beta^{n(k-1-i)}$ 
and the sum is an integer because we can group the terms in pairs 
$(-1)^{k-1}\alpha^{n(k-1)} + \beta^{n(k-1)}$, 
$(-1)^{k-2}\alpha^{n(k-2)}\beta + \alpha\beta^{n(k-1)} = (-1)^k\alpha^{k-3} - \beta^{k-3}, \ldots$ 
and since $k$ is odd these terms are respectively $2a_{n(k-1)}, -2a_{n(k-3)}, \ldots$ and are therefore integers, and so is their sum. $\\$ 
We have thus shown that $a_n$ divides $a_{kn}$. 

Since $2015 = 5\cdot 403$, $a_5$ divides $a_{2015}$. But $a_5 = 362 = 2\cdot 181$ and $181$ is prime. $\\$
Therefore $181$ is an odd prime factor of $a_{2015}$.

**2.** We reason on $F_n=2^{2^n}+1$ to find a condition on $p$ in the general case.

If $p$ is a prime factor of $F_n = 2^{2^n}+1$, then $2^{2^n}\equiv -1\pmod p$, which shows that the order of $2$ in $(\Z/p\Z)^\times$ is $2^{n+1}$.
$\\ \emph{Indeed}, \ 2^{2^{n+1}}\equiv1\pmod p$, so the order of $2$ is a divisor of $2^{n+1}$, i.e. of the form $2^k$, and $2^{2^k} \neq 1 \pmod p$ for $k \lt 2^{n+1}$, since otherwise we would have $2^{2^n}\equiv 1 \pmod p$.

Since the order of an element divides the cardinality of the group, $2^{n+1}$ divides $p-1$, that is,
$$p = k2^{n+1} + 1\quad \text{for some } k\in \N$$
For $n=5$, a prime divisor of $F_5$ is of the form $p=64k +1$.
We try $p = 65, 129, 193, 257, 321, 385, 449, 513, 577, 641$ (excluding $65, 129, 321, 385, 513$ which are not prime) and finally find that $641$ divides $F_5$.

$\underline{Bonus:}$ One can do better as a divisibility criterion using the following fact:
$$\text{If } 8 \mid p-1, \quad\text{ then } 2 \text{ is a quadratic residue modulo }p$$ 
Assume $n\geq 2$, so that $2^{n+1}\geq 8$. Since $p=k2^{n+1}+1$, then $8 \mid p-1$ and hence $2$ is a square modulo $p$, so $2^{\frac{p-1}{2}}\equiv 1 \pmod p$ by Fermat's little theorem. Thus the order of $2$, which is $2^{n+1}$, divides $\frac{p-1}{2}$, so $p$ is of the form
$$p = k2^{n+2} + 1$$
For $n=5$, one must test $p=128k + 1$, so excluding composite $p$, it suffices to test $p=257$ and $p=641$ only! 
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
  blurb:'Proving $\zeta(2) = \pi^2/6$ with nothing but a trigonometric inequality and the squeeze theorem.'}
},

]};
