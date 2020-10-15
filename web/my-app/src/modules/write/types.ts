import {ActionType} from "typesafe-actions";
import * as actions from "./actions";
import {AsyncState} from "../../lib/asyncUtils";

export type WriteAction = ActionType<typeof actions>;
export type WriteState = AsyncState<string, Error>;