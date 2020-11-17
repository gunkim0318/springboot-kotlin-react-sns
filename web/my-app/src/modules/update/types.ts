import { ActionType } from "typesafe-actions";
import * as actions from "./actions";
import { AsyncState } from "../../lib/asyncUtils";

export type UpdateAction = ActionType<typeof actions>;
export type UpdateState = AsyncState<string, Error>;
