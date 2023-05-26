import styles from "./news.module.css";

export default function Home() {
  return (
    <>
      <div className={`hero ${styles.hero}`}>
        <h1 className={styles.headline}>Seneste Nyheder</h1>
      </div>
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
        <h2 className={styles.h2}>Overskrift</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          faucibus non nisl ac tempus. Etiam accumsan massa nec scelerisque
          pharetra. Nunc dui urna, blandit sit amet mollis eget, condimentum a
          purus. Nullam facilisis neque interdum tristique ultricies.
        </p>
        <p className={styles.dato}>Dato</p>
        {/* source til buttons: https://uiverse.io/cssbuttons-io/massive-mayfly-74?fbclid=IwAR32KxwShr68PqJUquglPbJkgX2sBOe-unqk1yftTv-R43WAegBI5Zkbyyw */}
        <button className={styles.learnMore}>
          <span className={`${styles.circle}`}>
            <span className={`${styles.icon} ${styles.arrow}`}></span>
          </span>
          <span className={styles.buttonText}>Read More</span>
        </button>
      </article>
      <article className={styles.newsArticle}>
        <img src="" alt="News 2" />
        <h2 className={styles.h2}>Overskrift</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          faucibus non nisl ac tempus. Etiam accumsan massa nec scelerisque
          pharetra. Nunc dui urna, blandit sit amet mollis eget, condimentum a
          purus. Nullam facilisis neque interdum tristique ultricies.
        </p>
        <p className={styles.dato}>Dato</p>
        <button className={styles.learnMore}>
          <span className={`${styles.circle}`}>
            <span className={`${styles.icon} ${styles.arrow}`}></span>
          </span>
          <span className={styles.buttonText}>Read More</span>
        </button>
      </article>
      <article className={styles.newsArticle}>
        <img src="" alt="News 3" />
        <h2 className={styles.h2}>Overskrift</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          faucibus non nisl ac tempus. Etiam accumsan massa nec scelerisque
          pharetra. Nunc dui urna, blandit sit amet mollis eget, condimentum a
          purus. Nullam facilisis neque interdum tristique ultricies.
        </p>
        <p className={styles.dato}>Dato</p>
        <button className={styles.learnMore}>
          <span className={`${styles.circle}`}>
            <span className={`${styles.icon} ${styles.arrow}`}></span>
          </span>
          <span className={styles.buttonText}>Read More</span>
        </button>
      </article>
      <article className={styles.newsArticle}>
        <img src="" alt="News 4" />
        <h2 className={styles.h2}>Overskrift</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          faucibus non nisl ac tempus. Etiam accumsan massa nec scelerisque
          pharetra. Nunc dui urna, blandit sit amet mollis eget, condimentum a
          purus. Nullam facilisis neque interdum tristique ultricies.
        </p>
        <p className={styles.dato}>Dato</p>
        <button className={styles.learnMore}>
          <span className={`${styles.circle}`}>
            <span className={`${styles.icon} ${styles.arrow}`}></span>
          </span>
          <span className={styles.buttonText}>Read More</span>
        </button>
      </article>
      <article className={styles.newsArticle}>
        <img src="" alt="News 5" />
        <h2 className={styles.h2}>Overskrift</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          faucibus non nisl ac tempus. Etiam accumsan massa nec scelerisque
          pharetra. Nunc dui urna, blandit sit amet mollis eget, condimentum a
          purus. Nullam facilisis neque interdum tristique ultricies.
        </p>
        <p className={styles.dato}>Dato</p>
        <button className={styles.learnMore}>
          <span className={`${styles.circle}`}>
            <span className={`${styles.icon} ${styles.arrow}`}></span>
          </span>
          <span className={styles.buttonText}>Read More</span>
        </button>
      </article>
      <article className={styles.newsArticle}>
        <img src="" alt="News 6" />
        <h2 className={styles.h2}>Overskrift</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          faucibus non nisl ac tempus. Etiam accumsan massa nec scelerisque
          pharetra. Nunc dui urna, blandit sit amet mollis eget, condimentum a
          purus. Nullam facilisis neque interdum tristique ultricies.
        </p>
        <p className={styles.dato}>Dato</p>
        <button className={styles.learnMore}>
          <span className={`${styles.circle}`}>
            <span className={`${styles.icon} ${styles.arrow}`}></span>
          </span>
          <span className={styles.buttonText}>Read More</span>
        </button>
      </article>
      <article className={styles.newsArticle}>
        <img src="" alt="News 7" />
        <h2 className={styles.h2}>Overskrift</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          faucibus non nisl ac tempus. Etiam accumsan massa nec scelerisque
          pharetra. Nunc dui urna, blandit sit amet mollis eget, condimentum a
          purus. Nullam facilisis neque interdum tristique ultricies.
        </p>
        <p className={styles.dato}>Dato</p>
        <button className={styles.learnMore}>
          <span className={`${styles.circle}`}>
            <span className={`${styles.icon} ${styles.arrow}`}></span>
          </span>
          <span className={styles.buttonText}>Read More</span>
        </button>
      </article>
      <article className={styles.newsArticle}>
        <img src="" alt="News 8" />
        <h2 className={styles.h2}>Overskrift</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          faucibus non nisl ac tempus. Etiam accumsan massa nec scelerisque
          pharetra. Nunc dui urna, blandit sit amet mollis eget, condimentum a
          purus. Nullam facilisis neque interdum tristique ultricies.
        </p>
        <p className={styles.dato}>Dato</p>
        <button className={styles.learnMore}>
          <span className={`${styles.circle}`}>
            <span className={`${styles.icon} ${styles.arrow}`}></span>
          </span>
          <span className={styles.buttonText}>Read More</span>
        </button>
      </article>
    </>
  );
}
