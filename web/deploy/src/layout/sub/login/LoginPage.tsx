import React from 'react';
import {RouteComponentProps} from 'react-router-dom'
import SubStyles from '../SubStyles';
import DefaultCard from '../../../components/Card/DefaultCard';
import { Grid, TextField } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import DefaultInput from '../../../components/Input/DefaultInput';
import DefaultButton from '../../../components/Button/DefaultButton';


interface Props extends RouteComponentProps<void> {}

const LoginPage = (props: Props) => {
    const classes = SubStyles();

    //useState
    const [ idInput, setIdInput ] = React.useState('');
    const [ passwordInput, setPasswordInput ] = React.useState('');

    const handleClick = () => {
        console.log('Button Click!!!');
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch(e.target.name) {
            case 'id' :
                setIdInput(e.target.value);
                break;
            case 'password' :
                setPasswordInput(e.target.value);
            default :

        }
    }

    return (
        <Grid container justify='center' alignItems='center' className={classes.root}>
            <Grid item xs={12} sm={12} md={12} lg={12} container justify='center' className={classes.cardGrid}>
                <DefaultCard className={classes.card} icon={<LockIcon />} headerColor='default' title='로그인'>
                    <Grid item container spacing={2} justify='center' className={classes.cardContent}>
                        <Grid item xs={12}>
                            <DefaultInput 
                            name='id'
                            label='ID'
                            onChange={handleChange}
                            value={idInput}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <DefaultInput
                            name='password'
                            label='PASSWORD'
                            onChange={handleChange}
                            value={passwordInput}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <DefaultButton 
                            onClick={handleClick}
                            size='large'
                            color='rose'
                            >
                                로그인   
                            </DefaultButton>
                        </Grid>
                        <Grid item xs={6}>
                            <DefaultButton 
                            onClick={handleClick}
                            size='large'
                            color='sky'
                            >
                                비밀번호 찾기
                            </DefaultButton>
                        </Grid>
                        <Grid item xs={6}>
                            <DefaultButton 
                            onClick={handleClick}
                            size='large'
                            color='success'
                            >
                                회원가입
                            </DefaultButton>
                        </Grid>
                    </Grid>
                </DefaultCard>
            </Grid>
        </Grid>
    );
}

export default LoginPage;