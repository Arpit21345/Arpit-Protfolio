import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class='bx bx-award about-icon'></i>

        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">MERN Stack</span>
      </div>
      <div className="about__box">
      <i class='bx bx-briefcase-alt about-icon'></i>

        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">Multiple Projects</span>
      </div>
      <div className="about__box">
      <i class='bx bx-code-alt about-icon'></i>
        <h3 className="about__title">Skills</h3>
        <span className="about__subtitle">DSA & C++</span>
      </div>
      
    </div>
  )
}

export default Info
