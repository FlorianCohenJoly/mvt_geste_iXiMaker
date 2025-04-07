import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Florian COHEN-JOLY',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Developpeur XR en alternace chez iXiVerse
      </>
    ),
  },
  {
    title: 'Thomas CASTANIER',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Developpeur XR en alterance chez iXiVerse
      </>
    ),
  },
  {
    title: 'Maxime NICOLAS',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Développeur Web en alternance chez Thalés
      </>
    ),
  },
  {
    title: 'Coding Factory',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    
    description: (
      <>
        Etablissement d'enseignement supérieur créer par l'ESIEE-IT.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">

          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
