import axios from 'axios';

export const get = (url, headerObj, dataObj, props) => {
    let reqData = {
        header: headerObj,
        body: dataObj
    }
    axios.get(url, {
        
    })
}

//조회 get 삽입 post 수정 put 삭제 delete