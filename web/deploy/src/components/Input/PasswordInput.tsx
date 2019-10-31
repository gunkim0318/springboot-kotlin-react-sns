import React from 'react';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

interface Props {
    children?: any
    onChange?: any,
    value?: string,
    disabled?: boolean,
}

const PasswordInput = (props: Props) => {
    //useState
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <FormControl variant="outlined" fullWidth={true} disabled={props.disabled ? true : false}>
            <InputLabel htmlFor="outlined-adornment-password">{props.children}</InputLabel>
            <OutlinedInput
                id='outlined-adornment-password'
                type={showPassword ? 'text' : 'password'}
                value={props.value}
                onChange={props.onChange}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                        >
                            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </IconButton>
                    </InputAdornment>
                }
                labelWidth={props.children ? 80 : 0}
            >

            </OutlinedInput>
        </FormControl>
    );

}

export default PasswordInput;