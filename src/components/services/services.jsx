import React from 'react';
import "./services.css";
import Image1 from "../../assets/web-development.svg";
import Image2 from "../../assets/figma.svg";
import Image3 from "../../assets/docker.svg";



const data = [
    {
    id: 1,
    image: Image1,
    title: "Web Development",
    description:
      "I offer full stack web development services, specializing in creating dynamic user interfaces, robust back-end systems, and seamless integrations for optimal web application functionality and user experience. Let's collaborate to bring your ideas to life!",
  },
  {
    id: 2,
    image: Image2,
    title: "UI/UX design",
    description:
      "I provide UI/UX design services, crafting visually appealing and intuitive user interfaces for web and mobile applications. Let's collaborate to create engaging designs that enhance user experience and drive success for your digital products.",
  },
  {
    id: 3,
    image: Image3,
    title: "DevOps",
    description:
      "I'm very interested in learning DevOps, and I'm actively looking for a DevOps internship.",
  },
];


const services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>
      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />
              
              <h3 className="services__title" >{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};


export default services  