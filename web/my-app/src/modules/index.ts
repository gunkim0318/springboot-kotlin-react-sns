import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import postsList from "./postsList/reducer";
import likes from "./likes/reducer";
import profile from "./profile/reducer";
import posts from "./posts/reducer";
import replys from "./replys/reducer";

import { postsListSaga } from "./postsList";
import { likesSaga } from "./likes";
import { profileSaga } from "./profile";
import { postsSaga } from "./posts";
import { replysSaga } from "./replys";

const rootReducer = combineReducers({
  postsList,
  likes,
  profile,
  posts,
  replys,
});

export function* rootSaga() {
  yield all([
    postsListSaga(),
    likesSaga(),
    profileSaga(),
    postsSaga(),
    replysSaga(),
  ]);
}

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
