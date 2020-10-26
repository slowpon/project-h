import React, {useState} from "react";
import "./MessageSender.css"
import {Avatar} from "@material-ui/core";
import {InsertEmoticon, PhotoLibrary, Videocam} from "@material-ui/icons";

function MessageSender() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // it will take an even ,so we use e.
  // Any time you have onclikck it gives you something called even
  const handleSubmit = e => {
    // it is used to prevent default even like refresh
    e.preventDefault()

    //some clever stuff
    setInput("");
    setImageUrl("");
  };

  return (
      <div className="messageSender">
        <div className="messageSender__top">
          <Avatar />
          <form>
            {/* "", {``}都可以*/}
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="messageSender__input"
                placeholder={`What's on your mind`}
            />
            <input
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="image URL (Optional)" />
            {/*hidden button*/}
            <button onClick={handleSubmit} type="submit">
              Hidden submit
            </button>
          </form>
        </div>

        <div className="messageSender__bottom">
          <div className="messageSender__option">
            <Videocam style={{color: "red"}}/>
            <h3>Live Video</h3>
          </div>

          <div className="messageSender__option">
            <PhotoLibrary style={{color: "green"}}/>
            <h3>Photo/Video</h3>
          </div>

          <div className="messageSender__option">
            <InsertEmoticon style={{color: "orange"}}/>
            <h3>Photo/Video</h3>
          </div>
        </div>
      </div>)
}

export default MessageSender;