import React from 'react';

import { List } from '@material-ui/core';
import ContainerTreeItem from '../container/ContainerTreeItem';


interface Props {
    firstDepth: any[],
    realMap: Map<any, any>,
    selectedKey: string,
    setSelectedKey(selectedKey: string): void,
}

const PresentationalTreeView = (props: Props) => {


    const treeItem = React.useCallback(() => {
        let isChild = true;
        if (1 < props.firstDepth.length) {
            return props.firstDepth.map((v: any, i: number) => {
                if (0 === v.children.length) {
                    isChild = false;
                }
                return (
                    <ContainerTreeItem
                        key={i}
                        data={props.realMap}
                        isChild={isChild}
                        label={v.group_name}
                        selectedKey={props.selectedKey}
                        setSelectedKey={(s: string) => props.setSelectedKey(s)}
                        selectKey={i + ''}
                    />
                )
            })
        }
    }, [props])

    return (
        <List component='nav'>
            {treeItem()}
        </List>
    );
}

export default PresentationalTreeView;