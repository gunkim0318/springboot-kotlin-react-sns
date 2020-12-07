import { call, put, takeEvery } from "redux-saga/effects";
import { getPostsList, Posts } from "../../apis/posts";
import { getPostsListAsync } from "./actions";
import { GET_POSTS_LIST } from "./actions";
import { INCREASE_POSTS_LIKES_SUCCESS } from "../likes";
import {WRITE_POSTS_SUCCESS} from "../posts";
import { DELETE_POSTS_SUCCESS } from "../posts/actions";

function* getPostsListSaga(
  action: ReturnType<typeof getPostsListAsync.request>
) {
  try {
    const postsList: Posts[] = yield call(getPostsList);
    yield put(getPostsListAsync.success(postsList));
  } catch (e) {
    yield put(getPostsListAsync.failure(e));
  }
}
export function* postsListSaga() {
  yield takeEvery(GET_POSTS_LIST, getPostsListSaga);
  yield takeEvery(INCREASE_POSTS_LIKES_SUCCESS, getPostsListSaga);
  yield takeEvery(WRITE_POSTS_SUCCESS, getPostsListSaga);
  yield takeEvery(DELETE_POSTS_SUCCESS, getPostsListSaga);
}
