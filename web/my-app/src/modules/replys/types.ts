import { ActionType } from "typesafe-actions";
import { Reply } from "../../apis/reply";
import { AsyncState } from "../../lib/asyncUtils";
import * as actions from "./actions";

export type ReplysAction = ActionType<typeof actions>;
export type ReplysState = AsyncState<Reply[], Error>;
