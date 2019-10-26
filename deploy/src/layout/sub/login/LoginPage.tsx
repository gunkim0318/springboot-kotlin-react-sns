import React from 'react';
import {RouteComponentProps} from 'react-router-dom'
import SubStyles from '../SubStyles';

interface Props extends RouteComponentProps<void> {}

const LoginPage = (props: Props) => {
    const classes = SubStyles();

    return (
        <div className={classes.root}>
            Login Page!!
        </div>
    );
}

export default LoginPage;