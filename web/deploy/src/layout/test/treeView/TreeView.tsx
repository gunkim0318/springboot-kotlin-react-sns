import React from 'react';
import { RouteComponentProps } from 'react-router';
import withSubRoot from '../../sub/withSubRoot';
import { Grid } from '@material-ui/core';
import DefaultCard from '../../../components/Card/DefaultCard';

//Material ui
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

//Components
import ContainerTreeView from '../../../components/TreeView/container/ContainerTreeView_functional';

//DATA
const jsonData = require('../../../components/TreeView/data');

interface Props extends RouteComponentProps<void> {
    classes: any,
}

const NewProfile = (props: Props) => {

    return (
        <Grid container className={props.classes.root} justify='center'>
            <Grid item container xs={12} className={props.classes.cardGrid} justify='center'>
                <DefaultCard className={props.classes.card} title='TreeView Test' headerColor='default' icon={<AssignmentIndIcon fontSize='large' />}>
                    <Grid item container spacing={2} className={props.classes.cardContent} justify='center'>
                        <ContainerTreeView data={jsonData} />
                    </Grid>
                </DefaultCard>
            </Grid>
        </Grid>
    );
}

export default withSubRoot(NewProfile);
