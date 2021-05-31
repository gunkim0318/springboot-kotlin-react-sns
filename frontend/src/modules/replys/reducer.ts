import { ReplysState } from ".";
import { createReducer } from "typesafe-actions";
import { ReplysAction } from "./types";
import {
  GET_REPLY_LIST,
  GET_REPLY_LIST_ERROR,
  GET_REPLY_LIST_SUCCESS,
} from "./actions";

const initialState: ReplysState = {
  loading: false,
  data: {},
  error: null,
}

const replys = createReducer<ReplysState, ReplysAction>(initialState, {
  [GET_REPLY_LIST]: (state) => ({
    ...state,
    loading: true,
    error: null,
  }),
  [GET_REPLY_LIST_SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
    error: null,
    data: {
        ...state.data,
        ...action.payload
    },
  }),
  [GET_REPLY_LIST_ERROR]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }),
});

export default replys;
