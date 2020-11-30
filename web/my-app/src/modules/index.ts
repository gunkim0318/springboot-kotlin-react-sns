import {combineReducers} from "redux";
import {all} from "redux-saga/effects";
import postsList from "./postsList/reducer";
import likes from "./likes/reducer";
import profile from "./profile/reducer";
import posts from './posts/reducer';

import {postsListSaga} from "./postsList";
import {likesSaga} from "./likes";
import {profileSaga} from "./profile";
import {postsSaga} from "./posts";

const rootReducer = combineReducers({
    postsList,
    likes,
    profile,
    posts
});

export function* rootSaga() {
    yield all([postsListSaga(), likesSaga(), profileSaga(), postsSaga()]);
}

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
