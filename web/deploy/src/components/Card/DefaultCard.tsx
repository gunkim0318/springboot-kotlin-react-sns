import React from 'react';
import { Card, CardHeader, CardContent } from '@material-ui/core';



interface Props {
    className?: string
}

const DefaultCard = (props: Props) => {
    return (
        <Card className={props.className}> 
            <CardHeader />
            <CardContent>
                test
            </CardContent>
        </Card>
    );
}

export default DefaultCard;