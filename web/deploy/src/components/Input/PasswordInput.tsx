import React from 'react';
import { InputAdornment, IconButton, makeStyles, Theme, TextField } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

interface Props {
    children?: any
    onChange?: any,
    value?: string,
    name?: string,
    disabled?: boolean,
    error?: boolean,
    helperText?: string,
}

const PasswordInput = (props: Props) => {
    const classes = useStyles();

    //useState
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        // <FormControl variant="outlined" fullWidth={true} disabled={props.disabled ? true : false} >
        // <InputLabel htmlFor="outlined-adornment-password">{props.children}</InputLabel>
        <TextField
            type={showPassword ? 'text' : 'password'}
            value={props.value}
            onChange={props.onChange}
            label={props.children}
            fullWidth={true}
            variant='outlined'
            name={props.name}
            helperText={props.helperText}
            error={props.error ? true : false}
            InputProps={
                {
                    classes: {
                        root: classes.cssOutlinedInput,
                        focused: classes.cssFocused,
                        notchedOutline: classes.notchedOutline,
                    },
                    endAdornment:
                        <InputAdornment position='end'>
                            <IconButton
                                onClick={handleClickShowPassword}
                            >
                                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </IconButton>
                        </InputAdornment>
                }
            }
            disabled={props.disabled ? true : false}

        // labelWidth={props.children ? 80 : 0}
        />
        // </FormControl>
    );

}

const useStyles = makeStyles<Theme>((theme: Theme) => ({
    input: {

    },
    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
            // borderColor: '#000000',
            borderWidth: 2,
        }
    },

    cssFocused: {},

    notchedOutline: {
        borderWidth: 2,
        borderColor: '#c8c8c8'
    },
}));

export default PasswordInput;