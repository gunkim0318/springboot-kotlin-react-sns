import React from 'react';
import { Button, makeStyles, Theme } from '@material-ui/core';

interface Props {
    children: any,
    parentsProps: any,
    fontSize?: string,
    fontColor?: string,
}

interface StyleProps {
    fontSize: number,
    fontWeight: string,
    fontColor: string,
    backgroundColor: string,
}

const CancelButton = (props: Props) => {
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
        fontSize: fontSize,
        fontWeight: 'bold',
        fontColor: fontColor,
        backgroundColor: '#FF5675',
    };

    const classes = useStyles(styleProps);

    const handleCancel = () => {
        props.parentsProps.history.goBack();
    }

    return (
        <Button className={classes.btnStyle} onClick={handleCancel} fullWidth={true}>
            {props.children}
        </Button>
    );
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
    btnStyle: (props: any) => ({
        backgroundColor: props.backgroundColor,
        fontWeight: props.fontWeight,
        fontSize: props.fontSize,
        color: props.fontColor,
    }),
}))

export default CancelButton;