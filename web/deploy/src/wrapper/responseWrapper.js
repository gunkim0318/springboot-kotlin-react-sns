import jwt from 'jsonwebtoken';

import { handshake, post } from './axiosWrapper';

export const responseCode = (result, url, headerObj, dataObj, props) => {
    console.log(result)
    const code = result.header.resCode;
    const jwtKey = sessionStorage.getItem('jwtKey');

    if (0 === code) {
        //통신성공 encoded
        let decoded;
        if (jwt !== result.header.jwtKey) {
            result.header.resCode = 401;
            decoded = {};
        } else {
            if ('' === result.body.data) {
                decoded = {};
            } else {
                decoded = jwt.verify(result.body, jwtKey);
            }
        }

        const resData = {
            header: result.header,
            body: decoded,
        }

        return resData;

    } else if (1 === Math.floor(code / 100)) {
        //
        if (0 === code % 100) {
            //성공

        } else if (1 === code % 100) {
            let resData = {
                header: result.header,
                body: '',
            }

            alert(result.header.resMsg);

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
        //300 session
        if (0 === code % 100) {

        } else if (1 === code % 100) {
            let resData = {
                header: result.header,
                body: '',
            }
            return handshake()
                .then(() => {
                    return post(url, headerObj, dataObj, props)
                })
                .then(result => {
                    return responseCode(result, url, headerObj, dataObj, props);
                })
                .then(result => {
                    return result;
                })
                .catch(err => {
                    console.log(err);
                })

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
}