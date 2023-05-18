import React from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import LayoutComponent from '@/components/layout/LayoutComponent';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </React.Fragment>
  );
}
