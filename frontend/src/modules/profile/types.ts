import { ActionType } from "typesafe-actions";
import * as actions from "./actions";
import { AsyncState } from "../../lib/asyncUtils";
import { Profile } from "../../apis/profile";

export type ProfileAction = ActionType<typeof actions>;
export type ProfileState = AsyncState<Profile, Error>;
