import * as yup from 'yup';

const schema = yup.object().shape({
  codSala: yup.string().required('Campo é obrigatório'),
});

export default schema;
