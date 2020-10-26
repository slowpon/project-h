import React from "react";
import "./Widgets.css";

function Widgets() {
  return (
      <div className="widgets">
        {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
        <iframe
            src="//player.bilibili.com/player.html?aid=329867205&bvid=BV14A41177wC&cid=241597943&page=1"
                scrolling="no" border="0" frameBorder="no" framespacing="0" allowFullScreen={true}

        >

        </iframe>


      </div>
  )
}

export default Widgets;