import React from 'react';
import "./about.css";
import "../../index.css"
import me from "../../assets/me-2.png"
import AboutBox from './aboutBox';

const about = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>



          <div className="about__container grid">
            <img src={me} alt='' className="about__img" />
            <div className="about__data grid">
                <div className="about__info">
                    <p className="about__description">
                        I am Bhavesh Chaudhari, an Indian full-stack web developer with a passion for DevOps. I am also skilled in UI/UX design, and I am always eager to share my knowledge and enthusiasm with others.
                    </p>
                    <a href="" className="btn">Download CV</a>
          </div>


          <div className="about__skills grid">
            
            {/* Frontend */}

            <div className="skills__data">
              <div className="skill__titles">
                <h3 className="skill__name">Frontend Development</h3>
                <span className="skill__number ">82%</span>
              </div>
              <div className="skill__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            {/* Backend */}

            <div className="skills__data">
              <div className="skill__titles">
                <h3 className="skill__name">Backend Development</h3>
                <span className="skill__number">80%</span>
              </div>
              <div className="skill__bar">
                <span className="skills__percentage backend"></span>
              </div>
            </div>

            {/* Git Github */}

            <div className="skills__data">
              <div className="skill__titles">
                <h3 className="skill__name">Git and Github </h3>
                <span className="skill__number">90%</span>
              </div>
              <div className="skill__bar">
                <span className="skills__percentage git_github"></span>
              </div>
            </div>

            {/* UI/UX Design */}
            
            <div className="skills__data">
              <div className="skill__titles">
                <h3 className="skill__name">UI/UX Design</h3>
                <span className="skill__number">82%</span>
              </div>
              <div className="skill__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            {/* DevOps */}

            <div className="skills__data">
              <div className="skill__titles">
                <h3 className="skill__name">DevOps (beginner) </h3>
                <span className="skill__number">25%</span>
              </div>
              <div className="skill__bar">
                <span className="skills__percentage devOps"></span>
              </div>
            </div>

          </div>
          
            </div>

      </div>

      <AboutBox/>
    </section>
  )
}

export default about