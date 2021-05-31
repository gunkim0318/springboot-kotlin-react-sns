import {PostsAction, PostsState} from "./types";
import {asyncState} from "../../lib/asyncUtils";
import {createReducer} from "typesafe-actions";
import {DELETE_POSTS, DELETE_POSTS_ERROR, DELETE_POSTS_SUCCESS, UPDATE_POSTS, UPDATE_POSTS_ERROR, UPDATE_POSTS_SUCCESS, WRITE_POSTS, WRITE_POSTS_ERROR, WRITE_POSTS_SUCCESS} from "./actions";

const initialState: PostsState = asyncState.initial();

const posts = createReducer<PostsState, PostsAction>(initialState, {
    [WRITE_POSTS]: (state) => ({
        ...state,
        loading: true,
        error: null,
        data: null,
    }),
    [WRITE_POSTS_SUCCESS]: (state, action) => ({
        loading: false,
        error: null,
        data: action.payload
    }),
    [WRITE_POSTS_ERROR]: (state, action) => ({
        ...state,
        loading: false,
        error: action.payload,
        data: null,
    }),
    [UPDATE_POSTS]: (state) => ({
        ...state,
        loading: true,
        error: null,
        data: null,
    }),
    [UPDATE_POSTS_SUCCESS]: (state, action) => ({
        loading: false,
        error: null,
        data: action.payload
    }),
    [UPDATE_POSTS_ERROR]: (state, action) => ({
        ...state,
        loading: false,
        error: action.payload,
        data: null,
    }),
    [DELETE_POSTS]: (state) => ({
        ...state,
        loading: true,
        error: null,
        data: null,
    }),
    [DELETE_POSTS_SUCCESS]: (state, action) => ({
        loading: false,
        error: null,
        data: action.payload
    }),
    [DELETE_POSTS_ERROR]: (state, action) => ({
        ...state,
        loading: false,
        error: action.payload,
        data: null,
    }),  
});
export default posts;