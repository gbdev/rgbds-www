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
            Read docs
          </Link>
          &nbsp;
          <Link
            className="button button--lg btn-learn"
            href="https://github.com/gbdev/rgbds"
          >
            Contribute
          </Link>
        </div>
      </div>
    </header>
  );
}

function Resources() {
  const resources = [
    [
      {
        title: (<>GB Assembly tutorial <span className="badge badge--secondary">WIP</span></>),
        description: (<>This tutorial will guide you from a basic Hello World, to making an <i>Arkanoid</i> clone, and ending with a Shoot-'Em-Up, touching upon everything you need to know to make a Game Boy game. <br></br> <small> This guide is still work in progress, only the first lessons are available.</small> </>),
        url: "https://eldred.fr/gb-asm-tutorial",
        linkText: "Learn",
      },
      {
        title: "Pan Docs",
        description: "The definitive Game Boy technical reference. Contains descriptions of all hardware registers, many behaviors (such as rendering and audio), and even pretty diagrams!",
        url: "https://gbdev.io/pandocs",
        linkText: "Read",
      },
    ],
    [
      {
        title: "hardware.inc",
        description: (<>For over 20 years, <code>hardware.inc</code> has been a staple of essentially all RGBDS projects, providing all sorts of constants to allow easy interaction with Game Boy hardware registers.</>),
        url: "https://github.com/gbdev/hardware.inc",
        linkText: "Download",
      },
      {
        title: "rgbds-structs",
        description: (<>RGBDS does not (<Link href="https://github.com/gbdev/rgbds/issues/98">currently</Link>) support "structs" (data structures) natively. This macro pack provides that functionality, all in a single file that you can freely <code>INCLUDE</code> anywhere in your projects.</>),
        url: "https://github.com/ISSOtm/rgbds-structs",
        linkText: "Download",
      },
    ],
    [
      {
        title: "gb-boilerplate",
        description: (<>This simple template project allows getting started on your next GB project more quickly. The provided Makefile allows simply adding new <code>.asm</code> files in a single folder, and <code>make</code> builds your ROM!</>),
        url: "https://github.com/ISSOtm/gb-boilerplate",
        linkText: "Get started",
      },
      {
        title: "gb-starter-kit",
        description: "gb-starter-kit is “gb-boilerplate Plus”: the same build system is included, plus some basic code such as a LCD-safe copy, a crash handler, and a data compressor + decompressor.",
        url: "https://github.com/ISSOtm/gb-boilerplate",
        linkText: "Get started",
      },
    ],
  ];

  return (
    <section>
      <div className="container">
        <h2>Resources</h2>
        {resources.map((resources) => (<div className="row">
          {resources.map((resource) => (
            <div className="col">
              <div className="padding-horiz--md margin-top--md margin-bottom--md">
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <Link
                  className="button button--primary button--lg"
                  href={resource.url}
                >
                  {resource.linkText} →
                </Link>
              </div>
            </div>
          ))}
        </div>))}
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Welcome!"
      description="RGBDS is the community's preferred Game Boy and Game Boy Color assembler package, free and open-source. Find here documentation and install instructions."
    >
      <main>
        <HomepageHeader />
        <HomepageFeatures />
        <hr />
        <Resources />
      </main>
    </Layout>
  );
}
