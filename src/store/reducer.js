import { combineReducers} from "redux-immutable";
import loginReducer from '../login/store/reducer';
import feedReducer from '../feed/store/reducer';
import postDetailReducer from '../post/store/reducer';

export default combineReducers({
  login: loginReducer,
  feed: feedReducer,
  postDetail: postDetailReducer
})