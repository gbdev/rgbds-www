import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Get the most out the Game Boy hardware",
    description: (
      <>
        Gain complete control over the console; with no middle-man, debugging is
        made simpler.
        <br />
        Push the Game Boy's limited capabilities to the limits writing native
        assembly code.
      </>
    ),
  },
  {
    title: "Complete toolchain",
    description: (
      <>
        RGBDS' four programs cover the whole compilation pipeline into a
        ready-to-play ROM, from RGBGFX (the image converter) to RGBFIX (the
        header "fixer").
        <br />
        Each tool can easily be swapped for a custom one, or used stand-alone as
        part of another process.
      </>
    ),
  },
  {
    title: "Open Source",
    description: (
      <>
        With a long history dating back to 1997, RGBDS is an open source project
        supporting a large community of homebrew developers.{" "}
        <Link to="https://gbdev.io/chat">Join us</Link> to get involved,{" "}
        <Link to="https://hh.gbdev.io">showcase your project</Link>, or get
        help.
        <br />
        The extensive documentation also allows easy integration into any
        workflow.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
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
