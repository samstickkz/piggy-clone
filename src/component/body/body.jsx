import React from "react";
import "./body.css";
import VideoPlayer from "./video"; // Make sure to provide the correct path for VideoPlayer.js

const Body = () => {
  return (
    <section className="body_main">
      <div>
        
        <h1>
          The Better Way to Save <br /> Invest
        </h1>
        <p className="body_p">
          PiggyVest helps over 4 million customers <br /> achieve their
          financial goals by helping <br /> them save and invest with ease.
        </p>
        <div className="body_btn">
          <button className="btn btn_primary">Get on Iphone</button>
          <button className="btn btn_primary">Get on Android</button>
        </div>
      
        </div>

      <div className="right_part">
        <VideoPlayer />
      </div>
    </section>
  );
};

export default Body;
