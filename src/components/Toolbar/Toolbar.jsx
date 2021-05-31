import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./Toolbar.css";

const Toolbar = () => {
  return (
    <div>
      <div className="container-toolbar">
        <div className="name">
          <h2>HACKMcGill</h2>
        </div>

        <div className="icons">
          <FontAwesomeIcon className="icon" icon={faFacebook} />
          <FontAwesomeIcon className="icon" icon={faTwitterSquare} />
          <FontAwesomeIcon className="icon" icon={faLinkedin} />
          <FontAwesomeIcon className="icon" icon={faGithub} />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
