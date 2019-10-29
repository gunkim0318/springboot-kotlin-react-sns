import React from 'react';
import { TextField } from '@material-ui/core';

interface Props {
    label: string,
    onChange?: any,
    value?: string,
    name?: string,
}

const DefaultInput = (props: Props) => {
    return (
        <TextField 
        name={props.name}
        id="outlined-name"
        label={props.label}
        value={props.value}
        onChange={props.onChange}
        variant="outlined"
        fullWidth={true}
        />
    );
}

export default DefaultInput;