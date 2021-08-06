import { Button, Divider, Image, Text, VStack } from '@chakra-ui/react';
import { HookInput } from 'components/HookInput';
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

  const handleNavigateToNewRoom = () => {
    history.push(RouterNames.newRoom);
  };

  return (
    <Basic>
      <VStack maxW="dm" minW="sm">
        <Image src="/images/logo.svg" alt="letmeask" mb="56px" />
        <Button
          w="full"
          colorScheme="red"
          leftIcon={<GoogleIcon />}
          onClick={handleNavigateToNewRoom}
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
        {/* <Input placeholder="Digite o código da sala" {...register('codSala')} /> */}
        <Button
          w="full"
          colorScheme="purple"
          leftIcon={<LogInIcon />}
          onClick={handleSubmit(onSubmit)}
        >
          Entrar na sala
        </Button>
      </VStack>
    </Basic>
  );
};

export { Home };
