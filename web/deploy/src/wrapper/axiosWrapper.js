import axios from 'axios';
import { resolve } from 'url';

//조회
export const get = (url, headerObj, dataObj, props) => {
    return new Promise((resolve, reject) => {
        let reqData = {
            header: headerObj,
            body: dataObj
        }
        axios.get(url, {
            params: {
                reqData: reqData
            }
        })
            .then(result => {
                resolve(axiosResult(result));
            })
    })
}

//삽입
export const post = (url, headerObj, dataObj, props) => {
    return new Promise((resolve, reject) => {
        let reqData = {
            header: headerObj,
            body: dataObj
        }
        axios.post(url, {
            data: {
                reqData: reqData
            }
        })
            .then(result => {
                console.log(result.data);
                resolve(axiosResult(result.data));
            })
            .catch(err => {
                console.log(err + 'axiosWrapper.js');
                reject(err);
            })
    })
}

//수정
export const put = (url, headerObj, dataObj, props) => {
    return new Promise((resolve, reject) => {
        let reqData = {
            header: headerObj,
            body: dataObj
        }
        axios.put(url, {
            data: {
                reqData: reqData
            }
        })
            .then(result => {
                resolve(axiosResult(result));
            })
    })

}

//삭제
export const del = (url, headerObj, dataObj, props) => {
    return new Promise((resolve, reject) => {
        let reqData = {
            header: headerObj,
            body: dataObj
        }
        return axios.delete(url, {
            data: {
                reqData: reqData
            }
        })
            .then(result => {
                resolve(axiosResult(result));
            })
    })

}

//handshake 통신
export const handshake = () => {
    let reqData = {
        header: {
            net_kind: 'handshake'
        },
        body: {
            // secert_cli: 'qkrgusrl',
        }
    }

    axios.post('/user/handshake', {
        data: reqData,
    })
        .then(result => {
            if (200 === result.data.header.code) {
                sessionStorage.setItem('mapKey', result.data.body.mapKey);
                sessionStorage.setItem('jwtKey', result.data.body.jwtKey);
            }
        })
}

//통신을 통해 얻은 데이타 처리
const axiosResult = (result) => {

    return result.body;
}


