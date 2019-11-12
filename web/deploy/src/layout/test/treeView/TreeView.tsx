import React from 'react';
import { RouteComponentProps } from 'react-router';

//HOC
import withSubRoot from '../../sub/withSubRoot';

//Material ui
import { Grid } from '@material-ui/core';
import CustomTree from '../../../components/TreeView/CustomTree';

interface Props extends RouteComponentProps<void> {
    classes: any,
}

const TreeView = (props: Props) => {

    return (
        <Grid container className={props.classes.root}>
            <CustomTree></CustomTree>
        </Grid>
    );
}

export default withSubRoot(TreeView);