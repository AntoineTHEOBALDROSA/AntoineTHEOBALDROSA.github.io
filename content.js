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
  {id:'finance',
  fr:{name:'Finance',blurb:'Recherches 100% personnelles.'},
  en:{name:'Finance',blurb:'100% personnal research.'}},
  {id:'physics',
  fr:{name:'Physique',blurb:'Souvent les articles les plus intuitifs, parce que la physique est la science du quotidien!'},
  en:{name:'Physics',blurb:'Often the most intuitive articles—because physics is the science of everyday life!'}},
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

{slug:'partition-formula',cat:'math',date:'2026-07-30',read:10,
 fr:{title:String.raw`Formule pratique du nombre de partitions d'un entier $p(n)$`,
  blurb:String.raw`Comment calculer efficacement le nombre de partitions d'un entier $p(n)$ ?`,
  body:String.raw`
En 1918, Hardy et Ramanujan ont montré que 
$$p(n)\sim \frac{1}{4n\sqrt3}\text{exp}\left(\pi\sqrt{\frac{2n}{3}}\right)$$
Mais comment calculer efficacement la valeur exacte de $p(n)$ ? Un calcule par force brute serait beaucoup trop long. On se proposer de démontrer

<div style="border-left:3px solid #888; padding-left:12px; margin:12px 0;">

$$\begin{equation*}
\begin{split}
p(n) & = p(n-1) + p(n-2) - p(n-5) - p(n-7) + p(n-12) + \cdots \\
 & = \sum_{k\geq 1}(-1)^{k-1}p(n-k(3k\pm 1)/2)
\end{split}
\end{equation*}$$

</div>


## 1. Série génératrice de $p(n)$

Pour $\lvert x \rvert\lt 1$, on pose 
$$f(x)=\prod_{n\geq 1}\frac{1}{1-x^n} = \prod_{n\geq 1}\sum_{i\geq 0}x^{ni} = \prod_{n\geq 1}(1+ x^n + x^{2n} + \cdots)$$
Essayons de trouver le coefficient devant $x^k$ pour $k\geq 1$ : quand on développe le produit, on choisit dans chaque facteur $(1+ x^n + x^{2n} + \cdots)$ un $x^{i\cdot n}$ ; on l'interpète comme « je choisis $i$ fois le nombre $n$ ». Ainsi on choisit un certain nombre de fois le nombre $1$, un certain nombre de fois le nombre $2$, $\ldots$ Au final le coefficient devant $x^k$ est le nombre de manière de choisir $(i_1, i_2, \ldots)$ telle que :
$$i_1\cdot 1 + i_2 \cdot 2 + i_3 \cdot 3 + \cdots = k$$
Ce nombre de manière, c'est exactement $p(k)$. D'où
$$\boxed{f(x) = \prod_{n\geq 1}\frac{1}{1-x^n} =  1 + \sum_{n\geq 1} p(n)x^n}$$ 

## 2. Théorème des nombres pentagonaux

On va démontrer le théorème des nombres pentagonaux, théorème qu'on doit à Euler :

<div style="border-left:3px solid #888; padding-left:12px; margin:12px 0;">

$$\prod_{n\geq 1}(1-x^n)=1 + \sum_{k\geq 1} (-1)^k\left(x^{k(3k-1)/2} + x^{k(3k+1)/2}\right)$$

</div> $\underline{\text{Preuve :}}$ On va faire une première constatation : regardons le produit suivant, très légèrement différent :
$$\prod_{n\geq 1}(1+x^n) = (1+x)(1+x^2)(1+x^3)\cdots$$
En développant comme on l'a fait dans la partie précédente, on se rend compte devant $x^k$ on a le nombre de manière d'écrire $k$ comme
$$k = 1\cdot \varepsilon_1 + 2\cdot \varepsilon_2 + \cdots \qquad \text{où } \varepsilon_i \in \{0,1\}$$
Concrètement, on a la série génératrice du nombre de partitions avec des entiers distincts. Par exemple, la parition $7=5+1+1$ n'est pas comptée, alors que $7=5+2$ l'est.$\\$
Mais notre produit comporte un signe moins, donc :

$$\prod_{n\geq 1}(1-x^n) = \sum_{\varepsilon_1, \varepsilon_2, \ldots} (-1)^{\varepsilon_1 + \cdots + \varepsilon_s} x^{1\varepsilon_1 + 2\varepsilon_2 + \cdots + s\varepsilon_s}$$
On compte positivement une partition avec des nombres distincts avec un nombre pair de termes, et négativement si une telle partition a un nombre impair de termes.$\\$
Si on regarde les premiers termes, on a 

$$\prod_{n\geq 1}(1-x^n) = 1-x-x^2 + x^5 + x^7 - x^{12} + \cdots$$

ce qui laisse penser que pour beaucoup de $n$ (par exemple $n=3, 4, 6, 8, 9, \ldots$) le nombre de partition utilisant des nombres distincts avec un nombre pair de termes est exactement le nombre de partition utilisant des nombres distincts avec un nombre impair de termes, et que dans les autres cas la différence est de $\pm1$ seulement.$\\$
On va expliquer quand ces paritions peuvent s'appairer, ce qui nous donnera la formule attendue.

Prenons un exemple; on représente la partition $20 = 7 + 6 + 4 + 3$
$$
\begin{array}{ccccc}
\bullet & \bullet & \bullet & \bullet & \bullet & \bullet & \textcolor{red}{\bullet} \\
\bullet & \bullet & \bullet & \bullet & \bullet & \textcolor{red}{\bullet} \\
\bullet & \bullet & \bullet & \bullet \\
\textcolor{blue}{\bullet} & \textcolor{blue}{\bullet} & \textcolor{blue}{\bullet}
\end{array}
$$
Disons que la ligne du bas (en bleu) possède $a$ points, et que la diagonale sur la droite (en rouge) possède $b$ points. <br>
Si on veut bouger la ligne du bas et la juxtaposer aux points rouges, il faut $a\leq b$ pour ne pas avoir de point flottant. Pour déplacer la diagonale rouge en dessous de la ligne bleue et obtenir une ligne plus petite, il faut $a\gt b$.<br>
On se rend compte aisément que ces deux opérations sont inverses l'une de l'autre, et qu'en partant d'une partition avec des nombres distincts avec un nombre pair de termes on en obtient une avec un nombre impair de termes, et inversement. Leur contribution dans notre produit est est donc nul.<br>
Mais il y a des cas limites quand ces deux lignes contiennent un point commun (le point violet) :
$$
\begin{array}{ccccc}
\bullet & \bullet & \bullet & \bullet & \bullet & \bullet & \textcolor{red}{\bullet} \\
\bullet & \bullet & \bullet & \bullet & \bullet & \textcolor{red}{\bullet} \\
\textcolor{blue}{\bullet} & \textcolor{blue}{\bullet} & \textcolor{blue}{\bullet} & \textcolor{blue}{\bullet} & \textcolor{purple}{\bullet} \\
\end{array}
$$
Comme bouger une des deux lignes décrémente de $1$ la taille de l'autre:
<ul style="margin-top: 4px; margin-left: 6px; line-height: 1;">
  <li>pour bouger la ligne ligne rouge en dessous de la bleue et obtenir un nombre strictement plus petit, il faut $a-1 \gt b$ </li>
  <li>pour bouger la ligne ligne bleue à côté de la rouge et ne pas avoir de points flottant, il faut  il faut $b-1 \geq a$ </li>
</ul> 
Les cas limites sont donc $a=b$ (première ligne) et $a = b+1$ (deuxième ligne) : 
$$
\begin{array}{ccccc}
\bullet & \bullet & \bullet & \bullet & \textcolor{red}{\bullet} \\
\bullet & \bullet & \bullet & \textcolor{red}{\bullet} \\
\textcolor{blue}{\bullet} & \textcolor{blue}{\bullet} & \textcolor{purple}{\bullet}
\end{array} 
\qquad \qquad
\begin{array}{ccccc}
\bullet & \bullet & \bullet & \bullet & \bullet & \bullet & \textcolor{red}{\bullet} \\
\bullet & \bullet & \bullet & \bullet & \bullet & \textcolor{red}{\bullet} \\
\bullet & \bullet & \bullet & \bullet & \textcolor{red}{\bullet} \\
\textcolor{blue}{\bullet} & \textcolor{blue}{\bullet} & \textcolor{blue}{\bullet} & \textcolor{purple}{\bullet}
\end{array} 
$$
$$
\begin{array}{ccccc}
\bullet & \bullet & \bullet & \bullet & \bullet & \textcolor{red}{\bullet} \\
\bullet & \bullet & \bullet & \bullet & \textcolor{red}{\bullet} \\
\textcolor{blue}{\bullet} & \textcolor{blue}{\bullet} & \textcolor{blue}{\bullet} & \textcolor{purple}{\bullet}
\end{array}
\qquad \qquad
\begin{array}{ccccc}
\bullet & \bullet & \bullet & \bullet & \bullet & \bullet & \bullet & \textcolor{red}{\bullet} \\
\bullet & \bullet & \bullet & \bullet & \bullet & \bullet & \textcolor{red}{\bullet} \\
\bullet & \bullet & \bullet & \bullet & \bullet & \textcolor{red}{\bullet} \\
\textcolor{blue}{\bullet} & \textcolor{blue}{\bullet} & \textcolor{blue}{\bullet} & \textcolor{blue}{\bullet} & \textcolor{purple}{\bullet}
\end{array}
$$
On vérifie que ces nombres sont de la forme $\frac{k(3k-1)}{2}$ et $\frac{k(3k+1)}{2}$ où $k$ le nombre de lignes c'est-à dire le nombre de facteurs distincts la partition, ce qui donne le théorème. $\square$ 

## 3. Démonstration de la formule

On a 
$$ f(x)\prod_{n\geq 1}(1-x^n) = 1$$
et d'après le théorème des nombres pentagonaux,
$$ \par{1 + \sum_{n\geq 1} p(n)x^n}\par{1 + \sum_{n\geq 1} (-1)^n\par{x^{n(3n-1)/2} + x^{n(3n+1)/2}}}  = 1$$
$$ \par{1 + p_1x + p_2x^2 + p_3x^3 + \cdots}\par{1-x-x^2 + x^5 + x^7 - x^{12} + \cdots}  = 1$$
Comme le coefficient devant $x^n$ est nul, on obtient bien
$$\boxed{\begin{equation*}
\begin{split}
p(n) & = p(n-1) + p(n-2) - p(n-5) - p(n-7) + p(n-12) + \cdots \\
 & = \sum_{k\geq 1}(-1)^{k+1}p(n-k(3k\pm 1)/2)
\end{split}
\end{equation*}}  $$


`},
en:{title:String.raw`Practical formula for the number of partitions of an integer $p(n)$`,
  blurb:String.raw`How can we efficiently compute the number of partitions of an integer $p(n)$?`,
  body:String.raw`
In 1918, Hardy and Ramanujan showed that 
$$p(n)\sim \frac{1}{4n\sqrt3}\text{exp}\left(\pi\sqrt{\frac{2n}{3}}\right)$$
But how can we efficiently compute the exact value of $p(n)$? A brute-force computation would take far too long. We propose to prove


<div style="border-left:3px solid #888; padding-left:12px; margin:12px 0;">


$$\begin{equation*}
\begin{split}
p(n) & = p(n-1) + p(n-2) - p(n-5) - p(n-7) + p(n-12) + \cdots \\
 & = \sum_{k\geq 1}(-1)^{k-1}p(n-k(3k\pm 1)/2)
\end{split}
\end{equation*}$$


</div>



## 1. Generating series of $p(n)$


For $\lvert x \rvert\lt 1$, let 
$$f(x)=\prod_{n\geq 1}\frac{1}{1-x^n} = \prod_{n\geq 1}\sum_{i\geq 0}x^{ni} = \prod_{n\geq 1}(1+ x^n + x^{2n} + \cdots)$$
Let's try to find the coefficient in front of $x^k$ for $k\geq 1$: when we expand the product, in each factor $(1+ x^n + x^{2n} + \cdots)$ we pick a term $x^{i\cdot n}$; we interpret this as "I choose the number $n$, $i$ times." Thus we choose the number $1$ a certain number of times, the number $2$ a certain number of times, $\ldots$ In the end, the coefficient in front of $x^k$ is the number of ways to choose $(i_1, i_2, \ldots)$ such that:
$$i_1\cdot 1 + i_2 \cdot 2 + i_3 \cdot 3 + \cdots = k$$
This number of ways is exactly $p(k)$. Hence
$$\boxed{f(x) = \prod_{n\geq 1}\frac{1}{1-x^n} =  1 + \sum_{n\geq 1} p(n)x^n}$$ 


## 2. Pentagonal number theorem


We will prove the pentagonal number theorem, a theorem due to Euler:


<div style="border-left:3px solid #888; padding-left:12px; margin:12px 0;">


$$\prod_{n\geq 1}(1-x^n)=1 + \sum_{k\geq 1} (-1)^k\left(x^{k(3k-1)/2} + x^{k(3k+1)/2}\right)$$


</div> $\underline{\text{Proof:}}$ Let's start with an observation: consider the following product, which is very slightly different:
$$\prod_{n\geq 1}(1+x^n) = (1+x)(1+x^2)(1+x^3)\cdots$$
Expanding it as we did in the previous section, we see that in front of $x^k$ we have the number of ways to write $k$ as
$$k = 1\cdot \varepsilon_1 + 2\cdot \varepsilon_2 + \cdots \qquad \text{where } \varepsilon_i \in \{0,1\}$$
Concretely, this is the generating series for the number of partitions into distinct integers. For example, the partition $7=5+1+1$ is not counted, whereas $7=5+2$ is.$\\$
But our product has a minus sign, so:


$$\prod_{n\geq 1}(1-x^n) = \sum_{\varepsilon_1, \varepsilon_2, \ldots} (-1)^{\varepsilon_1 + \cdots + \varepsilon_s} x^{1\varepsilon_1 + 2\varepsilon_2 + \cdots + s\varepsilon_s}$$
We count positively a partition into distinct numbers with an even number of terms, and negatively if such a partition has an odd number of terms.$\\$
If we look at the first few terms, we get 


$$\prod_{n\geq 1}(1-x^n) = 1-x-x^2 + x^5 + x^7 - x^{12} + \cdots$$


which suggests that for many $n$ (for example $n=3, 4, 6, 8, 9, \ldots$) the number of partitions into distinct numbers with an even number of terms is exactly the number of partitions into distinct numbers with an odd number of terms, and that in the other cases the difference is only $\pm1$.$\\$
We will explain when such partitions can be paired up, which will give us the expected formula.


Let's take an example; we represent the partition $20 = 7 + 6 + 4 + 3$
$$
\begin{array}{ccccc}
\bullet & \bullet & \bullet & \bullet & \bullet & \bullet & \textcolor{red}{\bullet} \\
\bullet & \bullet & \bullet & \bullet & \bullet & \textcolor{red}{\bullet} \\
\bullet & \bullet & \bullet & \bullet \\
\textcolor{blue}{\bullet} & \textcolor{blue}{\bullet} & \textcolor{blue}{\bullet}
\end{array}
$$
Let's say the bottom row (in blue) has $a$ dots, and the diagonal on the right (in red) has $b$ dots. <br>
If we want to move the bottom row and place it next to the red dots, we need $a\leq b$ so as not to have a floating dot. To move the red diagonal below the blue row and obtain a smaller row, we need $a\gt b$.<br>
It's easy to see that these two operations are inverse to one another, and that starting from a partition into distinct numbers with an even number of terms we get one with an odd number of terms, and vice versa. Their contribution in our product is therefore zero.<br>
But there are edge cases when these two rows contain a common dot (the purple dot):
$$
\begin{array}{ccccc}
\bullet & \bullet & \bullet & \bullet & \bullet & \bullet & \textcolor{red}{\bullet} \\
\bullet & \bullet & \bullet & \bullet & \bullet & \textcolor{red}{\bullet} \\
\textcolor{blue}{\bullet} & \textcolor{blue}{\bullet} & \textcolor{blue}{\bullet} & \textcolor{blue}{\bullet} & \textcolor{purple}{\bullet} \\
\end{array}
$$
Since moving one of the two rows decreases the size of the other by $1$:
<ul style="margin-top: 4px; margin-left: 6px; line-height: 1;">
  <li>to move the red row below the blue one and obtain a strictly smaller number, we need $a-1 \gt b$ </li>
  <li>to move the blue row next to the red one without any floating dots, we need $b-1 \geq a$ </li>
</ul> 
The edge cases are therefore $a=b$ (first row) and $a = b+1$ (second row): 
$$
\begin{array}{ccccc}
\bullet & \bullet & \bullet & \bullet & \textcolor{red}{\bullet} \\
\bullet & \bullet & \bullet & \textcolor{red}{\bullet} \\
\textcolor{blue}{\bullet} & \textcolor{blue}{\bullet} & \textcolor{purple}{\bullet}
\end{array} 
\qquad \qquad
\begin{array}{ccccc}
\bullet & \bullet & \bullet & \bullet & \bullet & \bullet & \textcolor{red}{\bullet} \\
\bullet & \bullet & \bullet & \bullet & \bullet & \textcolor{red}{\bullet} \\
\bullet & \bullet & \bullet & \bullet & \textcolor{red}{\bullet} \\
\textcolor{blue}{\bullet} & \textcolor{blue}{\bullet} & \textcolor{blue}{\bullet} & \textcolor{purple}{\bullet}
\end{array} 
$$
$$
\begin{array}{ccccc}
\bullet & \bullet & \bullet & \bullet & \bullet & \textcolor{red}{\bullet} \\
\bullet & \bullet & \bullet & \bullet & \textcolor{red}{\bullet} \\
\textcolor{blue}{\bullet} & \textcolor{blue}{\bullet} & \textcolor{blue}{\bullet} & \textcolor{purple}{\bullet}
\end{array}
\qquad \qquad
\begin{array}{ccccc}
\bullet & \bullet & \bullet & \bullet & \bullet & \bullet & \bullet & \textcolor{red}{\bullet} \\
\bullet & \bullet & \bullet & \bullet & \bullet & \bullet & \textcolor{red}{\bullet} \\
\bullet & \bullet & \bullet & \bullet & \bullet & \textcolor{red}{\bullet} \\
\textcolor{blue}{\bullet} & \textcolor{blue}{\bullet} & \textcolor{blue}{\bullet} & \textcolor{blue}{\bullet} & \textcolor{purple}{\bullet}
\end{array}
$$
We check that these numbers are of the form $\frac{k(3k-1)}{2}$ and $\frac{k(3k+1)}{2}$ where $k$ is the number of rows, that is, the number of distinct terms in the partition, which gives the theorem. $\square$ 


## 3. Proof of the formula


We have 
$$ f(x)\prod_{n\geq 1}(1-x^n) = 1$$
and by the pentagonal number theorem,
$$ \par{1 + \sum_{n\geq 1} p(n)x^n}\par{1 + \sum_{n\geq 1} (-1)^n\par{x^{n(3n-1)/2} + x^{n(3n+1)/2}}}  = 1$$
$$ \par{1 + p_1x + p_2x^2 + p_3x^3 + \cdots}\par{1-x-x^2 + x^5 + x^7 - x^{12} + \cdots}  = 1$$
Since the coefficient in front of $x^n$ is zero, we indeed obtain
$$\boxed{\begin{equation*}
\begin{split}
p(n) & = p(n-1) + p(n-2) - p(n-5) - p(n-7) + p(n-12) + \cdots \\
 & = \sum_{k\geq 1}(-1)^{k+1}p(n-k(3k\pm 1)/2)
\end{split}
\end{equation*}}$$
`}
 },

{slug:'how-to-set-call-option-price',cat:'finance',date:'2026-08-04',read:15,
 fr:{title:String.raw`Comment fixer le prix d'une option ?`,
  blurb:String.raw`Comment les banques vous vendent des *options* sans jouer à la lotterie ?`,
  body:String.raw`
<p style="text-align: justify;">
**1. Introduction**<br>
  Imaginons la situation suivante : vous êtes boulanger, et un client vient vous voir pour prévoir une énorme commande de $1000$ croissants. Mais ce client est prévoyant : il ne veut ses croissants que dans un an. Comme vous ne pouvez pas faire les croissants aujourd'hui, vous devrez acheter les matières premières (par exemple la farine) dans un an. Mais peut-être que d'ici là le prix de la farine aura bien augmenté. Et votre client veut un devis maintenant!<br>
  Dans ce cas, vous allez voir la banque et elle vous propose une assurance : elle vous promet de vous vendre de la farine à 1€ le kg, peu importe le prix du marché dans un an, même si la farine vaudra 10€ le kg.<br>
  Un an plus tard, si le prix de la farine a baissé et ne coûte plus que 0,5€ le kg, vous l'achetez au supermarché. Mais si le prix a augmenté à 2€ le kg, vous l'achetez auprès de la banque. Dans tous les cas, vous ne payez jamais plus de 1€ le kg.<br>
  Évidemment, ce service n'est pas gratuit et vous devrez payer la banque le prix de l'assurance.<br>
  La question est la suivante : **combien la banque doit vous facturer cette assurance ? **<br><br>

Ce type d'assurance, c'est ce qu'on appelle une **option call européenne** : un contrat qui donne le droit mais pas l’obligation d’acheter quelque chose (ici de la farine, mais ça pourrait être un service, des actions...) à un prix fixé à l’avance, appelé **strike** $K$, uniquement à une date fixée, appelée **maturité** $T$.<br>
Si à la maturité le prix de l’actif $S_T$ dépasse $K$, le détenteur exerce et gagne $S_T-K$. Sinon, il n’exerce pas et le contrat ne vaut rien. Le gain final, ou **payoff**, s’écrit donc :
$$\max\par{S_T-K, 0}$$

La question centrale est simple en apparence : *combien ce contrat doit-il coûter aujourd’hui ?*


**2. Une question pas si triviale...**<br>
On pourrait penser que la question a une réponse simple. <br>
Imaginons une action qui vaut 100€ aujourd'hui, et qui dans un an vaudra soit 150€, soit 50€. Maintenant on vous propose le pari suivant : si l'action finit à 150€ on vous donne 50€, si elle finit à 50€ on ne vous donne rien. Ce pari, c'est exactement une option call avec un strike à 100€. Combien seriez vous prêt à payer pour ce pari ?<br>

Si je considère que chaque possibilité a une chance sur deux d'arriver, alors en moyenne je gagne 25€. Si la banque me prête à taux $r$, comme 25€ dans un an valent 25€$\cdot e^{-r\Delta t}$ aujourd'hui (avec $\Delta t=1\text{ an}$), alors je suis prêt à payer cette option :
$$25\cdot e^{-r\Delta t}€$$
*(Si vous n'avez pas compris d'où vient $e^{-r\Delta t}$, considérez que la banque fait des prêts à taux $r=0$, c'est-à-dire que l'argent dans un an vaut la même chose que l'argent d'aujourd'hui et lisez la suite de l'article en prenant $r=0$, c'est-à-dire en supprimant les facteurs $e^{-r\Delta t}$.)*

Mais maintenant si mon ami est optimiste et pense que l'action a 70% de chance de monter et 30% de chance de descendre, alors  il pense gagner en moyenne $50\cdot \frac{70}{100} + 0 \cdot \frac{30}{100} = 35€$ et il est donc prêt à payer $35\cdot e^{-r\Delta t}€$...

Mais en finance on a besoin d'un prix unique, qui ne dépend pas de ce que pensent chacun des acteurs! <br>
En l'absence de prix unique, par exemple si une action s'échange à 20€ chez le Crédit Mutuel et 10€ à la Société Générale, alors j'achète plein d'actions à la Société Générale et je les revends au Crédit Mutuel, en empochant *immédiatement* et *sans risque* 10€ pour chaque transaction : c'est ce qu'on appelle l'**arbitrage**.

On va voir comment construire un portefeuille (un mélange d'actions et d'argent à la banque) dont la valeur à la maturité égale exactement le payoff de l'option. Si une telle « machine » existe, le prix de l'option **doit** être égal au prix pour construire cette machine (ce portefeuille), ce sans quoi il y aura de l'arbitrage.
</p>

**3. Le modèle binomial à un pas**

Aujourd'hui, l'action vaut $S$ et à la date $\Delta t$, elle ne peut prendre que deux valeurs : 
<ul style="margin-top: 4px; margin-left: 6px; line-height: 1;">
  <li>$S\cdot u$ dans le scénario où elle monte
  <li>$S\cdot d$ dans le scénario où elle descend
</ul> 
Je vous laisse vérifier que $0\lt d \lt e^{r\Delta t} \lt u$ sinon on peut faire de l'arbitrage.<br>
On suppose qu'on peut acheter une fraction d'action et qu'on peut prêter ou emprunter au taux $r$.
On se place évidemment dans le cadre d'une option call européenne de strike $K$ de payoff
$$C_u =  \max\par{Su-K, 0}, \qquad C_d =  \max\par{Sd-K, 0}$$
On cherche une quantité d'action $\Delta$ et un montant en banque $\Gamma$ (c'est-à-dire une quantité à prêter ou emprunter), tels qu'à la date $\Delta t$, le portefeuille vaille exactement le payoff dans les deux scénarios :
$$\begin{cases}
\Delta \cdot S u + \Gamma \, e^{r \Delta t} = C_u \\
\Delta \cdot S d + \Gamma \, e^{r \Delta t} = C_d
\end{cases}$$
En résolvant le système, on a 
$$\Delta = \frac{C_u - C_d}{S(u - d)}\qquad\text{ et }\qquad 
\Gamma = e^{-r \Delta t} \left( \frac{u C_d - d C_u}{u - d} \right)$$
En général, on trouve $\Gamma \lt 0$, ce qui signifie qu'« on » *emprunte* de l'argent (« on » signifie celui qui promet l'argent du call, c'est-à-dire la banque bien souvent).$\\$
Le coût $C$ de l'option est finalement
$$\boxed{C=\Delta \cdot S + \Gamma}$$
On remarquera qu'à **aucun moment** on n'a fait intervenir les probabilité pour l'action de monter ou de descendre! Le prix ne dépend pas de ces probabilités.

**4. Ce que fait la banque en pratique**<p style="text-align: justify;">
Concrètement, ce que fait la banque (le vendeur de l'option) :
<ul style="margin-top: 4px; margin-left: 6px; line-height: 1;">
  <li> le client achète une option call au prix $C$; la banque reçoit donc $C$
  <li> la banque emprunte $-\Gamma$ (si $\Gamma\lt 0$)  
  <li> la banque achète $\Delta$ actions grâce à $C - \Gamma$ (car $\Delta\cdot S = C - \Gamma$)
  <li> à la maturité $T$, la banque donne au client ce qu'elle lui doit
</ul> 

La banque réplique le pari du client : si le client a gagné son pari, la banque aussi et elle le rembourse sans frais de sa poche; si le client a perdu, la banque aussi mais elle ne lui doit rien.<br>
En pratique, la banque gagne de l'argent en vendant l'option plus chère que le prix théorique, avec des frais de service ou des services autour de l'option. 

**5. La probabilité risque neutre**

On a vu que les probabilité de up et down sont inconnues. Mais on aimerait bien créer une *fausse* probabilité $q$ qui ferait que *tout se passe comme si $S$ avait probabilité $q$ de monter et probabilité $1-q$ de descendre*, c'est-à-dire :
$$e^{r\Delta t}S = qSu + (1-q)Sd$$
on trouve alors
$$q = \frac{e^{r\Delta t} - d}{u - d}$$
Comme $d\lt e^{r\Delta t}\lt u$, on a bien $0\lt q \lt 1$ et on peut *interpréter* $q$ comme une probabilité : la **probabilité de risque neutre** (attention! $q$ ne représente pas du tout la vraie probabilité pour $S$ de monter).<br>
Sous la probabilité $q$, on a 
$$\mathbb{E}^q(S_{\Delta t})=qSu + (1-q)Sd = e^{r\Delta t}S \qquad \text{ donc } \qquad S = e^{-r\Delta t}\mathbb{E}^q(S_{\Delta t})$$
On remarque aussi qu'on a 
$$C = e^{-r\Delta t}(qC_u + (1-q)C_d)$$
ce qui signifie qu'en calculant les payoff $C_u, C_d$ ainsi que $q$ on peut remonter au prix du call $C$, ce qui évite de calculer $\Delta$ et $\Gamma$. 
</p>
`},
en:{title:String.raw`How do you price an option?`,
  blurb:String.raw`How do banks sell you *options* without playing the lottery?`,
  body:String.raw`
<p style="text-align: justify;">
**1. Introduction**<br>
  Imagine the following situation: you are a baker, and a customer comes to you to place a huge order for $1000$ croissants. But this customer is cautious: they only want their croissants in a year. Since you can't make the croissants today, you'll need to buy the raw materials (flour, say) a year from now. But maybe by then the price of flour will have gone up a lot. And your customer wants a quote now!<br>
  In that case, you go to the bank and it offers you an insurance: it promises to sell you flour at €1 per kg, no matter what the market price is in a year, even if flour is worth €10 per kg by then.<br>
  A year later, if the price of flour has dropped and now only costs €0.5 per kg, you buy it at the supermarket. But if the price has risen to €2 per kg, you buy it from the bank. In any case, you never pay more than €1 per kg.<br>
  Obviously, this service isn't free and you'll have to pay the bank the price of the insurance.<br>
  The question is: **how much should the bank charge you for this insurance?**<br><br>


This type of insurance is what's called a **European call option**: a contract that gives the right but not the obligation to buy something (here flour, but it could be a service, shares...) at a price fixed in advance, called the **strike** $K$, only on a fixed date, called the **maturity** $T$.<br>
If at maturity the price of the asset $S_T$ exceeds $K$, the holder exercises and gains $S_T-K$. Otherwise, they don't exercise and the contract is worth nothing. The final gain, or **payoff**, is therefore written:
$$\max\par{S_T-K, 0}$$


The central question seems simple at first: *how much should this contract cost today?*



**2. A question that's not so trivial...**<br>
One might think this question has a simple answer. <br>
Imagine a stock that's worth €100 today, and which in a year will be worth either €150 or €50. Now you're offered the following bet: if the stock ends at €150 you get €50, if it ends at €50 you get nothing. This bet is exactly a call option with a strike of €100. How much would you be willing to pay for this bet?<br>


If I consider that each outcome has a fifty-fifty chance of happening, then on average I win €25. If the bank lends me money at rate $r$, since €25 in a year is worth €25$\cdot e^{-r\Delta t}$ today (with $\Delta t=1\text{ year}$), then I'm willing to pay for this option:
$$25\cdot e^{-r\Delta t}€$$
*(If you don't understand where $e^{-r\Delta t}$ comes from, just consider that the bank lends at rate $r=0$, meaning money in a year is worth the same as money today, and read the rest of the article taking $r=0$, i.e. dropping the $e^{-r\Delta t}$ factors.)*


But now if my friend is optimistic and thinks the stock has a 70% chance of going up and a 30% chance of going down, then he thinks he'll win on average $50\cdot \frac{70}{100} + 0 \cdot \frac{30}{100} = 35€$ and so he's willing to pay $35\cdot e^{-r\Delta t}€$...


But in finance we need a single price, one that doesn't depend on what each individual actor believes! <br>
Without a single price, for example if a stock trades at €20 at Crédit Mutuel and €10 at Société Générale, then I buy lots of shares at Société Générale and sell them at Crédit Mutuel, pocketing *immediately* and *risk-free* €10 on every transaction: this is what's called **arbitrage**.


We're going to see how to build a portfolio (a mix of stock and money at the bank) whose value at maturity exactly equals the option's payoff. If such a "machine" exists, the price of the option **must** equal the price of building this machine (this portfolio), otherwise there will be arbitrage.
</p>


**3. The one-step binomial model**


Today, the stock is worth $S$ and at time $\Delta t$, it can only take two values: 
<ul style="margin-top: 4px; margin-left: 6px; line-height: 1;">
  <li>$S\cdot u$ in the scenario where it goes up
  <li>$S\cdot d$ in the scenario where it goes down
</ul> 
I'll let you check that $0\lt d \lt e^{r\Delta t} \lt u$, otherwise arbitrage is possible.<br>
We assume we can buy a fraction of a share and that we can lend or borrow at rate $r$.
We of course consider a European call option with strike $K$ and payoff
$$C_u =  \max\par{Su-K, 0}, \qquad C_d =  \max\par{Sd-K, 0}$$
We look for a quantity of stock $\Delta$ and an amount at the bank $\Gamma$ (i.e. an amount to lend or borrow), such that at time $\Delta t$, the portfolio is worth exactly the payoff in both scenarios:
$$\begin{cases}
\Delta \cdot S u + \Gamma \, e^{r \Delta t} = C_u \\
\Delta \cdot S d + \Gamma \, e^{r \Delta t} = C_d
\end{cases}$$
Solving the system, we get 
$$\Delta = \frac{C_u - C_d}{S(u - d)}\qquad\text{ and }\qquad 
\Gamma = e^{-r \Delta t} \left( \frac{u C_d - d C_u}{u - d} \right)$$
In general, we find $\Gamma \lt 0$, which means "we" *borrow* money ("we" meaning whoever promises the call's payoff, that is, most often the bank).$\\$
The cost $C$ of the option is finally
$$\boxed{C=\Delta \cdot S + \Gamma}$$
Notice that **at no point** did we bring in the probabilities of the stock going up or down! The price doesn't depend on these probabilities.


**4. What the bank does in practice**<p style="text-align: justify;">
Concretely, here's what the bank (the option seller) does:
<ul style="margin-top: 4px; margin-left: 6px; line-height: 1;">
  <li> the customer buys a call option at price $C$; the bank therefore receives $C$
  <li> the bank borrows $-\Gamma$ (if $\Gamma\lt 0$)  
  <li> the bank buys $\Delta$ shares using $C - \Gamma$ (since $\Delta\cdot S = C - \Gamma$)
  <li> at maturity $T$, the bank gives the customer what it owes them
</ul> 


The bank replicates the customer's bet: if the customer won their bet, so did the bank, and it pays them back out of its own pocket at no extra cost; if the customer lost, so did the bank, but it owes them nothing.<br>
In practice, the bank makes money by selling the option for more than its theoretical price, along with service fees or services around the option. 


**5. The risk-neutral probability**


We've seen that the up and down probabilities are unknown. But we'd like to create a *fake* probability $q$ such that *everything behaves as if $S$ had probability $q$ of going up and probability $1-q$ of going down*, that is:
$$e^{r\Delta t}S = qSu + (1-q)Sd$$
we then find
$$q = \frac{e^{r\Delta t} - d}{u - d}$$
Since $d\lt e^{r\Delta t}\lt u$, we indeed have $0\lt q \lt 1$ and we can *interpret* $q$ as a probability: the **risk-neutral probability** (careful! $q$ does not represent the true probability of $S$ going up at all).<br>
Under probability $q$, we have 
$$\mathbb{E}^q(S_{\Delta t})=qSu + (1-q)Sd = e^{r\Delta t}S \qquad \text{ so } \qquad S = e^{-r\Delta t}\mathbb{E}^q(S_{\Delta t})$$
We also notice that we have 
$$C = e^{-r\Delta t}(qC_u + (1-q)C_d)$$
which means that by computing the payoffs $C_u, C_d$ as well as $q$ we can work back to the call price $C$, which avoids having to compute $\Delta$ and $\Gamma$. 
</p>
`}
 }, 
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

{id:'P-999  ',slug:'test',date:'0000-00-00',level:1,tags:[],
 fr:{title:'None',
  blurb:String.raw`None`,
  statement:String.raw`

1. Le point de départ : $p(n)$ comme intégrale

$$\boxed{p(n)=\frac{1}{2i\pi}\int_{c-i\pi}^{c+i\pi} f(e^{-t})e^{nt}dt}\qquad (\star)$$

<div style="border-left:3px solid #888; padding-left:12px; margin:12px 0;">

<b>Rappel (Mellin).</b> Pour $\mathrm{Re}\,s>0$, $\displaystyle\Gamma(s)=\int_0^{\infty}e^{-y}y^{s-1}\,dy$, et la formule d'inversion donne, pour $c>0$ et $y>0$ :
$$e^{-y}=\frac{1}{2i\pi}\int_{(c)}\Gamma(s)\,y^{-s}\,ds$$

</div>

$$\par{\sum} \qquad \norm{\sum} \qquad \abs{\sum}$$

<ul style="margin-top: 4px; margin-left: 6px; line-height: 1;">
  <li>pour bouger la ligne ligne rouge en dessous de la bleue et obtenir un nombre strictement plus petit, il faut $a-1 \gt b$ </li>
  <li>pour bouger la ligne ligne bleue à côté de la rouge et ne pas avoir de points flottant, il faut  il faut $b-1 \geq a$ </li>
</ul> 

~~~
pour i de 0 à n-1 :
    pour j de 0 à n-3 :
        si t[j] > t[j+2] :
            échanger t[j] et t[j+2]
~~~

![FFT](images/fft.png)


`,
  hint:String.raw` None
`,
  solution:String.raw`None
`},
 en:{title:'None',
  blurb:'None'}
},

]};
