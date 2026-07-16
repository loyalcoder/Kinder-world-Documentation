import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Kinder World Theme',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Tailwind + Bootstrap WordPress theme with custom navigation, blog
        layouts, page banners, and a Webpack build pipeline for kids &amp;
        education sites.
      </>
    ),
  },
  {
    title: 'Kinder World Manager',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Companion plugin with Elementor widgets, custom post types, Theme
        Builder header/footer replacement, and CMB2 meta fields.
      </>
    ),
  },
  {
    title: 'Elementor Ready',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Build landing pages with 28+ Kinder World widgets and replace the
        default theme header/footer using Elementor Theme Builder templates.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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
