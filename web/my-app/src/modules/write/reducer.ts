import {WriteAction, WriteState} from "./types";
import { asyncState } from "../../lib/asyncUtils";
import {action, createReducer} from "typesafe-actions";
import {WRITE_POSTS, WRITE_POSTS_ERROR, WRITE_POSTS_SUCCESS} from "./actions";

const initialState: WriteState = asyncState.initial();

const write = createReducer<WriteState, WriteAction>(initialState, {
    [WRITE_POSTS]: (state) => ({
        ...state,
        loading: true,
        error: null
    }),
    [WRITE_POSTS_SUCCESS]: (state, action) => ({
        ...state,
        loading: false,
        error: null,
        data: action.payload
    }),
    [WRITE_POSTS_ERROR]: (state, action) => ({
        ...state,
        loading: false,
        error: action.payload,
        data: null
    })
})
export default write;