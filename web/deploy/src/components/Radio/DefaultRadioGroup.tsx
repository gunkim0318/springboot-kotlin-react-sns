import React from'react';
import { FormControl, FormLabel, RadioGroup } from '@material-ui/core';

interface Props {
    label?: string,
    children: any,
}

const DefaultRadioGroup = (props: Props) => {
    return (
        <FormControl>
            <FormLabel>{props.label}</FormLabel>
            {props.children}
        </FormControl>
    );
}

export default DefaultRadioGroup;