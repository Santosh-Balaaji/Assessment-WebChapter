export interface IStateProps {
  name: string | '';
  cardNumber?: number | null;
  cvc?: number | null;
  expiryDate: string | null;
  errors: any;
}

export interface IAction {
  type: string;
  payload: IStateProps | {};
}

export interface IASBTextFieldProps {
  id: string;
  label?: string;
  placeholder?: string;
  size?: 'small' | 'medium';
  variant?: 'filled' | 'outlined' | 'standard';
  inlineLabel?: boolean;
  name: string;
  onChange: (
    event: React.ChangeEvent<{ name: string; value: unknown }>,
  ) => void;
  fullWidth?: boolean;
  value: unknown | null;
  onBlur: () => void;
  className?: string;
}

export interface IDatepickerComponent {
  name: string;
  id: string;
  value: string | null | '';
  placeholder?: string;
  label?: string | '';
  size?: string | number;
  onChange: (evt: { target: { name: string; value: unknown } }) => void;
  onBlur?: (evt: React.ChangeEvent<{ value: unknown }>) => void;
}

export interface IASBButtonProps {
  children: React.ReactNode | string | (() => void) | JSX.Element;
  color?: 'default' | 'inherit' | 'primary' | 'secondary';
  className?: JSX.Element | string | (() => void);
  minWidth?: string | number;
  size?: 'small' | 'medium' | 'large';
  variant?: 'text' | 'outlined' | 'contained';
  onClick: () => void;
}
