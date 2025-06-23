---
sidebar_position: 2
---

# 3.2 Manipulation d’objets et gestes 

_"L’interaction est l’un des piliers fondamentaux de la réalité virtuelle. Il s’agit de la capacité des utilisateurs à interagir avec l’environnement créé par la technologie de réalité virtuelle. Il s’agit entre autres des gestes physiques, des mouvements de la tête et du corps, des commandes vocales, contrôleurs manuels, interfaces tactiles et sensations haptiques."_ [(_1_)](https://www.bew-web-agency.fr/piliers-de-la-realite-virtuelle//)

Pour répondre à ces besoins, des outils spécifiques ont été développés et la recherche continue d’enrichir ces interactions.

Des solutions comme [Mesh Slicer](https://assetstore.unity.com/packages/tools/modeling/mesh-slicer-59618?srsltid=AfmBOop2z-mpurQbag7GUAjzKEKT1z7kg0JhBIlqc9jJg0IvtcsqX1q-) ou [VR Cutting](https://assetstore.unity.com/packages/tools/physics/vr-cutting-170894?srsltid=AfmBOor2es5XfV1vBDf3BewsgZcqUVVlX5ZbUTNWraGyWbkuylqo4nCI) permettent de découper des objets 3D avec précision, utiles pour le prototypage ou la formation technique. D’autres outils, tels que [VR Brush](https://assetstore.unity.com/packages/tools/integration/vr-brush-101781?srsltid=AfmBOopUU_QMwHdeuSeUANzPNTx0VWfdQf7gd9QkHlvIBaSmyL1sOdDk), offrent des fonctions de dessin ou de sculpture en 3D, libérant la créativité dans un espace immersif.

<iframe width="560" height="315" src="https://www.youtube.com/embed/6Uvc8cGqpWM?si=vgkD0qQJYd8u_B4V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> Unity Mesh Slicer, (Source: [YouTube](https://www.youtube.com/watch?v=6Uvc8cGqpWM))

Des plateformes comme [Gravity Sketch](https://gravitysketch.com) ou [Shape XR](https://www.shapesxr.com) vont plus loin en intégrant la co-création et la collaboration en temps réel. Ces interfaces permettent aux utilisateurs de modéliser, designer ou réviser des projets en VR, dans un environnement spatial naturel, au-delà des limites des logiciels 2D traditionnels.

<iframe width="560" height="315" src="https://www.youtube.com/embed/J7tS2GpwDUo?si=TXNeL4iMS9soUumq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> Shape XR, (Source: [YouTube](https://www.youtube.com/watch?v=J7tS2GpwDUo))

La recherche académique s'intéresse à l'amélioration de la fidélité des gestes et des retours sensoriels. Un exemple notable est le gant "reconfigurable" présenté par [Hangxin Liu et al en 2023](https://arxiv.org/abs/2301.05821), capable de capturer avec précision différents types de préhension physique ou virtuelle.

Pour que ces interactions soient efficaces et naturelles, il est essentiel de repenser les gestes associés à chaque tâche technique. Dans le cadre de notre propre projet chez iXiVERSE, nous avons développé nous mêmes des gestes spécifiques pour des actions courantes en VR, tels que la découpe, la mesure et la peinture.

Reproduire ces gestes nous a permis de mieux comprendre leur construction. Par ailleurs, le fait de rendre ce travail open source permet à la communauté d’en bénéficier. Notre projet de boîte à gestes vise à fournir une base de gestes techniques adaptés à la VR, en s’inspirant des gestes du monde réel tout en tenant compte des spécificités de l’interaction virtuelle.

<video width="540" height="360" controls>
  <source src="/video/CuttingSquare.mp4" type="video/mp4" />
  Votre navigateur ne supporte pas la balise vidéo.
</video> 
Video de découpe d'un carré, (Source: [Développement interne iXiVERSE](https://ixiverse.com))

<video width="540" height="360" controls>
  <source src="/video/videoDrawing.mp4" type="video/mp4" />
  Votre navigateur ne supporte pas la balise vidéo.
</video>
Video de dessin, (Source: [Développement interne iXiVERSE](https://ixiverse.com))

<video width="540" height="360" controls>
  <source src="/video/videoSprayDrawing.mp4" type="video/mp4" />
  Votre navigateur ne supporte pas la balise vidéo.
</video>
Video de peinture sur des surfaces, (Source: [Développement interne iXiVERSE](https://ixiverse.com))


---

1. [Bew web agency - Tout savoir sur les piliers de la réalité virtuelle - 2023](http://bew-web-agency.fr/piliers-de-la-realite-virtuelle/) 

2. [Hangxin Liu et al - A Reconfigurable Data Glove for Reconstructing Physical and Virtual Grasps - 2023](https://arxiv.org/abs/2301.05821)
