import React from "react";
import { useRouter } from "next/router";

//--INTERNAL IMPORTS
import styles from "@/src/styles/styles.module.css";

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

export default Button;
