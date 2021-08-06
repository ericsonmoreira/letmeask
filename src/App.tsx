import { ChakraProvider } from '@chakra-ui/react';
import { Home } from './pages/Home';
import { theme } from './theme';

function App() {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Home />
    </ChakraProvider>
  );
}

export default App;
