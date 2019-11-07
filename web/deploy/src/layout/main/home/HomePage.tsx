import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Grid } from '@material-ui/core';

//HOC
import withMainRoot from '../withMainRoot';


interface Props extends RouteComponentProps<void> {
    classes: any,
}

const HomePage = (props: Props) => {
    return (
        <Grid container >
            HomePage
        </Grid>
    );
}

export default withMainRoot(HomePage);