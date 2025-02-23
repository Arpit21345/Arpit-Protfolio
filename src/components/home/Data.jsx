import React from "react";
import HandIcon from "../../assets/hand.svg";
import { ReactComponent as SendIcon } from "../../assets/send.svg"; // Import SVG as a React component

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Arpit Pandey
        {/* <img src={HandIcon} alt="hand icon" /> */}
      </h1>
      <h3 className="home__subtitle">Full Stack Developer</h3>
      <p className="home__description">
        I am a Full Stack Developer specializing in the MERN stack. I build
        scalable and efficient web applications and continuously enhance my
        skills with Data structures and Algorithms.
      </p>
      <a href="#contact" className="button button--flex">
        Say Hello
        <SendIcon
          style={{ fill: "var(--container-color)", filter: "invert(1)" }}
        />
      </a>
    </div>
  );
};

export default Data;
