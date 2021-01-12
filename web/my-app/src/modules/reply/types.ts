    import {ActionType} from "typesafe-actions";
import * as actions from "../posts/actions";
import {AsyncState} from "../../lib/asyncUtils";

export type ReplyAction = ActionType<typeof actions>;
export type ReplyState = AsyncState<string, Error>;