import  {fromJS} from 'immutable';

const defaultState = fromJS({
  articleList: []
});

export default (state = defaultState, action) =>{
  switch (action.type) {
    case 'change_feed_data':
      console.log(action.articleList);
      return state.set('articleList', fromJS(action.articleList));

    default:
      return state;
  }
}