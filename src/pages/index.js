import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "It's How I learn Rust",
    imageUrl: "img/Idea.png",
    description: (
      <>
        I'm Trying to learn Rust for a long time I think now is the right time
      </>
    ),
  },
  {
    title: "I'm Trying",
    imageUrl: "img/prison.png",
    description: (
      <>
        Initialy I thought Golang was going to replace C++ But its not gonna do
        that because it is so much restricted Ifeel like my Hands are tied
      </>
    ),
  },
  {
    title: "Powered by React",
    imageUrl: "img/working.png",
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <img src="img/logo.svg"></img>
          <h1 className="hero__title" style={{ fontSize: "5em" }}>
            <span
              style={{
                color: "black",
                fontFamily: "Alfa Slab One",
                marginRight: "0.2em",
              }}
            >
              Rust
            </span>
            Learning
          </h1>
          <p className="hero__subtitle">
            A language empowering everyone to build reliable and efficient
            software.
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              style={{ backgroundColor: "#FFC832" }}
              to={useBaseUrl("docs/")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
