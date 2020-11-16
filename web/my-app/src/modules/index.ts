import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import postsList from "./postsList/reducer";
import likes from "./likes/reducer";
import update from "./update/reducer";
import profile from "./profile/reducer";

import { postsListSaga } from "./postsList";
import { likesSaga } from "./likes";
import { updateSaga } from "./update";
import { profileSaga } from "./profile";

const rootReducer = combineReducers({
  postsList,
  likes,
  update,
  profile,
});

export function* rootSaga() {
  yield all([postsListSaga(), likesSaga(), updateSaga(), profileSaga()]);
}

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
