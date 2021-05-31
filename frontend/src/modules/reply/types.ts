import { ActionType } from "typesafe-actions";
import { AsyncState } from "../../lib/asyncUtils";
import * as actions from "./actions";

export type ReplyAction = ActionType<typeof actions>;
export type ReplyState = AsyncState<string, Error>;