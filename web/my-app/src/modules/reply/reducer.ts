import {ReplyAction, ReplyState} from "./types";
import {asyncState} from "../../lib/asyncUtils";
import {createReducer} from "typesafe-actions";
import {
    DELETE_REPLY,
    DELETE_REPLY_ERROR,
    DELETE_REPLY_SUCCESS,
    UPDATE_REPLY,
    UPDATE_REPLY_ERROR,
    UPDATE_REPLY_SUCCESS,
    WRITE_REPLY,
    WRITE_REPLY_ERROR,
    WRITE_REPLY_SUCCESS
} from "./actions";

const initialState: ReplyState = asyncState.initial();

const reply = createReducer<ReplyState, ReplyAction>(initialState, {
    [WRITE_REPLY]: (state) => ({
        ...state,
        loading: true,
        error: null
    }),
    [WRITE_REPLY_SUCCESS]: (state, action) => ({
        ...state,
        loading: false,
        error: null,
        data: action.payload
    }),
    [WRITE_REPLY_ERROR]: (state, action) => ({
        ...state,
        loading: false,
        error: action.payload
    }),
    [UPDATE_REPLY]: (state) => ({
        ...state,
        loading: true,
        error: null
    }),
    [UPDATE_REPLY_SUCCESS]: (state, action) => ({
        ...state,
        loading: false,
        error: null,
        data: action.payload
    }),
    [UPDATE_REPLY_ERROR]: (state, action) => ({
        ...state,
        loading: false,
        error: action.payload
    }),
    [DELETE_REPLY]: (state) => ({
        ...state,
        loading: true,
        error: null
    }),
    [DELETE_REPLY_SUCCESS]: (state, action) => ({
        ...state,
        loading: false,
        error: null,
        data: action.payload
    }),
    [DELETE_REPLY_ERROR]: (state, action) => ({
        ...state,
        loading: false,
        error: action.payload
    })
});

export default reply