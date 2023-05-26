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
        <img
          className={styles.images}
          src="/620px-Black_Sabbath_(Iommi,_Osbourne,_Ward_and_Butler).jpg"
          alt="news 1"
        />
        <h2 className={styles.h2}>Overskrift</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus non nisl ac
          tempus. Etiam accumsan massa nec scelerisque pharetra. Nunc dui urna, blandit sit amet
          mollis eget, condimentum a purus. Nullam facilisis neque interdum tristique ultricies.
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
        <img
          className={styles.images}
          src="/620px-Black_Sabbath_(Iommi,_Osbourne,_Ward_and_Butler).jpg"
          alt="News 2"
        />
        <h2 className={styles.h2}>Overskrift</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus non nisl ac
          tempus. Etiam accumsan massa nec scelerisque pharetra. Nunc dui urna, blandit sit amet
          mollis eget, condimentum a purus. Nullam facilisis neque interdum tristique ultricies.
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
        <img
          className={styles.images}
          src="/620px-Black_Sabbath_(Iommi,_Osbourne,_Ward_and_Butler).jpg"
          alt="News 3"
        />
        <h2 className={styles.h2}>Overskrift</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus non nisl ac
          tempus. Etiam accumsan massa nec scelerisque pharetra. Nunc dui urna, blandit sit amet
          mollis eget, condimentum a purus. Nullam facilisis neque interdum tristique ultricies.
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
        <img
          className={styles.images}
          src="/620px-Black_Sabbath_(Iommi,_Osbourne,_Ward_and_Butler).jpg"
          alt="News 4"
        />
        <h2 className={styles.h2}>Overskrift</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus non nisl ac
          tempus. Etiam accumsan massa nec scelerisque pharetra. Nunc dui urna, blandit sit amet
          mollis eget, condimentum a purus. Nullam facilisis neque interdum tristique ultricies.
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
        <img
          className={styles.images}
          src="/620px-Black_Sabbath_(Iommi,_Osbourne,_Ward_and_Butler).jpg"
          alt="News 5"
        />
        <h2 className={styles.h2}>Overskrift</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus non nisl ac
          tempus. Etiam accumsan massa nec scelerisque pharetra. Nunc dui urna, blandit sit amet
          mollis eget, condimentum a purus. Nullam facilisis neque interdum tristique ultricies.
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
        <img
          className={styles.images}
          src="/620px-Black_Sabbath_(Iommi,_Osbourne,_Ward_and_Butler).jpg"
          alt="News 6"
        />
        <h2 className={styles.h2}>Overskrift</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus non nisl ac
          tempus. Etiam accumsan massa nec scelerisque pharetra. Nunc dui urna, blandit sit amet
          mollis eget, condimentum a purus. Nullam facilisis neque interdum tristique ultricies.
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
        <img
          className={styles.images}
          src="/620px-Black_Sabbath_(Iommi,_Osbourne,_Ward_and_Butler).jpg"
          alt="News 7"
        />
        <h2 className={styles.h2}>Overskrift</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus non nisl ac
          tempus. Etiam accumsan massa nec scelerisque pharetra. Nunc dui urna, blandit sit amet
          mollis eget, condimentum a purus. Nullam facilisis neque interdum tristique ultricies.
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
        <img
          className={styles.images}
          src="/620px-Black_Sabbath_(Iommi,_Osbourne,_Ward_and_Butler).jpg"
          alt="News 8"
        />
        <h2 className={styles.h2}>Overskrift</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus non nisl ac
          tempus. Etiam accumsan massa nec scelerisque pharetra. Nunc dui urna, blandit sit amet
          mollis eget, condimentum a purus. Nullam facilisis neque interdum tristique ultricies.
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
