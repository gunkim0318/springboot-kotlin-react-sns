import axios from 'axios';
import jwt from 'jsonwebtoken';

//GET 조회
export const get = (url, headerObj, dataObj, props) => {
    return new Promise((resolve, reject) => {
        let promise = CreateReqData();

        promise()
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
        let promise = CreateReqData();

        promise()
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
                console.log(err + 'axiosWrapper.js');
                reject(err);
            })

    })
}

//PUT 수정
export const put = (url, headerObj, dataObj, props) => {
    return new Promise((resolve, reject) => {
        let promise = CreateReqData();

        promise()
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
        let promise = CreateReqData();

        promise()
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
                if (200 === result.data.header.resCode) {
                    sessionStorage.setItem('mapKey', result.data.body.mapKey);
                    sessionStorage.setItem('jwtKey', result.data.body.jwtKey);
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

    if (mapKey || jwtKey) {
        promise = handshake();
    }

    return promise()
        .then(() => {
            headerObj.mapKey = sessionStorage.getItem('mapKey');

            let bodyObj = jwt.sign(dataObj, sessionStorage.getItem('jwtKey'));

            let reqData = {
                header: headerObj,
                body: bodyObj,
            }

            return reqData;
        })
}

//통신을 통해 얻은 데이타 처리
const axiosResult = (result) => {
    const code = result.header.resCode;
    const jwtKey = sessionStorage.getItem('jwtKey');

    if (0 === code) {
        //통신성공 encoded
        let decoded = jwt.verify(result.body.data, jwtKey);

        const resData = {
            header: result.header,
            body: decoded,
        }

        return resData;

    } else if (1 === Math.floor(code / 100)) {
        //
        if (0 === code % 100) {

        } else if (1 === code % 100) {
            let resData = {
                header: result.header,
                body: '',
            }

            return resData;

        } else if (2 === code % 100) {
            let resData = {
                header: result.header,
                body: '',
            }

            return resData;

        } else if (3 === code % 100) {
            let resData = {
                header: result.header,
                body: '',
            }

            return resData;
        }

    } else if (2 === Math.floor(code / 100)) {
        //
        if (0 === code % 100) {
            let resData = {
                header: result.header,
                body: '',
            }

            return resData;
        } else if (1 === code % 100) {
            let resData = {
                header: result.header,
                body: '',
            }

            return resData;
        } else if (2 === code % 100) {
            let resData = {
                header: result.header,
                body: '',
            }

            return resData;
        } else if (3 === code % 100) {
            let resData = {
                header: result.header,
                body: '',
            }

            return resData;
        }

    } else if (3 === Math.floor(code / 100)) {
        //
        if (0 === code % 100) {

        } else if (1 === code % 100) {
            let resData = {
                header: result.header,
                body: '',
            }

            return resData;
        } else if (2 === code % 100) {
            let resData = {
                header: result.header,
                body: '',
            }

            return resData;
        } else if (3 === code % 100) {
            let resData = {
                header: result.header,
                body: '',
            }

            return resData;
        }

    } else if (4 === Math.floor(code / 100)) {
        //
        if (0 === code % 100) {

        } else if (1 === code % 100) {
            let resData = {
                header: result.header,
                body: '',
            }

            return resData;
        } else if (2 === code % 100) {
            let resData = {
                header: result.header,
                body: '',
            }

            return resData;
        } else if (3 === code % 100) {
            let resData = {
                header: result.header,
                body: '',
            }

            return resData;
        }

    }

    return result.body;
}


