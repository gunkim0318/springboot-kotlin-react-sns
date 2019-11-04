import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Grid } from '@material-ui/core';


interface Props extends RouteComponentProps<void> {

}

const HomePage = (props: Props) => {
    return (
        <Grid container>
            HomePage
        </Grid>
    );
}

export default HomePage;