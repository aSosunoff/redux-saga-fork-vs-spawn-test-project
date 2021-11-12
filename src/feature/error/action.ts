import { ActionPayload } from "../../app/redux/reducers/helpers";

export const ERROR = "ERROR";
export type dispatchError = typeof ERROR;
export type ActionError = ActionPayload<dispatchError>;
