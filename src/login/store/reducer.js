import  {fromJS} from 'immutable';

const defaultState = fromJS({
  login: false
});

export default (state = defaultState, action) =>{

  if (action.type === 'log'){
    console.log(1)
    return state.set('login', true);
  }
  return state;
}