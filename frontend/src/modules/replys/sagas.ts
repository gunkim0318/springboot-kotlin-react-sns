import { call, put, takeEvery } from "redux-saga/effects";
import {getReplyListAsync, ReplyData} from ".";
import { getReplyList, Reply } from "../../apis/reply";
import { GET_REPLY_LIST } from "./actions";

export function* getReplyListSaga(
  action: ReturnType<typeof getReplyListAsync.request>
) {
  try {
    const response: Reply[] = yield call(getReplyList, action.payload);
    const data: ReplyData = {
      [action.payload]: response
    };

    yield put(getReplyListAsync.success(data));
  } catch (e) {
    yield put(getReplyListAsync.failure(e));
  }
}
export function* replysSaga() {
  yield takeEvery(GET_REPLY_LIST, getReplyListSaga);
}
