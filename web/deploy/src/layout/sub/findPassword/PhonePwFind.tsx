import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Grid, Theme } from '@material-ui/core';

//Material ui
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

//Components
import DefaultCard from '../../../components/Card/DefaultCard';
import DefaultInput from '../../../components/Input/DefaultInput';
import DefaultButton from '../../../components/Button/DefaultButton';

//HOC
import withSubRoot from '../withSubRoot';

//CSS
import { makeStyles } from '@material-ui/styles';
import CancelButton from '../../../components/Button/CancelButton';

//Validator
import validator from 'validator';

//Axios
import * as axiosWrapper from '../../../wrapper/axiosWrapper';


interface Props extends RouteComponentProps<void> {
    classes: any,
}

const PhonePwFind = (props: Props) => {
    const subClasses = useStyles();

    //useState
    const [phoneValue, setPhoneValue] = React.useState('');
    const [otpValue, setOtpValue] = React.useState('');
    const [otpCert, setOtpCert] = React.useState(true);
    const [otpBtText, setOtpBtText] = React.useState('인증번호 전송')
    const [timer] = React.useState(180);
    const [minute, setMinute] = React.useState(Math.floor(timer / 60));
    const [second, setSecond] = React.useState(timer % 60);
    const [timerSt, setTimerST] = React.useState(false);

    const [phoneHelper, setPhoneHelper] = React.useState('(전화번호를 입력해주세요.)');
    const [phoneError, setPhoneError] = React.useState(true);

    const handleSendOtp = () => {
        setOtpBtText('인증번호 재전송');
        let headerObj = {
            page: 'PhonePwFind',
            netKind: 'sendOtp',
        };

        let dataObj = {
            user_tel: phoneValue,
        };

        axiosWrapper.post('/user/sendOtp', headerObj, dataObj, props)
            .then(result => {
                if (0 === result.header.resCode) {
                    setOtpCert(false);
                    setTimerST(true);
                } else {

                }
            })
            .catch(err => {
                console.log(err);
            })

    }

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if ('phone' === e.target.name) {
            setPhoneValue(e.target.value);
            if ('' === e.target.value) {
                setPhoneHelper('(비밀번호를 입력해주세요.)');
                setPhoneError(true);
            } else if (validator.isMobilePhone(e.target.value)) {
                setPhoneHelper('');
                setPhoneError(false);
            } else {
                setPhoneHelper('(전화번호 형식이 맞지 않습니다.)');
                setPhoneError(true);
            }
        } else if ('otp' === e.target.name) {
            setOtpValue(e.target.value);
        }
    }

    const handleCertOtp = () => {

    }

    const minusTime = (i: number) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let viewTime = i - 1;
                let viewMinute = Math.floor(viewTime / 60);
                let viewSecond = viewTime % 60;

                setMinute(viewMinute);
                setSecond(viewSecond);
                resolve();
            }, 1000)
        })
    }

    //useMemo
    React.useEffect(() => {
        const startClock = async () => {
            for (let i = timer; i > 0; --i) {
                await minusTime(i);
            }
        }
        if (timerSt) {
            startClock();
        }

        return () => { }
    }, [timerSt, timer])

    return (
        <Grid container className={props.classes.root} justify='center' alignItems='center'>
            <Grid item container xs={12} className={props.classes.cardGrid} justify='center'>
                <DefaultCard className={props.classes.card} title='전화번호로 찾기' headerColor='default' icon={<PhoneAndroidIcon fontSize='large' />}>
                    <Grid container spacing={2} className={props.classes.cardContent}>
                        <Grid item xs={12} sm={9}>
                            <DefaultInput
                                label={'전화번호 ' + phoneHelper}
                                onChange={handleOnChange}
                                value={phoneValue}
                                name='phone'
                                error={phoneError}
                            />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <DefaultButton
                                color='sea'
                                onClick={handleSendOtp}
                                fontColor='white'
                                disabled={phoneError ? true : false}
                            >
                                {otpBtText}
                            </DefaultButton>
                        </Grid>
                        <Grid item xs={9}>
                            <DefaultInput
                                label='인증번호'
                                value={otpValue}
                                onChange={handleOnChange}
                                name='otp'
                                disabled={otpCert}
                            />
                        </Grid>
                        <Grid item container xs={3} className={subClasses.timer} justify='center' alignItems='center'>
                            {minute}:{0 === second ? '00' : second}
                        </Grid>
                        <Grid item xs={12}>
                            <DefaultButton
                                onClick={handleCertOtp}
                                color='default'
                                fontSize='mideum'
                                fontColor='white'
                                disabled={otpCert}
                            >
                                인증번호 확인
                            </DefaultButton>
                        </Grid>
                        <Grid item xs={12}>
                            <CancelButton
                                parentsProps={props}
                                fontSize='mideum'
                                fontColor='white'
                            >
                                취소
                            </CancelButton>
                        </Grid>
                    </Grid>
                </DefaultCard>
            </Grid>
        </Grid>
    );
}

const useStyles = makeStyles<Theme>((theme: Theme) => ({
    timer: {
        [theme.breakpoints.down('xs')]: {
            fontSize: 20,
        },
        [theme.breakpoints.up('xs')]: {
            fontSize: 25,
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 30,
        }
    }
}))

export default withSubRoot(PhonePwFind);