const test = () => {
    let s = 'nacexG!asdasd1';

    if (/^.*(?=^.{10,20}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^()]).*$/.test(s) && !/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g.test(s)) {
        let ss = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g.test(s);


        console.log('OK ' + ss);
    } else {
        console.log('NO');
    }
}

test();