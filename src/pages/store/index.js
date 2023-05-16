import React from "react";
import Image from "next/image";
import styles from "./merchPage.module.css";

const tshirts = [
  {
    id: 1,
    image: "/purple.png",
    name: "FOOFEST 2023 - PURPLE AND YELLOW",
    price: "749 ,-",
  },
  {
    id: 2,
    image: "/Foofest_black_and_red.png",
    name: "FOOFEST 2023 - BLACK AND RED",
    price: "749 ,-",
  },
  {
    id: 3,
    image: "/Foofest_white_and_red_skull.png",
    name: "FOOFEST 2023 - LIMITED SKULL",
    price: "999 ,-",
  },
  {
    id: 4,
    image: "/Foofest_green_and_orange.png",
    name: "FOOFEST 2023 - GREEN AND ORANGE",
    price: "749 ,-",
  },
];

export default function MerchPage() {
  const handleBuy = (tshirt) => {
    // Implement the buy functionality for the selected t-shirt
    console.log(`Buy ${tshirt.name}`);
  };

  return (
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
          <p>{tshirt.price}</p>
          <button className={styles.button} onClick={() => handleBuy(tshirt)}>
            Buy
          </button>
        </div>
      ))}
    </div>
  );
}
