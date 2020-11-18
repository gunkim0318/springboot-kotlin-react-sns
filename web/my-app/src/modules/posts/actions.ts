import { createAsyncAction } from "typesafe-actions";
import { AxiosError } from "axios";

export const WRITE_POSTS = "WRITE_POSTS";
export const WRITE_POSTS_SUCCESS = "WRITE_POSTS_SUCCESS";
export const WRITE_POSTS_ERROR = "WRITE_POSTS_ERROR";

export const writePostsAsync = createAsyncAction(
  WRITE_POSTS,
  WRITE_POSTS_SUCCESS,
  WRITE_POSTS_ERROR
)<undefined, undefined, AxiosError>();
