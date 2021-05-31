import { createReducer } from "typesafe-actions";
import { asyncState } from "../../lib/asyncUtils";
import {
  GET_PROFILE,
  GET_PROFILE_ERROR,
  GET_PROFILE_SUCCESS,
  MODIFY_PROFILE,
  MODIFY_PROFILE_ERROR,
  MODIFY_PROFILE_SUCCESS,
} from "./actions";
import { ProfileAction, ProfileState } from "./types";

const initialState: ProfileState = asyncState.initial();

const profile = createReducer<ProfileState, ProfileAction>(initialState, {
  [GET_PROFILE]: (state) => ({
    ...state,
    loading: true,
    error: null,
  }),
  [GET_PROFILE_SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
    error: null,
    data: action.payload,
  }),
  [GET_PROFILE_ERROR]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }),
  [MODIFY_PROFILE]: (state) => ({
    ...state,
    loading: true,
    error: null,
  }),
  [MODIFY_PROFILE_SUCCESS]: (state) => ({
    ...state,
    loading: false,
    error: null,
  }),
  [MODIFY_PROFILE_ERROR]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }),
});

export default profile;
