import axios from 'axios';
import jwt from 'jsonwebtoken';
import * as res from './responseWrapper';


//GET 조회
export const get = (url, headerObj, dataObj, props) => {
    return new Promise((resolve, reject) => {
        let promise = CreateReqData(headerObj, dataObj)

        promise
            .then(reqData => {
                return axios.get(url, {
                    params: {
                        reqData: reqData
                    }
                })
            })
            .then(result => {
                resolve(axiosResult(result));
            })

    })
}

//POST 삽입
export const post = (url, headerObj, dataObj, props) => {
    return new Promise((resolve, reject) => {
        let promise = CreateReqData(headerObj, dataObj)

        promise
            .then(reqData => {
                return axios.post(url, {
                    reqData: reqData
                })
            })
            .then(result => {
                console.log(result.data);
                resolve(axiosResult(result.data));
            })
            .catch(err => {
                console.log(err + ' axiosWrapper.js');
                reject(err);
            })

    })
}

//PUT 수정
export const put = (url, headerObj, dataObj, props) => {
    return new Promise((resolve, reject) => {
        let promise = CreateReqData(headerObj, dataObj)

        promise
            .then(reqData => {
                return axios.put(url, {
                    reqData: reqData
                })
            })
            .then(result => {
                resolve(axiosResult(result));
            })
    })

}

//DELETE 삭제
export const del = (url, headerObj, dataObj, props) => {
    return new Promise((resolve, reject) => {
        let promise = CreateReqData(headerObj, dataObj)

        promise
            .then(reqData => {
                return axios.delete(url, {
                    reqData: reqData
                })
            })
            .then(result => {
                resolve(axiosResult(result));
            })
    })
}


//Handshake 통신
export const handshake = () => {
    return new Promise((resolve, reject) => {
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
                if (0 === result.data.header.resCode) {
                    sessionStorage.setItem('mapKey', result.data.header.mapKey);
                    sessionStorage.setItem('jwtKey', result.data.header.jwtKey);
                    resolve();
                }
            })
            .catch(err => {
                console.log(err);
                reject(err);
            })
    })

}

//reqData set
const CreateReqData = (headerObj, dataObj) => {
    let mapKey = sessionStorage.getItem('mapKey');
    let jwtKey = sessionStorage.getItem('jwtKey');

    let promise = Promise.resolve();

    if (!mapKey || !jwtKey) {
        promise = handshake();
    }


    return promise
        .then(() => {
            headerObj.mapKey = sessionStorage.getItem('mapKey');
            let bodyObj = jwt.sign(dataObj, sessionStorage.getItem('jwtKey'));

            // let signature = crypto.createHmac('sha256', 'MySecret').update(bodyObj).digest('base64').replace('=', '');
            console.log(bodyObj);
            console.log(sessionStorage.getItem('jwtKey'))

            let reqData = {
                header: headerObj,
                body: { data: bodyObj },
            }

            return reqData;
        })
}

//통신을 통해 얻은 데이타 처리
const axiosResult = (result) => {
    return res.responseCode(result);
}



