import { extendTheme } from '@chakra-ui/react';

// TODO: customizar depois
export const theme = extendTheme({
  colors: {
    bgcolor: '#333',
  },
  fonts: {
    heading: 'Roboto',
    body: 'Poppins',
  },
  components: {
    Link: {
      baseStyle: {
        color: 'pink.400',
      },
    },
  },
});
