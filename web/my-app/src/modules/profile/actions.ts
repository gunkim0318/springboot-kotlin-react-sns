import {createAsyncAction} from "typesafe-actions";
import {AxiosError} from "axios";

export const GET_PROFILE = "GET_PROFILE";
export const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";
export const GET_PROFILE_ERROR = "GET_PROFILE_SUCCESS";

export const modifyProfileAsync = createAsyncAction(
    GET_PROFILE,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_ERROR
)<undefined, undefined, AxiosError>();