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
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 2,
    image: Image2,
    title: "UI/UX design",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 3,
    image: Image3,
    title: "DevOps",
    description:
      "I'm very passionate about learning DevOps, I am actively searching for internship in DevOps",
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