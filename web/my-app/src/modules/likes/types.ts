import { AxiosError } from "axios";
import { ActionType } from "typesafe-actions";
import { AsyncState } from "../../lib/asyncUtils";
import * as actions from "../likes/actions";

export type LikesAction = ActionType<typeof actions>;

export type LikesState = AsyncState<string, AxiosError>;
