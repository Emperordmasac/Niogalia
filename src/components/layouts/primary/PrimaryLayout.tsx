import Head from 'next/head';
import { ReactNode } from 'react';

export interface IPrimaryLayout {
  children: ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Niogalia</title>
      </Head>
      <main>{children}</main>
    </>
  );
};

export default PrimaryLayout;
