import React from "react";

//--INTERNAL IMPORTS
import Link from "next/link";
import Image from "next/image";
import styles from "@/src/styles/styles.module.css";

//--IMPORT ICONS
import { DiJqueryLogo } from "react-icons/di";

//--TYPE DEFINITIONS
type ILogo = {
  url: string;
  image?: string;
  style?: string;
  width?: number;
  height?: number;
};

const Logo = ({ image, width, height }: ILogo) => {
  return (
    <Link style={{ cursor: "pointer" }} href="/">
      {image ? (
        <Image src={image} width={width} height={height} alt="logo" />
      ) : (
        <div className={styles.company_logo}>
          <DiJqueryLogo />
          <span>Niogalia</span>
        </div>
      )}
    </Link>
  );
};

export default Logo;
