import React from 'react';
import { RouteComponentProps } from 'react-router';

//Material ui & Components
import { Grid } from '@material-ui/core';
import DefaultCard from '../../../components/Card/DefaultCard';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

//CSS
import SubStyles from '../SubStyles';
import DefaultInput from '../../../components/Input/DefaultInput';
import DefaultButton from '../../../components/Button/DefaultButton';
import PasswordInput from '../../../components/Input/PasswordInput';
import DefaultRadio from '../../../components/Radio/DefaultRadio';
import DefaultRadioGroup from '../../../components/Radio/DefaultRadioGroup';
import CancelButton from '../../../components/Button/CancelButton';

interface Props extends RouteComponentProps<void> {

}

const SignUpPage = (props: Props) => {
    const classes = SubStyles();

    //useState
    const [ selectedRadio, setSelectedRadio ] = React.useState('man');

    const handleSelectRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedRadio(e.target.value);
    }

    const handleSignUp = () => {

        

    }

    return (
        <Grid container className={classes.root} justify='center' alignItems='center' >
            <Grid item container xs={12} sm={12} md={12} lg={12} justify='center' >
                <DefaultCard className={classes.card} title='회원가입' headerColor='default' icon={<PersonAddIcon fontSize='large' />}>
                    <Grid item container spacing={2} className={classes.cardContent} >
                        <Grid item xs={12}>
                            <DefaultInput 
                            label='이메일 *' 
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <PasswordInput >
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
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <DefaultInput 
                            label='전화번호 *' 
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