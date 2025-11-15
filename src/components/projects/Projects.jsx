import React from 'react'
import "./Projects.css"
import TexuraImg from '../../assets/Texura.png'
import UnityBoardImg from '../../assets/UnityBoard.png'

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Texura",
      description: "A modern e-commerce clothing store built with React. Features include product catalog, shopping cart, and responsive design for seamless shopping experience.",
      image: TexuraImg,
      link: "https://texura-shop.vercel.app/",
      github: "https://github.com/Arpit21345/TexuraClothing"
    },
    {
      id: 2,
      title: "Unity Board",
      description: "A collaborative project management tool with real-time updates. Built using MERN stack to help teams organize tasks and improve productivity.",
      image: UnityBoardImg,
      link: "https://unity-board-bay.vercel.app/",
      github: "https://github.com/Arpit21345/UnityBoard"
    }
  ];

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My recent work</span>

      <div className="projects__container container grid">
        {projectsData.map((project) => (
          <div className="project__card" key={project.id}>
            <div className="project__img-container">
              {project.image ? (
                <img src={project.image} alt={project.title} className="project__img" />
              ) : (
                <div className="project__img-placeholder">
                  <i className="uil uil-image"></i>
                </div>
              )}
            </div>
            <div className="project__data">
              <h3 className="project__title">{project.title}</h3>
              <p className="project__description">{project.description}</p>
              <div className="project__buttons">
                <a href={project.link} className="button button--flex project__button" target="_blank" rel="noopener noreferrer">
                  Demo <i className="uil uil-arrow-right"></i>
                </a>
                <a href={project.github} className="button button--flex project__button" target="_blank" rel="noopener noreferrer">
                  GitHub <i className="uil uil-github-alt"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
