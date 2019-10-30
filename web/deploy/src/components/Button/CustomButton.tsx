import React from 'react';
import { Button, Grid, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


interface Props {
    height: number, 
    children?: any,
    icon?: any,
    color?: string,
    fontSize?: string,
}

interface StyleProps {
    height: number,
    smHeight: number,
    color: string,
    fontSize: number,
    smFontSize: number,
    fontWeight: string,
}

const CustomButton = (props: Props) => {

    let btnColor;
    let fontSize;

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
        case 'sea' :
            btnColor = '#91D8FA';
            break;
        default :
            btnColor = '#FFFFFF';
    }

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

    let styleProps = {
        height: props.height,
        smHeight: props.height/2,
        color: btnColor,
        fontSize: fontSize,
        smFontSize: fontSize-4,
        fontWeight: 'bold',
    }
    const classes = useStyles(styleProps);

    return (
        <Button className={classes.root} fullWidth={true}>
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

const useStyles = makeStyles<Theme,StyleProps>((theme: Theme) => ({
    root: (props: any) => ({
        backgroundColor: props.color,
        fontWeight: props.fontWeight,
        [theme.breakpoints.down('sm')] :{
            height: props.smHeight,
            fontSize: props.smFontSize,
        },
        [theme.breakpoints.up('sm')] :{
            height: props.height,
            fontSize: props.fontSize,
        }
    }),
    
}))

export default CustomButton;