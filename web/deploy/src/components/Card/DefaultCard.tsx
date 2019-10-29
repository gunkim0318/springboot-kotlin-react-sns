import React from 'react';
import { Card, CardHeader, Divider, makeStyles, Grid } from '@material-ui/core';




interface Props {
    children: any,
    className?: string,
    icon?: any,
    headerColor?: string,
    title: string,
}

const DefaultCard = (props: Props) => {
    let headerColor;
    switch(props.headerColor) {
        case 'default' :
            headerColor = '#8F7CEE';
            break;
        case 'success' :
            headerColor = '#8EFB8E';
            break;
        case 'error' :
            headerColor = '#FFA0A0';
            break;
        default :
            headerColor = '#FFFFFF';
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

const useStyle = makeStyles(theme => ({
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