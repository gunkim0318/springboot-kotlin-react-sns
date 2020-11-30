import {PostsAction, PostsState} from "./types";
import {asyncState} from "../../lib/asyncUtils";
import {createReducer} from "typesafe-actions";
import {WRITE_POSTS, WRITE_POSTS_ERROR, WRITE_POSTS_SUCCESS} from "./actions";

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
});
export default posts;