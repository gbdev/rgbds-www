import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Get the most out of Game Boy hardware',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Go bare metal and program low level registries to learn the hardware architecture of Game Boy system. Writing native assembly code enables you to squeeze the limited Game Boy capabilities and push them to the limits.
      </>
    ),
  },
  {
    title: 'Complete toolchain',
    Svg: require('../../static/img/undraw_version_control.svg').default,
    description: (
      <>
        RGBDS is composed of four programs, covering the whole compilation pipeline, from ASM code to a ready ROM.
        RGBASM is the assembler, RGBLINK the linker,
        RGBFIX the header “fixer” and RGBGFX the image converter.
      </>
    ),
  },
  {
    title: 'Open Source',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        With a long history dating back to 1997, RGBDS is an open source project supporting a large community of Homebrew developers. Join us to get involved, showcase your project or get help.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        
      </div>
      <div className=" padding-horiz--md">
        <h3>{title}</h3>
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
