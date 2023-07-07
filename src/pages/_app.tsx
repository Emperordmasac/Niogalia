// import { initializeApp } from 'firebase/app';
// import NextNProgress from 'nextjs-progressbar';
// import { Provider } from 'react-redux';

//--INTERNAL IMPORTS
// import type { AppProps } from 'next/app';
// import { config } from '@/src/config/index';
// import { store } from '@/store';

// import '../styles/globals.css';

// initializeApp(config.firebaseConfig);

// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <Provider store={store}>
//       <NextNProgress />
//       <Component {...pageProps} />
//     </Provider>
//   );
// }

import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
