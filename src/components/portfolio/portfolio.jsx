import React,{useState} from 'react';
import "./portfolio.css";
import Menu from './Menu';

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Projects</h2>
      <div className="project__filters">
        <span className="project__item">Full-Stack Development</span>
        <span className="project__item">UI/UX Design</span>
        <span className="project__item">DevOps</span>
        <span className="project__item">Academic Projects</span>
      </div>

      <div className="project__container grid">
        {items.map((elem) => {
          const { id, image, title, category } = elem;
          return (
            <div className="project__card" key={id}>
              <div className="project__thumbnail">
                <img src={image} alt='' className="project__img"/>             
                <div className="project__mask"></div>
              </div>  
                <span className="project__category">{ category}</span>
                <h3 className="project__title">{ title}</h3>
                <a href="#" className="project__button">
                  <i className="icon-link project__button-icon"></i>
                </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio