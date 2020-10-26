import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed(){
  return (
      <div className="feed">
        <StoryReel />
        <MessageSender />
        <Post
          profilePic="/logo.png"
          message="wow this works!"
          timestamp="This is a timestamp"
          username="chen"
          image="https://code.org/shared/images/social-media/codeorg2019_social.png"
        />
        <Post
            profilePic=""
            message="wow this works!"
            timestamp="This is a timestamp"
            username="X"
        />
      </div>
  );
}

export default Feed;