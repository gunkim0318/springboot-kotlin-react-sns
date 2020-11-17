import { call, put, takeEvery } from "redux-saga/effects";
import { updateProfileAsync } from ".";
import { createPosts } from "../../apis/posts";
import { UPDATE_PROFILE } from "./actions";

function* updateProfileSaga(
  action: ReturnType<typeof updateProfileAsync.request>
) {
  try {
    const response: string = yield call(createPosts, action.payload);
    yield put(updateProfileAsync.success(response));
  } catch (e) {
    yield put(updateProfileAsync.failure(e));
  }
}

export function* updateSaga() {
  yield takeEvery(UPDATE_PROFILE, updateProfileSaga);
}
