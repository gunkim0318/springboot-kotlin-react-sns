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
import PasswordInput from '../../../components/Input/PasswordInput';


interface Props extends RouteComponentProps<void> { }

const LoginPage = (props: Props) => {
    const classes = SubStyles();

    //useState
    const [idInput, setIdInput] = React.useState('');
    const [passwordInput, setPasswordInput] = React.useState('');

    const [idHelper, setIdHelper] = React.useState('이메일을 입력해주세요.');
    const [passwordHelper, setPasswordHelper] = React.useState('비밀번호를 입력해주세요.');

    const [idError, setIdError] = React.useState(true);
    const [passwordError, setPasswordError] = React.useState(true);


    const handleFindPasswordClick = () => {
        props.history.push('FindPassword');
    }

    const handleSignUpClick = () => {
        props.history.push('SignUp');
    }

    const handleClick = () => {
        //console.log('Button Click!!!');

        let headerObj = {
            page: 'loginPage',
            netKind: 'login',
        };

        let dataObj = {
            user_id: idInput,
            user_pw: passwordInput,
        };

        axiosWrapper.get('/user/login', headerObj, dataObj, props)
            .then(result => {
                if (0 === result.header.resCode) {
                    props.history.push('/main/Home');
                } else {
                    console.log('code error');
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch (e.target.name) {
            case 'id':
                if ('' === e.target.value) {
                    setIdHelper('이메일을 입력해주세요.');
                    setIdError(true);
                    setIdInput(e.target.value);
                } else {
                    setIdHelper('');
                    setIdError(false);
                    setIdInput(e.target.value);
                }
                break;
            case 'password':
                if ('' === e.target.value) {
                    setPasswordHelper('비밀번호를 입력해주세요.');
                    setPasswordError(true);
                    setPasswordInput(e.target.value);
                } else {
                    setPasswordHelper('');
                    setPasswordError(false);
                    setPasswordInput(e.target.value);
                }
                break;
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
                                helperText={idHelper}
                                error={idError}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <PasswordInput
                                name='password'
                                onChange={handleChange}
                                value={passwordInput}
                                helperText={passwordHelper}
                                error={passwordError}
                            >
                                PASSWORD
                            </PasswordInput>
                        </Grid>
                        <Grid item xs={12}>
                            <DefaultButton
                                onClick={handleClick}
                                size='large'
                                color='rose'
                                fontColor='white'
                                disabled={idError || passwordError ? true : false}
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