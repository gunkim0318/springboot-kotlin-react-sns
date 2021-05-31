import { AxiosError } from "axios";
import { createAsyncAction } from "typesafe-actions";
import { Posts } from "../../apis/posts";

export const GET_POSTS_LIST = "GET_POSTS_LIST";
export const GET_POSTS_LIST_SUCCESS = "GET_POSTS_LIST_SUCCESS";
export const GET_POSTS_LIST_ERROR = "GET_POSTS_LIST_ERROR";

export const getPostsListAsync = createAsyncAction(
  GET_POSTS_LIST,
  GET_POSTS_LIST_SUCCESS,
  GET_POSTS_LIST_ERROR
)<undefined, Posts[], AxiosError>();