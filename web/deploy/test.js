// import TreeMap from 'map-tree';
const TreeMap = require('treemap-js');

const test = () => {
    let s = '010-2106-5459';

    if (/[-]/g.test(s)) {
        let ss = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g.test(s);

        console.log('OK ' + ss);
    } else {
        console.log('NO');
    }
}

const test2 = () => {

    let map = new TreeMap();
    map.set('awer', { id: 'awer', lv: 1, children: ['sder', 'zcxv', 'qwe'] });
    map.set('sder', { id: 'sder', lv: 2 });
    map.set('zcxv', { id: 'zcxv', lv: 2, children: ['kldi', 'iovik'] });
    map.set('qwe', { id: 'qwe', lv: 2 });
    map.set('kldi', { id: 'kldi', lv: 3 });
    map.set('iovik', { id: 'iovik', lv: 3 });
    map.set('cpeow', { id: 'cpeow', lv: 1 });

    map.each((v, k) => {
        console.log(v);
    })
};

test2();