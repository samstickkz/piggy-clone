import React from "react";
import "./security.css";
import { PiArrowBendDownRightBold } from "react-icons/pi";
import { BsFillShieldLockFill } from "react-icons/bs";

const Security = () => {
  return (
    <div className="security_box">
      <div className="box_white">
        <BsFillShieldLockFill />
      </div>

      <div className="security_details">
        <h2>Your security is our priority</h2>
        <p className="learn_more">
          PiggyVest uses the highest level of Internet Security and it is
          secured by 256 bits SSL <br/> security encryption to ensure that your
          information is completely protected from fraud.
        </p>

        <div className="pi_arrow">
          <PiArrowBendDownRightBold />
          <small>Learn More</small>
        </div>
      </div>
    </div>
  );
};

export default Security;
