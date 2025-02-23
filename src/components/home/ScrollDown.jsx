import React from 'react'
import { ReactComponent as ScrollIcon } from "../../assets/scroll.svg"; // Import SVG as a React component

const ScrollDown = () => {
  return (
    <div className="home__scroll">
        <a href="#about" className="home__scroll-button button--flex">
            <ScrollIcon
                style={{ fill: "var(--tittle-color)" }}
            />
            <span className="home__scroll-name">Scroll Down</span>
            <i className="uil uil-arrow-down home__scroll-arrow"></i>
        </a>
    </div>
  )
}

export default ScrollDown
