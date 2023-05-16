import styles from "./news.module.css";

export default function Home() {
  return (
    <>
      <h1 className={styles.headline}>Nyheder</h1>

      <section className={styles.newsContainer}>
        <NewsArticles></NewsArticles>
      </section>
    </>
  );
}

function NewsArticles() {
  return (
    <>
      <article className={styles.newsArticle}>
        <img className={styles.images} src="/Horns.jpg" alt="news 1" />
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus non nisl ac tempus. Etiam accumsan massa nec scelerisque pharetra. Nunc dui urna, blandit sit amet mollis eget,
          condimentum a purus. Nullam facilisis neque interdum tristique ultricies.
        </p>
        <p className={styles.dato}>Dato</p>
        <button className={styles.readMore}>Read more</button>
      </article>
      <article className={styles.newsArticle}>
        <img src="" alt="News 2" />
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus non nisl ac tempus. Etiam accumsan massa nec scelerisque pharetra. Nunc dui urna, blandit sit amet mollis eget,
          condimentum a purus. Nullam facilisis neque interdum tristique ultricies.
        </p>
        <p className={styles.dato}>Dato</p>
        <button className={styles.readMore}>Read more</button>
      </article>
      <article className={styles.newsArticle}>
        <img src="" alt="News 3" />
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus non nisl ac tempus. Etiam accumsan massa nec scelerisque pharetra. Nunc dui urna, blandit sit amet mollis eget,
          condimentum a purus. Nullam facilisis neque interdum tristique ultricies.
        </p>
        <p className={styles.dato}>Dato</p>
        <button className={styles.readMore}>Read more</button>
      </article>
      <article className={styles.newsArticle}>
        <img src="" alt="News 4" />
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus non nisl ac tempus. Etiam accumsan massa nec scelerisque pharetra. Nunc dui urna, blandit sit amet mollis eget,
          condimentum a purus. Nullam facilisis neque interdum tristique ultricies.
        </p>
        <p className={styles.dato}>Dato</p>
        <button className={styles.readMore}>Read more</button>
      </article>
      <article className={styles.newsArticle}>
        <img src="" alt="News 5" />
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus non nisl ac tempus. Etiam accumsan massa nec scelerisque pharetra. Nunc dui urna, blandit sit amet mollis eget,
          condimentum a purus. Nullam facilisis neque interdum tristique ultricies.
        </p>
        <p className={styles.dato}>Dato</p>
        <button className={styles.readMore}>Read more</button>
      </article>
      <article className={styles.newsArticle}>
        <img src="" alt="News 6" />
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus non nisl ac tempus. Etiam accumsan massa nec scelerisque pharetra. Nunc dui urna, blandit sit amet mollis eget,
          condimentum a purus. Nullam facilisis neque interdum tristique ultricies.
        </p>
        <p className={styles.dato}>Dato</p>
        <button className={styles.readMore}>Read more</button>
      </article>
      <article className={styles.newsArticle}>
        <img src="" alt="News 7" />
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus non nisl ac tempus. Etiam accumsan massa nec scelerisque pharetra. Nunc dui urna, blandit sit amet mollis eget,
          condimentum a purus. Nullam facilisis neque interdum tristique ultricies.
        </p>
        <p className={styles.dato}>Dato</p>
        <button className={styles.readMore}>Read more</button>
      </article>
      <article className={styles.newsArticle}>
        <img src="" alt="News 8" />
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus non nisl ac tempus. Etiam accumsan massa nec scelerisque pharetra. Nunc dui urna, blandit sit amet mollis eget,
          condimentum a purus. Nullam facilisis neque interdum tristique ultricies.
        </p>
        <p className={styles.dato}>Dato</p>
        <button className={styles.readMore}>Read more</button>
      </article>
    </>
  );
}
