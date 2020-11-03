import axios from 'axios';

const changePostDetail = (title, content) => ({
  type: 'change_post_detail',
  title,
  content
})

export const getPostDetail = () => {
  return (dispatch) => {
    axios.get('/api/postDetail.json').then((res) =>{
      const result = res.data.data;
      dispatch(changePostDetail(result.title, result.content));
    })
  }
}