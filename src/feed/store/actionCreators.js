import axios from 'axios';
import {fromJS} from 'immutable';

const addFeedList = (list, nextPage) => ({
  type: 'add_feed_list',
  list: fromJS(list.articleList),
  nextPage: nextPage
})

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/feedMore.json?page=' + page).then((res) =>{
      const result = res.data.data;
      dispatch(addFeedList(result, page + 1));
      console.log(result);
    })
  }
}
