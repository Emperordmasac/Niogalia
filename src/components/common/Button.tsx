import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { message } from "antd";

//--INTERNAL IMPORTS
import styles from "@/src/styles/styles.module.css";
import { loggedOut } from "@/src/redux/userSlice";

//--TYPE DEFINITIONS
type IButton = {
    name: string;
    icon?: any;
    style?: string;
    url?: string;
};

const Button = ({ name, icon, style, url }: IButton): JSX.Element => {
    const router = useRouter();
    return (
        <button
            onClick={() => router.push(url)}
            className={`${styles.button} ${style}`}
        >
            {icon} {name}
        </button>
    );
};

export const LoginButton = () => (
    <Link href={"/login"}>
        <button className="bg-[#007a7a] py-[.6rem] px-[2.4rem] text-white rounded-md cursor-pointer hover:text-white border-solid border-[#007a7a] hover:bg-black  hover:border-[#007a7a] text-[1.3rem] font-medium transition ease-in-out delay-250">
            Login
        </button>
    </Link>
);

export const BrowseButton = () => (
    <Link href={"/categories"}>
        <button className="bg-[#007a7a]  py-[.6rem] px-[2.4rem] text-white rounded cursor-pointer hover:text-white border-solid border-[#007a7a] hover:bg-black  hover:border-[#007a7a] text-[1.3rem] font-medium transition ease-in-out delay-250">
            Keep Browsing
        </button>
    </Link>
);

export const LogoutButton = ({ setOpen }: any) => {
    const auth = getAuth();
    const router = useRouter();
    const dispatch = useDispatch();

    const handleLogout = () => {
        signOut(auth).then(() => {
            dispatch(loggedOut());
            message.success("Logout Successful. Hope to see you again. 😇 ");
            router.push("/");
        });
    };
    return (
        <button
            onClick={() => handleLogout()}
            className="bg-[#007a7a] py-[.6rem] px-[2.4rem] text-white rounded-md cursor-pointer hover:text-white border-solid border-[#007a7a] hover:bg-black  hover:border-[#007a7a] text-[1.3rem] font-medium transition ease-in-out delay-250"
        >
            Logout
        </button>
    );
};

export default Button;
