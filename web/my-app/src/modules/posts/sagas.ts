import { call, put, takeEvery } from "redux-saga/effects";
import { getPostsList, Posts } from "../../apis/posts";
import { getPostsListAsync } from "./actions";
import { GET_POSTS_LIST } from "../posts/actions";

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
}
