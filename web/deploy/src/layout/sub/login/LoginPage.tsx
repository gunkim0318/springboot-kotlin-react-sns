import React from 'react';
import { RouteComponentProps } from 'react-router-dom'
import * as axiosWrapper from '../../../wrapper/axiosWrapper';

//Material ui
import { Grid } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';

//Components
import DefaultCard from '../../../components/Card/DefaultCard';
import DefaultInput from '../../../components/Input/DefaultInput';
import DefaultButton from '../../../components/Button/DefaultButton';

//CSS
import SubStyles from '../SubStyles';


interface Props extends RouteComponentProps<void> { }

const LoginPage = (props: Props) => {
    const classes = SubStyles();

    //useState
    const [idInput, setIdInput] = React.useState('');
    const [passwordInput, setPasswordInput] = React.useState('');


    const handleFindPasswordClick = () => {
        props.history.push('FindPassword');
    }

    const handleSignUpClick = () => {
        props.history.push('SignUp');
    }

    const handleClick = () => {
        console.log('Button Click!!!');

        let headerObj = {
            page:'loginPage',
            net_kind: 'login',
            mapKey: sessionStorage.getItem('mapKey'),
        };

        let dataObj = {
            user_id: idInput,
            user_pw: passwordInput,
        };

        axiosWrapper.get('/user/login', headerObj, dataObj, props)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch (e.target.name) {
            case 'id':
                setIdInput(e.target.value);
                break;
            case 'password':
                setPasswordInput(e.target.value);
            default:

        }
    }

    return (
        <Grid container justify='center' alignItems='center' className={classes.root}>
            <Grid item container xs={12} sm={12} md={12} lg={12} justify='center' className={classes.cardGrid}>
                <DefaultCard className={classes.card} icon={<LockIcon fontSize='large' />} headerColor='default' title='로그인'>
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
                                fontColor='white'
                            >
                                로그인
                            </DefaultButton>
                        </Grid>
                        <Grid item xs={6}>
                            <DefaultButton
                                onClick={handleFindPasswordClick}
                                size='large'
                                color='sky'
                                fontColor='white'
                            >
                                비밀번호 찾기
                            </DefaultButton>
                        </Grid>
                        <Grid item xs={6}>
                            <DefaultButton
                                onClick={handleSignUpClick}
                                size='large'
                                color='success'
                                fontColor='white'
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