import React from 'react';
import { TextField } from '@material-ui/core';

interface Props {
    label: string,

}

const DefaultInput = (props: Props) => {
    return (
        <TextField 
        id="outlined-name"
        label={props.label}
        variant="outlined"
        fullWidth={true}
        />
    );
}

export default DefaultInput;