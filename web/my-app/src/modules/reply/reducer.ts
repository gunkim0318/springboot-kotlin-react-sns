import {ReplyAction, ReplyState} from "./types";
import {asyncState} from "../../lib/asyncUtils";
import {createReducer} from "typesafe-actions";
import {WRITE_REPLY, WRITE_REPLY_ERROR, WRITE_REPLY_SUCCESS} from "./actions";

const initialState: ReplyState = asyncState.initial();

const reply = createReducer<ReplyState, ReplyAction>(initialState, {
    // [WRITE_REPLY]: (state) => ({
    //     ...state,
    //     loading: true,
    //     error: null
    // }),
    // [WRITE_REPLY_SUCCESS]: (state, action) => ({
    //     ...state,
    //     loading: false,
    //     error: null,
    //     data: action.payload
    // }),
    // [WRITE_REPLY_ERROR]: (state, action) => ({
    //     ...state,
    //     loading: false,
    //     error: action.payload
    // }),
});

export default reply