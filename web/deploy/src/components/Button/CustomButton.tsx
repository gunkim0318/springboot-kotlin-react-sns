import React from 'react';
import { Button, Grid, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


interface Props {
    height: number,
    children?: any,
    icon?: any,
    color?: string,
    fontSize?: string,
    onClick(): void,
    fontColor?: string,
    disabled?: boolean,
}

interface StyleProps {
    height: number,
    smHeight: number,
    color: string,
    fontSize: number,
    smFontSize: number,
    fontWeight: string,
    fontColor: string,
    disBackgroundColor: string,
}

const CustomButton = (props: Props) => {

    let btnColor;
    let disBtnColor;
    let fontSize;
    let fontColor;

    switch (props.color) {
        case 'default':
            btnColor = '#B7A4EE';
            disBtnColor = '#CBB8EE';
            break;
        case 'success':
            btnColor = '#5CE75C';
            disBtnColor = '#CBB8EE';
            break;
        case 'error':
            btnColor = '#FF3232';
            disBtnColor = '#CBB8EE';
            break;
        case 'warning':
            btnColor = '#FFF064';
            disBtnColor = '#CBB8EE';
            break;
        case 'rose':
            btnColor = '#FFA0A0';
            disBtnColor = '#CBB8EE';
            break;
        case 'sky':
            btnColor = '#52E4DC';
            disBtnColor = '#CBB8EE';
            break;
        case 'sea':
            btnColor = '#91D8FA';
            disBtnColor = '#CBB8EE';
            break;
        default:
            btnColor = '#FFFFFF';
            disBtnColor = '#CBB8EE';
    }

    switch (props.fontSize) {
        case 'small':
            fontSize = 10;
            break;
        case 'medium':
            fontSize = 14;
            break;
        case 'large':
            fontSize = 18;
            break;
        default:
            fontSize = 14;
    }

    switch (props.fontColor) {
        case 'white':
            fontColor = '#ffffff';
            break;
        case 'black':
            fontColor = '#000000';
            break;
        default:
            fontColor = '#000000';
    }

    let styleProps = {
        height: props.height,
        smHeight: props.height / 2,
        color: btnColor,
        fontSize: fontSize,
        smFontSize: fontSize - 4,
        fontWeight: 'bold',
        fontColor: fontColor,
        disBackgroundColor: disBtnColor,
    }
    const classes = useStyles(styleProps);

    return (
        <Button
            className={classes.root}
            fullWidth={true}
            onClick={() => props.onClick()}
            disabled={props.disabled ? true : false}
        >
            <Grid container>
                <Grid item xs={12}>
                    {props.icon}
                </Grid>
                <Grid item xs={12}>
                    {props.children}
                </Grid>
            </Grid>
        </Button>
    );
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
    root: (props: any) => ({
        backgroundColor: props.color,
        fontWeight: props.fontWeight,
        color: props.fontColor,
        [theme.breakpoints.down('sm')]: {
            height: props.smHeight,
            fontSize: props.smFontSize,
        },
        [theme.breakpoints.up('sm')]: {
            height: props.height,
            fontSize: props.fontSize,
        },
        '&:disabled': {
            backgroundColor: props.disBackgroundColor,
        },
    }),

}))

export default CustomButton;