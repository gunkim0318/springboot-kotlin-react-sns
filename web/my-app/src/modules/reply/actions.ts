import {createAsyncAction} from "typesafe-actions";
import {Reply} from "../../apis/reply";
import {AxiosError} from "axios";

export const WRITE_REPLY = "WRITE_REPLY"
export const WRITE_REPLY_SUCCESS = `${WRITE_REPLY}_SUCCESS`
export const WRITE_REPLY_ERROR = `${WRITE_REPLY}_ERROR`

export const UPDATE_REPLY = "UPDATE_REPLY"
export const UPDATE_REPLY_SUCCESS = `${UPDATE_REPLY}_SUCCESS`
export const UPDATE_REPLY_ERROR = `${UPDATE_REPLY}_ERROR`

export const DELETE_REPLY = "DELETE_REPLY"
export const DELETE_REPLY_SUCCESS = `${DELETE_REPLY}_SUCCESS`
export const DELETE_REPLY_ERROR = `${DELETE_REPLY}_ERROR`

export const writeReplyAsync = createAsyncAction(
    WRITE_REPLY,
    WRITE_REPLY_SUCCESS,
    WRITE_REPLY_ERROR
)<Reply, string, AxiosError>()

export const updateReplyAsync = createAsyncAction(
    UPDATE_REPLY,
    UPDATE_REPLY_SUCCESS,
    UPDATE_REPLY_ERROR
)<Reply, string, AxiosError>()

export const deleteReplyAsync = createAsyncAction(
    DELETE_REPLY,
    DELETE_REPLY_SUCCESS,
    DELETE_REPLY_ERROR
)<number, string, AxiosError>()