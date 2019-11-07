import React from 'react';

//CSS
import MainStyles from './MainStyles';

export const WithMainRoot = (Component: any) => {
    const withMainRoot = (props: object) => {
        const classes = MainStyles();
        return (
            <Component {...props} classes={classes} />
        );
    }
    return withMainRoot;
}

export default WithMainRoot;