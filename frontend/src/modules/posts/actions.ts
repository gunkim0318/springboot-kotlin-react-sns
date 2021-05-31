import { createAsyncAction } from "typesafe-actions";
import { AxiosError } from "axios";
import { Posts } from "../../apis/posts";

export const WRITE_POSTS = "WRITE_POSTS";
export const WRITE_POSTS_SUCCESS = "WRITE_POSTS_SUCCESS";
export const WRITE_POSTS_ERROR = "WRITE_POSTS_ERROR";

export const UPDATE_POSTS = "UPDATE_POSTS";
export const UPDATE_POSTS_SUCCESS = "UPDATE_POSTS_SUCCESS";
export const UPDATE_POSTS_ERROR = "UPDATE_POSTS_ERROR";

export const DELETE_POSTS = "DELETE_POSTS";
export const DELETE_POSTS_SUCCESS = "DELETE_POSTS_SUCCESS";
export const DELETE_POSTS_ERROR = "DELETE_POSTS_ERROR";

export const writePostsAsync = createAsyncAction(
  WRITE_POSTS,
  WRITE_POSTS_SUCCESS,
  WRITE_POSTS_ERROR
)<string, string, AxiosError>();

export const updatePostsAsync = createAsyncAction(
  UPDATE_POSTS,
  UPDATE_POSTS_SUCCESS,
  UPDATE_POSTS_ERROR
)<Posts, string, AxiosError>();

export const deletePostsAsync = createAsyncAction(
  DELETE_POSTS,
  DELETE_POSTS_SUCCESS,
  DELETE_POSTS_ERROR
)<number, string, AxiosError>();