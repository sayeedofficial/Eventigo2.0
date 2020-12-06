import { combineReducers } from "redux";
import eventReducer from "../../features/event/eventReducer";
import testReducer from "../../features/testarea/testreducer";

const rootReducer = combineReducers({
  test: testReducer,
  events: eventReducer,
});

export default rootReducer;
