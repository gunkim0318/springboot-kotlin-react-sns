import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Grid } from '@material-ui/core';

//Material ui
import EmailIcon from '@material-ui/icons/Email';

//Components
import DefaultCard from '../../../components/Card/DefaultCard';
import DefaultInput from '../../../components/Input/DefaultInput';
import DefaultButton from '../../../components/Button/DefaultButton';

//CSS
import SubStyles from '../SubStyles';


interface Props extends RouteComponentProps<void> {

}

const EmailPwFind = (props: Props) => {
    const classes = SubStyles();

    //useState
    const [emailValue, setEmailValue] = React.useState('');
    const [otpValue, setOtpValue] = React.useState('');
    const [otpCert, setOtpCert] = React.useState(true);
    const [timer, setTimer] = React.useState(180);
    const [minute, setMinute] = React.useState(3);
    const [second, setSecond] = React.useState(0);
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
        if ('email' === e.target.name) {
            setEmailValue(e.target.value);
        } else if ('otp' === e.target.name) {
            setOtpValue(e.target.value);
        }
    }

    const handleCertOtp = () => {

    }

    const minusTime = (i: number) => {
        return new Promise((resolve,reject) => {
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
                <DefaultCard className={classes.card} title='이메일로 찾기' headerColor='default' icon={<EmailIcon fontSize='large' />}>
                    <Grid container spacing={2} className={classes.cardContent}>
                        <Grid item xs={9}>
                            <DefaultInput
                                label='이메일'
                                onChange={handleOnChange}
                                value={emailValue}
                                name='email'
                            />
                        </Grid>
                        <Grid item xs={3}>
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
                        <Grid item xs={3}>
                            <div>
                                {minute}:{0 === second ? '00' : second}
                            </div>
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
                    </Grid>
                </DefaultCard>
            </Grid>
        </Grid>
    );
}

export default EmailPwFind;