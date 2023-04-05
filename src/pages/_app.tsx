import { initializeApp } from "firebase/app";
import { config } from "@/src/config/index";
import NextNProgress from "nextjs-progressbar";

//--INTERNAL IMPORTS
import type { AppProps } from "next/app";
import "../styles/globals.css";

initializeApp(config.firebaseConfig);

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <NextNProgress />
            <Component {...pageProps} />;
        </>
    );
}
