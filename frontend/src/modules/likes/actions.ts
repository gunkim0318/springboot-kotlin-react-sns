import { AxiosError } from "axios";
import { createAsyncAction } from "typesafe-actions";

export const INCREASE_POSTS_LIKES = "INCREASE_POSTS_LIKES";
export const INCREASE_POSTS_LIKES_SUCCESS = "INCREASE_POSTS_LIKES_SUCCESS";
export const INCREASE_POSTS_LIKES_ERROR = "INCREASE_POSTS_LIKES_ERROR";

export const increasePostsLikesAsync = createAsyncAction(
  INCREASE_POSTS_LIKES,
  INCREASE_POSTS_LIKES_SUCCESS,
  INCREASE_POSTS_LIKES_ERROR
)<number, string, AxiosError>();
