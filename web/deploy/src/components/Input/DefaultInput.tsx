import React from 'react';

//Material ui
import { TextField, Theme } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/styles';

interface Props {
    label: string,
    onChange?: any,
    value?: string,
    name?: string,
    disabled?: boolean,
    helperText?: string,
    error?: boolean,
}

const DefaultInput = (props: Props) => {
    const classes = useStyles();

    return (
        <CustomTextField
            name={props.name}
            label={props.label}
            value={props.value}
            onChange={props.onChange}
            variant="outlined"
            fullWidth={true}
            disabled={props.disabled ? true : false}
            helperText={props.helperText}
            error={props.error ? true : false}
            InputProps={
                {
                    classes: {
                        root: classes.cssOutlinedInput,
                        focused: classes.cssFocused,
                        notchedOutline: classes.notchedOutLine,
                    }
                }
            }
        />
    );
}

const useStyles = makeStyles<Theme>((theme: Theme) => ({
    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
            borderColor: '#000000',
            borderWidth: 2,
        }
    },

    cssFocused: {},

    notchedOutline: {
        borderWidth: 2,
        borderColor: '#c8c8c8'
    },
}));

const CustomTextField = withStyles({
    root: {
        '& input:valid + fieldset': {
            borderColor: '#c8c8c8',
            borderWidth: 2,
        },
        '& input:valid:focus + fieldset': {
            // borderColor: '#000000',
            borderWidth: 2,
        },
    }
})(TextField);

export default DefaultInput;