import { Button, Divider, Image, Text, VStack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { HookInput } from 'components/HookInput';
import useAuth from 'hooks/useAuth';
import { GoogleIcon, LogInIcon } from 'icons';
import { Basic } from 'layouts/Basic';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import RouterNames from 'routes/RouterNames';
import { database } from 'services/firebase';
import schema from './schema';

interface HomeFormData {
  roomCode: string;
}

const Home: React.FC = () => {
  const history = useHistory();

  // Testando ssh

  const { user, signInWithGoogle } = useAuth();

  const { control, handleSubmit } = useForm<HomeFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      roomCode: '',
    },
  });

  const handleCreateRoom = async () => {
    if (!user) {
      await signInWithGoogle();
    }

    history.push(RouterNames.newRoom);
  };

  const onSubmit = async (data: HomeFormData) => {
    const { roomCode } = data;

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert('Sala inexistente');
    }

    history.push(RouterNames.room.replace(':id', roomCode));
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
          name="roomCode"
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
