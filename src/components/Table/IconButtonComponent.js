import React from 'react';
import IconButton from '@material-ui/core/IconButton';

function IconButtonComponent({icon, onClick, disabled}) {
    return(
        <IconButton onClick={onClick} disabled={disabled}>
            {icon}
        </IconButton>
    )
}

export default IconButtonComponent