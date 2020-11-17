import { call, put, takeEvery } from "redux-saga/effects";
import { getProfile, Profile, modifyProfile } from "../../apis/profile";
import {
  getProfileAsync,
  GET_PROFILE,
  modifyProfileAsync,
  MODIFY_PROFILE,
} from "./actions";

export function* getProfileSaga(
  action: ReturnType<typeof getProfileAsync.request>
) {
  try {
    const profile: Profile = yield call(getProfile, "gunkim");
    yield put(getProfileAsync.success(profile));
  } catch (e) {
    yield put(getProfileAsync.failure(e));
  }
}
export function* modifyProfileSaga(
  action: ReturnType<typeof modifyProfileAsync.request>
) {
  try {
    yield call(modifyProfile, action.payload);
    yield put(modifyProfileAsync.success());
  } catch (e) {
    yield put(modifyProfileAsync.failure(e));
  }
}

export function* profileSaga() {
  yield takeEvery(GET_PROFILE, getProfileSaga);
  yield takeEvery(MODIFY_PROFILE, modifyProfileSaga);
}
