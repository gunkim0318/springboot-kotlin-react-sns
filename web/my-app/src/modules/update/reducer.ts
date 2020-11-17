import { createReducer } from "typesafe-actions";
import { UpdateAction, UpdateState } from ".";
import { asyncState } from "../../lib/asyncUtils";
import {
  UPDATE_PROFILE,
  UPDATE_PROFILE_ERROR,
  UPDATE_PROFILE_SUCCESS,
} from "./actions";

const initialState: UpdateState = asyncState.initial();

const update = createReducer<UpdateState, UpdateAction>(initialState, {
  [UPDATE_PROFILE]: (state) => ({
    ...state,
    loading: true,
    error: null,
  }),
  [UPDATE_PROFILE_SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
    error: null,
    data: action.payload,
  }),
  [UPDATE_PROFILE_ERROR]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
    data: null,
  }),
});
export default update;
