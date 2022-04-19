/* eslint-disable import/prefer-default-export */
import * as Yup from 'yup';

export const RegisterSchema = Yup.object().shape({
  cardNumber: Yup.number()
    .integer()
    .typeError('Field must only contain numeric values')
    .nullable()
    .required('Required'),
  cvc: Yup.number()
    .integer()
    .typeError('Field must only contain numeric values')
    .nullable()
    .required('Required'),
  expiryDate: Yup.string().nullable().required('Required'),
});
