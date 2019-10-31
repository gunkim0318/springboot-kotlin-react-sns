import React from 'react';
import { RouteComponentProps } from 'react-router';

//Material ui
import FindInPageIcon from '@material-ui/icons/FindInPage';
import { Grid } from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

//Components
import DefaultCard from '../../../components/Card/DefaultCard';

//CSS
import SubStyles from '../SubStyles';
import CustomButton from '../../../components/Button/CustomButton';
import CancelButton from '../../../components/Button/CancelButton';

interface Props extends RouteComponentProps<void> {

}

const FindPassword = (props: Props) => {
    const classes = SubStyles();

    const handleEmailPwFind = () => {
        props.history.push('EmailPwFind');
    }

    const handlePhonePwFind = () => {
        props.history.push('EmailPwFind');
    }

    return (
        <Grid container className={classes.root} justify='center' alignItems='center' >
            <Grid item container xs={12} className={classes.cardGrid} justify='center'>
                <DefaultCard className={classes.card} title='비밀번호 찾기' headerColor='default' icon={<FindInPageIcon fontSize='large' />}>
                    <Grid item container spacing={2} className={classes.cardContent}>
                        <Grid item xs={6}>
                            <CustomButton 
                            onClick={handleEmailPwFind} 
                            height={300} 
                            fontSize='large' 
                            color='rose' 
                            icon={<MailOutlineIcon fontSize='large'/>}
                            fontColor='white'
                            >
                                이메일로 찾기
                            </CustomButton>
                        </Grid>
                        <Grid item xs={6}>
                            <CustomButton 
                            onClick={handlePhonePwFind} 
                            height={300} 
                            fontSize='large' 
                            color='sea' 
                            icon={<PhoneAndroidIcon fontSize='large' />}
                            fontColor='white'
                            >
                                휴대전화로 찾기
                            </CustomButton>
                        </Grid>
                        <Grid item container xs={12}>
                            <CancelButton 
                            parentsProps={props} 
                            fontSize='medium'
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

export default FindPassword;