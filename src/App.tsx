import { theme } from './theme';
import { ChakraProvider, Text } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Text>Ola mundo</Text>
    </ChakraProvider>
  );
}

export default App;
