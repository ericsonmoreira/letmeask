import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
} from '@chakra-ui/react';
import React from 'react';
import { Control, useController } from 'react-hook-form';

interface HookInputProps extends InputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  name: string;
  label?: string;
}

const HookInput: React.FC<HookInputProps> = (props) => {
  const { control, name, label, ...rest } = props;

  const {
    field: { ref, ...inputProps },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <FormControl isInvalid={!!error}>
      {label && <FormLabel htmlFor="name">{label}</FormLabel>}
      <Input ref={ref} {...rest} {...inputProps} />
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  );
};

export { HookInput };
