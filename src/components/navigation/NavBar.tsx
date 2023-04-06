import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

//--INPORTS STYLS & CONSTANTS
import { CgMenuRight } from "react-icons/cg";
import { navlinks } from "@/src/utils/constants";
import styles from "@/src/styles/styles.module.css";

//--INTERNAL IMPORTS
import Logo from "./components/Logo";
import NavLinks, { MobileNavList } from "./components/NavLinks";
import SearchBar from "./components/SearchBar";
import type { RootState } from "@/store";
import { loggedOut } from "@/src/redux/userSlice";

const NavBar = () => {
    const [isOpen, setOpen] = useState(false);

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
                            <CgMenuRight
                                onClick={() => setOpen(true)}
                                className={styles.menuIcon}
                            />
                            <div
                                className={`bg-white h-screen w-full flex flex-col top-0 fixed z-[999999999] py-[60px] px-[40px] ease-in-out duration-500  ${
                                    isOpen ? "left-0" : "-left-[100%]"
                                }`}
                            >
                                <h3
                                    onClick={() => setOpen(!isOpen)}
                                    className="fa-solid fa-xmark text-[#ff0336] text-[1.3rem] cursor-pointer self-end"
                                >
                                    close
                                </h3>
                                <MobileNavList />
                            </div>
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
