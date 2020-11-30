import { PostsListAction, PostsListState } from "./types";
import { asyncState } from "../../lib/asyncUtils";
import { createReducer } from "typesafe-actions";
import {
  GET_POSTS_LIST,
  GET_POSTS_LIST_ERROR,
  GET_POSTS_LIST_SUCCESS,
} from "./actions";

const initialState: PostsListState = asyncState.initial();

const postsList = createReducer<PostsListState, PostsListAction>(initialState, {
  [GET_POSTS_LIST]: (state) => ({
    ...state,
    loading: true,
    error: null,
    data: null,
  }),
  [GET_POSTS_LIST_SUCCESS]: (state, action) => ({
    loading: false,
    error: null,
    data: action.payload
  }),
  [GET_POSTS_LIST_ERROR]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
    data: null,
  }),
});
export default postsList;
