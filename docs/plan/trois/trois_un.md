---
sidebar_position: 1
---

# 3.1. Les outils de développement VR

La concrétisation des expériences immersives en réalité virtuelle, et plus particulièrement des interactions manuelles, repose sur un ensemble d'outils de développement sophistiqués. Ces plateformes et SDK (Software Development Kits) fournissent aux développeurs les briques logicielles nécessaires pour construire des mondes virtuels réactifs et intuitifs.




Pour créer des expériences VR, la plupart des développeurs s'appuient sur des moteurs de jeu robustes qui servent de fondation. Parmi eux, Unity s'est imposé comme un choix prédominant grâce à sa polyvalence et à son écosystème d'outils dédiés à la réalité étendue (XR). 

Un élément central pour la création d'interactions manuelles sous Unity est le [XR Interaction Toolkit](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@3.0/manual/index.html). Ce puissant ensemble de composants simplifie grandement le développement d'expériences VR et AR, en offrant des fonctionnalités prêtes à l'emploi pour la saisie, la manipulation d'objets 3D et l'interaction avec des interfaces utilisateur virtuelles. Il permet aux développeurs de se concentrer sur la logique de l'expérience plutôt que sur les détails techniques du suivi et de l'interaction des contrôleurs.

Au-delà de ces outils génériques, des SDK spécifiques aux plateformes sont essentiels pour optimiser les applications. [Meta XR SDK](https://developers.meta.com/horizon/downloads/package/meta-xr-sdk-all-in-one-upm/) fournit des outils et des API (Application Programming Interfaces) spécifiquement conçus pour tirer le meilleur parti des casques Oculus et Meta Quest. Il permet d'accéder aux fonctionnalités matérielles uniques de ces appareils et d'assurer une performance et une compatibilité optimales. 

De manière similaire, le [SteamVR Plugin](https://valvesoftware.github.io/steamvr_unity_plugin/) est indispensable pour créer des applications compatibles avec une gamme plus large de casques VR basés sur la plateforme SteamVR, notamment le [HTC Vive](https://www.vive.com/fr/) et le [Valve Index](https://www.valvesoftware.com/fr/index/headset). Ce plugin assure l'interopérabilité et permet aux développeurs de cibler un public plus vaste sans avoir à réécrire leur code pour chaque appareil.

:::tip[L’interopérabilité..]
L’interopérabilité est la capacité que possède un produit ou un système, dont les interfaces sont intégralement connues, à fonctionner avec d’autres produits ou systèmes existants ou futurs et ce sans restriction d’accès ou de mise en œuvre
:::

Enfin, avec l'intérêt croissant pour les expériences mêlant réel et virtuel, [AR Foundation](https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@6.1/manual/index.html) joue un rôle crucial. Cet ensemble d'outils au sein d'Unity est dédié à l'intégration de fonctionnalités de réalité augmentée. Il est particulièrement pertinent pour le développement d'applications qui exploitent les capacités de "[pass-through](https://developers.meta.com/horizon/documentation/unity/unity-passthrough/)" de certains casques VR modernes, permettant de fusionner le monde physique environnant avec des éléments virtuels et d'enrichir ainsi les interactions.