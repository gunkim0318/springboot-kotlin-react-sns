import { call, put, takeEvery } from "redux-saga/effects";

import {MODIFY_PROFILE, modifyProfileAsync} from "./actions";

function * modifyProfileSaga(action: ReturnType<typeof modifyProfileAsync.request>){
    try{

    }catch(e){

    }
}

function* profileSaga(){
    yield takeEvery(MODIFY_PROFILE, modifyProfileSaga);
}