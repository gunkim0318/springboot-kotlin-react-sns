import {
  WRITE_POSTS,
  writePostsAsync,
  updatePostsAsync,
  deletePostsAsync,
  UPDATE_POSTS,
  DELETE_POSTS,
} from "./actions";
import { createPosts, deletePosts, modifyPosts, Posts } from "../../apis/posts";
import { call, put, takeEvery } from "redux-saga/effects";
import { getPostsListAsync } from "../postsList";

function* writePostsSaga(action: ReturnType<typeof writePostsAsync.request>) {
  try {
    const responseMsg = yield call(createPosts, action.payload);
    yield put(writePostsAsync.success(responseMsg));
  } catch (e) {
    yield put(writePostsAsync.failure(e));
  }
}
function* updatePostsSaga(action: ReturnType<typeof updatePostsAsync.request>) {
  try {
    const posts: Posts = action.payload;
    const responseMsg = yield call(modifyPosts, posts);
    yield put(updatePostsAsync.success(responseMsg));
    yield put(getPostsListAsync.request());
  } catch (e) {
    yield put(updatePostsAsync.failure(e));
  }
}
function* deletePostsSaga(action: ReturnType<typeof deletePostsAsync.request>) {
  try {
    const responseMsg = yield call(deletePosts, action.payload);
    yield put(deletePostsAsync.success(responseMsg));
  } catch (e) {
    yield put(deletePostsAsync.failure(e));
  }
}

export function* postsSaga() {
  yield takeEvery(WRITE_POSTS, writePostsSaga);
  yield takeEvery(UPDATE_POSTS, updatePostsSaga);
  yield takeEvery(DELETE_POSTS, deletePostsSaga);
}
