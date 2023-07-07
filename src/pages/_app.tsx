import { initializeApp } from "firebase/app";
import NextNProgress from "nextjs-progressbar";
import { Provider } from "react-redux";

//--INTERNAL IMPORTS
import type { AppProps } from "next/app";
import { config } from "@/src/config/index";
import { store } from "@/store";

import "../styles/globals.css";

initializeApp(config.firebaseConfig);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NextNProgress />
      <Component {...pageProps} />
    </Provider>
  );
}
