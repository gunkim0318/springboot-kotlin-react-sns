import React from 'react';
import { RouteComponentProps } from 'react-router';
import WithSubRoot from '../withSubRoot';
import { Grid } from '@material-ui/core';

interface Props extends RouteComponentProps<void> {
    classes: any,
}

const NewProfile = (props: Props) => {
    return (
        <Grid container className={props.classes.root}>
        </Grid>
    );
}

export default WithSubRoot(NewProfile);
