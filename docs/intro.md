---
sidebar_position: 3
---

# Introduction

Depuis ses débuts en 1956 avec le sensorama, la réalité virtuelle s’inscrit dans une volonté de repenser notre manière d’interagir avec les environnements numériques. Cette ambition est soulignée dans le rapport _Démystifier les technologies immersives_ [(_1_)](https://www.csps-efpc.gc.ca/tools/articles/immersive-technologies-fra.aspx), qui décrit comment ces technologies _"brouillent les frontières entre le monde physique et le monde virtuel"_, en procurant _"un sentiment de présence tangible et d'immersion dans un environnement numérique"_.
Plutôt que de s’en tenir aux interfaces classiques, elle vise à créer une immersion sensorielle plus complète, dans laquelle l’utilisateur devient un participant actif au sein d’un environnement simulé. En ce sens, l’article _History of Virtual Reality_ [(_2_)](https://www.vrs.org.uk/virtual-reality/history.html) rappelle le concept pionnier d’Ivan Sutherland en 1965, appelé _Ultimate Display_ [(_3_)](https://worrydream.com/refs/Sutherland_1965_-_The_Ultimate_Display.pdf), qui visait à simuler la réalité au point où il serait impossible de la différencier de la réalité réelle. Sutherland décrivait ce concept ainsi :

_"Un monde virtuel vu à travers un casque de réalité virtuelle (HMD) et apparaissant réaliste grâce à un son 3D amélioré et à un retour tactile. Un matériel informatique capable de créer le monde virtuel et de le maintenir en temps réel. La capacité pour les utilisateurs d’interagir avec des objets dans le monde virtuel de manière réaliste."_

Il ajoutait également :

_"L’affichage ultime serait, bien sûr, une pièce dans laquelle l’ordinateur peut contrôler l’existence de la matière. Une chaise affichée dans une telle pièce serait suffisamment réelle pour s’y asseoir. Des menottes affichées dans une telle pièce seraient contraignantes, et une balle affichée dans une telle pièce serait mortelle..."_

Cette vision reste une référence majeure dans la définition des ambitions technologiques et immersives de la réalité virtuelle. Dans cette dynamique, la manipulation d’objets notamment à caractère technique demeure un défi fondamental. **Comment concevoir des interactions réalistes et immersives en réalité virtuelle pour la manipulation d'objets techniques, tout en prenant en compte la gestuelle et la résistance physique ?**

Ce questionnement prend une importance particulière dans un contexte où la VR ne cesse de gagner en maturité et d'investir des domaines d'application de plus en plus critiques, allant de la formation industrielle à la conception assistée par ordinateur. Selon _le rapport sur les tendances de croissance de la réalité virtuelle_ [(_4_)](https://www.globenewswire.com/news-release/2025/03/18/3044525/28124/en/Virtual-Reality-Growth-Trends-Report-2025-Global-Market-to-Grow-by-339-29-Billion-by-2033-Driven-by-Rising-Applications-in-Surgery-Immersive-Entertainment-Simulation-Developments-P.html), le marché mondial de la VR devrait atteindre une valeur de 339,29 milliards de dollars d'ici 2033, témoignant d’un essor significatif. Cette croissance est portée par l’essor de nombreuses applications innovantes, telles que [la chirurgie assistée par réalité virtuelle](https://techtomed.com/la-realite-augmentee-au-service-de-la-chirugie/), le divertissement immersif comme _[EVA](https://www.eva.gg/fr-FR)_, _[VRChat](https://hello.vrchat.com/)_, _[Alone together](https://www.jeanmicheljarre.com/live/alone-together-vr-concert)..._ ou le développement de simulations réalistes _[5 Exemples Concrets d’Entreprises Utilisant la VR pour la Formation](https://rvolution.fr/2024/06/25/5-exemples-concrets-dentreprises-utilisant-la-vr-pour-la-formation/?utm_source=chatgpt.com)_. La capacité à interagir de manière intuitive et réaliste avec des objets virtuels complexes, en tenant compte de la gestuelle naturelle et des sensations de résistance physique, est un facteur clé pour l'adoption et l'efficacité de ces technologies comme le dit l'article _Réalité Virtuelle et Interaction Utilisateur: Défis et Solutions_ [(_7_)](https://w3r.one/fr/blog/mobile/technologies-emergentes/realite-virtuelle/realite-virtuelle-interaction-utilisateur-defis-solutions): _"L'interaction en VR est au cœur de l'expérience utilisateur. Elle détermine la profondeur de l'immersion, le niveau d'engagement et, en fin de compte, le succès d'une application VR"_:

Immersion: _"Un environnement VR doit stimuler autant de sens que possible pour créer une expérience réaliste."_

Engagement: _"Une interaction intuitive et naturelle renforce l'engagement de l'utilisateur, prolongeant ainsi la durée de l'expérience VR."_

Accessibilité: _"Une interaction bien conçue rend la VR plus accessible, permettant même aux novices de plonger facilement dans le monde virtuel."_

Ce mémoire de veille technologique se propose d'explorer les avancées et les défis liés à la conception d'interactions manuelles réalistes et immersives en réalité virtuelle pour la manipulation d'objets techniques.
Nous retracerons:

- l'évolution des interactions homme-machine avant l'avènement de la VR.
- les différentes technologies VR qui sous-tendent ces interactions.
- les principes de conception des gestes et des interactions spécifiques au contexte virtuel.
- l'accessibilité soulevés par ces technologies ainsi que leurs limites actuelles.
- les domaines d'application prometteurs et les débouchés potentiels de ces interactions manuelles réalistes en VR.

Puis nous finirons par une conclusion qui retracera notre mémoire afin de répondre à notre problématique.

---

1. [Guy Boulet - (École de la fonction publique du Canada) - Démystifier les technologies immersives - 2023](https://www.csps-efpc.gc.ca/tools/articles/immersive-technologies-fra.aspx)

2. [Virtual Reality Society - History of Virtual Reality - (2019)](https://www.vrs.org.uk/virtual-reality/history.html)

3. [Ivan Sutherland - The Ultimate Display - 1965 ](https://worrydream.com/refs/Sutherland_1965_-_The_Ultimate_Display.pdf)

4. [Rapport sur les tendances de croissance de la réalité virtuelle - 2025](https://www.globenewswire.com/news-release/2025/03/18/3044525/28124/en/Virtual-Reality-Growth-Trends-Report-2025-Global-Market-to-Grow-by-339-29-Billion-by-2033-Driven-by-Rising-Applications-in-Surgery-Immersive-Entertainment-Simulation-Developments-P.html)

5. [5 Exemples Concrets d’Entreprises Utilisant la VR pour la Formation - 2024](https://rvolution.fr/2024/06/25/5-exemples-concrets-dentreprises-utilisant-la-vr-pour-la-formation/)

6. [Réalité Virtuelle et Interaction Utilisateur: Défis et Solutions - 2024](https://w3r.one/fr/blog/mobile/technologies-emergentes/realite-virtuelle/realite-virtuelle-interaction-utilisateur-defis-solutions)
