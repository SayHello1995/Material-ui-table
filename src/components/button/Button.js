import React from 'react';
import Button from '@material-ui/core/Button';

const ButtonComponent = ({onClick, label, color, variant, ...other}) => (
  <Button onClick={onClick} color={color} variant={variant} {...other}>
    {label}
  </Button>
);

ButtonComponent.defaultProps = {
  color: "primary",
  variant: "contained"
};

export default ButtonComponent;