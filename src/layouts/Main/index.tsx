import {
  Box,
  Heading,
  Flex,
  Image,
  Text,
  Container,
  Badge,
  Divider,
} from '@chakra-ui/react';

interface MainProps {
  title: string;
  numberQuestions?: number;
}

const Main: React.FC<MainProps> = (props) => {
  const { children, title, numberQuestions } = props;

  return (
    <Flex h="100vh" w="100%" bgColor="#f8f8f8" flexDirection="column">
      <Flex
        paddingY={4}
        paddingX={24}
        w="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Image src="/images/logo.svg" h="45px" />
        <Box>
          <Text>Código</Text>
        </Box>
      </Flex>
      <Divider />
      <Container maxW="3xl" paddingY={8}>
        <Flex alignItems="center">
          <Heading fontSize="medium">
            {title}
          </Heading>
          {numberQuestions && (
            <Badge variant="solid" colorScheme="purple" ml={4}>
              Quantidade de perguntas: {numberQuestions}
            </Badge>
          )}
        </Flex>
        {children}
      </Container>
    </Flex>
  );
};

export { Main };
