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
    photo:'images/portrait.jpg',      // chemin relatif au dossier du site
  location:{fr:'Paris · Mathématiques, Informatique & Finance',
    
            en:'Paris · Mathematics, Computer Science & Finance'},
  title:{
    fr:'Étudiant à l’École Polytechnique<br>Mathématiques, Informatique & Finance',
    en:'Student at École Polytechnique, Paris, France<br>Mathematics, Computer Science & Finance'},
  bio:{
    fr:[
     'Bienvenue sur ma page personnelle.<br>Étudiant en école d’ingénieur, je suis particulièrement passionné de mathématiques, d’informatique et de finance. Mes centres d’intérêt scientifiques sont plus précisément l’algèbre et l’arithmétique, l’algorithmique et le trading à haute fréquence. De manière tout à fait personnelle, je m’intéresse à la psychologie, aux actualités technologiques et, peut-être par nostalgie, je suis également fasciné par l’histoire des dinosaures.',
     'Ce site rassemble trois choses : les [projets](#/projets) que je construis, des [articles](#/articles) où j’essaye de rendre clairs des sujets peu traités mais tout à fait passionnants, ainsi qu’une collection de [problèmes](#/problemes) sur lesquels j’ai aimé me casser la tête.',
     'Vous trouverez mon parcours et mon contact sur ce site. Je suis joignable à tout moment.'],
    en:[
     'Welcome to my personal page.<br>I study at École Polytechnique and enjoy mathematics, computer science and finance. I’m especially interested in algebra, number theory, algorithms and high-frequency trading. Outside my studies, I read about psychology, technology and dinosaurs.',
     'Here you’ll find the [projects](#/projets) I build, [articles](#/articles) about topics I find interesting, and [problems](#/problemes) I enjoyed solving.',
     'You can also find my background and contact details here. Feel free to get in touch.']},
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
  skills:['Python', 'C', 'C++','OCaml','Java','SQL','NumPy / SciPy','LaTeX','Git / GitHub',
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
  fr:{name:'Mathématiques',blurb:'"Any sufficiently well explained mathematics is indistinguishable from being obvious"'},
  en:{name:'Mathematics',blurb:'"Any sufficiently well explained mathematics is indistinguishable from being obvious"'}},
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
  Supposons qu'on ait une idée de stratégie, par exemple : « dès qu'une action baisse trois jours de suite, je l'achète et je la revends le lendemain ». On pourrait prendre l'historique des prix et regarder ce qui se serait passé : c'est ce qu'on appelle un **backtest**. Mais en pratique, un backtest peut présenter une stratégie comme gagnante alors qu'elle est perdante. Pourquoi ? Parce qu'en réalité il y a des frais, un décalage de prix le temps d'envoyer l'offre, et d'autres facteurs encore.<br><br>
  On va développer un moteur qui calcule si une stratégie gagne *vraiment* de l'argent, et on l'essayera sur la stratégie de **Pair Trading**.`,
  links:[['Code source','https://github.com/AntoineTHEOBALDROSA/Statistical-Arbitrage-Engine']],
  body:String.raw` 

## Plan du projet

1. **Stratégie de Pairs Trading**
2. **Moteur de backtest**
3. **Évaluation des performances de la stratégie**

## 1. Le Pair Trading

Pour essayer le moteur de backtest, il nous faut déjà une stratégie d'investissement. J'ai choisi le **Pair Trading** (arbitrage de pairs).

### Principe général

Imaginons deux entreprises très similaires, par exemple **TotalEnergies** et **Shell**. Leurs activités étant presque identiques, leurs actions ont tendance à évoluer ensemble : une hausse du cours du baril de pétrole aura un impact positif similaire sur les deux actions.

Cependant, des chocs temporaires de liquidité peuvent survenir : par exemple, si un fonds d'investissement liquide massivement sa position sur l'une des deux entreprises. Durant cet épisode, le cours de l'action $A$ peut sembler sous-évalué par rapport à celui de $B$. 

L'hypothèse centrale du Pairs Trading est le retour à la moyenne : l'écart de valorisation est transitoire et finira par se refermer.

<div class="steps-panel">
  <div class="steps-heading">
    <strong class="steps-title">Exécution : Dès qu'un écart statistiquement significatif apparaît</strong>
  </div>

  <div class="steps-list">
    <!-- Étape 1 -->
    <div class="step">
      <span class="step-number">1</span>
      <div class="explanation">
        <strong> Vente à découvert (Short) :</strong> On emprunte des actions de l'entreprise surévaluée ($A$) pour les vendre immédiatement au prix fort.
      </div>
    </div>

    <!-- Étape 2 -->
    <div class="step step--wide">
      <span class="step-number">2</span>
      <div class="explanation">
        Avec les liquidités générées, on achète simultanément des actions de l'entreprise sous-évaluée ($B$).
      </div>
    </div>

    <!-- Étape 3 -->
    <div class="step step--wide">
      <span class="step-number">3</span>
      <div class="explanation">
        Lorsque l'écart revient à sa moyenne, on revend l'action $B$, on rachète l'action $A$ pour la restituer au prêteur, et on empoche la différence.
      </div>
    </div>
  </div>
</div>

L'intérêt majeur de cette approche est d'être *neutre au marché* (*market-neutral*) : la performance ne dépend pas de la hausse ou de la baisse globale du pétrole, mais uniquement de la convergence du spread.

<hr class="content-rule" />

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


<div class="faq">
  <h3 class="faq-heading">
    <span>Foire aux questions : les marchés financiers</span>
  </h3>


  <p class="faq-question"><strong>1. Qu'est-ce qu'Euronext ? Pourquoi TotalEnergies est-elle cotée à Paris et Shell à Amsterdam ?</strong></p>
  <p class="explanation explanation--flush">
    Une place boursière, c'est comme un grand marché couvert où des gens viennent acheter et vendre des parts d'entreprises. Euronext est l'entreprise privée qui gère les marchés de plusieurs villes européennes.<br>
    TotalEnergies est française, son marché historique principal est donc Paris (.PA) alors que Shell est d'origine anglo-néerlandaise, son marché historique est donc à Amsterdam (.AS). Une entreprise choisit où elle veut être cotée.<br>
    Une entreprise n'a pas un prix mondial par magie. La cote d'une entreprise est le résultat de la dernière transaction conclue entre deux personnes. Mais si le prix de Total est différent à Paris et à New York, disons 49€ à Paris et 51€ à New York, des arbitragistes acheteraient des actions à Paris pour les revendre instantanément à New York, rééquilibrant le prix vers 50€. C'est ce qui fixe le prix des entreprises.
  </p>

  <p class="faq-question faq-question--next"><strong>2. Pourquoi les bourses traditionnelles ferment-elles la nuit à l'ère d'Internet ?</strong></p>
  <p class="explanation explanation--flush">
    La bourse traditionnelle ferme pour concentrer tout le monde au même endroit au même moment. Si le marché restait ouvert à 3h du matin, il n'y aurait presque personne et le moindre ordre d'achat ferait bondir ou chuter le cours de 10% n'importe comment par manque de participants.
  </p>

  <p class="faq-question faq-question--next"><strong>3. À quoi correspondent les cours « ajustés » ?</strong></p>
  <p class="explanation explanation--flush explanation--last">
    Supposons que vous achetiez une action d'entreprise à 100€. Le lendemain, l'entreprise verse 5€ à ses actionnaires. Mécaniquement, l'action ne vaut plus que 95€. Sur le cours de la bourse *brut*, il y a un saut de 100€ à 95€, ce qui pourrait être interprété par des robots traders comme le début d'une chute de l'entreprise. Mais en réalité, l'entreprise vaut toujours 100€. Le **cours ajusté** règle ce problème pour effacer cette fausse perte de 5€.<br>
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

<hr class="content-rule" />

## 2. Modélisation et calcul du spread

On cherche à présent à définir et quantifier le **spread**, c'est-à-dire l'écart entre les deux actions.

Si TotalEnergies vaut 60 € et Shell 40 €, un écart naïf serait de $60 - 40 = 20 \text{ €}$. Mais en réalité, une variation de 1% de Total ne correspond pas à une variation de 1% de Shell..

 Comme les deux entreprises ont des activités similaires, on suppose que le prix de leurs actions est lié par une loi affine, avec un spread $\varepsilon_t$ qui dépend du temps $t$.

$$P_{\text{TTe}, t} = \alpha + \beta P_{\text{Shell}, t} + \varepsilon_t$$ 

Où :
<ul class="content-list">
  <li class="content-list__item">$\beta$ désigne le *hedge ratio* : pour chaque action TotalEnergies achetée, il faut vendre $\beta$ actions Shell pour rester neutre au risque</li>
  <li class="content-list__item">$\alpha$ représente une constante d'ajustement</li>
  <li class="content-list__item">$\varepsilon_t$ notre *spread* au temps $t$</li>
</ul>

### Notion de cointégration

Pris individuellement, le cours d'une action $P_t$ est un processus **non stationnaire** (ou intégré d'ordre 1, noté $I(1)$), couramment modélisé comme mouvement brownien géométrique :
$$dP_t = \mu P_t dt + \sigma P_t d W_t$$
Le terme $W_t$ représente un mouvement brownien standard, et $\sigma$ la volatilité. Sa moyenne n'est pas constante et sa variance diverge.<br>
Dans le cas général, la somme de deux lois $I(1)$ suit toujours une loi $I(1)$ ; mais dans notre cas, il existe peut-être une combinaison linéaire $\alpha, \beta$ telle que le spread $\varepsilon_t$ soit un processus **stationnaire** (noté $I(0)$). Si c'est le cas, on dit que TotalEnergies et Shell sont **cointégrées**.

$$\varepsilon_t = P_{\text{TTE}, t} - (\alpha + \beta P_{\text{SHEL}, t}) \qquad \text{ avec } \quad \mathbb{E}[\varepsilon_t] = 0 \quad \text{et} \quad \operatorname{Var}(\varepsilon_t) = \sigma_{\varepsilon}^2 < +\infty$$

### Comment trouver $\alpha, \beta$ ? Méthode des moindres carrés ordinaires

On va trouver $\alpha, \beta$ qui minimisent $\sum \varepsilon_t^2$. En posant $S(\alpha, \beta) = \sum_t \varepsilon_t^2$ ainsi que $y_t = P_{\text{TTE}, t}$ et $x_t = P_{\text{SHEL}, t}$, on veut minimiser
$$S(\alpha, \beta) = \sum_{t=1}^N (y_t - (\alpha + \beta x_t))^2$$
Comme $S$ est une fonction quadratique, son minimum se trouve là où ses deux dérivées partielles s'annulent
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
ce qui se réécrit
$$\sum_{t=1}^N (x_t - \bar{x})(y_t - \bar{y}) - \beta \sum_{t=1}^N (x_t - \bar{x})^2 = 0 \quad \Longleftrightarrow \quad \boxed{\beta = \frac{\operatorname{Cov}(x, y)}{\operatorname{Var}(x)}}$$

### Détecter les anomalies

On vient de voir comment déterminer $\alpha, \beta$, c'est-à-dire comment calculer le spread $\varepsilon_t$. À partir de là, on peut calculer le **Z-score**
$$Z_t = \frac{\varepsilon_t - \mu_{\varepsilon_t}}{\sigma_{\varepsilon_t}}$$
et si $\varepsilon_t$ suit un régime stationnaire, $Z_t$ suit une loi normale $\mathcal{N}(0, 1)$. Concrètement, $Z_t$ est environ $95,4$% du temps entre $-2$ et $2$. <br>
Dès lors, si $\abs{Z_t} \gt 2$, c'est qu'il y a une anomalie, et que c'est le moment d'utiliser notre stratégie. Plus précisément :
<ul class="content-list">
  <li class="content-list__item">Si $Z_t \gt 2$, le spread est très grand, et Total coûte « trop cher ». On short Total. </li>
  <li class="content-list__item">Si $Z_t \lt 2$, c'est l'inverse : on short Shell.</li>
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

On va maintenant évaluer notre stratégie sur les données que nous avons téléchargées. En particulier, on peut modifier les taux de transaction grâce à la variable \`TRANSACTION_COST\` ainsi que le capital initial grâce à la variable \`INITIAL_CAPITAL\`.

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

On voit clairement que la stratégie finit dans le négatif, mais analysons-la plus en détail.

<div class="table-scroll">
  <table class="data-table">
    <thead>
      <tr class="table-heading">
        <th class="table-cell table-cell--heading">Métrique</th>
        <th class="table-cell table-cell--heading">Description</th>
        <th class="table-cell table-cell--right">Valeur</th>
      </tr>
    </thead>
    <tbody class="text-muted">
      <tr class="table-row">
        <td class="table-cell table-cell--label">Période active</td>
        <td class="table-cell">Durée effective testée (base 252 j/an). <br>Les premiers jours sont exclus comme on en a besoin pour calculer $\beta$.</td>
        <td class="metric">4.6 ans</td>
      </tr>
      <tr class="table-row table-row--shaded">
        <td class="table-cell table-cell--label">Rendement total net</td>
        <td class="table-cell">Gain cumulé une fois les frais de transaction retirés (ici, 5 bps = 0.05%). <br>$R = \frac{V_T}{V_0} - 1$ avec $V_T, V_0$ les valeurs finales et initiales du portefeuille.</td>
        <td class="metric">-35.68%</td>
      </tr>
      <tr class="table-row">
        <td class="table-cell table-cell--label">Rendement annualisé</td>
        <td class="table-cell">Taux composé annuel équivalent (*Compound Annual Growth Rate*).<br> CAGR = $(1+R)^{1/n_{\text{years}}} - 1$</td>
        <td class="metric">-9.14%</td>
      </tr>
      <tr class="table-row table-row--shaded">
        <td class="table-cell table-cell--label">Volatilité annualisée $\sigma_{\text{annuelle}}$</td>
        <td class="table-cell">Mesure l'instabilité et la dispersion des rendements de la stratégie.</td>
        <td class="metric">8.56%</td>
      </tr>
      <tr class="table-row">
        <td class="table-cell table-cell--label">Sharpe Ratio</td>
        <td class="table-cell">Rendement excédentaire rapporté au risque. <br> $S=\frac{\mathbb E(R)-R_f}{\sigma_{\text{anuelle}}}$ avec $R_f$ le rendement d'un portefeuille sans risque.<br> $S<0$ : l'investissement perd de l'argent, $0\lt S \lt 1$ : l'investissement est moins rentable qu'un placement sans risque et $S>1$ l'investissement vaut les risques pris</td>
        <td class="metric">-1.10</td>
      </tr>
      <tr class="table-row table-row--shaded">
        <td class="table-cell table-cell--label">Maximum Drawdown (MDD)</td>
        <td class="table-cell">Perte maximale qu'un investisseur aurait pu subir s'il était entré puis sorti au pire moment possible (rentré au sommet historique pour sortir au creux le plus bas).<br>$\text{MDD} = \min_{t} \left( \frac{V_t - \max_{s \le t} V_s}{\max_{s \le t} V_s} \right)$</td>
        <td class="metric">-39.87%</td>
      </tr>
      <tr>
        <td class="table-cell table-cell--label">Taux de jours gagnants</td>
        <td class="table-cell">Pourcentage de jours où le rendement a été strictement positif, calculé uniquement sur les jours où une position est ouverte.</td>
        <td class="metric">45.59%</td>
      </tr>
    </tbody>
  </table>
</div>

On remarque qu'on obtient de très mauvais résultats. Une raison à cela est que Total et Shell n'ont pas vraiment suivi les mêmes stratégies sur la période 2021-2026 : Shell s'est concentrée sur les énergies fossiles alors que Total a massivement investi dans l'électricité et les énergies renouvelables.<br>

On peut refaire la même étude avec par exemple Mastercard et Visa, qui suivent exactement le même modèle économique. On a alors de bien meilleurs résultats :

<div class="table-scroll">
  <table class="data-table data-table--metrics">
    <thead>
      <tr class="table-heading">
        <th class="table-cell table-cell--center">Période active</th>
        <th class="table-cell table-cell--center">Rendement net</th>
        <th class="table-cell table-cell--center">Rendement ann. (CAGR)</th>
        <th class="table-cell table-cell--center">Volatilité ann.</th>
        <th class="table-cell table-cell--center">Sharpe Ratio</th>
        <th class="table-cell table-cell--center">Max Drawdown</th>
        <th class="table-cell table-cell--center">Taux jours gagnants</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="metric metric--center">4,3 ans</td>
        <td class="metric metric--center metric--positive">+6,96 %</td>
        <td class="metric metric--center metric--positive">+1,59 %</td>
        <td class="metric metric--center">5,19 %</td>
        <td class="metric metric--center">0,34</td>
        <td class="metric metric--center metric--negative">-6,31 %</td>
        <td class="metric metric--center">52,47 %</td>
      </tr>
    </tbody>
  </table>
</div>

On a toujours un sharpe ratio strictement inférieur à $1$, ce qui montre que, dans cette application simpliste du Pair Trading, il vaut mieux investir sur la dette américaine par exemple. Une raison à cela est que des fonds d'investissement appliquent déjà des stratégies similaires mais affinées, ce qui les rend plus performantes et nous empêche de tirer profit de cette stratégie.
`},
en: {
  title: String.raw`Statistical Arbitrage Engine & Pairs Trading`,
  role: 'Personal Project',
  status: 'Completed',
  blurb: String.raw`How do you test honestly (without cheating) whether an investment strategy would have made money? An application to *Pairs Trading*.`,
  lead: String.raw`How do you test honestly (without cheating) whether an investment strategy would have made money? <br><br>
  Suppose you have a strategy idea, such as: "as soon as a stock drops three days in a row, buy it and sell it the next day." You could pull historical prices and check what would have happened: this is called a **backtest**. A backtest may show a profit even when the strategy would lose money in practice. Why? Because there are transaction fees, prices can move while an order is being sent, and other costs need to be taken into account.<br><br>
  I built an engine to check whether a strategy *really* makes money, then tested it on **pairs trading**.`,
  links: [['Source Code', 'https://github.com/AntoineTHEOBALDROSA/Statistical-Arbitrage-Engine']],
  body: String.raw`

## Project Outline

1. **Pairs Trading Strategy**
2. **Backtest Engine**
3. **Strategy Performance Evaluation**

## 1. Pairs Trading

To test the backtest engine, I needed a strategy. I chose **pairs trading**.

### General Principle

Take two similar companies, such as **TotalEnergies** and **Shell**. Their share prices tend to move together: a rise in oil prices usually benefits both.

Temporary liquidity shocks can push the prices apart. For example, a fund might sell a large position in one company, making stock $A$ look undervalued relative to stock $B$.

Pairs trading assumes that the price gap is temporary and will eventually close.

<div class="steps-panel">
  <div class="steps-heading">
    <strong class="steps-title">When a statistically significant gap appears</strong>
  </div>

  <div class="steps-list">
    <!-- Step 1 -->
    <div class="step">
      <span class="step-number">1</span>
      <div class="explanation">
        <strong>Short Selling:</strong> Borrow shares of the overvalued company ($A$) and sell them at the current price.
      </div>
    </div>

    <!-- Step 2 -->
    <div class="step step--wide">
      <span class="step-number">2</span>
      <div class="explanation">
        Use the proceeds to buy shares of the undervalued company ($B$).
      </div>
    </div>

    <!-- Step 3 -->
    <div class="step step--wide">
      <span class="step-number">3</span>
      <div class="explanation">
        When the gap returns to its mean, sell $B$ and buy back $A$ to return it to the lender. The difference is the profit.
      </div>
    </div>
  </div>
</div>

The aim is to remain *market-neutral*: the strategy relies on the spread closing, rather than on oil prices rising or falling.

<hr class="content-rule" />

### Implementation

Let’s start by downloading the prices in Python:
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

<div class="faq">
  <h3 class="faq-heading">
    <span>Frequently Asked Questions: Financial Markets</span>
  </h3>

  <p class="faq-question"><strong>1. What is Euronext? Why is TotalEnergies listed in Paris and Shell in Amsterdam?</strong></p>
  <p class="explanation explanation--flush">
    A stock exchange is a market where people buy and sell shares in companies. Euronext runs exchanges in several European cities.<br>
    TotalEnergies is French and has historically been listed in Paris (.PA). Shell has Anglo-Dutch roots and is listed in Amsterdam (.AS). Companies choose where to list their shares.<br>
    A quoted price comes from the latest trade. If Total shares cost €49 in Paris and €51 in New York, traders could buy in Paris and sell in New York. Those trades would bring the two prices closer together, towards €50.
  </p>

  <p class="faq-question faq-question--next"><strong>2. Why do traditional exchanges close at night in the Internet era?</strong></p>
  <p class="explanation explanation--flush">
    Fixed opening hours bring buyers and sellers together at the same time. At 3 a.m., there might be so few traders that even a small order could move the price sharply.
  </p>

  <p class="faq-question faq-question--next"><strong>3. What are "adjusted" prices?</strong></p>
  <p class="explanation explanation--flush explanation--last">
    Suppose you buy a share for €100 and the company pays a €5 dividend the next day. The share price falls to €95, but you also have €5 in cash. A raw price chart shows a drop that a trading algorithm might mistake for a loss. **Adjusted prices** account for the dividend.<br>
    The same applies to stock splits: 10 shares worth €1,000 each become 100 shares worth €100 each. The total value stays the same.
  </p>
</div>

### Relative Performance Visualization

To compare the two stocks despite their different prices, we set both series to 100 at the start of the period:

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

<hr class="content-rule" />

## 2. Modeling and Spread Calculation

We now need to define the **spread**, or price gap, between the two stocks.

If TotalEnergies trades at €60 and Shell at €40, a naive spread would simply be $60 - 40 = 20 \text{ €}$. However, a 1% move in Total does not necessarily correspond to a 1% move in Shell.

Since the companies have similar businesses, we model their prices with an affine relationship and a spread $\varepsilon_t$ that varies over time:

$$P_{\text{TTE}, t} = \alpha + \beta P_{\text{Shell}, t} + \varepsilon_t$$ 

Where:
<ul class="content-list">
  <li class="content-list__item">$\beta$ denotes the *hedge ratio*: for each share of TotalEnergies purchased, we must short $\beta$ shares of Shell to maintain market neutrality.</li>
  <li class="content-list__item">$\alpha$ represents an adjustment constant (intercept).</li>
  <li class="content-list__item">$\varepsilon_t$ is the residual *spread* at time $t$.</li>
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
Since $S$ is quadratic, we find its minimum by setting both partial derivatives to zero:
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
<ul class="content-list">
  <li class="content-list__item">If $Z_t > 2$, the spread is elevated and Total is relatively overvalued: short Total, long Shell.</li>
  <li class="content-list__item">If $Z_t < -2$, the reverse applies: short Shell, long Total.</li>
</ul>

### Implementation

Since $\alpha$ and $\beta$ can change over time, we estimate them over a rolling window of \`W\` days. We also calculate the Z-score over a rolling window of \`window_z\` days.

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

We can now plot the rolling hedge ratio $\beta_t$ and the Z-score $Z_t$:

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

We can now apply the pairs trading strategy:

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

We can now test the strategy on the downloaded data. Use \`TRANSACTION_COST\` to change the transaction fees and \`INITIAL_CAPITAL\` to change the starting capital.

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

Here is the portfolio’s value over time:

![](images/arb-stat-eng-3.png)

## 4. Performance Evaluation

The strategy loses money over this period. Let’s look at the results in more detail.

<div class="table-scroll">
  <table class="data-table">
    <thead>
      <tr class="table-heading">
        <th class="table-cell table-cell--heading">Metric</th>
        <th class="table-cell table-cell--heading">Description</th>
        <th class="table-cell table-cell--right">Value</th>
      </tr>
    </thead>
    <tbody class="text-muted">
      <tr class="table-row">
        <td class="table-cell table-cell--label">Active Period</td>
        <td class="table-cell">Effective duration analyzed (252 trading days/year basis).<br>Initial warm-up days are excluded as they are required to calibrate $\beta$.</td>
        <td class="metric">4.6 years</td>
      </tr>
      <tr class="table-row table-row--shaded">
        <td class="table-cell table-cell--label">Total Net Return</td>
        <td class="table-cell">Cumulative return after subtracting transaction fees (5 bps = 0.05%). <br>$R = \frac{V_T}{V_0} - 1$, where $V_T, V_0$ denote final and initial portfolio equity.</td>
        <td class="metric">-35.68%</td>
      </tr>
      <tr class="table-row">
        <td class="table-cell table-cell--label">Annualized Return</td>
        <td class="table-cell">Compound Annual Growth Rate (CAGR).<br> CAGR = $(1+R)^{1/n_{\text{years}}} - 1$</td>
        <td class="metric">-9.14%</td>
      </tr>
      <tr class="table-row table-row--shaded">
        <td class="table-cell table-cell--label">Annualized Volatility $\sigma_{\text{annual}}$</td>
        <td class="table-cell">Measures return dispersion and variance across the strategy lifespan.</td>
        <td class="metric">8.56%</td>
      </tr>
      <tr class="table-row">
        <td class="table-cell table-cell--label">Sharpe Ratio</td>
        <td class="table-cell">Risk-adjusted excess return metric.<br> $S=\frac{\mathbb E(R)-R_f}{\sigma_{\text{annual}}}$, where $R_f$ is the risk-free rate.<br> $S < 0$: negative excess return; $0 \lt S \lt 1$: strategy underperforms risk-free benchmarks; $S > 1$: excess return adequately compensates for risk.</td>
        <td class="metric">-1.10</td>
      </tr>
      <tr class="table-row table-row--shaded">
        <td class="table-cell table-cell--label">Maximum Drawdown (MDD)</td>
        <td class="table-cell">Maximum peak-to-trough decline experienced had capital been committed at the worst historical peak and closed at the lowest trough.<br>$\text{MDD} = \min_{t} \left( \frac{V_t - \max_{s \le t} V_s}{\max_{s \le t} V_s} \right)$</td>
        <td class="metric">-39.87%</td>
      </tr>
      <tr>
        <td class="table-cell table-cell--label">Win Rate (Days)</td>
        <td class="table-cell">Percentage of trading days with strictly positive returns, evaluated only on days with open positions.</td>
        <td class="metric">45.59%</td>
      </tr>
    </tbody>
  </table>
</div>

The results are poor. One possible reason is that TotalEnergies and Shell followed different strategies between 2021 and 2026: Shell focused on fossil fuels, while Total invested heavily in electricity and renewables.<br>

We can repeat the test with Mastercard and Visa, which have similar business models. The results are better:

<div class="table-scroll">
  <table class="data-table data-table--metrics">
    <thead>
      <tr class="table-heading">
        <th class="table-cell table-cell--center">Active Period</th>
        <th class="table-cell table-cell--center">Net Return</th>
        <th class="table-cell table-cell--center">Ann. Return (CAGR)</th>
        <th class="table-cell table-cell--center">Ann. Volatility</th>
        <th class="table-cell table-cell--center">Sharpe Ratio</th>
        <th class="table-cell table-cell--center">Max Drawdown</th>
        <th class="table-cell table-cell--center">Win Rate (Days)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="metric metric--center">4.3 years</td>
        <td class="metric metric--center metric--positive">+6.96%</td>
        <td class="metric metric--center metric--positive">+1.59%</td>
        <td class="metric metric--center">5.19%</td>
        <td class="metric metric--center">0.34</td>
        <td class="metric metric--center metric--negative">-6.31%</td>
        <td class="metric metric--center">52.47%</td>
      </tr>
    </tbody>
  </table>
</div>

The Sharpe ratio is still below $1$. In this simple version of pairs trading, US government debt would have been a better choice. One possible reason is that investment funds already use more refined versions of this strategy, leaving fewer opportunities for a simple model.
`}
},

// Projet 2
{slug:'stochastic-vectorisation',thumb:'images/vect-1bis.png',year:'2026',tags:['Genetic-Algorithm','Python'],
  fr:{title:String.raw`Comment faire un TIPE en moins de 5 Mo ?`,role:'Projet TIPE',status:'Terminé',
  blurb:String.raw`Comment faire tenir une présentation avec plein de photos en 5 Mo ? Exploration d'une approche stochastique de vectorisation d'images.`,
  lead:String.raw`Nous sommes tenus de rendre un TIPE (projet de fin de prépa) de moins de 5 Mo. Comment compresser un TIPE contenant plein d'images pour le faire passer sous la barre des 5 Mo ? <br><br>
  Face à cette contrainte, le réflexe consiste à compresser les images en JPEG. Mais on peut faire plus amusant. Une image vectorielle (comme un fichier SVG) présente l'avantage d'avoir un poids totalement décorrélé de sa résolution d'affichage tout en restant nette à n'importe quel niveau de zoom.<br><br>
  L'objectif de ce projet a été de concevoir et d'implémenter en C un **algorithme génératif stochastique** capable de reconstruire n'importe quelle image à partir d'une superposition de formes géométriques élémentaires (cercles, polygones). Au final, on arrive à réduire le poids des fichiers jusqu'à un facteur 70.`,
  links:[['Code source & Slides','https://github.com/AntoineTHEOBALDROSA/Image-Vectorialisation']],
  body:String.raw`

<div class="image-pair">
  <img src="images/vect-1.png" alt="Exemple de portrait reconstruit par vectorisation" class="image-pair__image" />
  <img src="images/vect-1bis.png" alt="Exemple d’illustration reconstruite par vectorisation" class="image-pair__image" />
</div>

## Plan du projet

1. **La contrainte des 5 Mo et vectorisation**
2. **Algorithme évolutif**
3. **Implémentation en C & multi-threading**
4. **Compression du fichier généré et analyse des performances**

<hr class="content-rule" />

## 1. La contrainte des 5 Mo et vectorisation

La plateforme de dépôt des concours d'entrée aux grandes écoles impose une limite de $5$ Mo pour la présentation de notre projet de fin d'étude.

Le but va être de compresser des images en les vectorisant, puis d'implémenter l'algorithme avec le module LaTeX TikZ qui permet de tracer des figures vectorisées dans un document LaTeX.


<div class="steps-panel">
  <div class="steps-heading">
    <strong class="steps-title">Principe de l'algorithme</strong>
  </div>

  <div class="steps-list steps-list--spaced">
    <!-- Étape 1 -->
    <div class="step step--medium">
      <span class="step-number">1</span>
      <div class="explanation">
        <strong>Initialisation :</strong> On part d'une image vierge $I$ de mêmes dimensions que l'image cible
      </div>
    </div>

    <!-- Étape 2 -->
    <div class="step step--medium">
      <span class="step-number">2</span>
      <div class="explanation">
        On génère aléatoirement  $N_{\text{it}}$ formes aléatoires (positions, tailles aléatoires). Pour la couleur, on leur attribue la couleur moyenne de la zone sous-jacente de l'image cible.
      </div>
    </div>

    <!-- Étape 3 -->
    <div class="step step--medium">
      <span class="step-number">3</span>
      <div class="explanation">
        <strong>Mutation et Sélection :</strong> On retient les $N_{\text{selected}}$ meilleures formes réduisant le plus l'écart avec l'image cible, puis on génère des variantes sur plusieurs générations successives. Après plusieurs générations, on garde la meilleure forme trouvée sur l'ensemble des générations et on la dessine sur l'image $I$.
      </div>
    </div>

    <!-- Étape 4 -->
    <div class="step step--medium">
      <span class="step-number">4</span>
      <div class="explanation">
        On réitère ce processus de sélection $N_{\text{shape}} \approx 2000 \text{ à } 8000$ fois.
      </div>
    </div>
  </div>
</div>

### Exemple d'exécution

On commence par générer $N_{\text{it}} = 10$ formes puis on garde les $N_{\text{selected}}=2$ meilleures, ici les deux de la première colonne (bords rouges).

<img src="images/vect-2.png" alt="Première génération de formes candidates" class="content-image" />

À partir de ces deux formes, on régénère des variations de chacune d'entre elles. C'est la deuxième génération.

<img src="images/vect-3.png" alt="Deuxième génération de formes candidates" class="content-image" />

On va garder la meilleure, disons que c'est celle-ci :

<img src="images/vect-4.png" alt="Meilleure forme sélectionnée" class="content-image content-image--tiny" />

On place alors cette forme sur le canvas blanc $I$ puis on recommence avec ce nouveau canvas :

<img src="images/vect-5.png" alt="Reconstruction d’une image par superposition de formes" class="content-image" />

Après $N=6000$ itérations, voilà le résultat : 

<img src="images/vect-6.png" alt="Image reconstruite après 6 000 itérations" class="content-image content-image--small" />

<div class="faq faq--compact">
  <p class="faq-question faq-question--next"><strong>Cercles ou polygones ?</strong></p>
  <p class="explanation explanation--flush explanation--last">
    Le cercle a l'avantage de n'avoir que $3$ paramètres ($x, y, r$), alors qu'un triangle ou en général un polygone à $n$ côtés a $2n$ paramètres. De plus, pour avoir fait des essais, si on autorise les triangles l'algorithme décide de les aplatir un maximum pour concrètement tracer des lignes..
  </p>
</div>

<hr class="content-rule" />

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

<hr class="content-rule" />

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

L'étape la plus coûteuse de l'algorithme est le calcul de la forme optimale parmi les $N_{\text{it}} = 160$ formes aléatoires. Chaque thread se voit confier une copie temporaire du canevas, y dessine une forme, et calcule la distance résultante à l'image cible $T$. Tout ça peut se faire en parallèle :

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

Si on regarde la taille des rayons que décide de tracer l'algorithme au cours du temps, on voit qu'ils décroissent rapidement : l'algorithme a compris qu'après avoir commencé à dessiner, ce n'était pas une bonne idée de placer un énorme cercle car cela risque d'effacer tout le dessin produit jusqu'alors.

<img src="images/vect-7.png" alt="Évolution des rayons des cercles au fil des itérations" class="content-image content-image--medium" />

<hr class="content-rule" />

## 4. Compression du fichier généré et analyse des performances

Une fois les $N$ formes placées, on obtient un fichier XML qui contient les $N$ formes.

~~~xml
<circle cx="1005" cy="777" r="1606" fill="rgb(102,74,60)" />
<circle cx="914" cy="973" r="518" fill="rgb(168,128,107)" />
~~~

L'idée est qu'on peut compresser ce document, car les informations sont redondantes, à l'exception de \`cx, cy, r, fill\` qu'on peut compresser en binaire.

### Bilan comparatif des performances

Sur une image test de référence haute résolution issue de la présentation :

<div class="table-scroll">
  <table class="data-table">
    <thead>
      <tr class="table-heading">
        <th class="table-cell table-cell--heading">Format / Méthode</th>
        <th class="table-cell table-cell--heading">Description</th>
        <th class="table-cell table-cell--right">Poids</th>
        <th class="table-cell table-cell--right">Ratio vs PNG</th>
      </tr>
    </thead>
    <tbody class="text-muted">
      <tr class="table-row">
        <td class="table-cell table-cell--label">Image originale (PNG)</td>
        <td class="table-cell">Image de référence</td>
        <td class="metric">4 389 ko</td>
        <td class="metric">1,0x</td>
      </tr>
      <tr class="table-row table-row--shaded">
        <td class="table-cell table-cell--label">JPEG standard</td>
        <td class="table-cell">Compression avec perte</td>
        <td class="metric">473 ko</td>
        <td class="metric">9,3x</td>
      </tr>
      <tr class="table-row">
        <td class="table-cell table-cell--label">Fichier SVG brut</td>
        <td class="table-cell">Fichier XML contenant les $6000$ cercles.</td>
        <td class="metric">279 ko</td>
        <td class="metric">15,7x</td>
      </tr>
      <tr class="table-row table-row--shaded">
        <td class="table-cell table-cell--label">Vectoriel compressé (4-bits)</td>
        <td class="table-cell">Fichier XML compressé.</td>
        <td class="metric metric--positive">63 ko</td>
        <td class="metric metric--positive">69,7x</td>
      </tr>
    </tbody>
  </table>
</div>

Le fichier final compressé est **69,7 fois plus léger** que le PNG d'origine et **7,5 fois plus compact qu'un JPEG**, tout en conservant une image exploitable dans une présentation !

<div class="table-scroll">
  <table class="data-table data-table--metrics">
    <thead>
      <tr class="table-heading">
        <th class="table-cell table-cell--left">Inconvénients</th>
        <th class="table-cell table-cell--left">Avantages</th>
      </tr>
    </thead>
    <tbody class="text-muted">
      <tr class="table-row">
        <td class="table-cell table-cell--top">
          • Temps de génération élevé (~20 min sur CPU multi-cœurs).<br>
          • Dégradation esthétique sur les textures ultra-détaillées ou le texte fin.<br>
          • Inadapté pour des logos simples (un triangle parfait SVG pèse 0,2 ko vs 27 ko reconstitué par mon algorithme).
        </td>
        <td class="table-cell table-cell--top">
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
  Faced with this constraint, the natural reflex is to compress images into JPEG. But we can do something more interesting. A vector image, such as an SVG, stays sharp when zoomed in, and its file size does not depend on the display resolution.<br><br>
  I wrote a **stochastic generative algorithm** in C that reconstructs images by layering simple shapes, such as circles and polygons. It reduced file sizes by up to a factor of 70.`,
  links: [['Source Code & Slides', 'https://github.com/AntoineTHEOBALDROSA/Image-Vectorialisation']],
  body: String.raw`

<div class="image-pair">
  <img src="images/vect-1.png" alt="Example of a portrait reconstructed by vectorisation" class="image-pair__image" />
  <img src="images/vect-1bis.png" alt="Example of an illustration reconstructed by vectorisation" class="image-pair__image" />
</div>

## Project Outline

1. **The 5 MB Constraint and Vectorization**
2. **Evolutionary Algorithm**
3. **C Implementation & Multi-threading**
4. **Compression of the Generated File & Performance Analysis**

<hr class="content-rule" />

## 1. The 5 MB Constraint and Vectorization

The submission platform for the competitive entrance exams to the French Grandes Écoles imposes a $5$ MB limit on final-year research project presentations.

The idea is to compress images by turning them into shapes, then draw those shapes in LaTeX with TikZ.

<div class="steps-panel">
  <div class="steps-heading">
    <strong class="steps-title">Algorithm Overview</strong>
  </div>

  <div class="steps-list steps-list--spaced">
    <!-- Step 1 -->
    <div class="step step--medium">
      <span class="step-number">1</span>
      <div class="explanation">
        <strong>Initialization:</strong> Start with a blank canvas $I$ sharing the same dimensions as the target image.
      </div>
    </div>

    <!-- Step 2 -->
    <div class="step step--medium">
      <span class="step-number">2</span>
      <div class="explanation">
        Randomly generate $N_{\text{it}}$ candidate shapes (random positions and sizes). For color, assign each the mean color of the underlying area in the target image.
      </div>
    </div>

    <!-- Step 3 -->
    <div class="step step--medium">
      <span class="step-number">3</span>
      <div class="explanation">
        <strong>Mutation and selection:</strong> Retain the $N_{\text{selected}}$ shapes that bring the image closest to the target, then generate variations across successive generations. After several generations, draw the best shape on canvas $I$.
      </div>
    </div>

    <!-- Step 4 -->
    <div class="step step--medium">
      <span class="step-number">4</span>
      <div class="explanation">
        Repeat this selection process $N_{\text{shape}} \approx 2000 \text{ to } 8000$ times.
      </div>
    </div>
  </div>
</div>

### Execution Example

We generate $N_{\text{it}} = 10$ shapes and keep the $N_{\text{selected}} = 2$ best ones: here, the two in the first column, outlined in red.

<img src="images/vect-2.png" alt="First generation of candidate shapes" class="content-image" />

From these two shapes, we generate variations of each. This is the second generation.

<img src="images/vect-3.png" alt="Second generation of candidate shapes" class="content-image" />

We keep the best shape, shown here:

<img src="images/vect-4.png" alt="Best selected shape" class="content-image content-image--tiny" />

We then place this shape onto the white canvas $I$ and repeat the process on this updated canvas:

<img src="images/vect-5.png" alt="Image reconstruction by layering shapes" class="content-image" />

After $N = 6000$ iterations, we get this image:

<img src="images/vect-6.png" alt="Image reconstructed after 6,000 iterations" class="content-image content-image--small" />

<div class="faq faq--compact">
  <p class="faq-question faq-question--next"><strong>Circles or Polygons?</strong></p>
  <p class="explanation explanation--flush explanation--last">
    A circle needs only $3$ parameters ($x, y, r$), while an $n$-sided polygon needs $2n$. In my tests, allowing triangles mostly led the algorithm to flatten them into lines.
  </p>
</div>

<hr class="content-rule" />

## 2. Evolutionary Algorithm

To guide the algorithm, we need a distance that measures how far the current image $I$ is from the target image $T$.

Let $T$ and $B$ be two images of dimensions $W \times H$. Two common choices are:

### 1. Manhattan Distance ($L_1$)
$$D_{L_1}(T, B) = \sum_{p \in \text{pixels}}\big| T[p] - B[p] \big|$$

### 2. Root Mean Square Error / RMS ($L_2$)
$$D_{L_2}(T, B) = \sqrt{\frac{1}{WH} \sum_{p \in \text{pixels}} \big( T[p] - B[p] \big)^2}$$

In my tests, $L_2$ took longer to calculate without a visible improvement. I used $L_1$ for the rest of the project.

### Color Selection

For a given geometric shape $\mathcal{S}$ (typically a circle) covering a set of pixels $\Omega_{\mathcal{S}}$, the $(R, G, B)$ color assigned to the shape corresponds to the average color of the target image pixels covered by $\mathcal{S}$:

$$\bar{C} = \frac{1}{|\Omega_{\mathcal{S}}|} \sum_{p \in \Omega_{\mathcal{S}}} T(p)$$

This avoids having to search for a colour as another parameter.

<hr class="content-rule" />

## 3. C Implementation & Multi-threading

I wrote the implementation in C and used **Cairo** (\`libcairo\`) to draw the shapes.

### Data Structures

Each shape and image has its own structure. Here are the structures for circles and triangles:

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

The slowest step is finding the best of the $N_{\text{it}} = 160$ random shapes. Each thread gets a copy of the canvas, draws one shape and calculates the distance to the target image $T$. These calculations can run in parallel:

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

With 8 to 10 threads, generating an image with 6,000 shapes takes about **21 minutes instead of 64**: roughly three times faster.

### Algorithm Analysis

The circle radii decrease quickly over time. Once the image starts to take shape, a large circle would cover what has already been drawn, so smaller circles work better.

<img src="images/vect-7.png" alt="Evolution of circle radii over the iterations" class="content-image content-image--medium" />

<hr class="content-rule" />

## 4. Compression of the Generated File & Performance Analysis

Once the $N$ shapes are drawn, we have an XML file describing them:

~~~xml
<circle cx="1005" cy="777" r="1606" fill="rgb(102,74,60)" />
<circle cx="914" cy="973" r="518" fill="rgb(168,128,107)" />
~~~

Most of the XML is repetitive. We can compress it by storing \`cx, cy, r, fill\` in binary.

### Comparative Performance Summary

Here are the results for a high-resolution image from the presentation:

<div class="table-scroll">
  <table class="data-table">
    <thead>
      <tr class="table-heading">
        <th class="table-cell table-cell--heading">Format / Method</th>
        <th class="table-cell table-cell--heading">Description</th>
        <th class="table-cell table-cell--right">Size</th>
        <th class="table-cell table-cell--right">Ratio vs PNG</th>
      </tr>
    </thead>
    <tbody class="text-muted">
      <tr class="table-row">
        <td class="table-cell table-cell--label">Original image (PNG)</td>
        <td class="table-cell">Reference image</td>
        <td class="metric">4,389 kB</td>
        <td class="metric">1.0x</td>
      </tr>
      <tr class="table-row table-row--shaded">
        <td class="table-cell table-cell--label">Standard JPEG</td>
        <td class="table-cell">Lossy compression</td>
        <td class="metric">473 kB</td>
        <td class="metric">9.3x</td>
      </tr>
      <tr class="table-row">
        <td class="table-cell table-cell--label">Raw SVG file</td>
        <td class="table-cell">XML file containing the $6000$ circles.</td>
        <td class="metric">279 kB</td>
        <td class="metric">15.7x</td>
      </tr>
      <tr class="table-row table-row--shaded">
        <td class="table-cell table-cell--label">Compressed vector (4-bit)</td>
        <td class="table-cell">Compressed XML file.</td>
        <td class="metric metric--positive">63 kB</td>
        <td class="metric metric--positive">69.7x</td>
      </tr>
    </tbody>
  </table>
</div>

The final file is **69.7 times smaller** than the original PNG and **7.5 times smaller than the JPEG**, while still looking good enough for a presentation.

<div class="table-scroll">
  <table class="data-table data-table--metrics">
    <thead>
      <tr class="table-heading">
        <th class="table-cell table-cell--left">Drawbacks</th>
        <th class="table-cell table-cell--left">Advantages</th>
      </tr>
    </thead>
    <tbody class="text-muted">
      <tr class="table-row">
        <td class="table-cell table-cell--top">
          • High processing time (~20 min on multi-core CPU).<br>
          • Visual degradation on fine text or ultra-detailed textures.<br>
          • Inefficient for basic vector artwork (a clean native SVG triangle is ~0.2 kB vs ~27 kB when reconstructed by this algorithm).
        </td>
        <td class="table-cell table-cell--top">
          • <strong>Compression</strong> by up to a factor of 70.<br>
          • The image stays sharp when zoomed in.<br>
          • <strong>Artistic look:</strong> similar to watercolour or a mosaic.<br>
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

<div class="theorem">
  <strong class="theorem-title">1. Le petit théorème de Fermat</strong><br/>
  Si $p$ est premier et si $\operatorname{pgcd}(a, p) = 1$, alors :
  $$a^{p-1} \equiv 1 \pmod p$$
</div>

<div class="theorem">
  <strong class="theorem-title">2. Unicité des racines carrées de l'unité</strong><br/>
  Dans le corps fini $\mathbb{Z}/p\mathbb{Z}$ (avec $p$ premier), l'équation $x^2 \equiv 1 \pmod p$ admet exactement deux solutions :
  $$x \equiv 1 \pmod p \quad \text{ou} \quad x \equiv -1 \pmod p$$
</div>
*Preuve : $x^2 - 1 \equiv 0 \iff (x-1)(x+1) \equiv 0 \pmod p$. Comme $\mathbb{Z}/p\mathbb{Z}$ est un corps donc intègre, un des deux facteurs est nécessairement nul.* 

<hr class="content-rule" />

## L'idée de l'algorithme

Puisque $n$ est impair, $n - 1$ est pair et on l'écrit alors sous la forme :
$$n - 1 = 2^s \cdot d \qquad \text{avec } d \text{ impair et } s \ge 1$$

Soit $a \in [\![2, n - 2]\!]$. Si $\operatorname{pgcd}(a, n) > 1$, alors $n$ est évidemment composé. Sinon, on construit la suite modulo $n$ :
$$\langle x_0, x_1, \dots, x_s \rangle = \left(a^d, \; a^{2d}, \; a^{4d}, \; \dots, \; a^{2^s d} \right) \pmod n$$

où $x_{i+1} \equiv x_i^2 \pmod n$ et $x_s \equiv a^{n-1} \pmod n$.

### Que se passe-t-il si $n$ est premier ?

Par le petit théorème de Fermat $x_s = a^{n-1} \equiv 1 \pmod n$.

Mais le terme précédent $x_{s-1}$ vérifie alors $(x_{s-1})^2 = x_s \equiv 1 \pmod n$. Comme $n$ est premier, $x_{s-1}$ ne peut valoir que $1$ ou $-1$ (cf. le deuxième résultat). <br>
- Si $x_{s-1} \equiv 1$, on itère récursivement sur $x_{s-2}$, et ainsi de suite.<br>
Ainsi le premier élément différent de $1$ rencontré doit être $-1$. 

Autrement dit, si $n$ est premier, la suite renversée $(x_s, x_{s-1}, \dots, x_0)$ a l'une des deux formes suivantes :<br>
1. **$x_0 \equiv 1 \pmod n$** : toute la suite est constante égale à $1$.<br>
2. **Il existe $r \in [\![0, s-1]\!]$ tel que $x_r \equiv -1 \pmod n$** : dès lors, $x_{r+1} \equiv (-1)^2 \equiv 1$, et tous les termes suivants valent $1$.

Si en choisissant un $a$ on trouve une telle suite, $n$ est **probablement premier**. Sinon, si la suite a une forme différente, alors $n$ est **composé**.<br>

<hr class="content-rule" />

## Exemple $n=561$ :

Considérons $n = 561$ le plus petit nombre de Carmichael. On va chercher si $n$ est premier.<br>
On choisit $a=2$.

1. **Décomposition de $n - 1$ :**
   $$561 - 1 = 560 = 2^4 \cdot 35 \implies s = 4, \; d = 35$$
2. **Calcul du premier terme $x_0 = a^d \pmod n$ :**
   $$x_0 \equiv 2^{35} \equiv 263 \pmod{561} \quad (\not\equiv 1 \text{ et } \not\equiv -1)$$
3. <strong>Élévations au carré successives ($r < 4$) :</strong>
<ul class="content-list">
  <li class="content-list__item"><strong>$r = 1$ :</strong> $x_1 \equiv (x_0)^2 \equiv 263^2 \equiv 166 \pmod{561} \quad (\not\equiv -1)$</li>
  <li class="content-list__item"><strong>$r = 2$ :</strong> $x_2 \equiv (x_1)^2 \equiv 166^2 \equiv 67 \pmod{561} \quad (\not\equiv -1)$</li>
  <li class="content-list__item"><strong>$r = 3$ :</strong> $x_3 \equiv (x_2)^2 \equiv 67^2 \equiv 1 \pmod{561} \quad (\not\equiv -1)$</li>
</ul>
4. **Bilan :**<br>
   On a atteint $1$ sans jamais être passé par $-1$.<br>
   Le nombre $x_2 = 67$ est une racine carrée non triviale de $1$ modulo $561$ ($67 \not\equiv \pm 1$ mais $67^2 \equiv 1$).<br>
  $\implies$ **$561$ est composé**. 

<div class="theorem theorem--success">
  <strong>Bonus factorisation :</strong> Dès qu'une racine non triviale $x$ de $1$ est trouvée, $\operatorname{pgcd}(x - 1, n)$ fournit un facteur strict de $n$. Ici :
  $$\operatorname{pgcd}(67 - 1, 561) = \operatorname{pgcd}(66, 561) = 33 = 3 \times 11$$
</div>

<hr class="content-rule" />

## Comment rendre le test déterministe ?

En pratique, pour des entiers bornés (par exemple des entiers sur 32 bits ou 64 bits), il n'est pas nécessaire de choisir des $a$ aléatoires. Tester un ensemble fini de $a$ suffit à garantir la primalité de façon déterministe.

<div class="table-scroll table-scroll--compact">
  <table class="data-table data-table--plain">
    <thead>
      <tr class="table-heading table-heading--plain">
        <th class="table-cell table-cell--small">Domaine de $n$</th>
        <th class="table-cell table-cell--small">Bases $a$ suffisantes</th>
        <th class="table-cell table-cell--small">Complexité</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-row">
        <td class="table-cell table-cell--small">$n < 2^{32} \approx 4{,}29 \times 10^9$</td>
        <td class="table-cell table-cell--small"><code>{2, 7, 61}</code></td>
        <td class="table-cell table-cell--small">3 tours</td>
      </tr>
      <tr class="table-row">
        <td class="table-cell table-cell--small">$n < 2^{64} \approx 1{,}84 \times 10^{19}$</td>
        <td class="table-cell table-cell--small"><code>{2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37}</code></td>
        <td class="table-cell table-cell--small">12 tours</td>
      </tr>
      <tr>
        <td class="table-cell table-cell--small">$n$ arbitraire (sous <strong>GRH</strong>)</td>
        <td class="table-cell table-cell--small">Tous les premiers $a \le 2(\ln n)^2$</td>
        <td class="table-cell table-cell--small">$\mathcal{O}(\log^4 n)$</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="theorem theorem--purple">
  <strong class="theorem-title theorem-title--purple">Le théorème de Miller (1976) :</strong><br/>
  Si l'**hypothèse de Riemann généralisée (GRH)** est vraie, le test devient déterministe en temps polynomial pour tout entier $n$ en testant les bases :
  $$a \leq2(\ln n)^2$$
</div>

<hr class="content-rule" />

## Pourquoi l'algorithme est fiable ?

Lorsque $n$ dépasse par exemple $2^{64}$, notamment en cryptographie, tester toutes les bases n'est plus envisageable. On utilise alors le test sous sa forme probabiliste. Le test repose alors sur ce résultat :

<div class="theorem theorem--purple">
  <strong class="theorem-title theorem-title--purple">Théorème de Monier-Rabin (1980) :</strong><br/>
  Si $n$ est un entier composé impair, le sous-ensemble des bases $a \in (\mathbb{Z}/n\mathbb{Z})^\times$ pour lesquelles $n$ passe avec succès le test de Miller-Rabin (appelées <em>faux témoins</em>) est de cardinal au plus :
  $$|\text{Faux témoins}| \le \frac{1}{4}\varphi(n) < \frac{n}{4}$$
</div>

**Conséquence :** pour un $a$ choisi aléatoirement premier avec $n$ :
$$\mathbb{P}(\text{Déclarer } n \text{ premier} \mid n \text{ composé}) \le \frac{1}{4}$$

En répétant le test avec $k$ bases indépendantes tirées au hasard, la probabilité d'erreur chute de manière exponentielle :
$$\mathbb{P}(\text{Erreur après } k \text{ tours}) \le \left(\frac{1}{4}\right)^k = 2^{-2k}$$

Par exemple avec $k=40$ itérations, la probabilité de déclarer $n$ premier à tort est inférieure à $2^{-80} \approx 10^{-24}$.
`},
en: {
    title: String.raw`The Miller-Rabin Test — The Best Primality Test?`,
    blurb: String.raw`How can you quickly determine whether an integer is prime?`,
    body: String.raw`
Throughout this article, $n$ is an odd integer greater than or equal to $3$. We want to find out whether it is prime.

The **Miller-Rabin** test uses two results: Fermat’s little theorem and the fact that a prime modulus has only two square roots of $1$.

<div class="theorem">
  <strong class="theorem-title">1. Fermat's Little Theorem</strong><br/>
  If $p$ is prime and $\gcd(a, p) = 1$, then:
  $$a^{p-1} \equiv 1 \pmod p$$
</div>

<div class="theorem">
  <strong class="theorem-title">2. Uniqueness of the Square Roots of Unity</strong><br/>
  In the finite field $\mathbb{Z}/p\mathbb{Z}$ (where $p$ is prime), the equation $x^2 \equiv 1 \pmod p$ has exactly two solutions:
  $$x \equiv 1 \pmod p \quad \text{or} \quad x \equiv -1 \pmod p$$
</div>
*Proof: $x^2 - 1 \equiv 0 \iff (x-1)(x+1) \equiv 0 \pmod p$. Because $\mathbb{Z}/p\mathbb{Z}$ is a field (and thus an integral domain), at least one factor must be zero.* 

<hr class="content-rule" />

## How the algorithm works

Since $n$ is odd, we can write:
$$n - 1 = 2^s \cdot d \qquad \text{where } d \text{ is odd and } s \ge 1$$

Pick an integer $a \in [2, n - 2]$. If $\gcd(a, n) > 1$, then $n$ is composite. Otherwise, consider the sequence modulo $n$:
$$\langle x_0, x_1, \dots, x_s \rangle = \left(a^d, \; a^{2d}, \; a^{4d}, \; \dots, \; a^{2^s d} \right) \pmod n$$

where $x_{i+1} \equiv x_i^2 \pmod n$ and $x_s \equiv a^{n-1} \pmod n$.

### What Happens if $n$ Is Prime?

By Fermat's Little Theorem, $x_s = a^{n-1} \equiv 1 \pmod n$. 

The preceding term $x_{s-1}$ must then satisfy $(x_{s-1})^2 = x_s \equiv 1 \pmod n$. Because $n$ is prime, $x_{s-1}$ can only equal $1$ or $-1$ (by our second result above).<br>
- If $x_{s-1} \equiv 1$, we step back to $x_{s-2}$, and continue backwards.<br>
The first value different from $1$ must therefore be $-1$.

In other words, if $n$ is prime, the reversed sequence $(x_s, x_{s-1}, \dots, x_0)$ must match one of two patterns:<br>
1. **$x_0 \equiv 1 \pmod n$**: every term is $1$.<br>
2. **There exists an index $r \in [0, s-1]$ such that $x_r \equiv -1 \pmod n$**: from that point on, $x_{r+1} \equiv (-1)^2 \equiv 1$, and all subsequent terms equal $1$.

If a chosen base $a$ generates such a sequence, $n$ is **probably prime**. Otherwise, $n$ is **composite**.

<hr class="content-rule" />

## Example: $n = 561$

Let's test $n = 561$, the smallest Carmichael number, to see if it is prime.<br>
Choose $a = 2$.

1. **Factor $n - 1$:**
   $$561 - 1 = 560 = 2^4 \cdot 35 \implies s = 4, \; d = 35$$
2. **Compute the base term $x_0 = a^d \pmod n$:**
   $$x_0 \equiv 2^{35} \equiv 263 \pmod{561} \quad (\not\equiv 1 \text{ and } \not\equiv -1)$$
3. <strong>Successive squarings ($r < 4$):</strong>
<ul class="content-list">
  <li class="content-list__item"><strong>$r = 1$:</strong> $x_1 \equiv (x_0)^2 \equiv 263^2 \equiv 166 \pmod{561} \quad (\not\equiv -1)$</li>
  <li class="content-list__item"><strong>$r = 2$:</strong> $x_2 \equiv (x_1)^2 \equiv 166^2 \equiv 67 \pmod{561} \quad (\not\equiv -1)$</li>
  <li class="content-list__item"><strong>$r = 3$:</strong> $x_3 \equiv (x_2)^2 \equiv 67^2 \equiv 1 \pmod{561} \quad (\not\equiv -1)$</li>
</ul>
4. **Outcome:**<br>
   The sequence reached $1$ without ever encountering $-1$.<br>
   The value $x_2 = 67$ is therefore a non-trivial square root of $1$ modulo $561$ ($67 \not\equiv \pm 1$ yet $67^2 \equiv 1$).<br>
  $\implies$ **$561$ is composite**. 

<div class="theorem theorem--success">
  <strong>Factorization bonus:</strong> If we find a non-trivial square root $x$ of $1$, $\gcd(x - 1, n)$ produces a non-trivial factor of $n$. Here:
  $$\gcd(67 - 1, 561) = \gcd(66, 561) = 33 = 3 \times 11$$
</div>

<hr class="content-rule" />

## Making the Test Deterministic

For bounded integers, such as 32-bit or 64-bit integers, we do not need random bases. A fixed set of bases is enough to make the test deterministic.

<div class="table-scroll table-scroll--compact">
  <table class="data-table data-table--plain">
    <thead>
      <tr class="table-heading table-heading--plain">
        <th class="table-cell table-cell--small">Range of $n$</th>
        <th class="table-cell table-cell--small">Sufficient bases $a$</th>
        <th class="table-cell table-cell--small">Complexity</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-row">
        <td class="table-cell table-cell--small">$n < 2^{32} \approx 4.29 \times 10^9$</td>
        <td class="table-cell table-cell--small"><code>{2, 7, 61}</code></td>
        <td class="table-cell table-cell--small">3 rounds</td>
      </tr>
      <tr class="table-row">
        <td class="table-cell table-cell--small">$n < 2^{64} \approx 1.84 \times 10^{19}$</td>
        <td class="table-cell table-cell--small"><code>{2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37}</code></td>
        <td class="table-cell table-cell--small">12 rounds</td>
      </tr>
      <tr>
        <td class="table-cell table-cell--small">Arbitrary $n$ (under the <strong>GRH</strong>)</td>
        <td class="table-cell table-cell--small">All prime bases $a \le 2(\ln n)^2$</td>
        <td class="table-cell table-cell--small">$\mathcal{O}(\log^4 n)$</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="theorem theorem--purple">
  <strong class="theorem-title theorem-title--purple">Miller's Theorem (1976):</strong><br/>
  If the **Generalized Riemann Hypothesis (GRH)** holds, the algorithm becomes polynomial-time deterministic for every integer $n$ simply by testing all bases:
  $$a \le 2(\ln n)^2$$
</div>

<hr class="content-rule" />

## Why Is the Algorithm Reliable?

For larger numbers, such as those used in cryptography, testing all the required bases is no longer practical. We use the probabilistic test and the following bound:

<div class="theorem theorem--purple">
  <strong class="theorem-title theorem-title--purple">Monier-Rabin Theorem (1980):</strong><br/>
  If $n$ is an odd composite integer, the set of bases $a \in (\mathbb{Z}/n\mathbb{Z})^\times$ for which $n$ passes the Miller-Rabin test (referred to as <em>false witnesses</em> or <em>liars</em>) satisfies:
  $$|\text{False witnesses}| \le \frac{1}{4}\varphi(n) < \frac{n}{4}$$
</div>

**Consequence:** For a randomly chosen base $a$ coprime to $n$:
$$\mathbb{P}(\text{Declare } n \text{ prime} \mid n \text{ composite}) \le \frac{1}{4}$$

After $k$ independent tests with uniformly chosen random bases, the error probability is at most:
$$\mathbb{P}(\text{Error after } k \text{ rounds}) \le \left(\frac{1}{4}\right)^k = 2^{-2k}$$

With $k = 40$ iterations, for example, the probability of falsely declaring $n$ prime is less than $2^{-80} \approx 10^{-24}$.
`}
 },

// ARTICLE PARTITION
{slug:'partition-formula',cat:'math',date:'2026-07-30',read:10,
 fr:{title:String.raw`Formule pratique pour le nombre de partitions $p(n)$`,
  blurb:String.raw`Comment calculer efficacement le nombre de partitions d'un entier $n$ ?`,
  body:String.raw`
En 1918, Hardy et Ramanujan ont montré que 
$$p(n)\sim \frac{1}{4n\sqrt3}\text{exp}\left(\pi\sqrt{\frac{2n}{3}}\right)$$
Mais comment calculer efficacement la valeur exacte de $p(n)$ ? Un calcul par force brute serait beaucoup trop long. On se propose de démontrer

<div class="theorem theorem--warning">
  $$\begin{aligned}
  p(n) & = p(n-1) + p(n-2) - p(n-5) - p(n-7) + p(n-12) + \cdots \\
  & = \sum_{k\geq 1}(-1)^{k-1}p(n-k(3k\pm 1)/2)
  \end{aligned}$$
</div>


## 1. Série génératrice de $p(n)$

Pour $\lvert x \rvert\lt 1$, on pose 
$$f(x)=\prod_{n\geq 1}\frac{1}{1-x^n} = \prod_{n\geq 1}\sum_{i\geq 0}x^{ni} = \prod_{n\geq 1}(1+ x^n + x^{2n} + \cdots)$$
Essayons de trouver le coefficient devant $x^k$ pour $k\geq 1$ : quand on développe le produit, on choisit dans chaque facteur $(1+ x^n + x^{2n} + \cdots)$ un $x^{i\cdot n}$ ; on l'interprète comme « je choisis $i$ fois le nombre $n$ ». Ainsi on choisit un certain nombre de fois le nombre $1$, un certain nombre de fois le nombre $2$, $\ldots$ Au final le coefficient devant $x^k$ est le nombre de manières de choisir $(i_1, i_2, \ldots)$ tels que :
$$i_1\cdot 1 + i_2 \cdot 2 + i_3 \cdot 3 + \cdots = k$$
Ce nombre de manières, c'est exactement $p(k)$. D'où
$$\boxed{f(x) = \prod_{n\geq 1}\frac{1}{1-x^n} =  1 + \sum_{n\geq 1} p(n)x^n}$$ 

## 2. Théorème des nombres pentagonaux

On va démontrer le :

<div class="theorem theorem--compact">
  <strong class="theorem-title">Théorème des nombres pentagonaux</strong><br/>
  $$\prod_{n\geq 1}(1-x^n)=1 + \sum_{k\geq 1} (-1)^k\left(x^{k(3k-1)/2} + x^{k(3k+1)/2}\right)$$
</div>
 $\underline{\text{Preuve :}}$ On va faire une première constatation : regardons le produit suivant, très légèrement différent :
$$\prod_{n\geq 1}(1+x^n) = (1+x)(1+x^2)(1+x^3)\cdots$$
En développant comme on l'a fait dans la partie précédente, on se rend compte que devant $x^k$ on a le nombre de manières d'écrire $k$ comme
$$k = 1\cdot \varepsilon_1 + 2\cdot \varepsilon_2 + \cdots \qquad \text{où } \varepsilon_i \in \{0,1\}$$
Concrètement, on a la série génératrice du nombre de partitions avec des entiers distincts. Par exemple, la partition $7=5+1+1$ n'est pas comptée, alors que $7=5+2$ l'est.$\\$
Mais notre produit comporte un signe moins, donc :

$$\prod_{n\geq 1}(1-x^n) = \sum_{\varepsilon_1, \varepsilon_2, \ldots} (-1)^{\varepsilon_1 + \cdots + \varepsilon_s} x^{1\varepsilon_1 + 2\varepsilon_2 + \cdots + s\varepsilon_s}$$
On compte positivement une partition avec des nombres distincts avec un nombre pair de termes, et négativement si une telle partition a un nombre impair de termes.$\\$
Si on regarde les premiers termes, on a 

$$\prod_{n\geq 1}(1-x^n) = 1-x-x^2 + x^5 + x^7 - x^{12} + \cdots$$

ce qui laisse penser que pour beaucoup de $n$ (par exemple $n=3, 4, 6, 8, 9, \ldots$) le nombre de partitions utilisant des nombres distincts avec un nombre pair de termes est exactement le nombre de partitions utilisant des nombres distincts avec un nombre impair de termes, et que dans les autres cas la différence est de $\pm1$ seulement.$\\$
On va expliquer quand ces partitions peuvent s'appairer, ce qui nous donnera la formule attendue.

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
On se rend compte aisément que ces deux opérations sont inverses l'une de l'autre, et qu'en partant d'une partition avec des nombres distincts avec un nombre pair de termes on en obtient une avec un nombre impair de termes, et inversement. Leur contribution dans notre produit est donc nulle.<br>
Mais il y a des cas limites quand ces deux lignes contiennent un point commun (le point violet) :
$$
\begin{array}{ccccc}
\bullet & \bullet & \bullet & \bullet & \bullet & \bullet & \textcolor{red}{\bullet} \\
\bullet & \bullet & \bullet & \bullet & \bullet & \textcolor{red}{\bullet} \\
\textcolor{blue}{\bullet} & \textcolor{blue}{\bullet} & \textcolor{blue}{\bullet} & \textcolor{blue}{\bullet} & \textcolor{purple}{\bullet} \\
\end{array}
$$
Comme bouger une des deux lignes décrémente de $1$ la taille de l'autre:
<ul class="content-list content-list--compact">
  <li>pour bouger la ligne rouge en dessous de la bleue et obtenir un nombre strictement plus petit, il faut $a-1 \gt b$ </li>
  <li>pour bouger la ligne bleue à côté de la rouge et ne pas avoir de points flottants, il faut $b-1 \geq a$ </li>
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
On vérifie que ces nombres sont de la forme $\frac{k(3k-1)}{2}$ et $\frac{k(3k+1)}{2}$ où $k$ est le nombre de lignes c'est-à-dire le nombre de termes distincts de la partition, ce qui donne le théorème. $\square$

## 3. Démonstration de la formule

On a 
$$ f(x)\prod_{n\geq 1}(1-x^n) = 1$$
et d'après le théorème des nombres pentagonaux,
$$ \par{1 + \sum_{n\geq 1} p(n)x^n}\par{1 + \sum_{n\geq 1} (-1)^n\par{x^{n(3n-1)/2} + x^{n(3n+1)/2}}}  = 1$$
$$ \par{1 + p_1x + p_2x^2 + p_3x^3 + \cdots}\par{1-x-x^2 + x^5 + x^7 - x^{12} + \cdots}  = 1$$
Comme le coefficient devant $x^n$ est nul, on obtient bien
<div class="theorem theorem--warning">
  $$\begin{aligned}
  p(n) & = p(n-1) + p(n-2) - p(n-5) - p(n-7) + p(n-12) + \cdots \\
  & = \sum_{k\geq 1}(-1)^{k+1}p(n-k(3k\pm 1)/2)
  \end{aligned}$$
</div>



`},
en:{title:String.raw`A practical formula for the partition number $p(n)$`,
  blurb:String.raw`How can we efficiently compute the number of partitions of an integer $n$?`,
  body:String.raw`
In 1918, Hardy and Ramanujan showed that 
$$p(n)\sim \frac{1}{4n\sqrt3}\text{exp}\left(\pi\sqrt{\frac{2n}{3}}\right)$$
But how can we calculate the exact value of $p(n)$ efficiently? Brute force would take too long. We will prove the following formula:

<div class="theorem theorem--warning">
  $$\begin{aligned}
  p(n) & = p(n-1) + p(n-2) - p(n-5) - p(n-7) + p(n-12) + \cdots \\
  & = \sum_{k\geq 1}(-1)^{k-1}p(n-k(3k\pm 1)/2)
  \end{aligned}$$
</div>


## 1. Generating function for $p(n)$

For $\lvert x \rvert\lt 1$, let 
$$f(x)=\prod_{n\geq 1}\frac{1}{1-x^n} = \prod_{n\geq 1}\sum_{i\geq 0}x^{ni} = \prod_{n\geq 1}(1+ x^n + x^{2n} + \cdots)$$
To find the coefficient of $x^k$ for $k\geq 1$, expand the product. Choosing $x^{i\cdot n}$ from a factor $(1+ x^n + x^{2n} + \cdots)$ means choosing the number $n$ exactly $i$ times. We choose the number $1$ some number of times, then $2$, and so on. The coefficient of $x^k$ counts the choices $(i_1, i_2, \ldots)$ such that:
$$i_1\cdot 1 + i_2 \cdot 2 + i_3 \cdot 3 + \cdots = k$$
There are exactly $p(k)$ such choices. Therefore,
$$\boxed{f(x) = \prod_{n\geq 1}\frac{1}{1-x^n} =  1 + \sum_{n\geq 1} p(n)x^n}$$ 

## 2. The pentagonal number theorem

We will prove the following theorem:

<div class="theorem theorem--compact">
  <strong class="theorem-title">Pentagonal number theorem</strong><br/>
  $$\prod_{n\geq 1}(1-x^n)=1 + \sum_{k\geq 1} (-1)^k\left(x^{k(3k-1)/2} + x^{k(3k+1)/2}\right)$$
</div>
 $\underline{\text{Proof:}}$ Start with a slightly different product:
$$\prod_{n\geq 1}(1+x^n) = (1+x)(1+x^2)(1+x^3)\cdots$$
Expanding it as in the previous section, the coefficient of $x^k$ counts the ways to write $k$ as
$$k = 1\cdot \varepsilon_1 + 2\cdot \varepsilon_2 + \cdots \qquad \text{where } \varepsilon_i \in \{0,1\}$$
This is the generating function for partitions into distinct integers. For example, $7=5+1+1$ is not counted, but $7=5+2$ is.$\\$
Our product has a minus sign, so:

$$\prod_{n\geq 1}(1-x^n) = \sum_{\varepsilon_1, \varepsilon_2, \ldots} (-1)^{\varepsilon_1 + \cdots + \varepsilon_s} x^{1\varepsilon_1 + 2\varepsilon_2 + \cdots + s\varepsilon_s}$$
A partition into distinct integers contributes positively if it has an even number of terms, and negatively if it has an odd number.$\\$
The first few terms are

$$\prod_{n\geq 1}(1-x^n) = 1-x-x^2 + x^5 + x^7 - x^{12} + \cdots$$

This suggests that for many values of $n$, such as $n=3, 4, 6, 8, 9, \ldots$, the even and odd partitions cancel out. In the other cases, the difference is just $\pm1$.$\\$
To prove the formula, we need to see when these partitions can be paired.

Take the partition $20 = 7 + 6 + 4 + 3$, drawn here:
$$
\begin{array}{ccccc}
\bullet & \bullet & \bullet & \bullet & \bullet & \bullet & \textcolor{red}{\bullet} \\
\bullet & \bullet & \bullet & \bullet & \bullet & \textcolor{red}{\bullet} \\
\bullet & \bullet & \bullet & \bullet \\
\textcolor{blue}{\bullet} & \textcolor{blue}{\bullet} & \textcolor{blue}{\bullet}
\end{array}
$$
Let the bottom row, in blue, have $a$ dots, and the diagonal on the right, in red, have $b$ dots. <br>
To place the bottom row alongside the red diagonal without leaving a floating dot, we need $a\leq b$. To move the red diagonal below the blue row and make a shorter row, we need $a\gt b$.<br>
These operations undo each other. They pair a partition with an even number of distinct terms with one that has an odd number, so their contributions cancel.<br>
There are exceptions when the two rows share a dot, shown in purple:
$$
\begin{array}{ccccc}
\bullet & \bullet & \bullet & \bullet & \bullet & \bullet & \textcolor{red}{\bullet} \\
\bullet & \bullet & \bullet & \bullet & \bullet & \textcolor{red}{\bullet} \\
\textcolor{blue}{\bullet} & \textcolor{blue}{\bullet} & \textcolor{blue}{\bullet} & \textcolor{blue}{\bullet} & \textcolor{purple}{\bullet} \\
\end{array}
$$
Moving either row reduces the other’s length by $1$:
<ul class="content-list content-list--compact">
  <li>to move the red row below the blue row and make it strictly shorter, we need $a-1 \gt b$ </li>
  <li>to move the blue row alongside the red row without leaving floating dots, we need $b-1 \geq a$ </li>
</ul> 
The exceptions are therefore $a=b$ in the first row and $a = b+1$ in the second:
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
These numbers have the form $\frac{k(3k-1)}{2}$ and $\frac{k(3k+1)}{2}$, where $k$ is the number of rows, or distinct terms in the partition. This gives the theorem. $\square$

## 3. Proof of the formula

We have 
$$ f(x)\prod_{n\geq 1}(1-x^n) = 1$$
and by the pentagonal number theorem,
$$ \par{1 + \sum_{n\geq 1} p(n)x^n}\par{1 + \sum_{n\geq 1} (-1)^n\par{x^{n(3n-1)/2} + x^{n(3n+1)/2}}}  = 1$$
$$ \par{1 + p_1x + p_2x^2 + p_3x^3 + \cdots}\par{1-x-x^2 + x^5 + x^7 - x^{12} + \cdots}  = 1$$
Since the coefficient of $x^n$ is zero, we obtain
<div class="theorem theorem--warning">
  $$\begin{aligned}
  p(n) & = p(n-1) + p(n-2) - p(n-5) - p(n-7) + p(n-12) + \cdots \\
  & = \sum_{k\geq 1}(-1)^{k+1}p(n-k(3k\pm 1)/2)
  \end{aligned}$$
</div>



`}
 },

{slug:'how-to-set-call-option-price',cat:'finance',date:'2026-08-04',read:15,
 fr:{title:String.raw`Comment fixer le prix d'une option ?`,
  blurb:String.raw`Comment les banques vous vendent des *options* sans jouer à la loterie ?`,
  body:String.raw`
<p class="text-justify">
**1. Introduction**<br>
  Imaginons la situation suivante : vous êtes boulanger, et un client vient vous voir pour prévoir une énorme commande de $1000$ croissants. Mais ce client est prévoyant : il ne veut ses croissants que dans un an. Comme vous ne pouvez pas faire les croissants aujourd'hui, vous devrez acheter les matières premières (par exemple la farine) dans un an. Mais peut-être que d'ici là le prix de la farine aura bien augmenté. Et votre client veut un devis maintenant !<br>
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
Imaginons une action qui vaut 100€ aujourd'hui, et qui dans un an vaudra soit 150€, soit 50€. Maintenant on vous propose le pari suivant : si l'action finit à 150€ on vous donne 50€, si elle finit à 50€ on ne vous donne rien. Ce pari, c'est exactement une option call avec un strike à 100€. Combien seriez-vous prêt à payer pour ce pari ?<br>

Si je considère que chaque possibilité a une chance sur deux d'arriver, alors en moyenne je gagne 25€. Si la banque me prête à taux $r$, comme 25€ dans un an valent 25€$\cdot e^{-r\Delta t}$ aujourd'hui (avec $\Delta t=1\text{ an}$), alors je suis prêt à payer cette option :
$$25\cdot e^{-r\Delta t}€$$
*(Si vous n'avez pas compris d'où vient $e^{-r\Delta t}$, considérez que la banque fait des prêts à taux $r=0$, c'est-à-dire que l'argent dans un an vaut la même chose que l'argent d'aujourd'hui et lisez la suite de l'article en prenant $r=0$, c'est-à-dire en supprimant les facteurs $e^{-r\Delta t}$.)*

Mais maintenant si mon ami est optimiste et pense que l'action a 70% de chance de monter et 30% de chance de descendre, alors  il pense gagner en moyenne $50\cdot \frac{70}{100} + 0 \cdot \frac{30}{100} = 35€$ et il est donc prêt à payer $35\cdot e^{-r\Delta t}€$...

Mais en finance on a besoin d'un prix unique, qui ne dépend pas de ce que pense chacun des acteurs ! <br>
En l'absence de prix unique, par exemple si une action s'échange à 20€ chez le Crédit Mutuel et 10€ à la Société Générale, alors j'achète plein d'actions à la Société Générale et je les revends au Crédit Mutuel, en empochant *immédiatement* et *sans risque* 10€ pour chaque transaction : c'est ce qu'on appelle l'**arbitrage**.

On va voir comment construire un portefeuille (un mélange d'actions et d'argent à la banque) dont la valeur à la maturité égale exactement le payoff de l'option. Si une telle « machine » existe, le prix de l'option **doit** être égal au prix pour construire cette machine (ce portefeuille), ce sans quoi il y aura de l'arbitrage.
</p>

**3. Le modèle binomial à un pas**

Aujourd'hui, l'action vaut $S$ et à la date $\Delta t$, elle ne peut prendre que deux valeurs : 
<ul class="content-list content-list--compact">
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
On remarquera qu'à **aucun moment** on n'a fait intervenir les probabilités pour l'action de monter ou de descendre ! Le prix ne dépend pas de ces probabilités.

**4. Ce que fait la banque en pratique**<p class="text-justify">
Concrètement, ce que fait la banque (le vendeur de l'option) :
<ul class="content-list content-list--compact">
  <li> le client achète une option call au prix $C$; la banque reçoit donc $C$
  <li> la banque emprunte $-\Gamma$ (si $\Gamma\lt 0$)  
  <li> la banque achète $\Delta$ actions grâce à $C - \Gamma$ (car $\Delta\cdot S = C - \Gamma$)
  <li> à la maturité $T$, la banque donne au client ce qu'elle lui doit
</ul> 

La banque réplique le pari du client : si le client a gagné son pari, la banque aussi et elle le rembourse sans frais de sa poche; si le client a perdu, la banque aussi mais elle ne lui doit rien.<br>
En pratique, la banque gagne de l'argent en vendant l'option plus chère que le prix théorique, avec des frais de service ou des services autour de l'option. 

**5. La probabilité risque neutre**

On a vu que les probabilités de up et down sont inconnues. Mais on aimerait bien créer une *fausse* probabilité $q$ qui ferait que *tout se passe comme si $S$ avait probabilité $q$ de monter et probabilité $1-q$ de descendre*, c'est-à-dire :
$$e^{r\Delta t}S = qSu + (1-q)Sd$$
on trouve alors
$$q = \frac{e^{r\Delta t} - d}{u - d}$$
Comme $d\lt e^{r\Delta t}\lt u$, on a bien $0\lt q \lt 1$ et on peut *interpréter* $q$ comme une probabilité : la **probabilité de risque neutre** (attention ! $q$ ne représente pas du tout la vraie probabilité pour $S$ de monter).<br>
Sous la probabilité $q$, on a 
$$\mathbb{E}^q(S_{\Delta t})=qSu + (1-q)Sd = e^{r\Delta t}S \qquad \text{ donc } \qquad S = e^{-r\Delta t}\mathbb{E}^q(S_{\Delta t})$$
On remarque aussi qu'on a 
$$C = e^{-r\Delta t}(qC_u + (1-q)C_d)$$
ce qui signifie qu'en calculant les payoffs $C_u, C_d$ ainsi que $q$ on peut remonter au prix du call $C$, ce qui évite de calculer $\Delta$ et $\Gamma$.
</p>
`},
en:{title:String.raw`How do you price an option?`,
  blurb:String.raw`How do banks sell you *options* without playing the lottery?`,
  body:String.raw`
<p class="text-justify">
**1. Introduction**<br>
  Imagine the following situation: you are a baker, and a customer comes to you to place a huge order for $1000$ croissants. But this customer is cautious: they only want their croissants in a year. Since you can't make the croissants today, you'll need to buy the raw materials (flour, say) a year from now. But maybe by then the price of flour will have gone up a lot. And your customer wants a quote now!<br>
  You go to the bank, which offers you insurance: it promises to sell you flour at €1 per kg, no matter what the market price is in a year, even if flour is worth €10 per kg by then.<br>
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
<ul class="content-list content-list--compact">
  <li>$S\cdot u$ in the scenario where it goes up
  <li>$S\cdot d$ in the scenario where it goes down
</ul> 
I'll let you check that $0\lt d \lt e^{r\Delta t} \lt u$, otherwise arbitrage is possible.<br>
We assume we can buy a fraction of a share and that we can lend or borrow at rate $r$.
Consider a European call option with strike $K$ and payoff
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


**4. What the bank does in practice**<p class="text-justify">
Here is what the bank, which sells the option, does:
<ul class="content-list content-list--compact">
  <li> the customer buys a call option at price $C$; the bank therefore receives $C$
  <li> the bank borrows $-\Gamma$ (if $\Gamma\lt 0$)  
  <li> the bank buys $\Delta$ shares using $C - \Gamma$ (since $\Delta\cdot S = C - \Gamma$)
  <li> at maturity $T$, the bank gives the customer what it owes them
</ul> 


The bank replicates the customer’s bet. If the customer wins, the bank’s portfolio pays for what it owes them, without any extra money from the bank. If the customer loses, the bank owes them nothing.<br>
In practice, the bank charges more than the theoretical price, through fees or related services.


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
$\Gamma_\varepsilon$ se paramètre avec $\gamma(\theta) = e^{i\theta}$ pour $\theta$ variant de $\pi$ à $0$ donc
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
To check convergence, note that the integrand is continuous on $\R^*$, extends by continuity at $0$, and is $\mathcal O\par{x^{-3}}$ at $\pm\infty$.

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
  blurb:'Que peut-on dire de la divisibilité de la différence entre le numérateur et le dénominateur de la série harmonique ?',
  statement:String.raw`
Soit $p$ premier impair et $r, s$ tels que
$$H_p = 1 + \cdots + \frac{1}{p} = \frac{r}{ps}$$
Démontrer que $r-s$ est divisible par $p^3$.
`,
  hint:String.raw`
Essayer de mettre du $p$ en facteur dès que possible. $\\$
Regrouper les termes deux par deux.$\\$
Travailler modulo $p$ autant que possible.
`,
  solution:String.raw`
On peut réécrire
$$H_p = \frac{\frac{p!}1 + \cdots + \frac{p!}{p}}{p\cdot (p-1)!}$$
Comme le numérateur n'est pas divisible par $p$, un diviseur commun du numérateur et du dénominateur est strictement inférieur à $p$ et on peut donc considérer
$$r = \frac{p!}1 + \cdots + \frac{p!}{p}, \qquad s = (p-1)!$$
(peut-être qu'on n'a pas réduit entièrement $r$ et $s$ en les posant comme tels, mais au moins on n'a pas introduit de facteurs $p$ qui fausseraient le résultat).$\\$
On a 
$$r - s = p\left(\frac{(p-1)!}{1} + \cdots + \frac{(p-1)!}{p-1}\right)$$
D'où le premier facteur $p$. De plus en regroupant deux par deux les termes extrémaux de la somme, on trouve que
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
$\\ \emph{En effet}, \ 2^{2^{n+1}}\equiv1\pmod p$, donc l'ordre de $2$ est un diviseur de $2^{n+1}$ c'est-à-dire un $2^k$ et $2^{2^k} \neq 1 \pmod p$ pour $k \lt 2^{n+1}$ car on aurait $2^{2^n}\equiv 1 \pmod p$.

Comme l'ordre d'un élément divise le cardinal du groupe, $2^{n+1}$ divise $p-1$, c'est-à-dire
$$p = k2^{n+1} + 1\quad \text{pour un } k\in \N$$
Pour $n=5$, un diviseur premier de $F_5$ est de la forme $p=64k +1$.
On essaye $p = 65, 129, 193, 257, 321, 385, 449, 513, 577, 641$ (en évitant $65, 129, 321, 385, 513$ qui ne sont pas premiers) pour finalement trouver que $641$ divise $F_5$.

$\underline{Bonus:}$ On peut faire mieux comme critère de divisibilité si on sait le fait suivant : 
$$\text{Si } 8 \mid p-1, \quad\text{ alors } 2 \text{ est un carré modulo }p$$ 
Supposons $n\geq 2$, de sorte que $2^{n+1}\geq 8$. Comme $p=k2^{n+1}+1$, alors $8 \mid p-1$ et donc $2$ est un carré modulo $p$, donc $2^{\frac{p-1}{2}}\equiv 1 \pmod p$ par le petit théorème de Fermat donc l'ordre de $2$, qui est $2^{n+1}$, divise $\frac{p-1}{2}$, donc $p$ est de la forme
$$p = k2^{n+2} + 1$$
Pour $n=5$, il faut tester $p=128k + 1$, soit en retirant les $p$ composés, il suffit de tester $p=257$ et $p=641$ seulement !
`},
 en:{title:'Prime factors of large numbers',
  blurb:'How can we find prime factors of very large numbers?',
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

$\underline{Bonus:}$ We can narrow down the possible divisors using the following fact:
$$\text{If } 8 \mid p-1, \quad\text{ then } 2 \text{ is a quadratic residue modulo }p$$ 
Assume $n\geq 2$, so that $2^{n+1}\geq 8$. Since $p=k2^{n+1}+1$, then $8 \mid p-1$ and hence $2$ is a square modulo $p$, so $2^{\frac{p-1}{2}}\equiv 1 \pmod p$ by Fermat's little theorem. Thus the order of $2$, which is $2^{n+1}$, divides $\frac{p-1}{2}$, so $p$ is of the form
$$p = k2^{n+2} + 1$$
For $n=5$, one must test $p=128k + 1$, so excluding composite $p$, it suffices to test $p=257$ and $p=641$ only! 
`}},

]};
