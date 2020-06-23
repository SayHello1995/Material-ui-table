import React from 'react';
import IconButton from '@material-ui/core/IconButton';

const IconButtonComponent = ({onClick, disabled, children}) => (
  <IconButton onClick={onClick} disabled={disabled}>
    {children}
  </IconButton>
);

export default IconButtonComponent