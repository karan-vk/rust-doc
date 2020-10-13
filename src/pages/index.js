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
    title: "Well I have to work my assasin OFF",
    imageUrl: "img/working.png",
    description: (
      <>
        It's not so easy to Learn Rust, Well atlest shine in it So I set my
        journey to Rust
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
    <Layout title={`${siteConfig.title}`} description="Rust learning Journey">
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <img src="img/logo.svg"></img>
          <h1 className="hero__title" style={{ fontSize: "5em" }}>
            <span
              style={{
                color: "black",
                fontFamily: "Alfa Slab One",
              }}
            >
              Rust
            </span>
            <span style={{ marginLeft: "13px" }}>Learning</span>
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
