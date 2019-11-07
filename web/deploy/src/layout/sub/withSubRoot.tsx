import React from 'react';

//CSS
import SubStyles from './SubStyles';

export const WithSubRoot = (Component: any) => {
    const withSubRoot = (props: object) => {
        const classes = SubStyles();
        return (
            <Component {...props} classes={classes} />
        );
    }
    return withSubRoot;
}

export default WithSubRoot;
