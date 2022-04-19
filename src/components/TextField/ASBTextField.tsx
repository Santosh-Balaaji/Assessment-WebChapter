import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import { IASBTextFieldProps } from '../../utils/interfaces';

const ASBTextField: React.FC<IASBTextFieldProps> = ({
  id,
  label,
  name,
  value,
  size,
  placeholder,
  variant,
  inlineLabel,
  onChange,
  onBlur,
  fullWidth,
  className,
}) => (
  <>
    {inlineLabel && label && <InputLabel htmlFor={label}>{label}</InputLabel>}
    <TextField
      data-testid="TextField"
      id={id}
      name={name}
      value={value}
      label={inlineLabel ? '' : label}
      placeholder={placeholder}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      onChange={onChange}
      onBlur={onBlur}
      className={className}
    />
  </>
);

ASBTextField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard']),
  size: PropTypes.oneOf(['small', 'medium']),
  inlineLabel: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  fullWidth: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onBlur: PropTypes.func.isRequired,
  className: PropTypes.string,
};

ASBTextField.defaultProps = {
  size: 'small',
  variant: 'outlined',
  placeholder: '',
  inlineLabel: false,
  label: '',
  fullWidth: false,
  value: null,
  className: '',
};

export default ASBTextField;
