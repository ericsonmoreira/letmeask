import { Button, Heading, Image, Link, Text, VStack } from '@chakra-ui/react';
import { HookInput } from 'components/HookInput';
import { LogInIcon } from 'icons';
import { Basic } from 'layouts/Basic';
import { useForm } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';
import RouterNames from 'routes/RouterNames';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schema';
interface NewRoomFormData {
  roomName: string;
}

const NewRoom: React.FC = () => {
  const { control, handleSubmit } = useForm<NewRoomFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      roomName: '',
    },
  });

  const onSubmit = (data: NewRoomFormData) => {
    console.log(data);
  };

  return (
    <Basic>
      <VStack maxW="dm" minW="sm" as="form" onSubmit={handleSubmit(onSubmit)}>
        <Image src="/images/logo.svg" alt="letmeask" />
        <Heading fontSize="2xl">Crirar uma nova sala</Heading>
        <HookInput
          control={control}
          placeholder="Nome da sala"
          name="roomName"
        />
        <Button
          w="full"
          colorScheme="purple"
          leftIcon={<LogInIcon />}
          type="submit"
        >
          Criar sala
        </Button>

        <Text fontSize="sm">
          Entrar em uma sala existente?{' '}
          <Link as={RouterLink} to={RouterNames.home}>
            Clique aqui
          </Link>
        </Text>
      </VStack>
    </Basic>
  );
};

export { NewRoom };
