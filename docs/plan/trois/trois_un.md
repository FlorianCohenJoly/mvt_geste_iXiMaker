---
sidebar_position: 1
---

# 3.1. Les outils de développement VR

La concrétisation des expériences immersives en réalité virtuelle, et plus particulièrement des interactions manuelles, repose sur un ensemble d'outils de développement sophistiqués. Ces plateformes et SDK (Software Development Kits) fournissent aux développeurs les briques logicielles nécessaires pour construire des mondes virtuels réactifs et intuitifs.

Pour créer des expériences VR, la plupart des développeurs s'appuient sur des moteurs de jeu robustes qui servent de fondation. Parmi eux, Unity s'est imposé comme un choix prédominant grâce à sa polyvalence et à son écosystème d'outils dédiés à la réalité étendue (XR). Par exemple, notre société [iXiVERSE](https://www.ixiverse.com/) a pris le parti de développer ses applications VR en utilisant Unity, car il offre une plus grand facilité de développement. Nous avons tester d'autres moteurs comme Unreal Engine, mais nous avons constaté qu'Unity permettait une intégration plus fluide des fonctionnalités XR et une meilleure gestion des interactions manuelles.

Un élément central pour la création d'interactions manuelles sous Unity est le [XR Interaction Toolkit](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@3.0/manual/index.html). _Le package XR Interaction Toolkit est un système d'interaction de haut niveau, basé sur des composants, pour la création d'expériences VR et AR. Il fournit un framework permettant des interactions 3D et d'interface utilisateur à partir d'événements d'entrée Unity._ [(_1_)](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@3.0/manual/index.html) Il permet aux développeurs de se concentrer sur la logique de l'expérience plutôt que sur les détails techniques du suivi et de l'interaction des contrôleurs.

Au-delà de ces outils génériques, des SDK spécifiques aux plateformes sont essentiels pour optimiser les applications. [Meta XR SDK](https://developers.meta.com/horizon/downloads/package/meta-xr-sdk-all-in-one-upm/) fournit des outils et des API (Application Programming Interfaces) spécifiquement conçus pour tirer le meilleur parti des casques Oculus et Meta Quest. Il permet d'accéder aux fonctionnalités matérielles uniques de ces appareils et d'assurer une performance et une compatibilité optimales.

De manière similaire, le [SteamVR Plugin](https://valvesoftware.github.io/steamvr_unity_plugin/) est indispensable pour créer des applications compatibles avec une gamme plus large de casques VR basés sur la plateforme SteamVR, notamment le [HTC Vive](https://www.vive.com/fr/) et le [Valve Index](https://www.valvesoftware.com/fr/index/headset).

Enfin, avec l'intérêt croissant pour les expériences mêlant réel et virtuel, [AR Foundation](https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@6.1/manual/index.html). Cet ensemble d'outils au sein d'Unity est dédié à l'intégration de fonctionnalités de réalité augmentée. Il est particulièrement pertinent pour le développement d'applications qui exploitent les capacités de "[pass-through](https://developers.meta.com/horizon/documentation/unity/unity-passthrough/)" de certains casques VR modernes, permettant de fusionner le monde physique environnant avec des éléments virtuels et d'enrichir ainsi les interactions.

---

1. [Unity XR Interaction Toolkit](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@3.0/manual/index.html) - Documentation officielle du toolkit d'interaction XR d'Unity.
