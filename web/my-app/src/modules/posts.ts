import { takeEvery } from "redux-saga/effects";
import {
  handleAsyncActions,
  createPromiseSaga,
  reducerUtils,
} from "../lib/asyncUtils";
import * as postsAPI from "../api/posts";

const GET_POSTS_LIST = "GET_POSTS_LIST";
const GET_POSTS_LIST_SUCCESS = "GET_POSTS_LIST_SUCCESS";
const GET_POSTS_LIST_ERROR = "GET_POSTS_LIST_ERROR";

export const getPostsList = () => ({ type: GET_POSTS_LIST });

const getPostsListSaga = createPromiseSaga(
  GET_POSTS_LIST,
  postsAPI.getPostsList
);

export function* postsSaga() {
  yield takeEvery(GET_POSTS_LIST, getPostsListSaga);
}

const initialState = {
  postsList: reducerUtils.initial(),
};

export default function posts(state = initialState, action: any) {
  switch (action.type) {
    case GET_POSTS_LIST:
    case GET_POSTS_LIST_SUCCESS:
    case GET_POSTS_LIST_ERROR:
      return handleAsyncActions(
        GET_POSTS_LIST,
        "postsList",
        true
      )(state, action);
    default:
      return state;
  }
}
