import { IAction, IStateProps } from '../utils/interfaces';
import { types } from '../constants/actionTypes';

export const registerState: IStateProps = {
  name: 'User',
  cardNumber: null,
  cvc: null,
  expiryDate: null,
  errors: {},
};

export const addGenericReducer = (
  state: IStateProps,
  action: IAction,
): IStateProps => {
  const { payload, type } = action;
  switch (type) {
    case types.RECEIVE:
      return {
        ...state,
        ...payload,
      };
    case types.UPDATE:
      return {
        ...state,
        ...payload,
      };

    case types.ERROR:
      return {
        ...state,
        errors: payload,
      };
    case types.INITIAL:
      return state;
    default:
      return state;
  }
};
