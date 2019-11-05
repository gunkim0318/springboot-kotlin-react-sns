import jwt from 'jsonwebtoken';

export const responseCode = (result) => {
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
}