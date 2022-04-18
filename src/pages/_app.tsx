import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { ContentProvider } from '@/contexts/content/ContentProvider';
import '@/styles/globals.scss';

const App = ({ Component, pageProps }: AppProps) => {
  const { content } = pageProps;

  return (
    <ChakraProvider>
      <ContentProvider content={content}>
        <Component {...pageProps} />
      </ContentProvider>
    </ChakraProvider>
  );
};

export default App;
