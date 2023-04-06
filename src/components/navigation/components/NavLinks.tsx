import React from "react";
import Image from "next/image";
import Link from "next/link";

//--INTERNAL IMPORTS
import styles from "@/src/styles/styles.module.css";
import { mainNavList } from "@/src/utils/constants";

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

export const MobileNavList = () => {
    return (
        <>
            <ul className="text-center flex flex-col gap-10 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                {mainNavList.map((nav, i) => (
                    <li
                        key={nav.id}
                        className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                    >
                        <Link href={nav.url}>{nav.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default NavLinks;
