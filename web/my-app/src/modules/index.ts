import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import postsList from "./postsList/reducer";
import likes from "./likes/reducer";

import { postsListSaga } from "./postsList";
import { likesSaga } from "./likes";
import {writeSaga } from './write';

const rootReducer = combineReducers({
  postsList,
  likes,
});

export function* rootSaga() {
  yield all([postsListSaga(), likesSaga(), writeSaga()]);
}

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
