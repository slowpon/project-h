import React, {Component} from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import  * as actionCreators from './store/actionCreators';
import {connect} from "react-redux";
import axios from 'axios';

class Feed extends Component {
  render() {
    return (
        <div className="feed">
          <StoryReel/>
          <MessageSender/>
          {
            this.props.articleList.map((item
            ) => {
              return (
                  <Post
                      profilePic="/logo.png"
                      title={item.get('title')}
                      desc={item.get('desc')}
                      timestamp={item.get('timestamp')}
                      username={item.get('username')}
                      imgUrl={item.get('imgUrl')}
                  />
              )
            })
          }
        </div>
    );
  }

  componentDidMount() {
    this.props.changeFeedData();
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    changeFeedData(){
      axios.get('/api/feed.json').then((res) => {
        const result = res.data.data;
        const action = {
          type: 'change_feed_data',
          articleList: result.articleList
        }
        dispatch(action);
      })
    }
  }
}

const mapStateToProps = (state) =>{
  return{
    // 第一个get('login')指的是login中的store中的reducer
    articleList: state.get('feed').get('articleList')
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Feed);