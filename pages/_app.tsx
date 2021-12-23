import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorPage';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/utils/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ThemeProvider theme={theme}>
          <RecoilRoot>
            <Component {...pageProps} />
          </RecoilRoot>
        </ThemeProvider>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default MyApp;
