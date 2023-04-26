import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Source_Code_Pro } from 'next/font/google';

import { Analytics } from '@vercel/analytics/react';

const sourceCodeProFont = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-source-code-pro',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${sourceCodeProFont.variable} font-sans bg-dracula-darker `}
    >
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}
