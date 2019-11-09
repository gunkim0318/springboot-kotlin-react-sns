import React, { Fragment } from 'react';

//Material ui
import { Grid } from '@material-ui/core';
import DefaultInput from '../Input/DefaultInput';


interface Props {
    userName: string,
    gender: string,
    email: string,
    phone: string,
}

const FirstProfileInfo = (props: Props) => {

    return (
        <Fragment>
            <Grid item container xs={12}>
                <DefaultInput label='이름' value={props.userName} />
            </Grid>
            <Grid item container xs={12}>
                <DefaultInput label='성별' value={props.gender} disabled={true} />

            </Grid>
            <Grid item container xs={12}>
                <DefaultInput label='이메일' value={props.email} disabled={true} />

            </Grid>
            <Grid item container xs={12}>
                <DefaultInput label='전화번호' value={props.phone} disabled={true} />

            </Grid>
        </Fragment>
    );
}

export default FirstProfileInfo;