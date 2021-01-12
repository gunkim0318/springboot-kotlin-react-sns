import {ReplyAction, ReplyState} from "./types";
import {asyncState} from "../../lib/asyncUtils";
import {createReducer} from "typesafe-actions";
import {WRITE_REPLY} from "./actions";

const initialState: ReplyState = asyncState.initial();