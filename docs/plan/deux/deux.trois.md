---
sidebar_position: 3
---

# 2.3 Les Limitations des Interfaces 2D et des Périphériques Classiques

Si les interfaces utilisateur 2D et les périphériques classiques tels que le clavier, la souris et l'écran ont indéniablement transformé notre relation avec le monde numérique, ils présentent des contraintes fondamentales, en particulier lorsqu'il s'agit de représenter et de manipuler des informations qui sont intrinsèquement spatiales ou d'accomplir des tâches qui se déroulent naturellement dans un environnement en 3D. C'est dans ce contexte que la réalité virtuelle se présente comme une alternative prometteuse, offrant une modalité d'interaction homme-machine radicalement différente comme le montre l'étude de Graham Smith, Tim Salzman et Wolfgang Stuerzlinger _"Un problème fondamental est que la manipulation d’objets 3D avec des interfaces utilisateur 2D est très difficile pour les utilisateurs non expérimentés. […] Positionner un objet dans une scène 3D est complexe car il faut contrôler six variables indépendantes : trois pour la position et trois pour l’orientation. […] Cela nous amène à penser qu’une interface exposant directement les six degrés de liberté complique l’interaction avec les environnements virtuels pour l’utilisateur moyen."_[(*1*)](https://vvise.iat.sfu.ca/user/data/papers/mive_gi2001.pdf).



Nos vies et le monde qui nous entoure sont fondamentalement tridimensionnels. Les écrans 2D, par leur nature plane, nécessitent une abstraction pour représenter des objets et des environnements en 3D. Cette abstraction se traduit souvent par des interfaces complexes, des menus déroulants, des icônes et des fenêtres qui tentent de simuler la profondeur et l'espace. La manipulation d'objets virtuels 3D à l'aide d'une souris 2D, par exemple, requiert une coordination œil-main complexe et une traduction mentale des mouvements 2D en actions 3D (rotation, translation, échelle). Cette indirectivité peut rendre les tâches spatiales plus lentes, moins intuitives et sujettes à des erreurs. 



:::tip[Exemple..]
Modéliser un objet 3D complexe sur un logiciel de CAO (Conception Assistée par Ordinateur) à l'aide d'une souris et d'un clavier nécessite une expertise et une pratique considérables pour naviguer dans les différentes vues 2D et manipuler les sommets, les arêtes et les faces de l'objet dans l'espace virtuel. L'absence d'une interaction spatiale directe rend le processus moins naturel que de manipuler un objet physique.
:::


De nombreuses activités humaines, qu'il s'agisse d'assembler des pièces mécaniques, de réaliser une intervention chirurgicale, de naviguer dans un environnement complexe ou de comprendre la disposition d'un espace architectural, se déroulent dans un espace tridimensionnel. Les interfaces 2D nous obligent à traduire ces actions et ces concepts spatiaux en une série de commandes abstraites (clics, frappes de clavier, mouvements de souris). Cette traduction peut être contre-intuitive et nécessiter un apprentissage significatif comme le souligne l'ISTE _"Il serait difficile d'observer un écosystème de récif corallien en personne, et il serait tout aussi difficile d'explorer les trois principales formations terrestres de la Lune sans assistance technologique. Dans ces cas, la technologie immersive peut aider les enseignants à contourner les contraintes et les limitations de l'apprentissage."_[(*2*)](https://iste.org/blog/how-immersive-learning-prepares-students-for-the-future).

:::tip[Exemple...]
Apprendre à réaliser une procédure chirurgicale complexe en se basant uniquement sur des manuels et des vidéos 2D est moins efficace que de pouvoir s'entraîner dans un environnement 3D interactif où la profondeur, les relations spatiales entre les organes et les instruments sont directement perceptibles et manipulables.
:::

Les interfaces traditionnelles introduisent une couche d'abstraction entre l'intention de l'utilisateur (par exemple, "je veux saisir cet objet" ou "je veux tourner cette valve") et l'action numérique nécessaire pour réaliser cette intention (déplacer le curseur, cliquer, maintenir le bouton enfoncé, déplacer la souris dans une certaine direction). Cette barrière peut rendre l'interaction moins directe et moins engageante. L'utilisateur doit constamment traduire ses intentions en commandes spécifiques que le système peut interpréter.

:::tip[Exemple ...]
Pour saisir un fichier sur un bureau virtuel 2D et le déplacer dans un dossier, l'utilisateur doit localiser le fichier avec le curseur, cliquer et maintenir le bouton de la souris, faire glisser le curseur jusqu'au dossier et relâcher le bouton. Dans le monde réel, l'action de saisir et de déplacer un objet est beaucoup plus directe et intuitive.
:::

La réalité virtuelle offre le potentiel de surmonter ces limitations en proposant une interaction plus directe et spatiale avec le monde numérique. En plaçant l'utilisateur dans un environnement 3D immersif et en permettant de suivre les mouvements de la tête et des mains dans cet espace, la VR réduit la nécessité d'une abstraction mentale et permet une interaction plus naturelle et intuitive avec les informations et les objets virtuels, comme dit dans cette étude de Priska Breves et Jan-Philipp Stein, _" La présence spatiale (en tant que gratification fondamentale de la réalité virtuelle) n'est pas nécessairement liée à une charge cognitive plus élevée, on peut en conclure que les formes de médias immersifs peuvent effectivement constituer des outils efficaces de communication, de divertissement et d’apprentissage à condition qu’elles soient correctement conçues et mises en œuvre."_[(*3*)](https://link.springer.com/article/10.1007/s10055-022-00697-5) Cela ouvre de nouvelles perspectives pour des tâches complexes nécessitant une compréhension spatiale et une manipulation 3D, en rapprochant l'intention de l'utilisateur de l'action numérique.


-------------------------------------------------------------------------------------------------------------------------------

1. [Graham Smith, Tim Salzman, Wolfgang Stuerzlinger - 3D Scene Manipulation with 2D Devices and Constraints - Non datée](https://vvise.iat.sfu.ca/user/data/papers/mive_gi2001.pdf)

2. [Nicole Krueger - How Immersive Learning Prepares Students for the Future - 2023](https://iste.org/blog/how-immersive-learning-prepares-students-for-the-future)

3. [Priska Breves, Jan-Philipp Stein - Cognitive load in immersive media settings: the role of spatial presence and cybersickness - 2022](https://link.springer.com/article/10.1007/s10055-022-00697-5)