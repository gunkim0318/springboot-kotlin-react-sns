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

    const handleSendOtp = () => {

    }

    return (
        <Grid container className={classes.root} justify='center' alignItems='center'>
            <Grid item container xs={12} className={classes.cardGrid} justify='center'>
                <DefaultCard className={classes.card} title='이메일로 찾기' headerColor='default' icon={<EmailIcon fontSize='large' />}>
                    <Grid container spacing={1} className={classes.cardContent}>
                        <Grid item xs={9}>
                            <DefaultInput 
                            label='이메일' 
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
                    </Grid>
                </DefaultCard>
            </Grid>
        </Grid>
    );
}

export default EmailPwFind;