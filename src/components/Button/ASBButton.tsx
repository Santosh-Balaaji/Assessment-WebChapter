import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import { IASBButtonProps } from '../../utils/interfaces';

const ASBButton: React.FC<IASBButtonProps> = ({
  children,
  color,
  className,
  minWidth,
  size,
  variant,
  onClick,
}): JSX.Element => {
  const colorSelection = ['success', 'tertiary', 'warning', 'info'];
  let customStyles = {};
  if (minWidth) {
    customStyles = { minWidth };
  }

  if (color && colorSelection.includes(color)) {
    return (
      <Button data-testid="StyledButton" style={customStyles} onClick={onClick}>
        {children}
      </Button>
    );
  }
  return (
    <Button
      data-testid="DefaultButton"
      color={color}
      size={size}
      variant={variant}
      className={classNames(className)}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default ASBButton;

ASBButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.func,
    PropTypes.string,
  ]).isRequired,
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element,
  ]),
  minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func.isRequired,
};

ASBButton.defaultProps = {
  color: 'primary',
  className: '',
  minWidth: undefined,
  size: 'medium',
  variant: 'outlined',
};
