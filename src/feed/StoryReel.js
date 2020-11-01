import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel(){
  return <div className="storyReel">

    <Story
        image="fishing-img.jpg"
        profileSrc="/logo.png"
        title="Fishing"
    />
    <Story
        image="vivarium-img.jpg"
        profileSrc="/logo.png"
        title="Micro-Eco"
    />
    <Story
        image="fish-img.jpg"
        profileSrc="/logo.png"
        title="Salt Water"
    />
    <Story
        image="earth-img.jpg"
        profileSrc="/logo.png"
        title="Travel"
    />
  </div>
}

export default StoryReel;