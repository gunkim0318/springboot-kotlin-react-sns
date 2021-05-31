import { ActionType } from "typesafe-actions";
import { Reply } from "../../apis/reply";
import * as actions from "./actions";

export type ReplyData = {
    [key: number]: Reply[];
}

export type ReplysAction = ActionType<typeof actions>;
export type ReplysState = {
    data: ReplyData | {};
    loading: boolean;
    error: Error | null;
};