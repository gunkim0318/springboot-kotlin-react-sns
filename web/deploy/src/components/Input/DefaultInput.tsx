import React from 'react';

//Material ui
import { TextField } from '@material-ui/core';

interface Props {
    label: string,
    onChange?: any,
    value?: string,
    name?: string,
    disabled?: boolean,
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
            disabled={props.disabled ? true : false}
        />
    );
}

export default DefaultInput;