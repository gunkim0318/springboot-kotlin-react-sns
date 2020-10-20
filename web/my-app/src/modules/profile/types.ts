import {ActionType} from "typesafe-actions";
import * as actions from "./actions";
import {AsyncState} from "../../lib/asyncUtils";

export type ProfileAction = ActionType<typeof actions>;
export type ProfileState = AsyncState<string, Error>;