import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class='bx bx-award about-icon'></i>

        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">3 Months Working</span>
      </div>
      <div className="about__box">
      <i class='bx bx-briefcase-alt about-icon'></i>

        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">10 + Projetcs</span>
      </div>
      <div className="about__box">
      <i class='bx bx-support about-icon'></i>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">online 24/7</span>
      </div>
      
    </div>
  )
}

export default Info
