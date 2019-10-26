import React from 'react';
import {RouteComponentProps} from 'react-router-dom'
import SubStyles from '../SubStyles';
import DefaultCard from '../../../components/Card/DefaultCard';
import TestCard from '../../../components/Card/TestCard';
import { Grid } from '@material-ui/core';


interface Props extends RouteComponentProps<void> {}

const LoginPage = (props: Props) => {
    const classes = SubStyles();

    return (
        <Grid container justify='center' className={classes.root}>
            <Grid item xs={12}>
                <DefaultCard className={classes.card} />
            </Grid>
        </Grid>
    );
}

export default LoginPage;