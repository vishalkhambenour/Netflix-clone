import React, { useState } from "react";
import "./listitems.scss";
import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";

function Listitems({ index }) {
  const [ishovered, setishovred] = useState(false);
    const trailer = "https://player.vimeo.com/external/458867346.sd.mp4?s=e68088597fb8e18d64c56329b05824d8169cede6&profile_id=164&oauth2_token_id=57447761"
  return (
    <div
      className="listitem"
      style={{ left: ishovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setishovred(true)}
      onMouseLeave={() => setishovred(false)}
    >
      <img
        src="https://wegotthiscovered.com/wp-content/uploads/2022/08/hisoka-hunter-x-hunter.jpg"
        alt=""
      />
      {ishovered && (
        <>
      <video src={trailer} autoPlay loop />
      <div className="iteminfo">
        <div className="icons">
          <PlayArrow  className="icon"/>
          <Add className="icon" />
          <ThumbUpAltOutlined className="icon" />
          <ThumbDownOutlined className="icon" />
        </div>
        <div className="iteminfotop">
          <span>1 hour 40 min </span>
          <span className="limit">+18</span>
          <span> 1999</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          necessitatibus debitis libero dignissimos sequi
        </div>
        <div className="genre">Action</div>
      </div>
      </>
        )}
    </div>
  );
}

export default Listitems;
