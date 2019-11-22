import React from 'react';
import TreeMap from 'ts-treemap';

import PresentationalTreeView from '../presentational/PresentationalTreeView';


interface Props {
    data: any[],
}

const ContainerTreeView = (props: Props) => {

    const [realMap, setRealMap] = React.useState(new Map());
    const [firstDepth, setFirstDepth] = React.useState([{}]);
    const [selectedKey, setSelectedKey] = React.useState('')

    React.useMemo(() => {
        if (0 !== props.data.length) {
            let treeMap = new TreeMap();

            let array = [...props.data];
            array.map((v) => {
                if (!v.upper_group_name) {
                    let setData = {
                        group_id: v.group_id,
                        group_cd: v.group_cd,
                        group_name: v.group_name,
                        group_lv: v.group_lv,
                        children: [],
                    }
                    treeMap.set(v.group_name, setData);
                } else {
                    let setUpperData = treeMap.get(v.upper_group_name);
                    let setData = {
                        group_id: v.group_id,
                        group_cd: v.group_cd,
                        group_name: v.group_name,
                        group_lv: v.group_lv,
                        upper_group_name: v.upper_group_name,
                        children: [],
                    }
                    setUpperData.children = [...setUpperData.children, v.group_name];

                    treeMap.set(v.upper_group_name, setUpperData);
                    treeMap.set(v.group_name, setData);
                }
                return [];
            })

            let copyMap = new Map();
            copyMap = treeMap;
            let depthArray = new Array();
            copyMap.forEach((v) => {
                if (1 === v.group_lv) {
                    depthArray = [...depthArray, v];
                }
            })

            setFirstDepth(depthArray);
            setRealMap(treeMap);
        }

        return () => { }
    }, [props])


    return (
        <>
            {0 === props.data.length ?
                <div></div>
                :
                <PresentationalTreeView
                    firstDepth={firstDepth}
                    realMap={realMap}
                    selectedKey={selectedKey}
                    setSelectedKey={(s: string) => setSelectedKey(s)}
                />
            }
        </>
    );
}

export default ContainerTreeView;