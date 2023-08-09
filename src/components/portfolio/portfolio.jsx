import React,{useState} from 'react';
import "./portfolio.css";
import Menu from './Menu';
import { Link } from 'react-router-dom';



const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
  const updatedItems = Menu.filter((currEle) => {
    return currEle.category === categoryItem;

  });

  setItems(updatedItems);
}
  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title">Projects</h2>
      <div className="project__filters">
        <span className="project__item" onClick={()=>setItems(Menu)}>All Projects</span>
        <span className="project__item" onClick={()=>filterItem("Full-Stack")}>Full-Stack Development</span>
        <span className="project__item" onClick={()=>filterItem("UI/UX")}>UI/UX Design</span>
        <span className="project__item" onClick={()=>filterItem("DevOps")}>DevOps</span>
        <span className="project__item" onClick={()=>filterItem("Academic")}>Academic Projects</span>
      </div>

      <div className="project__container grid">
        {items.map((elem) => {
          const { id, image, title, category,src } = elem;
          return (
            <div className="project__card" key={id}>
              <div className="project__thumbnail">
                <img src={image} alt='' className="project__img"/>             
                <div className="project__mask"></div>
              </div>  
                <span className="project__category">{ category}</span>
                <h3 className="project__title">{title}</h3>
                <a href={src} className="project__button">
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