import { combineReducers } from "redux";
import eventReducer from "../../features/event/eventReducer";
import testReducer from "../../features/testarea/testreducer";
import { reducer as FormReducer } from "redux-form";

const rootReducer = combineReducers( {
  form : FormReducer,
  test: testReducer,
  events: eventReducer,
});

export default rootReducer;