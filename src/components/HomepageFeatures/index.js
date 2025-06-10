import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Florian COHEN-JOLY',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <a href='https://www.linkedin.com/in/florian-cohen-joly-developpeur-web/'>Developpeur XR en alternace chez iXiVerse</a>
      </>
    ),
  },
  {
    title: 'Thomas CASTANIER',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <a href='https://www.linkedin.com/in/thomas-castanier-5078891a4/'>Developpeur XR en alterance chez iXiVerse</a>
      </>
    ),
  },
  {
    title: 'Maxime NICOLAS',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <a href='https://www.linkedin.com/in/maxime-nicolas-developpeur-informatique/'> Développeur Web en alternance chez Thalés</a>
      </>
    ),
  },
  {
    title: 'Coding Factory',
    img: require('@site/static/img/coding_factory.jpg').default,

    description: (
      <>
        <a href='https://codingfactory.fr'>Etablissement d'enseignement supérieur créer par l'ESIEE-IT.</a>
      </>
    ),
  },
];

function Feature({ Svg, img, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {img ? (
          <img src={img} className={styles.featureImg} alt={title} />
        ) : (
          Svg && <Svg className={styles.featureSvg} role="img" />
        )}
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
