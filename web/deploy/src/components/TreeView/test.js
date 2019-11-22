// const jsonData = require('./data.js/index.js');
const jsonData = require('./data.js');

const test = () => {
    let s = {
        first: {
            name: 'asd',
            children: {
                fChild: {
                    name: 'asd1'
                },
                sChild: {
                    name: 'asd2',
                    children: {
                        fsChild: {
                            name: 'asd2-1'
                        },
                    }
                }
            }
        },
        second: {
            name: 'sdf'
        },
        third: {
            name: 'dfg',
            children: {
                fChild: {
                    name: 'dfg1'
                }
            }
        },
    }

    const c = (sd) => {
        Object.keys(sd).map((v, i) => {
            if (v.children) {
                c(v.children)
            }
        })
    }

    console.log(jsonData);
}

test();