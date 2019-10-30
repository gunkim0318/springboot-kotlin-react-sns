import React from 'react';
import { Radio, FormControlLabel } from '@material-ui/core';

interface Props {
    value: string,
    onChange: any,
    selectedRadio: string,
    label?: string, 
}

const DefaultRadio = (props: Props) => {

    return (
        <FormControlLabel 
        value={props.value}
        label={props.label}
        control={
            <Radio 
            onChange={props.onChange}
            checked={props.selectedRadio === props.value}
            value={props.value}
            inputProps={
                {
                    'aria-label': props.label,
                }
            }
            />
        }
        />

        
    );
}

export default DefaultRadio;