import React, {Component} from "react";
import {Provider} from "react-redux";
import store from "../store";
import {BrowserRouter, Route} from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Post from "../feed/Post";
import  "../feed/Post.css";
import Feed from "../feed/Feed";
import Login from "../login/Login";
import MessageSender from "../feed/MessageSender";

class CreatePost extends Component{
  render() {
    return (

        <div className="app__body">
          <Sidebar/>
          <MessageSender/>
          <Sidebar/>
        </div>

    );
  }
}

export default CreatePost;