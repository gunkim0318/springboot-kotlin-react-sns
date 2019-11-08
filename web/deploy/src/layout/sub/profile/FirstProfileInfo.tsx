import React from 'react';
import { RouteComponentProps } from 'react-router';

//HOC
import withSubRoot from '../withSubRoot';

//Material ui
import { Grid } from '@material-ui/core';

interface Props extends RouteComponentProps<void> {
    classes: any,
}

const FirstProfileInfo = (props: Props) => {

    return (
        <Grid container className={props.classes.root}>

        </Grid>
    );
}

export default withSubRoot(FirstProfileInfo);