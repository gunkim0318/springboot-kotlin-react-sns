import React from 'react';
import { RouteComponentProps } from 'react-router';
import WithSubRoot from '../withSubRoot';
import { Grid, FormControl, FormGroup, ButtonBase, Input } from '@material-ui/core';

interface Props extends RouteComponentProps<void> {
    classes: any,
}

const NewProfile = (props: Props) => {
    return (
        <Grid container className={props.classes.root}>
            <ButtonBase>

            </ButtonBase>
        </Grid>
    );
}

export default WithSubRoot(NewProfile);

