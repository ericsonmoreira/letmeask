import { Button, Divider, Image, Text, VStack } from '@chakra-ui/react';
import { HookInput } from 'components/HookInput';
import useAuth from 'hooks/useAuth';
import { GoogleIcon, LogInIcon } from 'icons';
import { Basic } from 'layouts/Basic';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import RouterNames from 'routes/RouterNames';

interface HomeFormData {
  codSala: string;
}

const Home: React.FC = () => {
  const history = useHistory();

  const { control, handleSubmit } = useForm<HomeFormData>();

  const onSubmit = (data: HomeFormData) => {
    console.log(data);
  };

  const { user, signInWithGoogle } = useAuth();

  const handleCreateRoom = async () => {
    if (!user) {
      await signInWithGoogle();
    }

    history.push(RouterNames.newRoom);
  };

  return (
    <Basic>
      <VStack maxW="dm" minW="sm" as="form" onSubmit={handleSubmit(onSubmit)}>
        <Image src="/images/logo.svg" alt="letmeask" mb="56px" />
        <Button
          w="full"
          colorScheme="red"
          leftIcon={<GoogleIcon />}
          onClick={handleCreateRoom}
        >
          Crie sua sala com o Google
        </Button>
        <Divider />
        <Text fontSize="sm">Ou entre na sala</Text>
        <HookInput
          control={control}
          placeholder="Digite o código da sala"
          name="codSala"
        />
        <Button
          w="full"
          colorScheme="purple"
          leftIcon={<LogInIcon />}
          type="submit"
        >
          Entrar na sala
        </Button>
      </VStack>
    </Basic>
  );
};

export { Home };
