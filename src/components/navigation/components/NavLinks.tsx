import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

//--INTERNAL IMPORTS
import styles from "@/src/styles/styles.module.css";
import { LoginButton, LogoutButton } from "@/src/components/common/Button";
import { SearchInput } from "@/src/components/common/TextInput";
import type { RootState } from "@/store";

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

export const MobileNavList = ({ setopen }: any) => {
    const user = useSelector((state: RootState) => state.User.user);
    return (
        <div onClick={() => setopen}>
            <SearchInput />
            <ul className="text-center flex flex-col gap-10 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <li className="text-[2rem] font-medium hover:text-[#007a7a] ease-in duration-200">
                    <Link href="/">Home</Link>
                </li>
                <li className="text-[2rem] font-medium hover:text-[#007a7a] ease-in duration-200">
                    <Link href="/categories">Shop</Link>
                </li>
                <li className="text-[2rem] font-medium hover:text-[#007a7a] ease-in duration-200">
                    <Link href="/cart">Cart</Link>
                </li>
                {user && user.email ? <LogoutButton /> : <LoginButton />}
            </ul>
        </div>
    );
};

export default NavLinks;
