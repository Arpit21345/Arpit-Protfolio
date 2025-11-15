import React from 'react'
import Info from './Info'
import "./About.css"
import AboutImg from '../../assets/profile.jpg'
import CV from '../../assets/Resume-2025.pdf'
import { ReactComponent as FilesIcon } from "../../assets/files.svg"; 

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>
        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img" />
            <div className="about__data">
                <Info/>
                <p className="about__description">
                I'm a passionate Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js). I love building scalable and efficient web applications that solve real-world problems. With a strong foundation in Data Structures and Algorithms, I continuously work on enhancing my problem-solving skills and creating innovative solutions.
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
