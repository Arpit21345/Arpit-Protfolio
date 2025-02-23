import React from 'react'
import Info from './Info'
import "./about.css"
import AboutImg from '../../assets/about.jpg'
import CV from '../../assets/John-Cv.pdf'
import { ReactComponent as FilesIcon } from "../../assets/files.svg"; 

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__tittle">About Me</h2>
        <span className="section__subtittle">My introduction</span>
        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img" />
            <div className="about__data">
                <Info/>
                <p className="about__description">
                Frontend developer, I create web pages with UI / UX user interface, I have years of experience and many clients are happy with the projects carried out.
                </p>
                <a download="" href={CV} className="button button--flex">
                    Download CV
                    <FilesIcon
                        style={{ fill: "var(--container-color)", filter: "invert(1)" }}
                    />
                    </a>
            </div>
        </div>
    </section>
  )
}

export default About
