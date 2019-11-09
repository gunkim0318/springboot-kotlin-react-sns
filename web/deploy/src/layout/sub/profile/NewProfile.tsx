import React from 'react';
import { RouteComponentProps } from 'react-router';
import WithSubRoot from '../withSubRoot';
import { Grid } from '@material-ui/core';
import DefaultCard from '../../../components/Card/DefaultCard';

//Material ui
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

//Components
import FirstProfileInfo from '../../../components/Profile/FirstProfileInfo';
import SecondProfileInfo from '../../../components/Profile/SecondProfileInfo';
import DefaultButton from '../../../components/Button/DefaultButton';

interface Props extends RouteComponentProps<void> {
    classes: any,
}

const NewProfile = (props: Props) => {

    const [createLv, setCreateLv] = React.useState(1);

    const viewComponent = () => {
        if (1 === createLv) {
            console.log(props.location.state)
            return (
                <FirstProfileInfo
                    userName={props.location.state.userName}
                    gender={props.location.state.gender}
                    email={props.location.state.email}
                    phone={props.location.state.phone}
                />
            )
        } else if (2 === createLv) {
            return <SecondProfileInfo />
        }
    }

    const handleBefore = () => {
        setCreateLv(createLv - 1);
    }

    const handleAfter = () => {
        setCreateLv(createLv + 1);
    }

    return (
        <Grid container className={props.classes.root} justify='center'>
            <Grid item container xs={12} className={props.classes.cardGrid} justify='center'>
                <DefaultCard className={props.classes.card} title='프로필 생성' headerColor='default' icon={<AssignmentIndIcon fontSize='large' />}>
                    <Grid item container spacing={2} className={props.classes.cardContent} justify='center'>
                        {viewComponent()}
                        <Grid item container xs={12}>
                            <Grid item xs={6}>
                                <DefaultButton onClick={handleBefore} disabled={1 === createLv ? true : false} color="rose">
                                    이전
                                </DefaultButton>
                            </Grid>
                            <Grid item xs={6}>
                                <DefaultButton onClick={handleAfter} disabled={2 === createLv ? true : false} color="rose">
                                    다음
                                </DefaultButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </DefaultCard>
            </Grid>
        </Grid>
    );
}

export default WithSubRoot(NewProfile);
