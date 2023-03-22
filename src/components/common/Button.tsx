import React from "react";

//--INTERNAL IMPORTS
import styles from "@/src/styles/styles.module.css";

//--TYPE DEFINITIONS
type IButton = {
    name: string;
    icon?: any;
    style?: string;
};

const Button = ({ name, icon, style }: IButton): JSX.Element => {
    return (
        <button className={`${styles.button} ${style}`}>
            {icon} {name}
        </button>
    );
};

export default Button;
