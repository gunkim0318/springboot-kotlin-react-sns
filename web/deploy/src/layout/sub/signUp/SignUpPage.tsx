import React from 'react';
import { RouteComponentProps } from 'react-router';

//Material ui & Components
import { Grid } from '@material-ui/core';
import DefaultCard from '../../../components/Card/DefaultCard';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

//CSS
import SubStyles from '../SubStyles';
import DefaultInput from '../../../components/Input/DefaultInput';
import DefaultButton from '../../../components/Button/DefaultButton';


interface Props extends RouteComponentProps<void> {

}

const SignUpPage = (props: Props) => {
    const classes = SubStyles();

    const handleCancel = () => {
        props.history.goBack();
    }
    
    const handleSignUp = () => {

    }

    return (
        <Grid container className={classes.root} justify='center' alignItems='center' >
            <Grid item container xs={12} sm={12} md={12} lg={12} justify='center' >
                <DefaultCard className={classes.card} title='회원가입' headerColor='default' icon={<AccountBoxIcon fontSize='large' />}>
                    <Grid item container spacing={2} justify='center' className={classes.cardContent} >
                        <Grid item xs={12}>
                            <DefaultInput label='1' />
                        </Grid>
                        <Grid item xs={12}>
                            <DefaultInput label='1' />
                        </Grid>
                        <Grid item xs={12}>
                            <DefaultInput label='1' />
                        </Grid>
                        <Grid item xs={12}>
                            <DefaultInput label='1' />
                        </Grid>
                        <Grid item xs={12}>
                            <DefaultInput label='1' />
                        </Grid>
                        <Grid item xs={12}>
                            <DefaultInput label='1' />
                        </Grid>
                        <Grid item xs={6}>
                            <DefaultButton size='large' onClick={handleCancel} color='rose' >
                                취소
                            </DefaultButton>
                        </Grid>
                        <Grid item xs={6}>
                            <DefaultButton size='large' onClick={handleSignUp} color='success' >
                                가입
                            </DefaultButton>
                        </Grid>
                    </Grid>
                </DefaultCard>
            </Grid>

        </Grid>
    );
}

export default SignUpPage;