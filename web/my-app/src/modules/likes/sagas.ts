import { call, put, takeEvery } from "redux-saga/effects";
import { increasePostsLikes } from "../../apis/posts";

import {
  increasePostsLikesAsync,
  INCREASE_POSTS_LIKES
} from "../likes/actions";

function* increasePostsLikesSaga(
  action: ReturnType<typeof increasePostsLikesAsync.request>
) {
  try {
    const responseMsg: string = yield call(increasePostsLikes, action.payload);
    yield put(increasePostsLikesAsync.success(responseMsg));
  } catch (e) {
    yield put(increasePostsLikesAsync.failure(e));
  }
}

export function* likesSaga() {
  yield takeEvery(INCREASE_POSTS_LIKES, increasePostsLikesSaga);
}