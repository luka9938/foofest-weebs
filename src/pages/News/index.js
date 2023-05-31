import styles from "./news.module.css";

export default function news() {
  const articles = [
    {
      imgSrc: "/a_perfect_square.png",
      date: "07/07/2023",
      title: "A Perfect Circle Cancels Show as Square Stage Throws Band off Balance",
      description:
        "'Our band is called A Perfect Circle... NOT A PERFECT SQUARE', says frontman Maynard James Keenan",
    },
    {
      imgSrc: "/sabbath_coffin.png",
      date: "07/07/2023",
      title: "3 People Dead at Black Sabbath Show",
      description:
        "3 people died last night, when Black Sabbath played on the main stage. The incident happened when the band decided to play some of their newer songs",
    },
    {
      imgSrc: "/hologram_kurt.png",
      date: "07/07/2023",
      title: "Kurt Cobain's Hologram Leaves Stage Mid Show",
      description:
        "Kurt Cobain's hologram decided to leave the stage mid-show last night. The incident took place when several audience members kept begging for the hologram to play the smash hit 'Smells Like Teen Spirit.' Kurt Cobain's hologram hasn't commented on the incident yet.",
    },
    {
      imgSrc: "/Pink_Floyd_-_all_members.jpg",
      date: "Dato",
      title: "Overskrift",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus non nisl ac tempus...",
    },
    {
      imgSrc: "/Pink_Floyd_-_all_members.jpg",
      date: "Dato",
      title: "Overskrift",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus non nisl ac tempus...",
    },
    {
      imgSrc: "/Pink_Floyd_-_all_members.jpg",
      date: "Dato",
      title: "Overskrift",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus non nisl ac tempus...",
    },
  ];

  return (
    <>
      <div className={`hero ${styles.hero}`}>
        <h1 className={styles.headline}>News</h1>
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
      <img className={styles.images} src={data.imgSrc} alt={`news ${data.title}`} />
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
