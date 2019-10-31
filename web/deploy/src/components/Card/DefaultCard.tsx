import React from 'react';

//Material ui
import { Card, CardHeader, Divider, makeStyles, Grid, Theme } from '@material-ui/core';

interface Props {
    children: any,
    className?: string,
    icon?: any,
    headerColor?: string,
    title: string,
}

interface StyleProps {
    headerColor: string,
}

const DefaultCard = (props: Props) => {
    let headerColor;
    switch(props.headerColor) {
        case 'default' :
            headerColor = '#B7A4EE';
            break;
        case 'success' :
            headerColor = '#8EFB8E';
            break;
        case 'error' :
            headerColor = '#FFA0A0';
            break;
        default :
            headerColor = '#B7A4EE';
    }

    const styleProps = {
        headerColor: headerColor,
    }
    const classes = useStyle(styleProps);
    
    return (
        <Card className={props.className}> 
            <CardHeader 
            avatar={
                props.icon
            }
            className={classes.header} 
            title={props.title}
            />
            <Divider />
            <Grid item container>
                    {props.children}
            </Grid>
        </Card>
    );
}

const useStyle = makeStyles<Theme, StyleProps>((theme: Theme) => ({
    header: (props: any) => ({
        height: '70px',
        backgroundColor: props.headerColor,
        '& div': {
            '& span': {
                fontSize: 25,
                fontWeight: 'bold',
            }
            
        }
    }),
    
}))

export default DefaultCard;