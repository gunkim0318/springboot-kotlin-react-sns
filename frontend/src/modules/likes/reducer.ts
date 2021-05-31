import { createReducer } from "typesafe-actions";
import { asyncState } from "../../lib/asyncUtils";
import {
  INCREASE_POSTS_LIKES,
  INCREASE_POSTS_LIKES_ERROR,
  INCREASE_POSTS_LIKES_SUCCESS,
} from "./actions";
import { LikesAction, LikesState } from "./types";

const initialState: LikesState = asyncState.initial();

const likes = createReducer<LikesState, LikesAction>(initialState, {
  [INCREASE_POSTS_LIKES]: (state) => ({
    ...state,
    loading: true,
    error: null,
  }),
  [INCREASE_POSTS_LIKES_SUCCESS]: (state) => ({
    ...state,
    loading: false,
    error: null,
  }),
  [INCREASE_POSTS_LIKES_ERROR]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }),
});

export default likes;
