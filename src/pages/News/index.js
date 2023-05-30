import styles from "./news.module.css";

export default function Home() {
  const articles = [
    {
      imgSrc: "/Pink_Floyd_-_all_members.jpg",
      date: "Dato",
      title: "Overskrift",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus non nisl ac tempus...",
    },
    {
      imgSrc: "/620px-Black_Sabbath_(Iommi,_Osbourne,_Ward_and_Butler).jpg",
      date: "15/05/2023",
      title: "3 people dead at Black Sabbath show",
      description:
        "3 people died last night, when Black Sabbath played. The incident happened after the band choose to play some of their newer songs",
    },
    {
      imgSrc: "/620px-Black_Sabbath_(Iommi,_Osbourne,_Ward_and_Butler).jpg",
      date: "Dato",
      title: "Kurt Cobain's hologram left the stage mid-show",
      description:
        "Kurt Cobain's hologram decided to leave the stage mid-show last night. The incident took place when several audience members kept begging for the hologram to play the smash hit 'Smells Like Teen Spirit.' Kurt Cobain's hologram hasn't commented on the incident yet.",
    },
    {
      imgSrc: "/620px-Black_Sabbath_(Iommi,_Osbourne,_Ward_and_Butler).jpg",
      date: "Dato",
      title: "Overskrift",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus non nisl ac tempus...",
    },
    {
      imgSrc: "/620px-Black_Sabbath_(Iommi,_Osbourne,_Ward_and_Butler).jpg",
      date: "Dato",
      title: "Overskrift",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus non nisl ac tempus...",
    },
    {
      imgSrc: "/620px-Black_Sabbath_(Iommi,_Osbourne,_Ward_and_Butler).jpg",
      date: "Dato",
      title: "Overskrift",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus non nisl ac tempus...",
    },
  ];

  return (
    <>
      <div className={`hero ${styles.hero}`}>
        <h1 className={styles.headline}>Latest News</h1>
      </div>
      <section className={styles.newsContainer}>
        {articles.map((article, index) => (
          <Article key={index} data={article} />
        ))}
      </section>
    </>
  );
}

function Article({ data }) {
  return (
    <article className={styles.newsArticle}>
      <img
        className={styles.images}
        src={data.imgSrc}
        alt={`news ${data.title}`}
      />
      <p className={styles.dato}>{data.date}</p>
      <h2 className={styles.h2}>{data.title}</h2>
      <p className={styles.description}>{data.description}</p>
      <button className={styles.learnMore}>
        <span className={`${styles.circle}`}>
          <span className={`${styles.icon} ${styles.arrow}`}></span>
        </span>
        <span className={styles.buttonText}>Read More</span>
      </button>
    </article>
  );
}
