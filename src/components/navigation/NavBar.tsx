import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CgMenuRight } from "react-icons/cg";

//--INPORTS STYLS & CONSTANTS
import { navlinks } from "@/src/utils/constants";
import styles from "@/src/styles/styles.module.css";

//--INTERNAL IMPORTS
import Logo from "./components/Logo";
import NavLinks, { MobileNavList } from "./components/NavLinks";
import SearchBar from "./components/SearchBar";
import { useToggle } from "@/src/utils/hooks";
import type { RootState } from "@/store";
import { LoginButton, LogoutButton } from "@/src/components/common/Button";
import EmptyCart from "./components/EmptyCart";

const NavBar = () => {
    const [showNav, toggleNav] = useToggle(false);
    const [isCartOpen, toggleCart] = useToggle(false);

    const user = useSelector((state: RootState) => state.User.user);
    const cart = useSelector((state: RootState) => state.Cart.cart);

    return (
        <>
            <div className={styles.navbar}>
                <div className={` ${styles.navBar_container}`}>
                    <div className={styles.navbar_container_left}>
                        <Logo url="/" />
                        <SearchBar />
                    </div>
                    <div className="flex gap-10 justify-center">
                        {/* mobile nav */}
                        <div className={styles.menu}>
                            <CgMenuRight
                                onClick={toggleNav}
                                className={styles.menuIcon}
                            />
                            <div
                                className={`bg-white h-screen w-full flex flex-col top-0 fixed z-[999] py-[60px] px-[40px] ease-in-out duration-500  ${
                                    showNav ? "left-0" : "-left-[100%]"
                                }`}
                            >
                                <h3
                                    onClick={() => toggleNav()}
                                    className=" text-black text-[1.5rem] cursor-pointer self-end"
                                >
                                    <>{console.log(isCartOpen)}</> X
                                </h3>
                                <MobileNavList
                                    open={showNav}
                                    setOpen={toggleNav}
                                    toggleCart={toggleCart}
                                />
                            </div>
                        </div>
                        {/* desktop nav */}
                        <NavLinks navlinks={navlinks} toggleCart={toggleCart} />
                        {/* cta buttons */}
                        <div className="md700:hidden">
                            {user && user.email ? (
                                <LogoutButton />
                            ) : (
                                <LoginButton />
                            )}
                        </div>
                        {/* overlay */}
                        <div
                            onClick={toggleCart}
                            className={isCartOpen ? "overlay" : ""}
                        ></div>
                        {/* cart */}
                        <div
                            className={isCartOpen ? "open_cart" : "close_cart"}
                        >
                            <div className={`${styles.cart_div}`}>
                                <div className="text-[1rem] flex justify-between items-center">
                                    <h2 className="text-[1.5rem] font-bold">
                                        Your Shopping Cart
                                    </h2>
                                    <h3
                                        onClick={toggleCart}
                                        className=" text-black text-[1.5rem] cursor-pointer self-end font-bold"
                                    >
                                        X
                                    </h3>
                                </div>

                                <div className="h-screen p-2">
                                    {cart.length < 1 ? (
                                        <EmptyCart toggleCart={toggleCart} />
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;
