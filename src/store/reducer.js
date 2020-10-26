import { combineReducers} from "redux-immutable";
import loginReducer from '../login/store/reducer';

export default combineReducers({
  login: loginReducer
})