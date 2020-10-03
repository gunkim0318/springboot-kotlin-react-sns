import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import posts, { postsSaga } from "./posts";

console.log(posts);
const rootReducer = combineReducers({ posts });

export function* rootSaga() {
  yield all([postsSaga()]);
}

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
