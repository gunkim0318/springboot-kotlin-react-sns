import React from 'react';
import { ListItem, ListItemText, Collapse, List, makeStyles, Theme } from '@material-ui/core';

//ICON
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

interface Props {
    handleClick(): void,
    spacing: number,
    childItem(): any,
    selectKey: string,
    selectedKey: string,
    label: string,
    isChild: boolean,
    open: boolean,
}
interface StyleProps {
    spacing?: number,
}

const PresentationalTreeItem = (props: Props) => {

    let styleProps = {
        spacing: props.spacing,
    }

    const classes = useStyles(styleProps);

    const yesChild = () => {
        return (
            <>
                <ListItem button onClick={props.handleClick} className={classes.nextDepth} selected={props.selectedKey === props.selectKey}>
                    {props.open ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
                    <ListItemText primary={props.label} />
                </ListItem>
                <Collapse in={props.open}>
                    <List component='nav' >
                        {props.childItem()}
                    </List>
                </Collapse>
            </>
        );
    }

    const noChild = () => {
        return (
            <ListItem button onClick={props.handleClick} className={classes.nextDepth} selected={props.selectedKey === props.selectKey}>
                <ListItemText primary={props.label} />
            </ListItem>
        );
    }

    return (
        <React.Fragment>
            {props.isChild ? yesChild() : noChild()}
        </React.Fragment>
    );
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
    nextDepth: (props: any) => ({
        paddingLeft: theme.spacing(props.spacing),
    })
}));

export default PresentationalTreeItem;