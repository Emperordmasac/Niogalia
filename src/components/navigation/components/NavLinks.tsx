import React from "react";
import Image from "next/image";

//--INTERNAL IMPORTS
import styles from "@/src/styles/styles.module.css";

const NavLinks = ({ navlinks }) => {
    return (
        <ul className={styles.nav_links}>
            {navlinks.map((link, index) => (
                <li key={index} className={styles.nav_link}>
                    <a href={link.link}>{link.name}</a>
                    <Image
                        src={link.icon}
                        alt={link.name}
                        width={20}
                        height={20}
                    />
                </li>
            ))}
        </ul>
    );
};

export default NavLinks;
