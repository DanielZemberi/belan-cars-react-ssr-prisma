import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '@/lib/theme/defaultTheme';
import GlobalStyle from '@/lib/theme/globalStyle';
import { appWithTranslation } from 'next-i18next';
import NextI18nextConfig from '../../next-i18next.config.js';

function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default appWithTranslation(App, NextI18nextConfig);
