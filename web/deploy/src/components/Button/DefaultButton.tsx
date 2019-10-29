import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { fontWeight } from '@material-ui/system';

interface Props {
    children?: any,
    onClick(): void,
    size?: "medium" | "large" | "small" | undefined,
    color?: string,
}

const DefaultButton = (props: Props) => {

    let btnColor;
    switch(props.color) {
        case 'default' :
            btnColor = '#8F7CEE';
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
        default :
            btnColor = '#FFFFFF';
    }

    const styleProps = {
        color: btnColor,
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
            <div className={classes.btnFontStyle}>
                {props.children}
            </div>
        </Button>
    );
}

const useStyle = makeStyles(theme => ({
    btnStyle: (props: any) => ({
        backgroundColor: props.color,
        border: 0,
        outline: 0,
    }),
    btnFontStyle: {
        fontWeight: 'bold',  
        color: 'white'      
    }
}))

export default DefaultButton;