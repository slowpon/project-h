import { combineReducers} from "redux-immutable";
import loginReducer from '../login/store/reducer';
import feedReducer from '../feed/store/reducer';

export default combineReducers({
  login: loginReducer,
  feed: feedReducer
})