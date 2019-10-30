import React from 'react';

//Material ui
import { Button, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

interface Props {
    children?: any,
    onClick(): void,
    size?: "medium" | "large" | "small" | undefined,
    color?: string,
    fontColor?: string,
    fontSize?: string,
    fullHeight?: boolean,
}

interface styleProps {
    backgroundColor: string,
    fontColor: string,
    fontWeight: string,
    fontSize: number,
    height: string,
    // fullHeight: boolean,
}

const DefaultButton = (props: Props) => {
    let btnColor;
    let fontSize;
    let fontColor;

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

    switch(props.color) {
        case 'default' :
            btnColor = '#B7A4EE';
            break;
        case 'success' :
            btnColor = '#5CE75C';
            break;
        case 'error' :
            btnColor = '#FF3232';
            break;
        case 'warning' :
            btnColor = '#FFF064';
            break;
        case 'rose' :
            btnColor = '#FFA0A0';
            break;
        case 'sky' :
            btnColor = '#52E4DC';
            break;
        case 'sea':
            btnColor = '#91D8FA';
            break;
        default :
            btnColor = '#FFFFFF';
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

    const styleProps = {
        backgroundColor: btnColor,
        fontColor: fontColor,
        fontWeight: 'bold',
        fontSize: fontSize,
        height: '100%',
        // {props.fullHeight?}        
    }

    const classes = useStyle(styleProps);

    return (
        <Button
            onClick={() => props.onClick()}
            variant='outlined'
            fullWidth={true}
            size={props.size}
            className={classes.btnStyle}
        >
            {props.children}
        </Button>
    );
}

const useStyle = makeStyles<Theme ,styleProps>((theme: Theme) => ({
    btnStyle: (props: any) => ({
        backgroundColor: props.backgroundColor,
        border: 0,
        outline: 0,
        paddingRight: 0,
        paddingLeft: 0,
        color: props.fontColor,
        fontWeight: props.fontWeight,
        fontSize: props.fontSize,
        height: props.height,
    }),
}))

export default DefaultButton;