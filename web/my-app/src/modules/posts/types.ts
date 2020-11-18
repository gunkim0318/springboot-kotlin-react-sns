import { AsyncState } from "../../lib/asyncUtils";
import { Posts } from "../../apis/posts";
import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type PostsAction = ActionType<typeof actions>;
export type PostsState = AsyncState<undefined, Error>;
