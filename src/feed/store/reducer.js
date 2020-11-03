import  {fromJS} from 'immutable';

const defaultState = fromJS({
  articleList: [],
  articlePage: 0
});

export default (state = defaultState, action) =>{
  switch (action.type) {
    case 'get_feed_data':
      console.log(action.articleList);
      return state.set('articleList', fromJS(action.articleList));
    case 'add_feed_list':
      return state.merge({
        'articleList': state.get('articleList').concat(action.list),
        'articlePage': action.nextPage
      })
      // return state.set('articleList', state.get('articleList').concat(action.list));
    default:
      return state;
  }
}