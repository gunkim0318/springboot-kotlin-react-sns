import {
    DELETE_REPLY,
    deleteReplyAsync,
    UPDATE_REPLY,
    updateReplyAsync,
    WRITE_REPLY,
    WRITE_REPLY_SUCCESS,
    writeReplyAsync
} from "./actions";
import { call, put, takeEvery } from "redux-saga/effects";
import {createReply, deleteReply, modifyReply} from "../../apis/reply";
import {getReplyListAsync} from "../replys";

function* writeReplySaga(
    action: ReturnType<typeof writeReplyAsync.request>
){
    try{
        const response = yield call(createReply, action.payload)
        yield put(writeReplyAsync.success(response))
        yield put(getReplyListAsync.request(action.payload.postsId))
    }catch(e){
        yield put(writeReplyAsync.failure(e))
    }
}
function* updateReplySaga(
    action: ReturnType<typeof updateReplyAsync.request>
){
    try{
        const response = yield call(modifyReply, action.payload)
        yield put(updateReplyAsync.success(response))
    }catch(e){
        yield put(updateReplyAsync.failure(e))
    }
}
function* deleteReplySaga(
    action: ReturnType<typeof deleteReplyAsync.request>
){
    try{
        const response = yield call(deleteReply, action.payload)
        yield put(deleteReplyAsync.success(response))
    }catch(e){
        yield put(deleteReplyAsync.failure(e))
    }
}
export function* replySaga(){
    yield takeEvery(WRITE_REPLY, writeReplySaga)
    yield takeEvery(UPDATE_REPLY, updateReplySaga)
    yield takeEvery(DELETE_REPLY, deleteReplySaga)
}