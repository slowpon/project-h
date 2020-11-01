import  {fromJS} from 'immutable';

const defaultState = fromJS({
  login: false,
  id: 1
});

export default (state = defaultState, action) =>{

  if (action.type === 'log' ){
    console.log('log');
    return state.set('login', true);
  }
  if (action.type ==='change_logout' ){
    return state.set('login', action.value);
  }
  if (action.type ==='change_log_state' ){
    console.log(state.get('id'));
    // console.log(action.id);
    return state.set('id', action.id);
  }
  return state;
}