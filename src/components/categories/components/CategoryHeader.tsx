import React from "react";
import Link from "next/link";

//--INTERNAL IMPORTS
import styles from "@/src/styles/styles.module.css";

//--IMPORT CONSTANTS
import { categories } from "@/src/utils/constants";

//--TYPE DEFINITIONS
type Props = {
  title?: any;
};

const CategoryHeader = ({ title }: Props) => {
  return (
    <>
      <div className="container">
        <div className={styles.category}>
          <div className={styles.category_header}>
            <Link href="/">{`< Go Home`}</Link>
            <h3>{title ? title : "ALL"}</h3>
          </div>
          <div className={styles.category_btns}>
            {categories.map((category) => (
              <Link key={category.id} href={category.link}>
                <button className={styles.category_btn}>{category.name}</button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryHeader;
