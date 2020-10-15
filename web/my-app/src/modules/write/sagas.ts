import { call, put, takeEvery } from "redux-saga/effects";
import {WRITE_POSTS, writePostsAsync} from "./actions";
import {createPosts} from "../../apis/posts";

function* writePostsSaga(action: ReturnType<typeof writePostsAsync.request>){
    try{
        const response: string = yield call(createPosts, action.payload)
        yield put(writePostsAsync.success(response))
    }catch(e){
        yield put(writePostsAsync.failure(e))
    }
}

export function* writeSaga(){
    yield takeEvery(WRITE_POSTS, writePostsSaga)
}