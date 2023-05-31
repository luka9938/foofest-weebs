import React from "react";
import Image from "next/image";
import styles from "./merchPage.module.css";

const tshirts = [
  {
    id: 1,
    image: "/purple.png",
    name: "BOOM FEST 2023 - PURPLE AND YELLOW",
    brand: "BOOM FEST",
    price: "749 ,-",
  },
  {
    id: 2,
    image: "/Foofest_black_and_red.png",
    name: "BOOM FEST 2023 - BLACK AND RED",
    brand: "BOOM FEST",
    price: "749 ,-",
  },
  {
    id: 3,
    image: "/skull.png",
    name: "BOOM FEST 2023 - LIMITED SKULL",
    brand: "BOOM FEST",
    price: "999 ,-",
  },
  {
    id: 4,
    image: "/Foofest_green_and_orange.png",
    name: "BOOM FEST 2023 - GREEN AND ORANGE",
    brand: "BOOM FEST",
    price: "749 ,-",
  },
];

export default function MerchPage() {
  const handleBuy = (tshirt) => {
    // Implement the buy functionality for the selected t-shirt
    console.log(`Buy ${tshirt.name}`);
  };

  return (
    <>
      <div className={`hero ${styles.hero}`}>
        <h1 className={styles.headline}>MERCHANDISE</h1>
      </div>
      <div className={styles.merchContainer}>
        {tshirts.map((tshirt) => (
          <div key={tshirt.id} className={styles.gridItem}>
            <Image
              src={tshirt.image}
              alt={tshirt.name}
              width={300}
              height={400}
            />
            <h3>{tshirt.name}</h3>
            <p>{tshirt.brand}</p>
            <p>{tshirt.price}</p>
            <button
              className={styles.hero_btn}
              onClick={() => handleBuy(tshirt)}
            >
              <span className={styles.btn_text}>Buy now</span>
              <span className={styles.bottom_key_1}></span>
              <span className={styles.bottom_key_2}></span>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
