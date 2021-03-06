import { createAsyncAction } from "typesafe-actions";
import { AxiosError } from "axios";
import {ReplyData} from "./types";

export const GET_REPLY_LIST = "GET_REPLY_LIST";
export const GET_REPLY_LIST_SUCCESS = "GET_REPLY_LIST_SUCCESS";
export const GET_REPLY_LIST_ERROR = "GET_REPLY_LIST_ERROR";

export const getReplyListAsync = createAsyncAction(
  GET_REPLY_LIST,
  GET_REPLY_LIST_SUCCESS,
  GET_REPLY_LIST_ERROR
)<number, ReplyData, AxiosError>();
