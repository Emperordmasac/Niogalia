import React, { useState } from "react";
import Link from "next/link";

//--INTERNAL IMPORTS
import styles from "@/src/styles/styles.module.css";

//--IMPORT CONSTANTS
import { categories } from "@/src/utils/constants";

const CategoryHeader = (): JSX.Element => {
    const [header, setHeader] = useState("ALL");

    const handleHeaderChange = (e) => {
        setHeader(e);
    };
    return (
        <>
            <div className="container">
                <div className={styles.category}>
                    <div className={styles.category_header}>
                        <Link href="/">Go Home</Link>
                        <h3>{header}</h3>
                    </div>
                    <div className={styles.category_btns}>
                        {categories.map((category, index) => (
                            <Link key={category.id} href={category.link}>
                                <button
                                    className={styles.category_btn}
                                    onClick={() =>
                                        handleHeaderChange(`${category.name}`)
                                    }
                                >
                                    {category.name}
                                </button>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CategoryHeader;
