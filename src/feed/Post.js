import React from "react";
import "./Post.css";
import {Avatar} from "@material-ui/core";
import {AccountCircle, ChatBubbleOutline, ExpandMore, NearMe, ThumbUp} from "@material-ui/icons";

function Post({profilePic, imgUrl, username,timestamp, desc, title}){
  return (
      <div className="post">
        <div className="post__top">

          <Avatar src={profilePic}
                  className="post__avatar" />
          <div className="post__topInfo">
            <h3>{username}</h3>
            <p>{timestamp}</p>
          </div>
          <h2>{title}</h2>
        </div>

        <div className="post__bottom">
          <p>{desc}</p>
        </div>

        <div className="post__image">
          <img src={imgUrl} alt="" />
        </div>

        <div className="post__options">
          <div className="post__option">
            <ThumbUp />
            <p>Like</p>
          </div>
          <div className="post__option">
            <ChatBubbleOutline />
            <p>Comment</p>
          </div>
          <div className="post__option">
            <NearMe />
            <p>Share</p>
          </div>
          <div className="post__option">
            <AccountCircle />
            <ExpandMore />
          </div>
        </div>
      </div>)
}

export default Post;