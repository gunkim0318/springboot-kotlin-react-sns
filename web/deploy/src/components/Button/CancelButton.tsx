import React from 'react';
import { Button, makeStyles } from '@material-ui/core';

interface Props {
    children: any,
    parentsProps: any,
    fontSize?: string,
}

const CancelButton = (props: Props) => {
    let fontSize;

    switch(props.fontSize) {
        case 'small' :
            fontSize = 10;
            break;
        case 'medium' :
            fontSize = 14;
            break;
        case 'large' :
            fontSize = 18;
            break;
        default :
            fontSize = 14;
    }

    const styleProps = {
        fontSize: fontSize,
        fontWeight: 'bold',
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

const useStyles = makeStyles(theme => ({
    btnStyle: (props: any) => ({
        backgroundColor: props.backgroundColor,
        fontWeight: props.fontWeight,
        fontSize: props.fontSize,
    }),
}))

export default CancelButton;