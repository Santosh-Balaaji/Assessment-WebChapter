import { ObjectSchema } from 'yup';
import { RequiredNumberSchema } from 'yup/lib/number';
import {
  Assign,
  ObjectShape,
  TypeOfShape,
  AssertsShape,
} from 'yup/lib/object';
import { RequiredStringSchema } from 'yup/lib/string';

const dot = require('dot-object');

export const syncValidator =
  (
    schema: ObjectSchema<
      Assign<
        ObjectShape,
        {
          cardNumber: RequiredNumberSchema<
            number | null | undefined,
            Record<string, any>
          >;
          cvc: RequiredNumberSchema<
            number | null | undefined,
            Record<string, any>
          >;
          expiryDate: RequiredStringSchema<
            string | null | undefined,
            Record<string, any>
          >;
        }
      >,
      Record<string, any>,
      TypeOfShape<
        Assign<
          ObjectShape,
          {
            cardNumber: RequiredNumberSchema<
              number | null | undefined,
              Record<string, any>
            >;
            cvc: RequiredNumberSchema<
              number | null | undefined,
              Record<string, any>
            >;
            expiryDate: RequiredStringSchema<
              string | null | undefined,
              Record<string, any>
            >;
          }
        >
      >,
      AssertsShape<
        Assign<
          ObjectShape,
          {
            cardNumber: RequiredNumberSchema<
              number | null | undefined,
              Record<string, any>
            >;
            cvc: RequiredNumberSchema<
              number | null | undefined,
              Record<string, any>
            >;
            expiryDate: RequiredStringSchema<
              string | null | undefined,
              Record<string, any>
            >;
          }
        >
      >
    >,
  ) =>
  (formValues: any) => {
    try {
      schema.validateSync(formValues, { abortEarly: false });
      return {};
    } catch (errors: any) {
      const allErrors = errors.inner.reduce(
        (error: any, err: { path: any; message: any }) => ({
          ...error,
          [err.path]: err.message,
        }),
        {},
      );
      dot.object(allErrors);
      return allErrors;
    }
  };
