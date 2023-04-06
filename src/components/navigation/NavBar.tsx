import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

//--INPORTS STYLS & CONSTANTS
import { CgMenuRight } from "react-icons/cg";
import { navlinks } from "@/src/utils/constants";
import styles from "@/src/styles/styles.module.css";

//--INTERNAL IMPORTS
import Logo from "./components/Logo";
import NavLinks from "./components/NavLinks";
import SearchBar from "./components/SearchBar";
import type { RootState } from "@/store";
import { loggedOut } from "@/src/redux/userSlice";

const NavBar = () => {
    const router = useRouter();
    const user = useSelector((state: RootState) => state.User.user);
    const dispatch = useDispatch();

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
                        {user ? (
                            <button
                                onClick={() => dispatch(loggedOut())}
                                className={`${styles.button} `}
                            >
                                Logout
                            </button>
                        ) : (
                            <button
                                onClick={() => router.push("/login")}
                                className={`${styles.button} `}
                            >
                                Login
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;
