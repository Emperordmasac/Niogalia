import React from "react";

//--INPORTS STYLS & CONSTANTS
import { CgMenuRight } from "react-icons/cg";
import { navlinks } from "@/src/utils/constants";
import styles from "@/src/styles/styles.module.css";

//--INTERNAL IMPORTS
import Logo from "./components/Logo";
import NavLinks from "./components/NavLinks";
import SearchBar from "./components/SearchBar";
import Button from "../common/Button";

const NavBar = () => {
    return (
        <>
            <div className={styles.navbar}>
                <div className={` ${styles.navBar_container}`}>
                    <div className={styles.navbar_container_left}>
                        <Logo url="/" />
                        <SearchBar />
                    </div>
                    <div className="flex gap-10 justify-center">
                        <div className={styles.menu}>
                            <CgMenuRight className={styles.menuIcon} />
                        </div>
                        <NavLinks navlinks={navlinks} />
                        <Button name="Login" url="/login" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;
