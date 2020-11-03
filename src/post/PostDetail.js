import React, {Component} from "react";
import './PostDetail.css';
import Post from "../feed/Post";
import axios from "axios";
import {connect} from "react-redux";
import  * as actionCreators from './store/actionCreators';

class PostDetail extends Component {
  render() {
    return (
        <div className="postWrapper">
          <div className="postHeader">{this.props.title}</div>
          <Post
              profilePic="/logo.png"
              timestamp="2020"
              username="Hao"
          />
          <div className="postContent"
               dangerouslySetInnerHTML={{__html:this.props.content}}>
          </div>
        </div>
    )
  }

  componentDidMount() {
    this.props.getPostDetail();
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    getPostDetail(){
      dispatch(actionCreators.getPostDetail());
    }
  }
}

const mapStateToProps = (state) =>{
  return{
    title: state.get('postDetail').get('title'),
    content: state.get('postDetail').get('content')
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostDetail);