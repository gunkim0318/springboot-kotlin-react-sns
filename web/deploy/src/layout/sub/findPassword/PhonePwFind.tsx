import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Grid, Theme } from '@material-ui/core';

//Material ui
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

//Components
import DefaultCard from '../../../components/Card/DefaultCard';
import DefaultInput from '../../../components/Input/DefaultInput';
import DefaultButton from '../../../components/Button/DefaultButton';

//CSS
import SubStyles from '../SubStyles';
import { makeStyles } from '@material-ui/styles';
import CancelButton from '../../../components/Button/CancelButton';


interface Props extends RouteComponentProps<void> {

}

const PhonePwFind = (props: Props) => {
    const classes = SubStyles();
    const subClasses = useStyles();

    //useState
    const [phoneValue, setPhoneValue] = React.useState('');
    const [otpValue, setOtpValue] = React.useState('');
    const [otpCert, setOtpCert] = React.useState(true);
    const [timer] = React.useState(180);
    const [minute, setMinute] = React.useState(Math.floor(timer/60));
    const [second, setSecond] = React.useState(timer%60);
    const [timerSt, setTimerST] = React.useState(false);

    const handleSendOtp = () => {
        setOtpCert(!otpCert);
        setTimerST(true);
        

        // const interval = setInterval(() => {
        //     console.log('interval ' + timer);
        //     let viewTime = timer - 1;
        //     let viewMinute = Math.floor(viewTime / 60);
        //     let viewSecond = viewTime % 60;

        //     setTimer(viewTime);
        //     setMinute(viewMinute);
        //     setSecond(viewSecond);
        // }, 1000);
        
    }

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if ('phone' === e.target.name) {
            setPhoneValue(e.target.value);
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

     const startClock = async () => {
        for(let i = timer; i>0; --i) {
            await minusTime(i);
        }
    }

    //useMemo
    React.useEffect(() => {
        if(timerSt) {
            startClock();
        }
    }, [timerSt])

    return (
        <Grid container className={classes.root} justify='center' alignItems='center'>
            <Grid item container xs={12} className={classes.cardGrid} justify='center'>
                <DefaultCard className={classes.card} title='전화번호로 찾기' headerColor='default' icon={<PhoneAndroidIcon fontSize='large' />}>
                    <Grid container spacing={2} className={classes.cardContent}>
                        <Grid item xs={12} sm={9}>
                            <DefaultInput
                                label='전화번호'
                                onChange={handleOnChange}
                                value={phoneValue}
                                name='phone'
                            />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <DefaultButton
                                color='sea'
                                onClick={handleSendOtp}
                                fontColor='white'
                            >
                                인증번호 전송
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
                        <Grid item container xs={3}  className={subClasses.timer} justify='center' alignItems='center'>
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

export default PhonePwFind;