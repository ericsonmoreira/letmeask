import { ChakraProvider } from '@chakra-ui/react';
import Routes from 'routes';
import { theme } from './theme';

function App() {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Routes />
    </ChakraProvider>
  );
}

export default App;
