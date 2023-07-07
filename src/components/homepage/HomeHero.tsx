import React from "react";
import Link from "next/link";
import Image from "next/image";

//--INPORTS STYLS & CONSTANTS
import { featured } from "@/src/utils/constants";

//--INTERNAL IMPORTS
import styles from "@/src/styles/styles.module.css";

const HomeHero = () => {
  return (
    <div className={styles.homehero}>
      <div className={`container ${styles.container}`}>
        <div className={styles.container_box}>
          {featured.map((feature, index) => (
            <div key={index} className={`${styles.featured} ${feature.style}`}>
              <Link href={feature.link}>
                <div id={feature.id} className={` ${styles.lil_overlay}`}></div>
                <Image src={feature.image} alt={feature.name} />
                <p className={styles.main_description}>{feature.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
