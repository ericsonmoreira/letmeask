import { Flex, Box, Heading, Image, Text, Center } from '@chakra-ui/react';

const Basic: React.FC = ({ children }) => {
  return (
    <Flex h="100vh" w="100%" bgColor="#f8f8f8">
      <Box as="aside" bgColor="purple.500" paddingX={10} paddingY={112}>
        <Image src="images/illustration.svg" />
        <Heading textColor="white">Toda pergunta tem uma resposta.</Heading>
        <Text textColor="gray.300">
          Aprenda e compartilhe conhecimento com outras pessoas
        </Text>
      </Box>
      <Center as="main" w="100%">
        {children}
      </Center>
    </Flex>
  );
};

export { Basic };
