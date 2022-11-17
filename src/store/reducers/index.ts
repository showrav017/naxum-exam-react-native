import { StateType } from "typesafe-actions";
import { combineReducers } from "redux";
import * as users from "./users";


const rootReducer = combineReducers({
  users: users.default,
});

export type RootReducer = StateType<typeof rootReducer>;

export default rootReducer;
