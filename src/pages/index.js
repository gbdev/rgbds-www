import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { latestStable } from '@site/src/components/versions.js';


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div>
          <Link
            className="button button--lg btn-install"
            to="/install"
          >
            Install
          </Link>
          &nbsp;
          <Link
            className="button button--lg btn-contribute"
            href={`/docs/${latestStable}`}
          >
            Read manual
          </Link>
          &nbsp;
          <Link
            className="button button--lg btn-learn"
            href="https://gbdev.io/rgbds-live/"
          >
            Try online
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Game Boy Development System"
      description="RGBDS is the community's preferred Game Boy and Game Boy Color assembler package, free and open-source. Find here documentation and install instructions."
    >
      <main>
        <HomepageHeader />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
