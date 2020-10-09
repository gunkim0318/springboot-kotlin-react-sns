import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import postsList from "../modules/posts/reducer";
import { postsListSaga } from "../modules/posts/sagas";

const rootReducer = combineReducers({ postsList });

export function* rootSaga() {
  yield all([postsListSaga()]);
}

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
