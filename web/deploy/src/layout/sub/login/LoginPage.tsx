import React from 'react';
import {RouteComponentProps} from 'react-router-dom'
import SubStyles from '../SubStyles';
import DefaultCard from '../../../components/Card/DefaultCard';
import TestCard from '../../../components/Card/TestCard';
import { Grid } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import DefaultInput from '../../../components/Input/DefaultInput';


interface Props extends RouteComponentProps<void> {}

const LoginPage = (props: Props) => {
    const classes = SubStyles();

    return (
        <Grid container justify='center' alignItems='center' className={classes.root}>
            <Grid item xs={12} sm={12} md={12} lg={12} container justify='center' className={classes.cardGrid}>
                <DefaultCard className={classes.card} icon={<LockIcon />} headerColor='default' title='로그인'>
                    <Grid container spacing={1} justify='center' className={classes.cardContent}>
                        <Grid item xs={12}>
                            <DefaultInput 
                            label='ID'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <DefaultInput
                            label='PASSWORD'
                            />    
                        </Grid>
                        <Grid item xs={12}>
                            <DefaultInput
                            label='로그인'
                            /> 
                        </Grid>
                    </Grid>
                </DefaultCard>
            </Grid>
        </Grid>
    );
}

export default LoginPage;