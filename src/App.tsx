import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from 'context/AuthContext';
import Routes from 'routes';
import { theme } from './theme';

function App() {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
