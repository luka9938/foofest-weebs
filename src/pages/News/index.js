import styles from "./news.module.css";

export default function news() {
  const articles = [
    {
      imgSrc: "/a_perfect_square.png",
      date: "07/07/2023",
      title:
        "A Perfect Circle Cancels Show as Square Stage Throws Band off Balance",
      description:
        "'Our band is called A Perfect Circle... NOT A PERFECT SQUARE', says frontman Maynard James Keenan",
    },
    {
      imgSrc: "/sabbath_coffin.png",
      date: "08/07/2023",
      title: "3 People Dead at Black Sabbath Show",
      description:
        "3 people died last night when Black Sabbath played on the main stage. The incident happened when the band decided to play some of their newer songs",
    },
    {
      imgSrc: "/hologram_kurt.png",
      date: "07/07/2023",
      title: "Kurt Cobain's Hologram Leaves Stage Mid Show",
      description:
        "Kurt Cobain's hologram decided to leave the stage mid-show last night. The incident took place when several audience members kept begging for the hologram to play the smash hit 'Smells Like Teen Spirit.' Kurt Cobain's hologram hasn't commented on the incident yet.",
    },
    {
      imgSrc: "/lukas.jpg",
      date: "07/07/2023",
      title: "Boom Fest Takes a Stand in Support of Gay Rights",
      description:
        "Boom Fest, the annual music and arts festival known for its celebration of diversity and inclusivity, has made a powerful statement by publicly supporting gay rights. In an official announcement, festival organizers expressed their commitment to fostering an environment of acceptance and equality for the LGBTQ+ community. The move has been met with widespread applause, highlighting the festival's dedication to promoting social progress and unity through music and art.",
    },
    {
      imgSrc:
        "/640px-Metallica_Live_at_The_O2_London_England_22_October_2017_cropped.jpg",
      date: "06/07/2023",
      title:
        "Metallica's Lars Ulrich Files Lawsuit Against Boom Fest for Unauthorized Song Usag",
      description:
        "Lars Ulrich, drummer of the legendary rock band Metallica, has taken legal action against Boom Fest for including one of their songs on the festival's playlist without permission. Ulrich alleges copyright infringement and seeks damages for the unauthorized usage of the song, emphasizing the importance of protecting artists' intellectual property rights in the music industry. The lawsuit has sparked a debate surrounding the balance between artistic freedom and copyright enforcement.",
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
