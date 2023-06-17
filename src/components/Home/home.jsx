import React from 'react';
import "./home.css";
import me from "../../assets/me.png";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import "../../index.css";
import Shapes from './shapes';
import About from '../about/about';



const home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={me} alt="me" className="home__img"  />
        <h1 className="home__name">Bhavesh Chaudhari</h1>
        <span className="home__education">I'm a full-stack web developer</span>
        <HeaderSocials />
        <a href="#contact" className="btn">Let's Talk</a>
        <ScrollDown />

        <Shapes />
      </div>
    </section>
  )
}

export default home