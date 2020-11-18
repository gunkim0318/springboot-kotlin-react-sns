import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import postsList from "./postsList/reducer";
import likes from "./likes/reducer";
import profile from "./profile/reducer";

import { postsListSaga } from "./postsList";
import { likesSaga } from "./likes";
import { profileSaga } from "./profile";

const rootReducer = combineReducers({
  postsList,
  likes,
  profile,
});

export function* rootSaga() {
  yield all([postsListSaga(), likesSaga(), profileSaga()]);
}

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
