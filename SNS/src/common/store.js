import { combineReducers, createStore } from "redux";
import timeListReducer from '../timeline/state';
import friendReducer from '../friend/state';

const reducer = combineReducers({
  timeLine: timeLineReducer,
  friend: friendReducer,
});

const store = createStore(reducer);
export default store;