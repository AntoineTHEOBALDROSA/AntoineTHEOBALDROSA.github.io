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
  email:'antoine.theobald-rosa@polytechnique.edu',
    photo:'images/portrait.jpg',      // laisse '' tant que le fichier n'existe pas
  location:{fr:'Paris · Mathématiques, Informatique & Finance',
    
            en:'Paris · Mathematics, Computer Science & Finance'},
  title:{
    fr:'Étudiant à l’École Polytechnique<br>Mathématiques, Informatique & Finance',
    en:'Student at École Polytechnique, Paris, France<br>Mathematics, Computer Science & Finance'},
  bio:{
    fr:[
     'Bienvenue sur ma page personnelle.<br>Étudiant en école d’ingénieur, je suis particulièrement passionné de mathématiques, d’informatique et de finance. Mes centres d’intérêts scientifiques sont plus précisément l’algèbre et l’arithmétique, l’algorithmique et le trading haute-fréquence. De manière tout à fait personnel, je m’intéresse à la psychologie, aux actualités technologiques et, peut-être par nostalgie, je suis également fasciné par l’histoire des dinosaures.',
     'Ce site rassemble trois choses : les [projets](#/projets) que je construis, des [articles](#/articles) où j’essaye de rendre clair des sujets peu traités mais tout à fait passionnant, ainsi qu’une collection de [problèmes](#/problemes) sur lesquels j’ai aimé me casser la tête.',
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
          {fr:'Data Science',en:'Data Science'}, {fr:'IA',en:'AI'}, {fr:'Algorithmique',en:'Algorithms'},{fr:'Informatique Graphique',en:'Computer Graphics'}],
  socials:[
    {label:'GitHub',href:'https://github.com/AntoineTHEOBALDROSA',glyph:'↗'},
    {label:'LinkedIn',href:'https://www.linkedin.com/in/antoine-theobald-rosa-696087381/',glyph:'↗'},
    {label:'antoine.theobald-rosa@polytechnique.edu',href:'mailto:antoine.theobald-rosa@polytechnique.edu',glyph:'✉'},
    {label:{fr:'CV (PDF)',en:'Résumé (PDF)'},href:'pdf/Resume_THEOBALD-ROSA_Antoine.pdf',glyph:'↓'}
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
  fr:{name:'Mathématiques',blurb:'"Any sufficiently well explained mathematics is indistinguishable from being obivous"'},
  en:{name:'Mathematics',blurb:'"Any sufficiently well explained mathematics is indistinguishable from being obivous"'}},
 {id:'cs',
  fr:{name:'Informatique',blurb:String.raw``},
  en:{name:'Computer science',blurb: String.raw``}},
  {id:'finance',
  fr:{name:'Finance',blurb:'Existe-t-il des lois économiques aussi inviolables que celles de la physique ? La seule manière de répondre à ces questions est de devenir économiste.'},
  en:{name:'Finance',blurb:'Are there economic laws as inviolable as those of physics? The only way to answer these questions is to become an economist.'}},
  {id:'physics',
  fr:{name:'Physique',blurb:'Des articles sur des phénomènes de la vie de tous les jours.'},
  en:{name:'Physics',blurb:'Articles about everyday phenomena.'}},
],

/* =========================================================
   4. PROJETS
   ========================================================= */
projects:[

{slug:'stat-arb-eng',thumb:'images/pair_trading.png',year:'2026',tags:['Quant', 'Machine-Learning','Python'],
 fr:{title:String.raw`Moteur d'arbitrage statistique & Pair Trading`,role:'Projet personnel',status:'Terminé',
  blurb:String.raw`Comment tester de manière honnête (sans tricher) si une stratégie d'investissement aurait fait gagner de l'argent ? Application au *Pair Trading*.`,
  lead:String.raw`Comment tester de manière honnête (sans tricher) si une stratégie d'investissement aurait fait gagner de l'argent ? <br><br>
  Supposons qu'on ait une idée de stratégie, par exemple : « dès qu'une action baisse trois jours de suite, je l'achète et je la revends le lendemain ». On pourrait prendre l'historique des prix et regarder ce qui se serait passé : c'est ce qu'on appelle un **backtest**. Mais en pratique, un backtest peut prédire une straégie comme gagnante alors qu'elle est perdant. Pourquoi? Parce qu'en réalité il y a des frais, un décalage de prix le temps d'envoyer l'offre, et d'autres facteurs encore.<br><br>
  On va développer un moteur qui calcule si une stratégie gagne *vraiment* de l'argent, et on l'essayera sur la stratégie de **Pair Trading**.`,
  links:[['Code source','https://github.com/AntoineTHEOBALDROSA/Statistical-Arbitrage-Engine']],
  body:String.raw` 
  <div style="margin-top: -5.5rem;"></div>

## Plan du projet

1. **Stratégie de Pairs Trading**
2. **Moteur de backtest**
3. **Évaluation des performances de la stratégie**

## 1. Le Pair Trading

Pour essayer le moteur de backtest, il nous faut déjà une stratégie d'investissement. J'ai choisis le **Pair Trading** (arbitrage de pairs).

### Principe général

Imaginons deux entreprises très similaires, par exemple **TotalEnergies** et **Shell**. Leurs activités étant presque identiques, leurs actions ont tendance à évoluer ensemble : une hausse du cours du baril de pétrole aura un impact positif similaire sur les deux actions.

Cependant, des chocs temporaires de liquidité peuvent survenir : par exemple, si un fonds d'investissement liquide massivement sa position sur l'une des deux entreprises. Durant cet épisode, le cours de l'action $A$ peut sembler sous-évalué par rapport à celui de $B$. 

L'hypothèse centrale du Pairs Trading est le retour à la moyenne : l'écart de valorisation est transitoire et finira par se refermer.

<div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 5px solid #0284c7; padding: 18px 22px; margin: 22px 0; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.04); font-family: inherit;">
  <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px;">
    <strong style="color: #0369a1; font-size: 1.05rem;">Exécution : Dès qu'un écart statistiquement significatif apparaît</strong>
  </div>

  <div style="display: flex; flex-direction: column; gap: 1px;">
    <!-- Étape 1 -->
    <div style="display: flex; align-items: flex-start; gap: 8px;">
      <span style="background: #e0f2fe; color: #0369a1; font-weight: 700; font-size: 0.85rem; width: 22px; height: 22px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;">1</span>
      <div style="color: #334155; line-height: 1.55;">
        <strong> Vente à découvert (Short) :</strong> On emprunte des actions de l'entreprise surévaluée ($A$) pour les vendre immédiatement au prix fort.
      </div>
    </div>

    <!-- Étape 2 -->
    <div style="display: flex; align-items: flex-start; gap: 12px;">
      <span style="background: #e0f2fe; color: #0369a1; font-weight: 700; font-size: 0.85rem; width: 22px; height: 22px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;">2</span>
      <div style="color: #334155; line-height: 1.55;">
        Avec les liquidités générées, on achète simultanément des actions de l'entreprise sous-évaluée ($B$).
      </div>
    </div>

    <!-- Étape 3 -->
    <div style="display: flex; align-items: flex-start; gap: 12px;">
      <span style="background: #e0f2fe; color: #0369a1; font-weight: 700; font-size: 0.85rem; width: 22px; height: 22px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;">3</span>
      <div style="color: #334155; line-height: 1.55;">
        Lorsque l'écart revient à sa moyenne, on revend l'action $B$, on rachète l'action $A$ pour la restituer au prêteur, et on empoche la différence.
      </div>
    </div>
  </div>
</div>

L'intérêt majeur de cette approche est d'être *neutre au marché* (*market-neutral*) : la performance ne dépend pas de la hausse ou de la baisse globale du pétrole, mais uniquement de la convergence du spread.

<hr style="border: none; border-top: 1px solid #cbd5e1; margin: 2.5rem 0; width: 100%;" />

### Implémentation

Implémentons la première étape en Python :

~~~python
import yfinance as yf

# Tickers boursiers :
# TTE.PA  : TotalEnergies sur Euronext Paris
# SHEL.AS : Shell sur Euronext Amsterdam
tickers = ["TTE.PA", "SHEL.AS"]

# Téléchargement des cours ajustés 
data = yf.download(tickers, start="2021-01-01", end="2026-01-01", auto_adjust=True)

prices = data["Close"].dropna()
~~~

**Remarque :** la méthode \`.dropna()\` permet d'éliminer les jours fériés spécifiques à une seule place boursière (par exemple si la bourse d'Amsterdam est ouverte alors que celle de Paris est fermée).


<div style="background-color: #f8fafc; border-left: 5px solid #2563eb; padding: 18px 20px; margin: 22px 0; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); font-family: inherit;">
  <h3 style="margin-top: 0; margin-bottom: 14px; color: #1e40af; font-size: 1.15rem; display: flex; align-items: center; gap: 8px;">
    <span>Foire aux questions : les marchés financiers</span>
  </h3>


  <p style="margin-bottom: 6px;"><strong>1. Qu'est-ce qu'Euronext ? Pourquoi TotalEnergies est-elle cotée à Paris et Shell à Amsterdam ?</strong></p>
  <p style="margin-top: 0; color: #334155; line-height: 1.55;">
    Une place boursière, c'est comme un grand marché couvert où des gens viennent acheter et vendre des parts d'entreprises. Euronext est l'entreprise privée qui gère les marchés de plusieurs villes européennes.<br>
    TotalEnergies est française, son marché historique principal est donc Paris (.PA) alors que Shell est d'origine anglo-néerlandaise, son marché historique est donc à Amsterdam (.AS). Une entreprise choisit où elle veut être cotée.<br>
    Une entreprise n'a pas un prix mondial par magie. La côte d'une entreprise est le résultat de la dernière transaction conclue entre deux personnes. Mais si le prix de Total est différent à Paris et à New York, disons 49€ à Paris et 51€ à New York, des arbitragistes acheteraient des actions à Paris pour les revendere instantanément à New York, rééquilibrant le prix vers 50€. C'est ce qui fixe le prix des entreprises.
  </p>

  <p style="margin-bottom: 6px; margin-top: 14px;"><strong>2. Pourquoi les bourses traditionnelles ferment-elles la nuit à l'ère d'Internet ?</strong></p>
  <p style="margin-top: 0; color: #334155; line-height: 1.55;">
    La bourse traditionnelle ferme pour concentrer tout le monde au même endroit au même moment. Si le marché restait ouvert à 3h du matin, il n'y aurait presque personne et le moindre ordre d'achat ferait bondir ou chuter le cours de 10% n'importe comment par manque de participants.
  </p>

  <p style="margin-bottom: 6px; margin-top: 14px;"><strong>3. À quoi correspondent les cours « ajustés » ?</strong></p>
  <p style="margin-top: 0; margin-bottom: 0; color: #334155; line-height: 1.55;">
    Supposons que vous achetiez une action d'entreprise à 100€. Le lendemain, l'entreprise verse 5€ à ses actionnaires. Mécaniquement, l'action ne vaut plus que 95€. Sur le cours de la bourse *brut*, il y a un saut de 100€ à 95€, ce qui pourrait être interprétée par des robots tarders comme le début d'une chute de l'entreprise. Mais en réalite, l'entreprise vaut toujours 100€. Le **cours ajusté** règle ce problème pour effacer cette fausse perte de 5€.<br>
     Idem si une entreprise subdivise ses actions : si une entreprise qui possède 10 actions à 1000€ décide de passer à 100 actions, elles ne vont valoir plus que 100€ chacune mais l'entreprise vaut toujours autant. 
  </p>
</div>

### Visualisation de la performance relative

Pour comparer les deux actions malgré leurs niveaux de prix différents, on normalise les séries au début de la période :

~~~python
import matplotlib.pyplot as plt

normalized_prices = (prices / prices.iloc[0]) * 100 

plt.figure(figsize=(10, 5))
plt.plot(normalized_prices["TTE.PA"], label="TotalEnergies (TTE.PA)")
plt.plot(normalized_prices["SHEL.AS"], label="Shell (SHEL.AS)")
plt.title("Performance relative : TotalEnergies vs Shell (2021 - 2026)")
plt.xlabel("Date")
plt.ylabel("Performance relative (Base 100)")
plt.legend()
plt.grid(True, linestyle="--", alpha=0.6)
plt.show()
~~~

![](images/arb-stat-eng-1.png)

<hr style="border: none; border-top: 1px solid #cbd5e1; margin: 2.5rem 0; width: 100%;" />

## 2. Modélisation et calcul du spread

On cherche à présent à définir et quantifier le **spread**, c'est-à-dire l'écart entre les deux actions.

Si TotalEnergies vaut 60 € et Shell 40 €, un écart naïf serait de $60 - 40 = 20 \text{ €}$. Mais en réalité, une variation de 1% de Total ne correspond pas à une variation de 1% de Shell..

 Comme les deux entreprises ont des activités similaires, on suppose que le pix de leur action est lié par une loi affine, avec un spread $\varepsilon_t$ qui dépend du temps $t$.

$$P_{\text{TTe}, t} = \alpha + \beta P_{\text{Shell}, t} + \varepsilon_t$$ 

Où :
<ul style="margin: 8px 0 14px 1.5rem; padding: 0; list-style-type: disc; line-height: 0.1;">
  <li style="margin-bottom: 4px;">$\beta$ désigne le *hedge ratio* : pour chaque action TotalEnergies achetée, il faut vendre $\beta$ actions Shell pour rester neutre au risque</li>
  <li style="margin-bottom: 4px;">$\alpha$ représente une constante d'ajustement</li>
  <li style="margin-bottom: 4px;">$\varepsilon_t$ notre *spread* au temps $t$</li>
</ul>

### Notion de cointégration

Pris individuellement, le cours d'une action $P_t$ est un processus **non stationnaire** (ou intégrée d'ordre 1, notée $I(1)$), couramment modélisé comme mouvement brownien géométrique :
$$dP_t = \mu P_t dt + \sigma P_t d W_t$$
Le terme $W_t$ représente un mouvement brownien standard, et $\sigma$ la volatilité. Sa moyenne n'est pas constante et sa variance diverge.<br>
Dans le cas général, la somme de deux lois $I(1)$ suit toujours une loi $I(1)$ ; mais dans notre cas, il existe peut-être une combinaison linéaire $\alpha, \beta$ telle que le spread $\varepsilon_t$ soit un processus **stationnaire** (noté $I(0)$). Si c'est le cas, on dit que TotalEnergies et Shell sont **cointégrées**.

$$\varepsilon_t = P_{\text{TTE}, t} - (\alpha + \beta P_{\text{SHEL}, t}) \qquad \text{ avec } \quad \mathbb{E}[\varepsilon_t] = 0 \quad \text{et} \quad \operatorname{Var}(\varepsilon_t) = \sigma_{\varepsilon}^2 < +\infty$$

### Comment trouver $\alpha, \beta$ ? Méthode des moindres carrés ordinaire

On va trouver $\alpha, \beta$ qui minimisent $\sum \varepsilon_t^2$. En posant $S(\alpha, \beta) = \sum_t \varepsilon_t^2$ ainsi que $y_t = P_{\text{TTE}, t}$ et $x_t = P_{\text{SHEL}, t}$, on veut minimiser
$$S(\alpha, \beta) = \sum_{t=1}^N (y_t - (\alpha + \beta x_t))^2$$
Comme $S$ est une fonction quadraitque, son minimum se trouve là où ses deux dérivées partielles s'annulent 
$$\frac{\partial S}{\partial \alpha} = 0 \quad \text{et} \quad \frac{\partial S}{\partial \beta} = 0$$
Or
$$\frac{\partial S}{\partial \alpha} = \sum_{t=1}^N -2\big(y_t - \alpha - \beta x_t\big) = 0$$
Et en multipliant par $\frac{1}{-2N}$ on a, avec $\bar{y} = \frac{1}{N}\sum y_t$ et $\bar{x} = \frac{1}{N}\sum x_t$ les moyennes empiriques :
$$\bar{y} - \alpha - \beta \bar{x} = 0 \implies \boxed{\alpha = \bar{y} - \beta \bar{x}}$$
Maintenant pour trouver $\beta$, 
$$\frac{\partial S}{\partial \beta} = \sum_{t=1}^N -2 x_t \big(y_t - \alpha - \beta x_t\big) = 0$$
et on remplace $\alpha$ par son expression
$$\sum_{t=1}^N x_t \Big( (y_t - \bar{y}) - \beta (x_t - \bar{x}) \Big) = 0$$
Or la moyenne de $y_t-\bar y$ est nulle (idem pour $x_t-\bar x$), donc 
$$\bar{x} \sum_{t=1}^N (y_t - \bar{y}) = 0 \quad \text{ et } \quad  \bar{x} \sum_{t=1}^N (x_t - \bar{x})$$
ce qui se réécrt
$$\sum_{t=1}^N (x_t - \bar{x})(y_t - \bar{y}) - \beta \sum_{t=1}^N (x_t - \bar{x})^2 = 0 \quad \Longleftrightarrow \quad \boxed{\beta = \frac{\operatorname{Cov}(x, y)}{\operatorname{Var}(x)}}$$

### Détecter les anomalies

On vient de voir comment déterminer $\alpha, \beta$, c'est-à-dire comment calculer le spread $\varepsilon_t$. À partir de là, on peut calculer le **Z-score**
$$Z_t = \frac{\varepsilon_t - \mu_{\varepsilon_t}}{\sigma_{\varepsilon_t}}$$
et si $\varepsilon_t$ suit un régime stationnaire, $Z_t$ suit une loi normale $\mathcal{N}(0, 1)$. Conrètement, $Z_t$ est environ $95,4$% du temps entre $-2$ et $2$. <br>
Dès lors, si $\abs{Z_t} \gt 2$, c'est qu'il y a une anomalie, et que c'est le moment d'utiliser notre stratégie. Plus précisément :
<ul style="margin: 8px 0 14px 1.5rem; padding: 0; list-style-type: disc; line-height: 0.1;">
  <li style="margin-bottom: 4px;">Si $Z_t \gt 2$, le spread est très grand, et Total coûte « trop cher ». On short Total. </li>
  <li style="margin-bottom: 4px;">Si $Z_t \lt 2$, c'est l'inverse : on short Shell.</li>
</ul>

### Implémentation

En pratique, comme $\alpha, \beta$ peuvent changer au cours du temps, on les calcule sur une fenêtre glissante de \`W\` jours. Idem, pour avoir une meilleure idée du niveau d'anomalie de la période, on lisse le Z-score sur une période glissante de \`window_z\` jours.

~~~python
import numpy as np
import statsmodels.api as sm
from statsmodels.regression.rolling import RollingOLS

W = 60         # on estime alpha, beta sur W jours
window_z = 60  # On normalise le Z score sur window_z jours

y = prices["TTE.PA"]
x = prices["SHELL.AS"]
x_with_const = sm.add_constant(x)

# Régression linéaire glissante (Rolling OLS)
rols = RollingOLS(y, x_with_const, window=W)
rolling_model = rols.fit()

# On décale d'un jour pour éviter le biais d'anticipation (lookahead bias)
alpha = rolling_model.params["const"].shift(1)
beta = rolling_model.params["SHELL.AS"].shift(1)

spread = y - (alpha + beta * x)

# Calcul du Z-score (fenêtre glissante)
spread_mean = spread.rolling(window=window_z).mean()
spread_std = spread.rolling(window=window_z).std()
z_score = (spread - spread_mean) / spread_std
~~~
Et on peut ensuite tracer l'évolution de $\beta_t$ et du Z-score $Z_t$ :
~~~python 
fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(12, 8), sharex=True)

# hedge ratio
ax1.plot(beta, label=f"Beta glissant (W = {W} j)", color="purple", lw=1.2)
ax1.set_title("Évolution Hedge Ratio (Beta)")
ax1.set_ylabel("Beta")
ax1.grid(True)
ax1.legend(loc="upper left")

# Z-score spread
ax2.plot(z_score, label="Z-score Spread", color="blue", lw=1)
ax2.axhline(0, color="black", linestyle="--", alpha=0.7)
ax2.axhline(2.0, color="red", linestyle="--", label="Seuil d'entrée (+-2)")
ax2.axhline(-2.0, color="red", linestyle="--")
ax2.axhline(0.5, color="green", linestyle=":", label="Seuil sortie (+-0.5)")
ax2.axhline(-0.5, color="green", linestyle=":")

ax2.set_title("Z-score du Spread TotalEnergies / Shell")
ax2.set_xlabel("Date")
ax2.set_ylabel("Z-score")
ax2.grid(True)
ax2.legend(loc="upper left")

plt.tight_layout()
plt.show()
~~~
![](images/arb-stat-eng-2.png)

On peut alors appliquer notre stratégie de Pair Trading

~~~python
signals = pd.DataFrame(index=z_score.index)
signals["z_score"] = z_score
signals["position"] = 0  
# 0: Pas de position
# 1: Long spread
# -1: Short spread

ENTRY_THRESHOLD = 2.0
EXIT_THRESHOLD = 0.5

current_pos = 0
positions = []

for z in signals["z_score"]:
    if pd.isna(z):
        positions.append(0)
        continue

    if z >= ENTRY_THRESHOLD: current_pos = -1
    elif z <= -ENTRY_THRESHOLD: current_pos = 1
    elif abs(z) <= EXIT_THRESHOLD: current_pos = 0
    
    positions.append(current_pos) # sinon on reste dans la position qu'on avait la veille

signals["position"] = positions
~~~

## 3. Moteur de Backtest

On va maintenant évaluer notre stratégie sur les données que nous avons téléchargés. En particulier, on peut modifier les taux de transaction grâce à la variable \`TRANSACTION_COST\` ainsi que le capital initial grâce à la variable \`INITIAL_CAPITAL\`.

~~~python
# rendements journaliers
returns = pd.DataFrame(index=prices.index)
returns["TTE"] = prices["TTE.PA"].pct_change()
returns["SHEL"] = prices["SHELL.AS"].pct_change()

returns["beta"] = beta

# rendement
returns["spread_return"] = (returns["TTE"] - returns["beta"] * returns["SHEL"]) / (1 + returns["beta"])

signals["position_applied"] = signals["position"].shift(1).fillna(0)
returns["strategy_gross"] = signals["position_applied"] * returns["spread_return"]

# frais de transaction
# 1 changement de position = 2 ordres (un pour Total, un pour Shell)
TRANSACTION_COST = 0.0005  # 0.05% par transaction
trades = signals["position_applied"].diff().abs().fillna(0)
returns["costs"] = trades * TRANSACTION_COST

# Rendement net
returns["strategy_net"] = returns["strategy_gross"] - returns["costs"]

INITIAL_CAPITAL = 100_000
portfolio = pd.DataFrame(index=returns.index)
portfolio["equity_gross"] = INITIAL_CAPITAL * (1 + returns["strategy_gross"].fillna(0)).cumprod()
portfolio["equity_net"] = INITIAL_CAPITAL * (1 + returns["strategy_net"].fillna(0)).cumprod()
~~~
On peut afficher les résultats de notre stratégie :

![](images/arb-stat-eng-3.png)

## 4. Évaluation des performances   

On voit clairement que la stratégie finit dans le négatif, mais analysons la plus en détail.

<div style="overflow-x: auto; margin: 24px 0;">
  <table style="width: 100%; border-collapse: collapse; font-family: inherit; font-size: 0.95rem; text-align: left; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
    <thead>
      <tr style="background-color: #f1f5f9; border-bottom: 2px solid #cbd5e1; color: #1e293b;">
        <th style="padding: 12px 16px; font-weight: 700;">Métrique</th>
        <th style="padding: 12px 16px; font-weight: 700;">Description</th>
        <th style="padding: 12px 16px; font-weight: 700; text-align: right;">Valeur</th>
      </tr>
    </thead>
    <tbody style="color: #334155;">
      <tr style="border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 12px 16px; font-weight: 600; color: #0f172a;">Période active</td>
        <td style="padding: 12px 16px;">Durée effective testée (base 252 j/an). <br>Les premiers jours sont exclus comme on en a besoin pour calculer $\beta$.</td>
        <td style="padding: 12px 16px; text-align: right; font-family: monospace; font-weight: 700; color: #0284c7; white-space: nowrap;">4.6 ans</td>
      </tr>
      <tr style="border-bottom: 1px solid #e2e8f0; background-color: #f8fafc;">
        <td style="padding: 12px 16px; font-weight: 600; color: #0f172a;">Rendement total net</td>
        <td style="padding: 12px 16px;">Gain cumulé une fois les frais de transaction retirés (ici, 5 bps = 0.05%). <br>$R = \frac{V_T}{V_0} - 1$ avec $V_T, V_0$ les valeurs finales et initiales du portefeuille.</td>
        <td style="padding: 12px 16px; text-align: right; font-family: monospace; font-weight: 700; color: #0284c7; white-space: nowrap;">-35.68%</td>
      </tr>
      <tr style="border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 12px 16px; font-weight: 600; color: #0f172a;">Rendement annualisé</td>
        <td style="padding: 12px 16px;">Taux composé annuel équivalent (*Compound Annual Growth Rate*).<br> CAGR = $(1+R)^{1/n_{\text{years}}} - 1$</td>
        <td style="padding: 12px 16px; text-align: right; font-family: monospace; font-weight: 700; color: #0284c7; white-space: nowrap;">-9.14%</td>
      </tr>
      <tr style="border-bottom: 1px solid #e2e8f0; background-color: #f8fafc;">
        <td style="padding: 12px 16px; font-weight: 600; color: #0f172a;">Volatilité annualisée $\sigma_{\text{anuelle}}</td>
        <td style="padding: 12px 16px;">Mesure l'instabilité et la dispersion des rendements de la stratégie.</td>
        <td style="padding: 12px 16px; text-align: right; font-family: monospace; font-weight: 700; color: #0284c7; white-space: nowrap;">8.56%</td>
      </tr>
      <tr style="border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 12px 16px; font-weight: 600; color: #0f172a;">Sharpe Ratio</td>
        <td style="padding: 12px 16px;">BLABLA <br> $S=\frac{\mathbb E(R)-R_f}{\sigma_{\text{anuelle}}}$ avec $R_f$ le rendement d'un portefeuille sans risque.<br> $S<0$ : l'investissement perd de l'argent, $0\lt S \lt 1$ : l'investissement est moins rentable qu'un placement sans risque et $S>1$ l'investissement vaut les risques pris</td>
        <td style="padding: 12px 16px; text-align: right; font-family: monospace; font-weight: 700; color: #0284c7; white-space: nowrap;">-1.10</td>
      </tr>
      <tr style="border-bottom: 1px solid #e2e8f0; background-color: #f8fafc;">
        <td style="padding: 12px 16px; font-weight: 600; color: #0f172a;">Maximum Drawdown (MDD)</td>
        <td style="padding: 12px 16px;">Perte maximale qu'un investisseur aurait pu subir s'il était entré puis sorti au pire moment possible (rentré au sommet historique pour sortir au creux le plus bas).<br>$\text{MDD} = \min_{t} \left( \frac{V_t - \max_{s \le t} V_s}{\max_{s \le t} V_s} \right)$</td>
        <td style="padding: 12px 16px; text-align: right; font-family: monospace; font-weight: 700; color: #0284c7; white-space: nowrap;">-39.87%</td>
      </tr>
      <tr>
        <td style="padding: 12px 16px; font-weight: 600; color: #0f172a;">Taux de jours gagnants</td>
        <td style="padding: 12px 16px;">Pourcentage de jours où le rendement a été strictement positif, calculé uniquement sur les jours où une position est ouverte.</td>
        <td style="padding: 12px 16px; text-align: right; font-family: monospace; font-weight: 700; color: #0284c7; white-space: nowrap;">45.59%</td>
      </tr>
    </tbody>
  </table>
</div>

On remarque qu'on obtient de très mauvais résultats. Une raison à cela est que Total et Shell n'ont pas vraiment suivi les même stratégies sur la période 2021-2026 : Shell s'est concentré sur les énergies fossiles alors que Total a massivement investi dans l'électricité et les énergies renouvelables.<br>

On peut refaire la même étude avec par exemple Mastercard et Visa, qui suivent exactement le même modèle économique. On a alors de bien meilleurs résultats :

<div style="overflow-x: auto; margin: 24px 0;">
  <table style="width: 100%; border-collapse: collapse; font-family: inherit; font-size: 0.95rem; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
    <thead>
      <tr style="background-color: #f1f5f9; border-bottom: 2px solid #cbd5e1; color: #1e293b;">
        <th style="padding: 12px 14px; font-weight: 700; text-align: center; white-space: nowrap;">Période active</th>
        <th style="padding: 12px 14px; font-weight: 700; text-align: center; white-space: nowrap;">Rendement net</th>
        <th style="padding: 12px 14px; font-weight: 700; text-align: center; white-space: nowrap;">Rendement ann. (CAGR)</th>
        <th style="padding: 12px 14px; font-weight: 700; text-align: center; white-space: nowrap;">Volatilité ann.</th>
        <th style="padding: 12px 14px; font-weight: 700; text-align: center; white-space: nowrap;">Sharpe Ratio</th>
        <th style="padding: 12px 14px; font-weight: 700; text-align: center; white-space: nowrap;">Max Drawdown</th>
        <th style="padding: 12px 14px; font-weight: 700; text-align: center; white-space: nowrap;">Taux jours gagnants</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 14px 14px; text-align: center; font-family: monospace; font-weight: 700; color: #0284c7; white-space: nowrap;">4,3 ans</td>
        <td style="padding: 14px 14px; text-align: center; font-family: monospace; font-weight: 700; color: #16a34a; white-space: nowrap;">+6,96 %</td>
        <td style="padding: 14px 14px; text-align: center; font-family: monospace; font-weight: 700; color: #16a34a; white-space: nowrap;">+1,59 %</td>
        <td style="padding: 14px 14px; text-align: center; font-family: monospace; font-weight: 700; color: #0284c7; white-space: nowrap;">5,19 %</td>
        <td style="padding: 14px 14px; text-align: center; font-family: monospace; font-weight: 700; color: #0284c7; white-space: nowrap;">0,34</td>
        <td style="padding: 14px 14px; text-align: center; font-family: monospace; font-weight: 700; color: #dc2626; white-space: nowrap;">-6,31 %</td>
        <td style="padding: 14px 14px; text-align: center; font-family: monospace; font-weight: 700; color: #0284c7; white-space: nowrap;">52,47 %</td>
      </tr>
    </tbody>
  </table>
</div>

On a toujours un sharpe ratio strictement inférieur à $1$, ce qui montre dans cette application simpliste du Pair Trading, il vaut mieux invesitr sur la dette américaine par exemple. Une raison à cela est que des fonds d'investissement appliquent déjà des stratégies similaires mais affinées, ce qui les rend plus performantes et nous empêche de tirer profit de cette stratégie.
`},
en: {
  title: String.raw`Statistical Arbitrage Engine & Pairs Trading`,
  role: 'Personal Project',
  status: 'Completed',
  blurb: String.raw`How do you test honestly (without cheating) whether an investment strategy would have made money? An application to *Pairs Trading*.`,
  lead: String.raw`How do you test honestly (without cheating) whether an investment strategy would have made money? <br><br>
  Suppose you have a strategy idea, such as: "as soon as a stock drops three days in a row, buy it and sell it the next day." You could pull historical prices and check what would have happened: this is called a **backtest**. But in practice, a backtest can easily show a strategy as profitable when it actually loses money in the real world. Why? Because live markets involve broker fees, execution slippage, bid-ask spreads, and various other market frictions.<br><br>
  In this project, we develop an engine that evaluates whether a strategy *truly* generates profit, and apply it to a **Pairs Trading** strategy.`,
  links: [['Source Code', 'https://github.com/AntoineTHEOBALDROSA/Statistical-Arbitrage-Engine']],
  body: String.raw`

  <div style="margin-top: -5.5rem;"></div>

## Project Outline

1. **Pairs Trading Strategy**
2. **Backtest Engine**
3. **Strategy Performance Evaluation**

## 1. Pairs Trading

To test our backtest engine, we first need an investment strategy. I chose **Pairs Trading** (statistical arbitrage between two co-moving assets).

### General Principle

Consider two closely related companies, such as **TotalEnergies** and **Shell**. Because their core business models and operations are largely identical, their share prices tend to move in tandem: a spike in crude oil prices will typically benefit both stocks in a similar fashion.

However, temporary liquidity shocks can disrupt this equilibrium: for example, if an institutional fund rapidly liquidates a massive position in one of the two names. During such an event, stock $A$ may temporarily appear undervalued relative to stock $B$.

The foundational premise of Pairs Trading is mean reversion: this divergence in relative valuation is transitory and will eventually close.

<div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 5px solid #0284c7; padding: 18px 22px; margin: 22px 0; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.04); font-family: inherit;">
  <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px;">
    <strong style="color: #0369a1; font-size: 1.05rem;">Execution: Once a statistically significant spread emerges</strong>
  </div>

  <div style="display: flex; flex-direction: column; gap: 1px;">
    <!-- Step 1 -->
    <div style="display: flex; align-items: flex-start; gap: 8px;">
      <span style="background: #e0f2fe; color: #0369a1; font-weight: 700; font-size: 0.85rem; width: 22px; height: 22px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;">1</span>
      <div style="color: #334155; line-height: 1.55;">
        <strong>Short Selling:</strong> Borrow shares of the overvalued company ($A$) and sell them immediately at the prevailing elevated market price.
      </div>
    </div>

    <!-- Step 2 -->
    <div style="display: flex; align-items: flex-start; gap: 12px;">
      <span style="background: #e0f2fe; color: #0369a1; font-weight: 700; font-size: 0.85rem; width: 22px; height: 22px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;">2</span>
      <div style="color: #334155; line-height: 1.55;">
        Using the cash proceeds generated, simultaneously buy shares of the undervalued company ($B$).
      </div>
    </div>

    <!-- Step 3 -->
    <div style="display: flex; align-items: flex-start; gap: 12px;">
      <span style="background: #e0f2fe; color: #0369a1; font-weight: 700; font-size: 0.85rem; width: 22px; height: 22px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;">3</span>
      <div style="color: #334155; line-height: 1.55;">
        Once the spread reverts to its historical mean, sell shares of $B$, buy back shares of $A$ to return them to the lender, and pocket the net spread difference.
      </div>
    </div>
  </div>
</div>

The primary advantage of this approach is being *market-neutral*: performance does not depend on whether the overall oil market trends upward or downward, but exclusively on spread convergence.

<hr style="border: none; border-top: 1px solid #cbd5e1; margin: 2.5rem 0; width: 100%;" />

### Implementation

Let's implement the data ingestion step in Python:
~~~python
import yfinance as yf

# Stock tickers:
# TTE.PA  : TotalEnergies on Euronext Paris
# SHEL.AS : Shell on Euronext Amsterdam
tickers = ["TTE.PA", "SHEL.AS"]

# Download split- and dividend-adjusted closing prices
data = yf.download(tickers, start="2021-01-01", end="2026-01-01", auto_adjust=True)

prices = data["Close"].dropna()
~~~
**Note:** The \`.dropna()\` call filters out exchange-specific holidays (for example, when the Amsterdam stock exchange is open while Paris is closed).

<div style="background-color: #f8fafc; border-left: 5px solid #2563eb; padding: 18px 20px; margin: 22px 0; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); font-family: inherit;">
  <h3 style="margin-top: 0; margin-bottom: 14px; color: #1e40af; font-size: 1.15rem; display: flex; align-items: center; gap: 8px;">
    <span>Frequently Asked Questions: Financial Markets</span>
  </h3>

  <p style="margin-bottom: 6px;"><strong>1. What is Euronext? Why is TotalEnergies listed in Paris and Shell in Amsterdam?</strong></p>
  <p style="margin-top: 0; color: #334155; line-height: 1.55;">
    A stock exchange functions much like a centralized marketplace where buyers and sellers trade ownership shares of companies. Euronext is the private operating company managing securities markets across several European financial centers.<br>
    TotalEnergies is a French corporation, making Paris (.PA) its primary historical venue, whereas Shell has Anglo-Dutch roots, making Amsterdam (.AS) its primary European home market. Companies deliberately choose their primary listing locations.<br>
    Asset prices do not exist uniformly across the world by default; a quoted price is merely the outcome of the most recent transaction agreed upon by two market participants. If Total shares traded at €49 in Paris and €51 in New York, arbitrageurs would immediately buy in Paris and sell in New York, collapsing the disparity back toward an equilibrium price of €50. This continuous arbitrage mechanism establishes consistent cross-market pricing.
  </p>

  <p style="margin-bottom: 6px; margin-top: 14px;"><strong>2. Why do traditional exchanges close at night in the Internet era?</strong></p>
  <p style="margin-top: 0; color: #334155; line-height: 1.55;">
    Traditional exchanges enforce defined operating hours to concentrate liquidity in one place at the same time. If trading remained continuous at 3 AM, order books would be extremely thin, and even a modest market order could swing the asset price by 10% simply due to lack of participating counter-parties.
  </p>

  <p style="margin-bottom: 6px; margin-top: 14px;"><strong>3. What are "adjusted" prices?</strong></p>
  <p style="margin-top: 0; margin-bottom: 0; color: #334155; line-height: 1.55;">
    Suppose you buy a share of stock for €100. The following day, the company distributes a €5 cash dividend to shareholders. Mechanically, the underlying share value adjusts down to €95. On a raw price chart, this appears as an abrupt jump from €100 to €95, which quantitative algorithms could mistake for a sudden drop in company fundamentals. In reality, total shareholder wealth is unchanged (€95 share + €5 cash). The **adjusted price** series smooths this artificial gap to remove the false loss.<br>
    The same principle applies to stock splits: if a firm with 10 shares trading at €1,000 splits 10-for-1 into 100 shares, each share is priced at €100, while the enterprise's aggregate equity value remains identical.
  </p>
</div>

### Relative Performance Visualization

To compare both stocks regardless of their nominal share price difference, we rebase each series to 100 at the beginning of the period:

~~~python
import matplotlib.pyplot as plt

normalized_prices = (prices / prices.iloc[0]) * 100 

plt.figure(figsize=(10, 5))
plt.plot(normalized_prices["TTE.PA"], label="TotalEnergies (TTE.PA)")
plt.plot(normalized_prices["SHEL.AS"], label="Shell (SHEL.AS)")
plt.title("Relative Performance: TotalEnergies vs Shell (2021 - 2026)")
plt.xlabel("Date")
plt.ylabel("Relative Performance (Base 100)")
plt.legend()
plt.grid(True, linestyle="--", alpha=0.6)
plt.show()
~~~

![](images/arb-stat-eng-1.png)

<hr style="border: none; border-top: 1px solid #cbd5e1; margin: 2.5rem 0; width: 100%;" />

## 2. Modeling and Spread Calculation

We now aim to define and mathematically quantify the **spread** between the two equities.

If TotalEnergies trades at €60 and Shell at €40, a naive spread would simply be $60 - 40 = 20 \text{ €}$. However, a 1% move in Total does not necessarily correspond to a 1% move in Shell.

Since both companies operate in identical economic sectors, we model their price relationship via an affine linear model with a time-dependent spread $\varepsilon_t$:

$$P_{\text{TTE}, t} = \alpha + \beta P_{\text{Shell}, t} + \varepsilon_t$$ 

Where:
<ul style="margin: 8px 0 14px 1.5rem; padding: 0; list-style-type: disc; line-height: 0.1;">
  <li style="margin-bottom: 4px;">$\beta$ denotes the *hedge ratio*: for each share of TotalEnergies purchased, we must short $\beta$ shares of Shell to maintain market neutrality.</li>
  <li style="margin-bottom: 4px;">$\alpha$ represents an adjustment constant (intercept).</li>
  <li style="margin-bottom: 4px;">$\varepsilon_t$ is the residual *spread* at time $t$.</li>
</ul>

### Cointegration

Individually, a stock price $P_t$ is a **non-stationary** process (integrated of order 1, denoted $I(1)$), commonly modeled as a geometric Brownian motion:
$$dP_t = \mu P_t dt + \sigma P_t d W_t$$
where $W_t$ is a standard Brownian motion and $\sigma$ represents volatility. Its mean is time-dependent and its variance diverges indefinitely.<br>
Generally, a linear combination of two $I(1)$ processes remains $I(1)$. However, in pairs trading, there may exist a specific pair $(\alpha, \beta)$ such that the residual spread $\varepsilon_t$ forms a **stationary** process (denoted $I(0)$). When this condition holds, TotalEnergies and Shell are said to be **cointegrated**.

$$\varepsilon_t = P_{\text{TTE}, t} - (\alpha + \beta P_{\text{SHEL}, t}) \qquad \text{ with } \quad \mathbb{E}[\varepsilon_t] = 0 \quad \text{and} \quad \operatorname{Var}(\varepsilon_t) = \sigma_{\varepsilon}^2 < +\infty$$

### Estimating $\alpha$ and $\beta$: Ordinary Least Squares (OLS)

We determine the parameters $\alpha$ and $\beta$ that minimize the sum of squared residuals $\sum \varepsilon_t^2$. Defining $S(\alpha, \beta) = \sum_t \varepsilon_t^2$ along with $y_t = P_{\text{TTE}, t}$ and $x_t = P_{\text{SHEL}, t}$, we minimize:
$$S(\alpha, \beta) = \sum_{t=1}^N (y_t - (\alpha + \beta x_t))^2$$
Because $S$ is a convex quadratic function, its global minimum occurs where both partial derivatives vanish:
$$\frac{\partial S}{\partial \alpha} = 0 \quad \text{and} \quad \frac{\partial S}{\partial \beta} = 0$$
Evaluating the first derivative:
$$\frac{\partial S}{\partial \alpha} = \sum_{t=1}^N -2\big(y_t - \alpha - \beta x_t\big) = 0$$
Multiplying by $\frac{1}{-2N}$, with sample means $\bar{y} = \frac{1}{N}\sum y_t$ and $\bar{x} = \frac{1}{N}\sum x_t$:
$$\bar{y} - \alpha - \beta \bar{x} = 0 \implies \boxed{\alpha = \bar{y} - \beta \bar{x}}$$
Next, taking the partial derivative with respect to $\beta$:
$$\frac{\partial S}{\partial \beta} = \sum_{t=1}^N -2 x_t \big(y_t - \alpha - \beta x_t\big) = 0$$
Substituting $\alpha$ into the equation:
$$\sum_{t=1}^N x_t \Big( (y_t - \bar{y}) - \beta (x_t - \bar{x}) \Big) = 0$$
Since the sum of zero-centered deviations $\sum_{t=1}^N (y_t - \bar{y}) = 0$ and $\sum_{t=1}^N (x_t - \bar{x}) = 0$, we have $\bar{x} \sum_{t=1}^N (y_t - \bar{y}) = 0$. Subtracting this yields:
$$\sum_{t=1}^N (x_t - \bar{x})(y_t - \bar{y}) - \beta \sum_{t=1}^N (x_t - \bar{x})^2 = 0 \quad \Longleftrightarrow \quad \boxed{\beta = \frac{\operatorname{Cov}(x, y)}{\operatorname{Var}(x)}}$$

### Detecting Anomalies

Now that we can estimate $\alpha$ and $\beta$ and compute the spread $\varepsilon_t$, we standardize the divergence by calculating the **Z-score**:
$$Z_t = \frac{\varepsilon_t - \mu_{\varepsilon_t}}{\sigma_{\varepsilon_t}}$$
If $\varepsilon_t$ is stationary, $Z_t$ approximately follows a standard normal distribution $\mathcal{N}(0, 1)$. In practice, $Z_t$ resides within $[-2, 2]$ roughly $95.4\%$ of the time.<br>
Consequently, when $|Z_t| > 2$, a statistical anomaly is identified, signaling a trading opportunity:
<ul style="margin: 8px 0 14px 1.5rem; padding: 0; list-style-type: disc; line-height: 0.1;">
  <li style="margin-bottom: 4px;">If $Z_t > 2$, the spread is elevated and Total is relatively overvalued: short Total, long Shell.</li>
  <li style="margin-bottom: 4px;">If $Z_t < -2$, the reverse applies: short Shell, long Total.</li>
</ul>

### Implementation

Because the relationship parameters $\alpha$ and $\beta$ can drift across changing macroeconomic regimes, we estimate them dynamically over a rolling window of \`W\` days. Similarly, the Z-score is standardized over a rolling window of \`window_z\` days to capture local volatility.

~~~python
import numpy as np
import statsmodels.api as sm
from statsmodels.regression.rolling import RollingOLS

W = 60         # Rolling estimation window for alpha and beta (days)
window_z = 60  # Rolling standardization window for Z-score (days)

y = prices["TTE.PA"]
x = prices["SHEL.AS"]
x_with_const = sm.add_constant(x)

# Rolling Ordinary Least Squares (Rolling OLS)
rols = RollingOLS(y, x_with_const, window=W)
rolling_model = rols.fit()

# Shift by 1 day to strictly eliminate lookahead bias
alpha = rolling_model.params["const"].shift(1)
beta = rolling_model.params["SHEL.AS"].shift(1)

spread = y - (alpha + beta * x)

# Rolling Z-score calculation
spread_mean = spread.rolling(window=window_z).mean()
spread_std = spread.rolling(window=window_z).std()
z_score = (spread - spread_mean) / spread_std
~~~

We can now plot the trajectories of the rolling hedge ratio $\beta_t$ and the spread Z-score $Z_t$:

~~~python 
fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(12, 8), sharex=True)

# Hedge ratio
ax1.plot(beta, label=f"Rolling Beta (W = {W} d)", color="purple", lw=1.2)
ax1.set_title("Hedge Ratio Dynamics (Beta)")
ax1.set_ylabel("Beta")
ax1.grid(True)
ax1.legend(loc="upper left")

# Spread Z-score
ax2.plot(z_score, label="Spread Z-score", color="blue", lw=1)
ax2.axhline(0, color="black", linestyle="--", alpha=0.7)
ax2.axhline(2.0, color="red", linestyle="--", label="Entry threshold (+-2)")
ax2.axhline(-2.0, color="red", linestyle="--")
ax2.axhline(0.5, color="green", linestyle=":", label="Exit threshold (+-0.5)")
ax2.axhline(-0.5, color="green", linestyle=":")

ax2.set_title("TotalEnergies / Shell Spread Z-Score")
ax2.set_xlabel("Date")
ax2.set_ylabel("Z-score")
ax2.grid(True)
ax2.legend(loc="upper left")

plt.tight_layout()
plt.show()
~~~
![](images/arb-stat-eng-2.png)

We then translate these statistical thresholds into discrete trading signals:

~~~python
signals = pd.DataFrame(index=z_score.index)
signals["z_score"] = z_score
signals["position"] = 0  
#  0: Flat (no active exposure)
#  1: Long spread (long Total, short Shell)
# -1: Short spread (short Total, long Shell)

ENTRY_THRESHOLD = 2.0
EXIT_THRESHOLD = 0.5

current_pos = 0
positions = []

for z in signals["z_score"]:
    if pd.isna(z):
        positions.append(0)
        continue

    if z >= ENTRY_THRESHOLD: 
        current_pos = -1
    elif z <= -ENTRY_THRESHOLD: 
        current_pos = 1
    elif abs(z) <= EXIT_THRESHOLD: 
        current_pos = 0
    
    positions.append(current_pos)  # Otherwise maintain previous day's position

signals["position"] = positions
~~~

## 3. Backtest Engine

We now simulate the historical performance of the strategy across our dataset. Friction parameters such as per-trade transaction fees can be calibrated via \`TRANSACTION_COST\`, along with portfolio starting capital via \`INITIAL_CAPITAL\`.

~~~python
# Daily percentage returns
returns = pd.DataFrame(index=prices.index)
returns["TTE"] = prices["TTE.PA"].pct_change()
returns["SHEL"] = prices["SHEL.AS"].pct_change()

returns["beta"] = beta

# Spread returns (weighted by hedge ratio)
returns["spread_return"] = (returns["TTE"] - returns["beta"] * returns["SHEL"]) / (1 + returns["beta"])

# Lag positions by 1 day to reflect execution at next market open
signals["position_applied"] = signals["position"].shift(1).fillna(0)
returns["strategy_gross"] = signals["position_applied"] * returns["spread_return"]

# Transaction costs
# 1 position reallocation = 2 orders executed (one for Total, one for Shell)
TRANSACTION_COST = 0.0005  # 0.05% (5 bps) per trade
trades = signals["position_applied"].diff().abs().fillna(0)
returns["costs"] = trades * TRANSACTION_COST

# Net strategy returns
returns["strategy_net"] = returns["strategy_gross"] - returns["costs"]

INITIAL_CAPITAL = 100_000
portfolio = pd.DataFrame(index=returns.index)
portfolio["equity_gross"] = INITIAL_CAPITAL * (1 + returns["strategy_gross"].fillna(0)).cumprod()
portfolio["equity_net"] = INITIAL_CAPITAL * (1 + returns["strategy_net"].fillna(0)).cumprod()
~~~

We visualize the resulting portfolio equity curve:

![](images/arb-stat-eng-3.png)

## 4. Performance Evaluation

The strategy visibly concludes in negative territory, but let us systematically examine the underlying risk and performance metrics:

<div style="overflow-x: auto; margin: 24px 0;">
  <table style="width: 100%; border-collapse: collapse; font-family: inherit; font-size: 0.95rem; text-align: left; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
    <thead>
      <tr style="background-color: #f1f5f9; border-bottom: 2px solid #cbd5e1; color: #1e293b;">
        <th style="padding: 12px 16px; font-weight: 700;">Metric</th>
        <th style="padding: 12px 16px; font-weight: 700;">Description</th>
        <th style="padding: 12px 16px; font-weight: 700; text-align: right;">Value</th>
      </tr>
    </thead>
    <tbody style="color: #334155;">
      <tr style="border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 12px 16px; font-weight: 600; color: #0f172a;">Active Period</td>
        <td style="padding: 12px 16px;">Effective duration analyzed (252 trading days/year basis).<br>Initial warm-up days are excluded as they are required to calibrate $\beta$.</td>
        <td style="padding: 12px 16px; text-align: right; font-family: monospace; font-weight: 700; color: #0284c7; white-space: nowrap;">4.6 years</td>
      </tr>
      <tr style="border-bottom: 1px solid #e2e8f0; background-color: #f8fafc;">
        <td style="padding: 12px 16px; font-weight: 600; color: #0f172a;">Total Net Return</td>
        <td style="padding: 12px 16px;">Cumulative return after subtracting transaction fees (5 bps = 0.05%).<br>$R = \frac{V_T}{V_0} - 1$, where $V_T, V_0$ denote final and initial portfolio equity.</td>
        <td style="padding: 12px 16px; text-align: right; font-family: monospace; font-weight: 700; color: #0284c7; white-space: nowrap;">-35.68%</td>
      </tr>
      <tr style="border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 12px 16px; font-weight: 600; color: #0f172a;">Annualized Return</td>
        <td style="padding: 12px 16px;">Compound Annual Growth Rate (CAGR).<br> CAGR = $(1+R)^{1/n_{\text{years}}} - 1$</td>
        <td style="padding: 12px 16px; text-align: right; font-family: monospace; font-weight: 700; color: #0284c7; white-space: nowrap;">-9.14%</td>
      </tr>
      <tr style="border-bottom: 1px solid #e2e8f0; background-color: #f8fafc;">
        <td style="padding: 12px 16px; font-weight: 600; color: #0f172a;">Annualized Volatility $\sigma_{\text{annual}}$</td>
        <td style="padding: 12px 16px;">Measures return dispersion and variance across the strategy lifespan.</td>
        <td style="padding: 12px 16px; text-align: right; font-family: monospace; font-weight: 700; color: #0284c7; white-space: nowrap;">8.56%</td>
      </tr>
      <tr style="border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 12px 16px; font-weight: 600; color: #0f172a;">Sharpe Ratio</td>
        <td style="padding: 12px 16px;">Risk-adjusted excess return metric.<br> $S=\frac{\mathbb E(R)-R_f}{\sigma_{\text{annual}}}$, where $R_f$ is the risk-free rate.<br> $S < 0$: negative excess return; $0 \lt S \lt 1$: strategy underperforms risk-free benchmarks; $S > 1$: excess return adequately compensates for risk.</td>
        <td style="padding: 12px 16px; text-align: right; font-family: monospace; font-weight: 700; color: #0284c7; white-space: nowrap;">-1.10</td>
      </tr>
      <tr style="border-bottom: 1px solid #e2e8f0; background-color: #f8fafc;">
        <td style="padding: 12px 16px; font-weight: 600; color: #0f172a;">Maximum Drawdown (MDD)</td>
        <td style="padding: 12px 16px;">Maximum peak-to-trough decline experienced had capital been committed at the worst historical peak and closed at the lowest trough.<br>$\text{MDD} = \min_{t} \left( \frac{V_t - \max_{s \le t} V_s}{\max_{s \le t} V_s} \right)$</td>
        <td style="padding: 12px 16px; text-align: right; font-family: monospace; font-weight: 700; color: #0284c7; white-space: nowrap;">-39.87%</td>
      </tr>
      <tr>
        <td style="padding: 12px 16px; font-weight: 600; color: #0f172a;">Win Rate (Days)</td>
        <td style="padding: 12px 16px;">Percentage of trading days with strictly positive returns, evaluated only on days with open positions.</td>
        <td style="padding: 12px 16px; text-align: right; font-family: monospace; font-weight: 700; color: #0284c7; white-space: nowrap;">45.59%</td>
      </tr>
    </tbody>
  </table>
</div>

The results are distinctly underwhelming. A major macroeconomic driver is that TotalEnergies and Shell followed diverging business trajectories over the 2021–2026 window: Shell refocused on conventional upstream fossil fuels, whereas Total committed heavily to renewables and clean power distribution.<br>

Replicating this framework on equities sharing virtually identical revenue mechanics—such as Mastercard and Visa—reveals a markedly improved performance profile:

<div style="overflow-x: auto; margin: 24px 0;">
  <table style="width: 100%; border-collapse: collapse; font-family: inherit; font-size: 0.95rem; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
    <thead>
      <tr style="background-color: #f1f5f9; border-bottom: 2px solid #cbd5e1; color: #1e293b;">
        <th style="padding: 12px 14px; font-weight: 700; text-align: center; white-space: nowrap;">Active Period</th>
        <th style="padding: 12px 14px; font-weight: 700; text-align: center; white-space: nowrap;">Net Return</th>
        <th style="padding: 12px 14px; font-weight: 700; text-align: center; white-space: nowrap;">Ann. Return (CAGR)</th>
        <th style="padding: 12px 14px; font-weight: 700; text-align: center; white-space: nowrap;">Ann. Volatility</th>
        <th style="padding: 12px 14px; font-weight: 700; text-align: center; white-space: nowrap;">Sharpe Ratio</th>
        <th style="padding: 12px 14px; font-weight: 700; text-align: center; white-space: nowrap;">Max Drawdown</th>
        <th style="padding: 12px 14px; font-weight: 700; text-align: center; white-space: nowrap;">Win Rate (Days)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 14px 14px; text-align: center; font-family: monospace; font-weight: 700; color: #0284c7; white-space: nowrap;">4.3 years</td>
        <td style="padding: 14px 14px; text-align: center; font-family: monospace; font-weight: 700; color: #16a34a; white-space: nowrap;">+6.96%</td>
        <td style="padding: 14px 14px; text-align: center; font-family: monospace; font-weight: 700; color: #16a34a; white-space: nowrap;">+1.59%</td>
        <td style="padding: 14px 14px; text-align: center; font-family: monospace; font-weight: 700; color: #0284c7; white-space: nowrap;">5.19%</td>
        <td style="padding: 14px 14px; text-align: center; font-family: monospace; font-weight: 700; color: #0284c7; white-space: nowrap;">0.34</td>
        <td style="padding: 14px 14px; text-align: center; font-family: monospace; font-weight: 700; color: #dc2626; white-space: nowrap;">-6.31%</td>
        <td style="padding: 14px 14px; text-align: center; font-family: monospace; font-weight: 700; color: #0284c7; white-space: nowrap;">52.47%</td>
      </tr>
    </tbody>
  </table>
</div>

Even in this scenario, the Sharpe ratio remains well below $1$, suggesting that under this naive configuration, holding short-duration sovereign debt or cash deposits would have been superior on a risk-adjusted basis. This is largely expected: institutional hedge funds trade much more sophisticated formulations of statistical arbitrage with tick-level microstructure data and co-location, largely exhausting simple retail mispricings.
`}
},

// Projet 2
{slug:'stochastic-vectorisation',thumb:'images/vect-1bis.png',year:'2026',tags:['Genetic-Algorithm','Python'],
  fr:{title:String.raw`Comment faire un TIPE en moins de 5Mo ?`,role:'Projet TIPE',status:'Terminé',
  blurb:String.raw`Comment faire tenir une présentation avec plein de photos en 5 Mo ? Exploration d'une approche stochastique de vectorisation d'images.`,
  lead:String.raw`Nous sommes tenus de rendre un TIPE (projet de fin de prépa) de moins 5 Mo. Comment compresser un TIPE contenant plein d'images pour le faire passer sous la barre des 5 Mo ? <br><br>
  Face à cette contrainte, le réflexe consiste à compresser les images en JPEG. Mais on peut faire plus amusant. Une image vectorielle (comme un fichier SVG) présente l'avantage d'avoir un poids totalement décorrélé de sa résolution d'affichage tout étant net à n'importe quel niveau de zoom.<br><br>
  L'objectif de ce projet a été de concevoir et d'implémenter en C un **algorithme génératif stochastique** capable de reconstruire n'importe quelle image à partir d'une superposition de formes géométriques élémentaires (cercles, polygones). Au final, on arrive à réduire le poids des fichiers jusqu'à un facteur 70.`,
  links:[['Code source & Slides','https://github.com/AntoineTHEOBALDROSA/Image-Vectorialisation']],
  body:String.raw`
  <div style="margin-top: -5.5rem;"></div>

<div style="display: flex; gap: 16px; justify-content: center; align-items: center; margin: 24px 0;">
  <img src="images/vect-1.png" alt="Description 1" style="width: 35%; max-width: 350px; height: auto; border-radius: 6px;" />
  <img src="images/vect-1bis.png" alt="Description 2" style="width: 35%; max-width: 350px; height: auto; border-radius: 6px;" />
</div>

## Plan du projet

1. **La contrainte des 5 Mo et vectorialisation**
2. **Algorithme évolutif**
3. **Implémentation en C & multi-threading**
4. **Compression du fichier généré et analyse des performances**

<hr style="border: none; border-top: 1px solid #cbd5e1; margin: 2.5rem 0; width: 100%;" />

## 1. La contrainte des 5 Mo et vectorialisation

La plateforme de dépôt des concours d'entrée aux grandes écoles impose une limite de $5$ Mo pour la présentation de notre projet de fin d'étude.

Le but va être de compresser des images en les vectorialisant, puis d'implémenter l'algorithme avec le module LaTeX TikZ qui permet de tracer des figures véctorialisées dans un document LaTeX.


<div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 5px solid #0284c7; padding: 18px 22px; margin: 22px 0; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.04); font-family: inherit;">
  <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px;">
    <strong style="color: #0369a1; font-size: 1.05rem;">Principe de l'algorithme</strong>
  </div>

  <div style="display: flex; flex-direction: column; gap: 10px;">
    <!-- Étape 1 -->
    <div style="display: flex; align-items: flex-start; gap: 10px;">
      <span style="background: #e0f2fe; color: #0369a1; font-weight: 700; font-size: 0.85rem; width: 22px; height: 22px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;">1</span>
      <div style="color: #334155; line-height: 1.55;">
        <strong>Initialisation :</strong> On part d'une image vierge $I$ de mêmes dimensions que l'image cible
      </div>
    </div>

    <!-- Étape 2 -->
    <div style="display: flex; align-items: flex-start; gap: 10px;">
      <span style="background: #e0f2fe; color: #0369a1; font-weight: 700; font-size: 0.85rem; width: 22px; height: 22px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;">2</span>
      <div style="color: #334155; line-height: 1.55;">
        On génère aléatoirement  $N_{\text{it}}$ formes aléatoires (positions, tailles aléatoires). Pour la couleur, on leur attribue la couleur moyenne de la zone sous-jacente de l'image cible.
      </div>
    </div>

    <!-- Étape 3 -->
    <div style="display: flex; align-items: flex-start; gap: 10px;">
      <span style="background: #e0f2fe; color: #0369a1; font-weight: 700; font-size: 0.85rem; width: 22px; height: 22px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;">3</span>
      <div style="color: #334155; line-height: 1.55;">
        <strong>Mutation et Sélection :</strong> On retient les $N_{\text{selected}}$ meilleures formes réduisant le plus l'écart avec l'image cible, puis on génère des variantes sur plusieurs générations successives. Après plus générations, on garde la meilleure forme trouvée sur l'ensemble des générations et on la dessine sur l'image $I$.
      </div>
    </div>

    <!-- Étape 4 -->
    <div style="display: flex; align-items: flex-start; gap: 10px;">
      <span style="background: #e0f2fe; color: #0369a1; font-weight: 700; font-size: 0.85rem; width: 22px; height: 22px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;">4</span>
      <div style="color: #334155; line-height: 1.55;">
        On réitère ce proccessus de séléction $N_{\text{shape}} \approx 2000 \text{ à } 8000$ fois.
      </div>
    </div>
  </div>
</div>

### Exemple d'exécution

On commence par générer $N_{\text{it}} = 10$ formes puis on garde les $N_{\text{selected}}=2$ meilleures, ici les deux de la première colonne (bords rouges).

<img src="images/vect-2.png" alt="Description" style="display: block; margin: 24px auto; max-width: 65%; height: auto; border-radius: 6px;" />

A partir de ces deux formes, on regenère des variations de chacune d'entre elles. C'est la deuxième génération. 

<img src="images/vect-3.png" alt="Description" style="display: block; margin: 24px auto; max-width: 65%; height: auto; border-radius: 6px;" />

On va garder la meilleure, disons que c'est celle-ci :

<img src="images/vect-4.png" alt="Description" style="display: block; margin: 24px auto; max-width: 12%; height: auto; border-radius: 6px;" />

On place alors cette forme sur le canvas blanc $I$ puis on recommence avec ce nouveau canvas :

<img src="images/vect-5.png" alt="Description" style="display: block; margin: 24px auto; max-width: 65%; height: auto; border-radius: 6px;" />

Après $N=6000$ itérations, voilà le résultat : 

<img src="images/vect-6.png" alt="Description" style="display: block; margin: 24px auto; max-width: 30%; height: auto; border-radius: 6px;" />

<div style="background-color: #f8fafc; border-left: 5px solid #2563eb; padding: 0px 20px; margin: 22px 0; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); font-family: inherit;">
  <p style="margin-bottom: 6px; margin-top: 14px;"><strong>Cercles ou polygones ?</strong></p>
  <p style="margin-top: 0; margin-bottom: 0; color: #334155; line-height: 1.55;">
    Le cercle a l'avantage de n'avoir que $3$ paramètres ($x, y, r$), alors qu'un triangle ou en général un polygône à $n$ côtés a $2n$ paramètres. De plus, pour avoir fait des essais, si on autorise les triangles l'algorithme décide de les aplatir un maximum pour conrètement traçer des lignes..
  </p>
</div>

<hr style="border: none; border-top: 1px solid #cbd5e1; margin: 2.5rem 0; width: 100%;" />

## 2. Algorithme évolutif

Pour guider l'algorithme vers l'image originale $T$, il faut définir une distance mesurant l'écart entre l'image qu'on construit itérativement $I$ et l'image cible $T$.

Soient $T$ et $B$ deux images de dimensions $W \times H$. Il existe deux distances classiques :

### 1. Distance de Manhattan ($L_1$)
$$D_{L_1}(T, B) = \sum_{p \in \text{pixels}}\big| T[p] - B[p] \big|$$

### 2. Erreur quadratique / RMS ($L_2$)
$$D_{L_2}(T, B) = \sqrt{\frac{1}{WH} \sum_{p \in \text{pixels}} \big( T[p] - B[p] \big)^2}$$

En pratique, la distance $L_2$ est beaucoup plus longue à calculer et les résultats sont indistinguables donc dans toute la suite du projet j'utiliserai la distance $L_1$.

### Choix de la couleur

Pour une forme géométrique donnée $\mathcal{S}$ (souvent un cercle) recouvrant un ensemble de pixels $\Omega_{\mathcal{S}}$, la couleur $(R, G, B)$ attribuée à la forme correspond à la couleur moyenne des pixels de l'image cible situés sous cette forme $\mathcal{S}$:

$$\bar{C} = \frac{1}{|\Omega_{\mathcal{S}}|} \sum_{p \in \Omega_{\mathcal{S}}} T(p)$$

Cette heuristique évite d'introduire un nouveau paramètre « couleur » à deviner pour l'algorithme.

<hr style="border: none; border-top: 1px solid #cbd5e1; margin: 2.5rem 0; width: 100%;" />

## 3. Implémentation en C & multi-threading

L'implémentation a été entièrement réalisée en C avec la bibliothèque graphique **Cairo** (\`libcairo\`) pour dessiner les formes géométriques.

### Structures de données

Chaque forme géométrique et chaque image sont représentées par des structures. Par exemple pour le cercle et le triangle :

~~~python
typedef struct color {
    uint8_t r, g, b, a;
} color;

typedef struct Circle {
    int centerx, centery, radius;
    color c;
} Circle;

typedef struct Triangle {
    int x1, y1, x2, y2, x3, y3;
    color c;
} Triangle;

typedef enum { CIRCLE, TRIANGLE } ShapeType;

typedef struct Shape {
    ShapeType type;
    union {
        Circle circle;
        Triangle triangle;
    };
} Shape;
~~~

### Parallélisation (\`pthread\`)

L'étape la plus coûteuse de l'algorithme est le calcul de la forme optimale parmi les $N_{\text{it}} = 160$ formes aléatoires. Chaque thread se voit confier une copie temporaire du canevas, y dessine une forme, et calcule la distance résultante à l'image cile $T$. Tout ça peut se faire en parallèle :

~~~c
for (int i = 0; i < Nit; i += NUM_THREADS) {
    for (int t = 0; t < NUM_THREADS; t++) {
        thread_args[t].target_im = target_im;
        thread_args[t].blank     = blank;
        thread_args[t].shapes    = shapes;
        thread_args[t].scores    = scores;
        thread_args[t].i         = i + t;

        pthread_create(&threads[t], NULL, thread_function, &thread_args[t]);
    }
    for (int t = 0; t < NUM_THREADS; t++) {
        pthread_join(threads[t], NULL);
    }
}
// Tri des formes selon leur score pour ne conserver que les meilleures
sort_im_score(shapes, scores, Nit);
~~~

Grâce à cette parallélisation sur processeur multi-cœurs (8 à 10 threads), le temps de traitement moyen pour générer une image avec 6000 formes passe d'environ **64 minutes à 21 minutes**, soit une accélération d'un facteur 3.

### Analyse de l'algorithme

Si on regrade la taille des rayons que décide de traçer l'algorithme au cours du temps, on voit qu'ils décroissent rapidement : l'algorithme a compris qu'après avoir commencé à dessiner, ce n'était pas une bonne idée de placer un énorme cercle car cela risque d'effacer tout le dessin produit jusqu'alors.

<img src="images/vect-7.png" alt="Description" style="display: block; margin: 24px auto; max-width: 50%; height: auto; border-radius: 6px;" />

<hr style="border: none; border-top: 1px solid #cbd5e1; margin: 2.5rem 0; width: 100%;" />

## 4. Compression du fichier généré et analyse des performances

Une fois les $N$ formes placées, on obtient un fichier XML qui contient les $N$ formes.

~~~xml
<circle cx="1005" cy="777" r="1606" fill="rgb(102,74,60)" />
<circle cx="914" cy="973" r="518" fill="rgb(168,128,107)" />
~~~

L'idée est qu'on peut compresser ce document, car les informations sont redondantes, à l'excpetion de \`cx, cy, r, fill\` qu'on peut compresser en binaire.

### Bilan comparatif des performances

Sur une image test de référence haute résolution issue de la présentation :

<div style="overflow-x: auto; margin: 24px 0;">
  <table style="width: 100%; border-collapse: collapse; font-family: inherit; font-size: 0.95rem; text-align: left; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
    <thead>
      <tr style="background-color: #f1f5f9; border-bottom: 2px solid #cbd5e1; color: #1e293b;">
        <th style="padding: 12px 16px; font-weight: 700;">Format / Méthode</th>
        <th style="padding: 12px 16px; font-weight: 700;">Description</th>
        <th style="padding: 12px 16px; font-weight: 700; text-align: right;">Poids</th>
        <th style="padding: 12px 16px; font-weight: 700; text-align: right;">Ratio vs PNG</th>
      </tr>
    </thead>
    <tbody style="color: #334155;">
      <tr style="border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 12px 16px; font-weight: 600; color: #0f172a;">Image originale (PNG)</td>
        <td style="padding: 12px 16px;">Image de référence</td>
        <td style="padding: 12px 16px; text-align: right; font-family: monospace; font-weight: 700; color: #0284c7; white-space: nowrap;">4 389 ko</td>
        <td style="padding: 12px 16px; text-align: right; font-family: monospace; font-weight: 700; color: #0284c7; white-space: nowrap;">1,0x</td>
      </tr>
      <tr style="border-bottom: 1px solid #e2e8f0; background-color: #f8fafc;">
        <td style="padding: 12px 16px; font-weight: 600; color: #0f172a;">JPEG standard</td>
        <td style="padding: 12px 16px;">Compression avec perte</td>
        <td style="padding: 12px 16px; text-align: right; font-family: monospace; font-weight: 700; color: #0284c7; white-space: nowrap;">473 ko</td>
        <td style="padding: 12px 16px; text-align: right; font-family: monospace; font-weight: 700; color: #0284c7; white-space: nowrap;">9,3x</td>
      </tr>
      <tr style="border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 12px 16px; font-weight: 600; color: #0f172a;">Fichier SVG brut</td>
        <td style="padding: 12px 16px;">Fichier XML content les $6000$ cercles.</td>
        <td style="padding: 12px 16px; text-align: right; font-family: monospace; font-weight: 700; color: #0284c7; white-space: nowrap;">279 ko</td>
        <td style="padding: 12px 16px; text-align: right; font-family: monospace; font-weight: 700; color: #0284c7; white-space: nowrap;">15,7x</td>
      </tr>
      <tr style="border-bottom: 1px solid #e2e8f0; background-color: #f8fafc;">
        <td style="padding: 12px 16px; font-weight: 600; color: #0f172a;">Vectoriel compressé (4-bits)</td>
        <td style="padding: 12px 16px;">Fichier XML compressé.</td>
        <td style="padding: 12px 16px; text-align: right; font-family: monospace; font-weight: 700; color: #16a34a; white-space: nowrap;">63 ko</td>
        <td style="padding: 12px 16px; text-align: right; font-family: monospace; font-weight: 700; color: #16a34a; white-space: nowrap;">69,7x</td>
      </tr>
    </tbody>
  </table>
</div>

Le fichier final compressé est **69,7 fois plus léger** que le PNG d'origine et **7,5 fois plus compact qu'un JPEG**, tout en conservant une image exploitable dans une présentation!

<div style="overflow-x: auto; margin: 24px 0;">
  <table style="width: 100%; border-collapse: collapse; font-family: inherit; font-size: 0.95rem; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
    <thead>
      <tr style="background-color: #f1f5f9; border-bottom: 2px solid #cbd5e1; color: #1e293b;">
        <th style="padding: 12px 14px; font-weight: 700; text-align: left;">Inconvénients</th>
        <th style="padding: 12px 14px; font-weight: 700; text-align: left;">Avantages</th>
      </tr>
    </thead>
    <tbody style="color: #334155;">
      <tr style="border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 12px 14px; vertical-align: top;">
          • Temps de génération élevé (~20 min sur CPU multi-cœurs).<br>
          • Dégradation esthétique sur les textures ultra-détaillées ou le texte fin.<br>
          • Inadapté pour des logos simples (un triangle parfait SVG pèse 0,2 ko vs 27 ko reconstitué par mon algorithme).
        </td>
        <td style="padding: 12px 14px; vertical-align: top;">
          • <strong>Taux de compression exceptionnel</strong> (x$70$).<br>
          • Image nette quel que soit le niveau de zoom.<br>
          • <strong>Rendu artistique :</strong> effet d'aquarelle ou de mosaïque très expressif.<br>
          • Intégration native dans du code source LaTeX / TikZ.
        </td>
      </tr>
    </tbody>
  </table>
</div>
`},en: {
  title: String.raw`How to Fit a TIPE Project into Under 5 MB?`,
  role: 'TIPE Project',
  status: 'Completed',
  blurb: String.raw`How do you fit a photo-heavy presentation into 5 MB? Exploring a stochastic approach to image vectorization.`,
  lead: String.raw`We are required to submit a TIPE (end-of-prep-school research project) of less than 5 MB. How can you compress a presentation packed with images to get under the 5 MB threshold? <br><br>
  Faced with this constraint, the natural reflex is to compress images into JPEG. But we can do something more interesting. A vector image (like an SVG file) has the advantage of having a file size completely decoupled from its display resolution, while remaining crisp at any zoom level.<br><br>
  The goal of this project was to design and implement in C a **stochastic generative algorithm** capable of reconstructing any image from a superposition of elementary geometric shapes (circles, polygons). In the end, we achieved file size reductions by up to a factor of 70.`,
  links: [['Source Code & Slides', 'https://github.com/AntoineTHEOBALDROSA/Image-Vectorialisation']],
  body: String.raw`
  <div style="margin-top: -5.5rem;"></div>

<div style="display: flex; gap: 16px; justify-content: center; align-items: center; margin: 24px 0;">
  <img src="images/vect-1.png" alt="Description 1" style="width: 35%; max-width: 350px; height: auto; border-radius: 6px;" />
  <img src="images/vect-1bis.png" alt="Description 2" style="width: 35%; max-width: 350px; height: auto; border-radius: 6px;" />
</div>

## Project Outline

1. **The 5 MB Constraint and Vectorization**
2. **Evolutionary Algorithm**
3. **C Implementation & Multi-threading**
4. **Compression of the Generated File & Performance Analysis**

<hr style="border: none; border-top: 1px solid #cbd5e1; margin: 2.5rem 0; width: 100%;" />

## 1. The 5 MB Constraint and Vectorization

The submission platform for the competitive entrance exams to the French Grandes Écoles imposes a $5$ MB limit on final-year research project presentations.

The objective is to compress images by vectorizing them, then integrate the algorithm using the LaTeX TikZ package, which renders vectorized figures natively within a LaTeX document.

<div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 5px solid #0284c7; padding: 18px 22px; margin: 22px 0; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.04); font-family: inherit;">
  <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px;">
    <strong style="color: #0369a1; font-size: 1.05rem;">Algorithm Overview</strong>
  </div>

  <div style="display: flex; flex-direction: column; gap: 10px;">
    <!-- Step 1 -->
    <div style="display: flex; align-items: flex-start; gap: 10px;">
      <span style="background: #e0f2fe; color: #0369a1; font-weight: 700; font-size: 0.85rem; width: 22px; height: 22px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;">1</span>
      <div style="color: #334155; line-height: 1.55;">
        <strong>Initialization:</strong> Start with a blank canvas $I$ sharing the same dimensions as the target image.
      </div>
    </div>

    <!-- Step 2 -->
    <div style="display: flex; align-items: flex-start; gap: 10px;">
      <span style="background: #e0f2fe; color: #0369a1; font-weight: 700; font-size: 0.85rem; width: 22px; height: 22px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;">2</span>
      <div style="color: #334155; line-height: 1.55;">
        Randomly generate $N_{\text{it}}$ candidate shapes (random positions and sizes). For color, assign each the mean color of the underlying area in the target image.
      </div>
    </div>

    <!-- Step 3 -->
    <div style="display: flex; align-items: flex-start; gap: 10px;">
      <span style="background: #e0f2fe; color: #0369a1; font-weight: 700; font-size: 0.85rem; width: 22px; height: 22px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;">3</span>
      <div style="color: #334155; line-height: 1.55;">
        <strong>Mutation and Selection:</strong> Retain the $N_{\text{selected}}$ best-performing shapes that minimize the difference with the target image the most, then generate variations across successive generations. After several generations, keep the best shape found overall and render it onto canvas $I$.
      </div>
    </div>

    <!-- Step 4 -->
    <div style="display: flex; align-items: flex-start; gap: 10px;">
      <span style="background: #e0f2fe; color: #0369a1; font-weight: 700; font-size: 0.85rem; width: 22px; height: 22px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;">4</span>
      <div style="color: #334155; line-height: 1.55;">
        Repeat this selection process $N_{\text{shape}} \approx 2000 \text{ to } 8000$ times.
      </div>
    </div>
  </div>
</div>

### Execution Example

We begin by generating $N_{\text{it}} = 10$ shapes and keep the $N_{\text{selected}} = 2$ best candidates—here, the two in the first column (red borders).

<img src="images/vect-2.png" alt="Description" style="display: block; margin: 24px auto; max-width: 65%; height: auto; border-radius: 6px;" />

From these two shapes, we generate variations of each. This represents the second generation.

<img src="images/vect-3.png" alt="Description" style="display: block; margin: 24px auto; max-width: 65%; height: auto; border-radius: 6px;" />

We select the best candidate—suppose it is this one:

<img src="images/vect-4.png" alt="Description" style="display: block; margin: 24px auto; max-width: 12%; height: auto; border-radius: 6px;" />

We then place this shape onto the white canvas $I$ and repeat the process on this updated canvas:

<img src="images/vect-5.png" alt="Description" style="display: block; margin: 24px auto; max-width: 65%; height: auto; border-radius: 6px;" />

After $N = 6000$ iterations, here is the outcome:

<img src="images/vect-6.png" alt="Description" style="display: block; margin: 24px auto; max-width: 30%; height: auto; border-radius: 6px;" />

<div style="background-color: #f8fafc; border-left: 5px solid #2563eb; padding: 0px 20px; margin: 22px 0; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); font-family: inherit;">
  <p style="margin-bottom: 6px; margin-top: 14px;"><strong>Circles or Polygons?</strong></p>
  <p style="margin-top: 0; margin-bottom: 0; color: #334155; line-height: 1.55;">
    Circles have the distinct advantage of requiring only $3$ parameters ($x, y, r$), whereas a triangle—or generally an $n$-sided polygon—requires $2n$ parameters. Additionally, practical tests showed that when triangles were allowed, the algorithm systematically flattened them as much as possible to effectively draw straight lines.
  </p>
</div>

<hr style="border: none; border-top: 1px solid #cbd5e1; margin: 2.5rem 0; width: 100%;" />

## 2. Evolutionary Algorithm

To guide the algorithm toward the original image $T$, we must define a distance metric measuring the discrepancy between the iteratively constructed image $I$ and the target image $T$.

Let $T$ and $B$ be two images of dimensions $W \times H$. Two standard distances are commonly used:

### 1. Manhattan Distance ($L_1$)
$$D_{L_1}(T, B) = \sum_{p \in \text{pixels}}\big| T[p] - B[p] \big|$$

### 2. Root Mean Square Error / RMS ($L_2$)
$$D_{L_2}(T, B) = \sqrt{\frac{1}{WH} \sum_{p \in \text{pixels}} \big( T[p] - B[p] \big)^2}$$

In practice, the $L_2$ distance is much more computationally demanding and yields visually indistinguishable results. Therefore, the $L_1$ distance is used throughout the rest of the project.

### Color Selection

For a given geometric shape $\mathcal{S}$ (typically a circle) covering a set of pixels $\Omega_{\mathcal{S}}$, the $(R, G, B)$ color assigned to the shape corresponds to the average color of the target image pixels covered by $\mathcal{S}$:

$$\bar{C} = \frac{1}{|\Omega_{\mathcal{S}}|} \sum_{p \in \Omega_{\mathcal{S}}} T(p)$$

This heuristic eliminates the need for the algorithm to search for an extra "color" parameter.

<hr style="border: none; border-top: 1px solid #cbd5e1; margin: 2.5rem 0; width: 100%;" />

## 3. C Implementation & Multi-threading

The entire implementation was written in C using the **Cairo** graphics library (\`libcairo\`) to render geometric primitives.

### Data Structures

Every geometric shape and image is represented by dedicated structures. For example, for circles and triangles:

~~~python
typedef struct color {
    uint8_t r, g, b, a;
} color;

typedef struct Circle {
    int centerx, centery, radius;
    color c;
} Circle;

typedef struct Triangle {
    int x1, y1, x2, y2, x3, y3;
    color c;
} Triangle;

typedef enum { CIRCLE, TRIANGLE } ShapeType;

typedef struct Shape {
    ShapeType type;
    union {
        Circle circle;
        Triangle triangle;
    };
} Shape;
~~~

### Parallelization (\`pthread\`)

The computational bottleneck is determining the optimal shape out of the $N_{\text{it}} = 160$ random candidates. Each thread receives a temporary copy of the canvas, draws a shape onto it, and calculates the resulting distance to the target image $T$. All of this executes concurrently:

~~~c
for (int i = 0; i < Nit; i += NUM_THREADS) {
    for (int t = 0; t < NUM_THREADS; t++) {
        thread_args[t].target_im = target_im;
        thread_args[t].blank     = blank;
        thread_args[t].shapes    = shapes;
        thread_args[t].scores    = scores;
        thread_args[t].i         = i + t;

        pthread_create(&threads[t], NULL, thread_function, &thread_args[t]);
    }
    for (int t = 0; t < NUM_THREADS; t++) {
        pthread_join(threads[t], NULL);
    }
}
// Sort shapes by score to keep only the best ones
sort_im_score(shapes, scores, Nit);
~~~

Leveraging this multi-core parallelization (8 to 10 threads), the average processing time to generate an image with 6,000 shapes drops from roughly **64 minutes to 21 minutes**, achieving a 3x speedup.

### Algorithm Analysis

Plotting the radius sizes chosen by the algorithm over time reveals a sharp decrease: the algorithm quickly "realizes" that once the base composition is established, adding large circles risks obliterating fine details drawn in earlier iterations.

<img src="images/vect-7.png" alt="Description" style="display: block; margin: 24px auto; max-width: 50%; height: auto; border-radius: 6px;" />

<hr style="border: none; border-top: 1px solid #cbd5e1; margin: 2.5rem 0; width: 100%;" />

## 4. Compression of the Generated File & Performance Analysis

Once all $N$ shapes are positioned, the output is an XML file containing the $N$ geometric primitives:

~~~xml
<circle cx="1005" cy="777" r="1606" fill="rgb(102,74,60)" />
<circle cx="914" cy="973" r="518" fill="rgb(168,128,107)" />
~~~

Because the structural tags are repetitive, we can substantially compress this document by binary-encoding only the essential attributes: \`cx, cy, r, fill\`.

### Comparative Performance Summary

Evaluated on a high-resolution benchmark image from the presentation:

<div style="overflow-x: auto; margin: 24px 0;">
  <table style="width: 100%; border-collapse: collapse; font-family: inherit; font-size: 0.95rem; text-align: left; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
    <thead>
      <tr style="background-color: #f1f5f9; border-bottom: 2px solid #cbd5e1; color: #1e293b;">
        <th style="padding: 12px 16px; font-weight: 700;">Format / Method</th>
        <th style="padding: 12px 16px; font-weight: 700;">Description</th>
        <th style="padding: 12px 16px; font-weight: 700; text-align: right;">Size</th>
        <th style="padding: 12px 16px; font-weight: 700; text-align: right;">Ratio vs PNG</th>
      </tr>
    </thead>
    <tbody style="color: #334155;">
      <tr style="border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 12px 16px; font-weight: 600; color: #0f172a;">Original image (PNG)</td>
        <td style="padding: 12px 16px;">Reference image</td>
        <td style="padding: 12px 16px; text-align: right; font-family: monospace; font-weight: 700; color: #0284c7; white-space: nowrap;">4,389 kB</td>
        <td style="padding: 12px 16px; text-align: right; font-family: monospace; font-weight: 700; color: #0284c7; white-space: nowrap;">1.0x</td>
      </tr>
      <tr style="border-bottom: 1px solid #e2e8f0; background-color: #f8fafc;">
        <td style="padding: 12px 16px; font-weight: 600; color: #0f172a;">Standard JPEG</td>
        <td style="padding: 12px 16px;">Lossy compression</td>
        <td style="padding: 12px 16px; text-align: right; font-family: monospace; font-weight: 700; color: #0284c7; white-space: nowrap;">473 kB</td>
        <td style="padding: 12px 16px; text-align: right; font-family: monospace; font-weight: 700; color: #0284c7; white-space: nowrap;">9.3x</td>
      </tr>
      <tr style="border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 12px 16px; font-weight: 600; color: #0f172a;">Raw SVG file</td>
        <td style="padding: 12px 16px;">XML file containing the $6000$ circles.</td>
        <td style="padding: 12px 16px; text-align: right; font-family: monospace; font-weight: 700; color: #0284c7; white-space: nowrap;">279 kB</td>
        <td style="padding: 12px 16px; text-align: right; font-family: monospace; font-weight: 700; color: #0284c7; white-space: nowrap;">15.7x</td>
      </tr>
      <tr style="border-bottom: 1px solid #e2e8f0; background-color: #f8fafc;">
        <td style="padding: 12px 16px; font-weight: 600; color: #0f172a;">Compressed vector (4-bit)</td>
        <td style="padding: 12px 16px;">Compressed XML file.</td>
        <td style="padding: 12px 16px; text-align: right; font-family: monospace; font-weight: 700; color: #16a34a; white-space: nowrap;">63 kB</td>
        <td style="padding: 12px 16px; text-align: right; font-family: monospace; font-weight: 700; color: #16a34a; white-space: nowrap;">69.7x</td>
      </tr>
    </tbody>
  </table>
</div>

The final compressed file is **69.7 times lighter** than the original PNG and **7.5 times more compact than JPEG**, while producing an image fully suitable for slide presentations!

<div style="overflow-x: auto; margin: 24px 0;">
  <table style="width: 100%; border-collapse: collapse; font-family: inherit; font-size: 0.95rem; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
    <thead>
      <tr style="background-color: #f1f5f9; border-bottom: 2px solid #cbd5e1; color: #1e293b;">
        <th style="padding: 12px 14px; font-weight: 700; text-align: left;">Drawbacks</th>
        <th style="padding: 12px 14px; font-weight: 700; text-align: left;">Advantages</th>
      </tr>
    </thead>
    <tbody style="color: #334155;">
      <tr style="border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 12px 14px; vertical-align: top;">
          • High processing time (~20 min on multi-core CPU).<br>
          • Visual degradation on fine text or ultra-detailed textures.<br>
          • Inefficient for basic vector artwork (a clean native SVG triangle is ~0.2 kB vs ~27 kB when reconstructed by this algorithm).
        </td>
        <td style="padding: 12px 14px; vertical-align: top;">
          • <strong>Outstanding compression ratio</strong> (up to 70x).<br>
          • Infinite resolution and sharpness at any zoom level.<br>
          • <strong>Distinct artistic style:</strong> creates an expressive watercolor or mosaic effect.<br>
          • Native integration into LaTeX / TikZ documents.
        </td>
      </tr>
    </tbody>
  </table>
</div>
`}
}
],

/* =========================================================
   5. ARTICLES 
   ========================================================= */
articles:[

  
// ARTICLE MILLER RABIN
{slug:'miller-rabin',cat:'math',date:'2026-09-15',read:6,
 fr: {
    title: String.raw`Test de Miller-Rabin - Le meilleur test de primalité ?`,
    blurb: String.raw`Comment déterminer rapidement si un nombre entier est premier ?`,
    body: String.raw`
Dans tout l'article, $n$ désigne un entier impair supérieur ou égal à $3$ dont on souhaite tester la primalité.

Le test de **Miller-Rabin** permet de tester la primalité de nombres. Il repose sur deux résultats simples mais fondamentaux :

<div style="background: rgba(59, 130, 246, 0.05); border-left: 4px solid #3b82f6; padding: 14px 18px; margin: 18px 0; border-radius: 4px;">
  <strong style="color: #1d4ed8; font-size: 1.05em;">1. Le petit théorème de Fermat</strong><br/>
  Si $p$ est premier et si $\operatorname{pgcd}(a, p) = 1$, alors :
  $$a^{p-1} \equiv 1 \pmod p$$
</div>

<div style="background: rgba(59, 130, 246, 0.05); border-left: 4px solid #3b82f6; padding: 14px 18px; margin: 18px 0; border-radius: 4px;">
  <strong style="color: #1d4ed8; font-size: 1.05em;">2. Unicité des racines carrées de l'unité</strong><br/>
  Dans le corps fini $\mathbb{Z}/p\mathbb{Z}$ (avec $p$ premier), l'équation $x^2 \equiv 1 \pmod p$ admet exactement deux solutions :
  $$x \equiv 1 \pmod p \quad \text{ou} \quad x \equiv -1 \pmod p$$
</div>
*Preuve : $x^2 - 1 \equiv 0 \iff (x-1)(x+1) \equiv 0 \pmod p$. Comme $\mathbb{Z}/p\mathbb{Z}$ est un corps donc intègre, un des deux facteurs est nécessairement nul.* 

<hr style="border: none; border-top: 1px solid #cbd5e1; margin: 2.5rem 0; width: 100%;" />

## L'idée de l'algorithme

Puisque $n$ est impair, $n - 1$ est pair et on l'écrit alors sous la forme :
$$n - 1 = 2^s \cdot d \qquad \text{avec } d \text{ impair et } s \ge 1$$

Soit $a \in [\![2, n - 2]\!]$. Si $\operatorname{pgcd}(a, n) > 1$, alors $n$ est évidemment composé. Sinon, on construit la suite modulo $n$ :
$$\langle x_0, x_1, \dots, x_s \rangle = \left(a^d, \; a^{2d}, \; a^{4d}, \; \dots, \; a^{2^s d} \right) \pmod n$$

où $x_{i+1} \equiv x_i^2 \pmod n$ et $x_s \equiv a^{n-1} \pmod n$.

### Que se passe-t-il si $n$ est premier ?

Par le petit théorème de fermat $x_s = a^{n-1} \equiv 1 \pmod n$. 

Mais le terme précédent $x_{s-1}$ vérifie alors $(x_{s-1})^2 = x_s \equiv 1 \pmod n$. Comme $n$ est premier, $x_{s-1}$ ne peut valoir que $1$ ou $-1$ (cf. le deuxième résultat). <br>
- Si $x_{s-1} \equiv 1$, on itère récursivement sur $x_{s-2}$, et ainsi de suite.<br>
Ainsi le premier élément différent de $1$ rencontré doit être $-1$. 

Autrement dit, si $n$ est premier, la suite renversée $(x_s, x_{s-1}, \dots, x_0)$ a l'une des deux formes suivantes :<br>
1. **$x_0 \equiv 1 \pmod n$** : toute la suite est constante égale à $1$.<br>
2. **Il existe $r \in [\![0, s-1]\!]$ tel que $x_r \equiv -1 \pmod n$** : dès lors, $x_{r+1} \equiv (-1)^2 \equiv 1$, et tous les termes suivants valent $1$.

Si en choisissant un $a$ on trouve une telle suite, $n$ est **probablement premier**. Sinon, si la suite a une forme différente, alors $n$ est **composé**.<br>
Si 

<hr style="border: none; border-top: 1px solid #cbd5e1; margin: 2.5rem 0; width: 100%;" />

## Exemple $n=561$ :

Considérons $n = 561$ le plus petit nombre de Carmichael. On va chercher si $n$ est premier.<br>
On choisit $a=2$.

1. **Décomposition de $n - 1$ :**
   $$561 - 1 = 560 = 2^4 \cdot 35 \implies s = 4, \; d = 35$$
2. **Calcul du premier terme $x_0 = a^d \pmod n$ :**
   $$x_0 \equiv 2^{35} \equiv 263 \pmod{561} \quad (\not\equiv 1 \text{ et } \not\equiv -1)$$
3. <strong>Élévations au carré successives ($r < 4$) :</strong>
<ul style="margin: 8px 0 14px 1.5rem; padding: 0; list-style-type: disc;">
  <li style="margin-bottom: 4px;"><strong>$r = 1$ :</strong> $x_1 \equiv (x_0)^2 \equiv 263^2 \equiv 166 \pmod{561} \quad (\not\equiv -1)$</li>
  <li style="margin-bottom: 4px;"><strong>$r = 2$ :</strong> $x_2 \equiv (x_1)^2 \equiv 166^2 \equiv 67 \pmod{561} \quad (\not\equiv -1)$</li>
  <li style="margin-bottom: 4px;"><strong>$r = 3$ :</strong> $x_3 \equiv (x_2)^2 \equiv 67^2 \equiv 1 \pmod{561} \quad (\not\equiv -1)$</li>
</ul>
4. **Bilan :**<br>
   On a atteint $1$ sans jamais être passé par $-1$.<br>
   Le nombre $x_2 = 67$ est une racine carrée non triviale de $1$ modulo $561$ ($67 \not\equiv \pm 1$ mais $67^2 \equiv 1$).<br>
  $\implies$ **$561$ est composé**. 

<div style="background: rgba(16, 185, 129, 0.06); border-left: 4px solid #10b981; padding: 12px 16px; margin: 14px 0; border-radius: 4px;">
  <strong>Bonus factorisation :</strong> Dès qu'une racine non triviale $x$ de $1$ est trouvée, $\operatorname{pgcd}(x - 1, n)$ fournit un facteur strict de $n$. Ici :
  $$\operatorname{pgcd}(67 - 1, 561) = \operatorname{pgcd}(66, 561) = 33 = 3 \times 11$$
</div>

<hr style="border: none; border-top: 1px solid #cbd5e1; margin: 2.5rem 0; width: 100%;" />

## Comment rendre le test déterministe ?

En pratique, pour des entiers bornés (par exemple des entiers sur 32 bits ou 64 bits), il n'est pas nécessaire de choisir des $a$ aléatoires. Tester un ensemble fini de $a$ suffit à garantir la primalité de façon déterministe.

<div style="overflow-x: auto; margin: 18px 0;">
  <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95em;">
    <thead>
      <tr style="background: rgba(0, 0, 0, 0.05); border-bottom: 2px solid #cbd5e1;">
        <th style="padding: 10px 14px;">Domaine de $n$</th>
        <th style="padding: 10px 14px;">Bases $a$ suffisantes</th>
        <th style="padding: 10px 14px;">Complexité</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 10px 14px;">$n < 2^{32} \approx 4{,}29 \times 10^9$</td>
        <td style="padding: 10px 14px;"><code>{2, 7, 61}</code></td>
        <td style="padding: 10px 14px;">3 tours</td>
      </tr>
      <tr style="border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 10px 14px;">$n < 2^{64} \approx 1{,}84 \times 10^{19}$</td>
        <td style="padding: 10px 14px;"><code>{2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37}</code></td>
        <td style="padding: 10px 14px;">12 tours</td>
      </tr>
      <tr>
        <td style="padding: 10px 14px;">$n$ arbitraire (sous <strong>GRH</strong>)</td>
        <td style="padding: 10px 14px;">Tous les premiers $a \le 2(\ln n)^2$</td>
        <td style="padding: 10px 14px;">$\mathcal{O}(\log^4 n)$</td>
      </tr>
    </tbody>
  </table>
</div>

<div style="background: rgba(168, 85, 247, 0.06); border-left: 4px solid #a855f7; padding: 14px 18px; margin: 18px 0; border-radius: 4px;">
  <strong style="color: #7e22ce; font-size: 1.05em;">Le théorème de Miller (1976) :</strong><br/>
  Si l'**Hypothèse de Riemann Généralisée (GRH)** est vraie, le test devient déterministe en temps polynomial pour tout entier $n$ en testant les bases :
  $$a \leq2(\ln n)^2$$
</div>

<hr style="border: none; border-top: 1px solid #cbd5e1; margin: 2.5rem 0; width: 100%;" />

## Pourquoi l'algorithme est fiable ?

Lorsque $n$ dépasse par exemple $2^{64}$, notamment en cryptographie, tester toutes les bases n'est plus envisageable. On utilise alors le test sous sa forme probabiliste. Le test repose alors sur ce résultat :

<div style="background: rgba(168, 85, 247, 0.06); border-left: 4px solid #a855f7; padding: 14px 18px; margin: 18px 0; border-radius: 4px;">
  <strong style="color: #7e22ce; font-size: 1.05em;">Théorème de Monier-Rabin (1980) :</strong><br/>
  Si $n$ est un entier composé impair, le sous-ensemble des bases $a \in (\mathbb{Z}/n\mathbb{Z})^\times$ pour lesquelles $n$ passe avec succès le test de Miller-Rabin (appelées <em>faux témoins</em>) est de cardinal au plus :
  $$|\text{Faux témoins}| \le \frac{1}{4}\varphi(n) < \frac{n}{4}$$
</div>

**Conséquence : ** pour un $a$ choisi aléatoirement premier avec $n$ :
$$\mathbb{P}(\text{Déclarer } n \text{ premier} \mid n \text{ composé}) \le \frac{1}{4}$$

En répétant le test avec $k$ bases indépendantes tirées au hasard, la probabilité d'erreur chute de manière exponentielle :
$$\mathbb{P}(\text{Erreur après } k \text{ tours}) \le \left(\frac{1}{4}\right)^k = 2^{-2k}$$

Par exemple avec $k=40$ itérations, la probabilité de déclarer $n$ premier à tort est inférieure à $2^{-80} \approx 10^{-24}$.
`},
en: {
    title: String.raw`The Miller-Rabin Test — The Best Primality Test?`,
    blurb: String.raw`How can you quickly determine whether an integer is prime?`,
    body: String.raw`
Throughout this article, $n$ denotes an odd integer greater than or equal to $3$ whose primality we wish to test.

The **Miller-Rabin** test is used to determine whether a given number is prime. It is built on two simple yet fundamental mathematical results:

<div style="background: rgba(59, 130, 246, 0.05); border-left: 4px solid #3b82f6; padding: 14px 18px; margin: 18px 0; border-radius: 4px;">
  <strong style="color: #1d4ed8; font-size: 1.05em;">1. Fermat's Little Theorem</strong><br/>
  If $p$ is prime and $\gcd(a, p) = 1$, then:
  $$a^{p-1} \equiv 1 \pmod p$$
</div>

<div style="background: rgba(59, 130, 246, 0.05); border-left: 4px solid #3b82f6; padding: 14px 18px; margin: 18px 0; border-radius: 4px;">
  <strong style="color: #1d4ed8; font-size: 1.05em;">2. Uniqueness of the Square Roots of Unity</strong><br/>
  In the finite field $\mathbb{Z}/p\mathbb{Z}$ (where $p$ is prime), the equation $x^2 \equiv 1 \pmod p$ has exactly two solutions:
  $$x \equiv 1 \pmod p \quad \text{or} \quad x \equiv -1 \pmod p$$
</div>
*Proof: $x^2 - 1 \equiv 0 \iff (x-1)(x+1) \equiv 0 \pmod p$. Because $\mathbb{Z}/p\mathbb{Z}$ is a field (and thus an integral domain), at least one factor must be zero.* 

<hr style="border: none; border-top: 1px solid #cbd5e1; margin: 2.5rem 0; width: 100%;" />

## The Core Idea

Because $n$ is odd, $n - 1$ is even and can be factored as:
$$n - 1 = 2^s \cdot d \qquad \text{where } d \text{ is odd and } s \ge 1$$

Pick an integer $a \in [2, n - 2]$. If $\gcd(a, n) > 1$, then $n$ is trivially composite. Otherwise, consider the sequence modulo $n$:
$$\langle x_0, x_1, \dots, x_s \rangle = \left(a^d, \; a^{2d}, \; a^{4d}, \; \dots, \; a^{2^s d} \right) \pmod n$$

where $x_{i+1} \equiv x_i^2 \pmod n$ and $x_s \equiv a^{n-1} \pmod n$.

### What Happens if $n$ Is Prime?

By Fermat's Little Theorem, $x_s = a^{n-1} \equiv 1 \pmod n$. 

The preceding term $x_{s-1}$ must then satisfy $(x_{s-1})^2 = x_s \equiv 1 \pmod n$. Because $n$ is prime, $x_{s-1}$ can only equal $1$ or $-1$ (by our second result above).<br>
- If $x_{s-1} \equiv 1$, we step back to $x_{s-2}$, and continue backwards.<br>
This means the first value encountered that differs from $1$ must be $-1$. 

In other words, if $n$ is prime, the reversed sequence $(x_s, x_{s-1}, \dots, x_0)$ must match one of two patterns:<br>
1. **$x_0 \equiv 1 \pmod n$**: the entire sequence consists strictly of $1$s.<br>
2. **There exists an index $r \in [0, s-1]$ such that $x_r \equiv -1 \pmod n$**: from that point on, $x_{r+1} \equiv (-1)^2 \equiv 1$, and all subsequent terms equal $1$.

If a chosen base $a$ generates such a sequence, $n$ is **probably prime**. If the sequence takes any other form, $n$ is definitely **composite**.

<hr style="border: none; border-top: 1px solid #cbd5e1; margin: 2.5rem 0; width: 100%;" />

## Example: $n = 561$

Let's test $n = 561$, the smallest Carmichael number, to see if it is prime.<br>
Choose $a = 2$.

1. **Factor $n - 1$:**
   $$561 - 1 = 560 = 2^4 \cdot 35 \implies s = 4, \; d = 35$$
2. **Compute the base term $x_0 = a^d \pmod n$:**
   $$x_0 \equiv 2^{35} \equiv 263 \pmod{561} \quad (\not\equiv 1 \text{ and } \not\equiv -1)$$
3. <strong>Successive squarings ($r < 4$):</strong>
<ul style="margin: 8px 0 14px 1.5rem; padding: 0; list-style-type: disc;">
  <li style="margin-bottom: 4px;"><strong>$r = 1$:</strong> $x_1 \equiv (x_0)^2 \equiv 263^2 \equiv 166 \pmod{561} \quad (\not\equiv -1)$</li>
  <li style="margin-bottom: 4px;"><strong>$r = 2$:</strong> $x_2 \equiv (x_1)^2 \equiv 166^2 \equiv 67 \pmod{561} \quad (\not\equiv -1)$</li>
  <li style="margin-bottom: 4px;"><strong>$r = 3$:</strong> $x_3 \equiv (x_2)^2 \equiv 67^2 \equiv 1 \pmod{561} \quad (\not\equiv -1)$</li>
</ul>
4. **Outcome:**<br>
   The sequence reached $1$ without ever encountering $-1$.<br>
   The value $x_2 = 67$ is therefore a non-trivial square root of $1$ modulo $561$ ($67 \not\equiv \pm 1$ yet $67^2 \equiv 1$).<br>
  $\implies$ **$561$ is composite**. 

<div style="background: rgba(160, 185, 129, 0.06); border-left: 4px solid #10b981; padding: 12px 16px; margin: 14px 0; border-radius: 4px;">
  <strong>Factorization bonus:</strong> Whenever a non-trivial square root of $1$ (call it $x$) is uncovered, $\gcd(x - 1, n)$ produces a non-trivial factor of $n$. Here:
  $$\gcd(67 - 1, 561) = \gcd(66, 561) = 33 = 3 \times 11$$
</div>

<hr style="border: none; border-top: 1px solid #cbd5e1; margin: 2.5rem 0; width: 100%;" />

## Making the Test Deterministic

In practice, for bounded integers (such as standard 32-bit or 64-bit integers), picking bases $a$ at random is unnecessary. Checking a small, fixed set of bases is enough to guarantee primality deterministically.

<div style="overflow-x: auto; margin: 18px 0;">
  <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95em;">
    <thead>
      <tr style="background: rgba(0, 0, 0, 0.05); border-bottom: 2px solid #cbd5e1;">
        <th style="padding: 10px 14px;">Range of $n$</th>
        <th style="padding: 10px 14px;">Sufficient bases $a$</th>
        <th style="padding: 10px 14px;">Complexity</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 10px 14px;">$n < 2^{32} \approx 4.29 \times 10^9$</td>
        <td style="padding: 10px 14px;"><code>{2, 7, 61}</code></td>
        <td style="padding: 10px 14px;">3 rounds</td>
      </tr>
      <tr style="border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 10px 14px;">$n < 2^{64} \approx 1.84 \times 10^{19}$</td>
        <td style="padding: 10px 14px;"><code>{2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37}</code></td>
        <td style="padding: 10px 14px;">12 rounds</td>
      </tr>
      <tr>
        <td style="padding: 10px 14px;">Arbitrary $n$ (under the <strong>GRH</strong>)</td>
        <td style="padding: 10px 14px;">All prime bases $a \le 2(\ln n)^2$</td>
        <td style="padding: 10px 14px;">$\mathcal{O}(\log^4 n)$</td>
      </tr>
    </tbody>
  </table>
</div>

<div style="background: rgba(168, 85, 247, 0.06); border-left: 4px solid #a855f7; padding: 14px 18px; margin: 18px 0; border-radius: 4px;">
  <strong style="color: #7e22ce; font-size: 1.05em;">Miller's Theorem (1976):</strong><br/>
  If the **Generalized Riemann Hypothesis (GRH)** holds, the algorithm becomes polynomial-time deterministic for every integer $n$ simply by testing all bases:
  $$a \le 2(\ln n)^2$$
</div>

<hr style="border: none; border-top: 1px solid #cbd5e1; margin: 2.5rem 0; width: 100%;" />

## Why Is the Algorithm Reliable?

When $n$ exceeds $2^{64}$—such as in cryptography—evaluating a deterministic set of bases is no longer practical. We instead run the test probabilistically, relying on the following bound:

<div style="background: rgba(168, 85, 247, 0.06); border-left: 4px solid #a855f7; padding: 14px 18px; margin: 18px 0; border-radius: 4px;">
  <strong style="color: #7e22ce; font-size: 1.05em;">Monier-Rabin Theorem (1980):</strong><br/>
  If $n$ is an odd composite integer, the set of bases $a \in (\mathbb{Z}/n\mathbb{Z})^\times$ for which $n$ passes the Miller-Rabin test (referred to as <em>false witnesses</em> or <em>liars</em>) satisfies:
  $$|\text{False witnesses}| \le \frac{1}{4}\varphi(n) < \frac{n}{4}$$
</div>

**Takeaway:** For a randomly chosen base $a$ coprime to $n$:
$$\mathbb{P}(\text{Declare } n \text{ prime} \mid n \text{ composite}) \le \frac{1}{4}$$

Repeating the test across $k$ independent, uniformly chosen random bases causes the error probability to decay exponentially:
$$\mathbb{P}(\text{Error after } k \text{ rounds}) \le \left(\frac{1}{4}\right)^k = 2^{-2k}$$

With $k = 40$ iterations, for example, the probability of falsely declaring $n$ prime is less than $2^{-80} \approx 10^{-24}$.
`}
 },

// ARTICLE PARTITION
{slug:'partition-formula',cat:'math',date:'2026-07-30',read:10,
 fr:{title:String.raw`Formule pratique du nombre de partitions d'un entier $p(n)$`,
  blurb:String.raw`Comment calculer efficacement le nombre de partitions d'un entier $p(n)$ ?`,
  body:String.raw`
En 1918, Hardy et Ramanujan ont montré que 
$$p(n)\sim \frac{1}{4n\sqrt3}\text{exp}\left(\pi\sqrt{\frac{2n}{3}}\right)$$
Mais comment calculer efficacement la valeur exacte de $p(n)$ ? Un calcule par force brute serait beaucoup trop long. On se propose de démontrer

<div style="background: rgba(239, 68, 68, 0.06); border-left: 4px solid #ef4444; padding: 2px 0px; margin: 18px 0; border-radius: 4px;">
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

On va démontrer le :

<div style="background: rgba(59, 130, 246, 0.05); border-left: 4px solid #3b82f6; padding: 4px 4px; margin: 18px 0; border-radius: 4px;">
  <strong style="color: #1d4ed8; font-size: 1.05em;">Théorème des nombres pentagonaux</strong><br/>
  $$\prod_{n\geq 1}(1-x^n)=1 + \sum_{k\geq 1} (-1)^k\left(x^{k(3k-1)/2} + x^{k(3k+1)/2}\right)$$
</div>
 $\underline{\text{Preuve :}}$ On va faire une première constatation : regardons le produit suivant, très légèrement différent :
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
<div style="background: rgba(239, 68, 68, 0.06); border-left: 4px solid #ef4444; padding: 2px 0px; margin: 18px 0; border-radius: 4px;">
  $$\begin{equation*}
  \begin{split}
  p(n) & = p(n-1) + p(n-2) - p(n-5) - p(n-7) + p(n-12) + \cdots \\
  & = \sum_{k\geq 1}(-1)^{k+1}p(n-k(3k\pm 1)/2)
  \end{split}
  \end{equation*}$$
</div>



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
{id:'P-003',slug:'contour-sinc',date:'2026-09-08',level:2,tags:['math','analysis'],
 fr:{title:'Une jolie intégrale',
  blurb:String.raw`Très très jolie intégrale, qui fait apparaître un $e^{-\pi}$.`,
  statement:String.raw`
Démontrer :
$$I=\int_{-\infty}^{+\infty}\frac{\sin x}{x\,(\pi^2+x^2)}\,dx = \frac{1-e^{-\pi}}{\pi}$$
`,
  hint:String.raw`
On peut passer par l'analyse complexe. On cherche à calculer la partie imaginaire de 
$$\int_{-\infty}^{+\infty}\frac{e^{ix}}{x(\pi^2+x^2)}\,dx$$
donc poser $f(z)=\frac{e^{iz}}{z(\pi^2+z^2)}$. Intégrer sur un contour ne contenant qu'un seul pôle, en évitant $0$.
`,
  solution:String.raw`
On vérifie facilement la convergence de l'intégrale : la fonction est continue sur $\R^*$, se prolonge par continuité en $0$ et est un $\mathcal O\par{x^{-3}}$ en $\pm\infty$.

1. On pose $f(z)=\frac{e^{iz}}{z(\pi^2+z^2)}$, qui possède des pôles en $0$ et $\pm i\pi$. On va intégrer sur le lacet $\gamma$ suivant : 

~~~tikz 
\begin{tikzpicture}[scale=1.1,line join=round]
  \definecolor{brick}{HTML}{9A3A29}
  \definecolor{slate}{HTML}{86817A}
  % axes
  \draw[slate,->] (-3.4,0) -- (3.6,0) node[below] {$\Re z$};
  \draw[slate,->] (0,-2.6) -- (0,3.5) node[left] {$\Im z$};
  % segments réels, de -R vers -eps puis de eps vers R
  \draw[brick,very thick] (-2.9,0) -- (-0.34,0);
  \draw[brick,very thick,->] (-2.9,0) -- (-1.5,0);
  \draw[brick,very thick] (0.34,0) -- (2.9,0);
  \draw[brick,very thick,->] (0.34,0) -- (1.75,0);
  % petite indentation autour de 0, sens horaire
  \draw[brick,very thick] (-0.34,0) arc (180:0:0.34);
  \draw[brick,very thick,->] (-0.34,0) arc (180:80:0.34);
  % grand demi-cercle, sens trigonométrique
  \draw[brick,very thick] (2.9,0) arc (0:180:2.9);
  \draw[brick,very thick,->] (2.9,0) arc (0:55:2.9);
  % pôles
  \fill (0,1.9) circle (2pt);
  \node[right] at (0.14,1.9) {$i\pi$};
  \draw (0,-1.9) circle (2pt);
  \node[right] at (0.14,-1.9) {$-i\pi$};
  \draw[fill=white] (0,0) circle (1.5pt);
  \node[above right] at (0.05,0.05) {$0$};
  % étiquettes
  \node[below left] at (0,0) {$0$};
  \node[below right] at (0.34,0) {$\varepsilon$};
  \node[below] at (2.9,-0.06) {$R$};
  \node[below] at (-2.9,-0.06) {$-R$};
  \node[brick] at (-2.45,2.45) {$\Gamma_R$};
  \node[brick,above left] at (0,0.34) {$\Gamma_\varepsilon$};
\end{tikzpicture}
~~~

Seul le pôle $+i\pi$ est dans le lacet, et 
$$(z-i\pi)f(z)=\frac{e^{iz}}{z(z+i\pi)}\xrightarrow[z \to i\pi]{}\frac{-e^{-\pi}}{2\pi^2}=\text{res}(f,i\pi)$$
Par le théorème des résidus, 
$$\int_{[-R,R]\setminus[-\varepsilon, \varepsilon]}f(x)\,dx + \int_{\Gamma_R} f + \int_{\Gamma_\varepsilon} f = 2i\pi \frac{-e^{-\pi}}{2\pi^2} =  \frac{-ie^{-\pi}}{\pi}$$
**Grand arc $\Gamma_R$ :** Pour $z\in \Gamma_R$, $\text{Im} z\geq 0$ donc  $|e^{iz}|\leq 1$ et $|z|=R$. On suppose $R\gt \pi$. Donc $|f|\leq \frac{1}{R(R^2-\pi^2)}$ et
$$\left|\int_{\Gamma_R}f\right|\leq \frac{\pi R}{R(R^2-\pi^2)}\xrightarrow[R\to\infty]{}0$$

**Petit arc $\Gamma_\varepsilon$ :** dans un voisinage de $0$, $f(z) = \frac{1}{z\pi^2} + g(z)$ avec $g$ holomorphe. </br>
$\Gamma_\varepsilon$ se parametrise avec $\gamma(\theta) = e^{i\theta}$ pour $\theta$ variant de $\pi$ à $0$ donc
$$\int_{\Gamma_\varepsilon}f = \int_\pi^0 \par{\frac{1}{\pi^2\varepsilon e^{i\theta}} + g(\varepsilon e^{i\theta})}i\varepsilon e^{i\theta}\, d\theta = \frac{-i\pi}{\pi^2} + \mathcal O (\varepsilon) = \frac{-i}{\pi} + \mathcal O (\varepsilon)$$

**Conclusion :** on pose $\varepsilon = \frac{1}{R}$, alors $\int_{[-R,R]\setminus[-\varepsilon, \varepsilon]}f(x)\,dx \xrightarrow[R\to+\infty]{} I$ et donc en faisant tendre $R\to+\infty$ dans le théorème des résidus,
$$\int_{-\infty}^{+\infty}\frac{e^{ix}}{x(\pi^2+x^2)}\,dx-\frac{i}{\pi}=-\frac{i\,e^{-\pi}}{\pi}$$
d'où en prenant la partie imaginaire :
$$\boxed{I=\int_{-\infty}^{+\infty}\frac{\sin x}{x\,(\pi^2+x^2)}\,dx = \frac{1-e^{-\pi}}{\pi}}$$

`},
 en: {
  title: 'A nice integral',
  blurb: String.raw`A very, very nice integral featuring an $e^{-\pi}$.`,
  statement: String.raw`
Prove:
$$I=\int_{-\infty}^{+\infty}\frac{\sin x}{x\,(\pi^2+x^2)}\,dx = \frac{1-e^{-\pi}}{\pi}$$
`,
  hint: String.raw`
We can use complex analysis. We want to compute the imaginary part of 
$$\int_{-\infty}^{+\infty}\frac{e^{ix}}{x(\pi^2+x^2)}\,dx$$
so set $f(z)=\frac{e^{iz}}{z(\pi^2+z^2)}$. Integrate along a contour containing only one pole, indenting around $0$.
`,
  solution: String.raw`
The convergence of the integral is readily verified: the integrand is continuous on $\R^*$, extends by continuity at $0$, and is $\mathcal O\par{x^{-3}}$ at $\pm\infty$.

1. Let $f(z)=\frac{e^{iz}}{z(\pi^2+z^2)}$, which has poles at $0$ and $\pm i\pi$. We integrate along the following contour $\gamma$: 

~~~tikz 
\begin{tikzpicture}[scale=1.1,line join=round]
  \definecolor{brick}{HTML}{9A3A29}
  \definecolor{slate}{HTML}{86817A}
  % axes
  \draw[slate,->] (-3.4,0) -- (3.6,0) node[below] {$\Re z$};
  \draw[slate,->] (0,-2.6) -- (0,3.5) node[left] {$\Im z$};
  % real segments, from -R to -eps then from eps to R
  \draw[brick,very thick] (-2.9,0) -- (-0.34,0);
  \draw[brick,very thick,->] (-2.9,0) -- (-1.5,0);
  \draw[brick,very thick] (0.34,0) -- (2.9,0);
  \draw[brick,very thick,->] (0.34,0) -- (1.75,0);
  % small indentation around 0, clockwise
  \draw[brick,very thick] (-0.34,0) arc (180:0:0.34);
  \draw[brick,very thick,->] (-0.34,0) arc (180:80:0.34);
  % large semicircle, counterclockwise
  \draw[brick,very thick] (2.9,0) arc (0:180:2.9);
  \draw[brick,very thick,->] (2.9,0) arc (0:55:2.9);
  % poles
  \fill (0,1.9) circle (2pt);
  \node[right] at (0.14,1.9) {$i\pi$};
  \draw (0,-1.9) circle (2pt);
  \node[right] at (0.14,-1.9) {$-i\pi$};
  \draw[fill=white] (0,0) circle (1.5pt);
  \node[above right] at (0.05,0.05) {$0$};
  % labels
  \node[below left] at (0,0) {$0$};
  \node[below right] at (0.34,0) {$\varepsilon$};
  \node[below] at (2.9,-0.06) {$R$};
  \node[below] at (-2.9,-0.06) {$-R$};
  \node[brick] at (-2.45,2.45) {$\Gamma_R$};
  \node[brick,above left] at (0,0.34) {$\Gamma_\varepsilon$};
\end{tikzpicture}
~~~

Only the pole $+i\pi$ lies inside the contour, and 
$$(z-i\pi)f(z)=\frac{e^{iz}}{z(z+i\pi)}\xrightarrow[z \to i\pi]{}\frac{-e^{-\pi}}{2\pi^2}=\text{res}(f,i\pi)$$
By the residue theorem, 
$$\int_{[-R,R]\setminus[-\varepsilon, \varepsilon]}f(x)\,dx + \int_{\Gamma_R} f + \int_{\Gamma_\varepsilon} f = 2i\pi \frac{-e^{-\pi}}{2\pi^2} =  \frac{-ie^{-\pi}}{\pi}$$
**Large arc $\Gamma_R$:** For $z\in \Gamma_R$, $\text{Im} z\geq 0$, so $|e^{iz}|\leq 1$ and $|z|=R$. Assuming $R\gt \pi$, we have $|f|\leq \frac{1}{R(R^2-\pi^2)}$ and
$$\left|\int_{\Gamma_R}f\right|\leq \frac{\pi R}{R(R^2-\pi^2)}\xrightarrow[R\to\infty]{}0$$

**Small arc $\Gamma_\varepsilon$:** In a neighborhood of $0$, $f(z) = \frac{1}{z\pi^2} + g(z)$ with $g$ holomorphic. </br>
$\Gamma_\varepsilon$ is parameterized by $\gamma(\theta) = e^{i\theta}$ as $\theta$ ranges from $\pi$ to $0$, so
$$\int_{\Gamma_\varepsilon}f = \int_\pi^0 \par{\frac{1}{\pi^2\varepsilon e^{i\theta}} + g(\varepsilon e^{i\theta})}i\varepsilon e^{i\theta}\, d\theta = \frac{-i\pi}{\pi^2} + \mathcal O (\varepsilon) = \frac{-i}{\pi} + \mathcal O (\varepsilon)$$

**Conclusion:** Setting $\varepsilon = \frac{1}{R}$, we have $\int_{[-R,R]\setminus[-\varepsilon, \varepsilon]}f(x)\,dx \xrightarrow[R\to+\infty]{} I$. Letting $R\to+\infty$ in the residue theorem yields
$$\int_{-\infty}^{+\infty}\frac{e^{ix}}{x(\pi^2+x^2)}\,dx-\frac{i}{\pi}=-\frac{i\,e^{-\pi}}{\pi}$$
whence, taking the imaginary part:
$$\boxed{I=\int_{-\infty}^{+\infty}\frac{\sin x}{x\,(\pi^2+x^2)}\,dx = \frac{1-e^{-\pi}}{\pi}}$$
`}
},

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

<div class="callout">

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
