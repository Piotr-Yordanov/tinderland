import { AppProps } from 'next/app';

import '@/styles/globals.css';
import 'react-h5-audio-player/lib/styles.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';
import '@/styles/epub-zen.css';

//index.js
import { ThemeProvider } from '@/components/theme/ThemeContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
