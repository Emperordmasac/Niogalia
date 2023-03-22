import React from "react";
import Link from "next/link";
import Image from "next/image";

//--INTERNAL IMPORTS
import styles from "@/src/styles/styles.module.css";
import Button from "./Button";

//--TYPE DEFINITIONS
type Props = {
    title: string;
    img: any;
    text: string;
};

export const Banner = ({ title, text, img }: Props): JSX.Element => {
    return (
        <div className={styles.banner}>
            <div className="container">
                <div className={styles.banner_container}>
                    <div className={styles.text_box}>
                        <div className={styles.text_box_box}>
                            <h2>{title}</h2>

                            <p>{text}</p>
                            <Link href={"/shop"}>
                                <button>Shop now</button>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.banner_image}>
                        <Image src={img} alt="banner" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export const ReverseBanner = ({ title, text, img }: Props): JSX.Element => {
    return (
        <div className={styles.banner}>
            <div className="container">
                <div className={styles.banner_container_reverse}>
                    <div className={styles.text_box}>
                        <div className={styles.text_box_box}>
                            <h2>{title}</h2>

                            <p>{text}</p>
                            <Link href={"/shop"}>
                                <button>Shop now</button>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.banner_image}>
                        <Image src={img} alt="banner" />
                    </div>
                </div>
            </div>
        </div>
    );
};
