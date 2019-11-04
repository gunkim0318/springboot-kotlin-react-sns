import React from 'react';
import { RouteComponentProps } from 'react-router';

//Material ui
import { Grid } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

//Components
import DefaultCard from '../../../components/Card/DefaultCard';
import DefaultInput from '../../../components/Input/DefaultInput';
import DefaultButton from '../../../components/Button/DefaultButton';
import PasswordInput from '../../../components/Input/PasswordInput';
import DefaultRadio from '../../../components/Radio/DefaultRadio';
import DefaultRadioGroup from '../../../components/Radio/DefaultRadioGroup';
import CancelButton from '../../../components/Button/CancelButton';

//CSS
import SubStyles from '../SubStyles';

//Axios 통신모듈
import * as axiosWrapper from '../../../wrapper/axiosWrapper';

//validator
import validator from 'validator';


interface Props extends RouteComponentProps<void> {

}

const SignUpPage = (props: Props) => {
    const classes = SubStyles();

    //useState
    const [selectedRadio, setSelectedRadio] = React.useState('man');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');

    const [emailError, setEmailError] = React.useState(true);
    const [passwordError, setPasswordError] = React.useState(true);
    const [nameError, setNameError] = React.useState(true);

    const [emailHelper, setEmailHelper] = React.useState('');
    const [passwordHelper, setPasswordHelper] = React.useState('');
    const [nameHelper, setNameHelper] = React.useState('');

    const handleSelectRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedRadio(e.target.value);
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if ('email' === e.target.name) {
            setEmail(e.target.value);
        } else if ('password' === e.target.name) {
            if (/^.*(?=^.{10,20}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^()]).*$/.test(e.target.value) && !/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g.test(e.target.value)) {
                setPasswordError(false);
                setPasswordHelper('');
                setPassword(e.target.value);
            } else {
                setPasswordError(true);
                setPasswordHelper('(영문 대소문자, 숫자, 특수문자 1자이상 한글 사용불가 10자~20자)');
                setPassword(e.target.value);
            }
        } else if ('name' === e.target.name) {
            setName(e.target.value);
        } else if ('phone' === e.target.name) {
            setPhone(e.target.value);
        }
    }

    const handleSignUp = () => {

        if (!validator.isEmail(email)) {

        } else if (/^.*(?=^.{10,20}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^()]).*$/.test(password) && !/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g.test(password)) {

        } else if (/[a-z0-9]|[ []{}()<>?|`~!@#$%^&*-_+=,.;:"']{2,5}/g.test(name)) {

        } else if (validator.isMobilePhone(phone)) {

        }

        console.log('signUp Click')
        let headerObj = {
            page: 'SignUpPage',
            netKind: 'signUp',
        }

        let dataObj = {
            user_id: email,
            user_pw: password,
            user_name: name,
            user_gender: selectedRadio,
        }

        axiosWrapper.post('/user/signUp', headerObj, dataObj, props)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            })

    }

    return (
        <Grid container className={classes.root} justify='center' alignItems='center' >
            <Grid item container xs={12} sm={12} md={12} lg={12} justify='center' >
                <DefaultCard className={classes.card} title='회원가입' headerColor='default' icon={<PersonAddIcon fontSize='large' />}>
                    <Grid item container spacing={2} className={classes.cardContent} >
                        <Grid item xs={12}>
                            <DefaultInput
                                label='이메일 *'
                                value={email}
                                name='email'
                                onChange={handleInput}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <PasswordInput
                                value={password}
                                onChange={handleInput}
                                name='password'
                            >
                                비밀번호 *
                            </PasswordInput>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <DefaultRadioGroup label='성별 *'>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <DefaultRadio
                                            selectedRadio={selectedRadio}
                                            value='man'
                                            label='남자'
                                            onChange={handleSelectRadio}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <DefaultRadio
                                            selectedRadio={selectedRadio}
                                            value='woman'
                                            label='여자'
                                            onChange={handleSelectRadio}
                                        />
                                    </Grid>
                                </Grid>
                            </DefaultRadioGroup>
                        </Grid>
                        {/* <Grid item xs={3}>
                            <DefaultRadio selectedRadio={selectedRadio} value='woman' label='여자' onChange={handleSelectRadio} />
                        </Grid> */}
                        <Grid item xs={12}>
                            <DefaultInput
                                label='성명 *'
                                value={name}
                                onChange={handleInput}
                                name='name'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <DefaultInput
                                label='전화번호 *'
                                value={phone}
                                onChange={handleInput}
                                name='phone'
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <CancelButton
                                parentsProps={props}
                                fontSize='medium'
                                fontColor='white'
                            >
                                취소
                            </CancelButton>
                        </Grid>
                        <Grid item xs={6}>
                            <DefaultButton
                                size='large'
                                onClick={handleSignUp}
                                color='success'
                                fontColor='white'
                            >
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