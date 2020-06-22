import React from 'react';
import IconButton from '@material-ui/core/IconButton';

function IconButtonComponent({icon, onClick}) {
    return(
        <IconButton onClick={onClick}>
            {icon}
        </IconButton>
    )
}

export default IconButtonComponent