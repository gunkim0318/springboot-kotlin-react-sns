import { createAsyncAction } from "typesafe-actions";
import { AxiosError } from "axios";

export const UPDATE_PROFILE = "WRITE_PROFILE";
export const UPDATE_PROFILE_SUCCESS = "WRITE_PROFILE_SUCCESS";
export const UPDATE_PROFILE_ERROR = "WRITE_PROFILE_ERROR";

export const updateProfileAsync = createAsyncAction(
  UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR
)<string, string, AxiosError>();
