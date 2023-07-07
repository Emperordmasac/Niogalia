import { initializeApp } from 'firebase/app';
import NextNProgress from 'nextjs-progressbar';
import { Provider } from 'react-redux';

//--INTERNAL IMPORTS
import { config } from '@/src/config/index';
import { store } from '@/store';
import type { AppProps } from 'next/app';
import { NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

import '../styles/globals.css';

initializeApp(config.firebaseConfig);

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <Provider store={store}>
      <NextNProgress />
      {getLayout(<Component {...pageProps} />)}
    </Provider>
  );
}
