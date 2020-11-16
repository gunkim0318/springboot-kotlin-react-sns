import { AxiosError } from "axios";
import { createAsyncAction } from "typesafe-actions";
import { Profile } from "../../apis/profile";

export const GET_PROFILE = "GET_PROFILE";
export const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";
export const GET_PROFILE_ERROR = "GET_PROFILE_ERROR";

export const MODIFY_PROFILE = "MODIY_PROFILE";
export const MODIFY_PROFILE_SUCCESS = "MODIFY_PROFILE_SUCCESS";
export const MODIFY_PROFILE_ERROR = "MODIFY_PROFILE_ERROR";

export const getProfileAsync = createAsyncAction(
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR
)<string, Profile, AxiosError>();

export const modifyProfileAsync = createAsyncAction(
  MODIFY_PROFILE,
  MODIFY_PROFILE_SUCCESS,
  MODIFY_PROFILE_ERROR
)<undefined, undefined, AxiosError>();
