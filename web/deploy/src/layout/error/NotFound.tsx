import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps<void> { }

const NotFound = (props: Props) => {
    return (
        <div>
            404 NotFound Error!!!
        </div>
    );
}

export default NotFound;