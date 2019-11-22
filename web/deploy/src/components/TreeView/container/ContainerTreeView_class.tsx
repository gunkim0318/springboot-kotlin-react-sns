import React from 'react';
import TreeMap from 'ts-treemap';

import PresentationalTreeView from '../presentational/PresentationalTreeView';


interface Props {
    data: any[],
}

interface State {
    realMap: Map<any, any>,
    firstDepth: any[],
    selectedKey: string,
}

class ContainerTreeView extends React.Component<Props, State> {

    public state = {
        realMap: new Map(),
        firstDepth: [{}],
        selectedKey: '',
    }

    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        if (0 !== this.props.data.length) {
            let treeMap = new TreeMap();

            let array = [...this.props.data];
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

            this.setState({
                ...this.state,
                firstDepth: depthArray,
                realMap: treeMap,
            })
        }
    }

    public render() {

        return (
            <>
                {0 === this.props.data.length ?
                    console.log(this.props.data)
                    :
                    <PresentationalTreeView
                        firstDepth={this.state.firstDepth}
                        realMap={this.state.realMap}
                        selectedKey={this.state.selectedKey}
                        setSelectedKey={(s: string) => this.setState({ ...this.state, selectedKey: s })}
                    />
                }
            </>
        );
    }
}

export default ContainerTreeView;