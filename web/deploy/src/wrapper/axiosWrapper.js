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
    return new Promise((resovle, reject) => {
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
            resolve(axiosResult(result));
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

//통신을 통해 얻은 데이타 처리
const axiosResult = (result) => {
    
    return result.body;
}


