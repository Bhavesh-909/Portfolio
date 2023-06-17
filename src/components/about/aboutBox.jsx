import React from 'react'
import "./about.css"
import "../../index.css"
const aboutBox = () => {
  return (
      <div className="about__boxes grid">
          <div className="about__box">
              <i className="about__icon icon-fire"></i>
              <div>
                  <h3 className="about__title">1</h3>
                  <span className="about__subtitle">Project Completed</span>
              </div>
          </div>

          <div className="about__box">
              <i className="about__icon icon-cup"></i>
              <div>
                  <h3 className="about__title">20</h3>
                  <span className="about__subtitle">Coding problems solved</span>
              </div>
          </div>

          <div className="about__box">
              <i className="about__icon icon-people"></i>
              <div>
                  <h3 className="about__title">0</h3>
                  <span className="about__subtitle">Satisfied clients</span>
              </div>
          </div>

          <div className="about__box">
              <i className="about__icon icon-event"></i>
              <div>
                  <h3 className="about__title">2</h3>
                  <span className="about__subtitle">Hackthons participated</span>
              </div>
          </div>

          <div className="about__box">
              <i className="about__icon icon-badge"></i>
              <div>
                  <h3 className="about__title">1</h3>
                  <span className="about__subtitle">Hackathon Victories</span>
              </div>
          </div>

    </div>
  )
}

export default aboutBox 