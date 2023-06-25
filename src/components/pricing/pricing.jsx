import React from 'react';
import "./pricing.css"
import Image1 from "../../assets/price-1.svg"
import Image2 from "../../assets/price-2.svg"
import Image3 from "../../assets/price-3.svg"

const pricing = () => {
  return (
    <section className="pricing container section">
      <h2 className="section__title">Pricing Plans</h2>
      <div className="pricing__container grid">
        
        <div className="pricing__item">
          <img src={Image1} alt='' className="pricing__img" />
          <h3 className="pricing__plan">Basic</h3>
          <p className="pricing__title">UI/UX designs</p>
          <p className="pricing__support"> 
            E-mail  support</p>
          <h3 className="price">
            <em>₹</em> 820/ 
            <span>Hour</span>
          </h3>
          <a href="" className="btn">Get Started</a>
        </div>

        <div className="pricing__item best" >
          <span className="badge">Recommended</span>
          <img src={Image3} alt='' className="pricing__img" />
          <h3 className="pricing__plan">Ultimate</h3>
          <p className="pricing__title">UI/UX + Full-Stack</p>
          <p className="pricing__support">Online Meet + Email Support </p>
          <h3 className="price">
            <em>₹</em> 64,255/ 
            <span>Project</span>
          </h3>
          <a href="" className="btn">Get Started</a>
        </div>

        <div className="pricing__item ">
          <img src={Image2} alt='' className="pricing__img" />
          <h3 className="pricing__plan">Premium</h3>
          <p className="pricing__title">Full-Stack Development</p>
          <p className="pricing__support">Online Meet + Email Support</p>
          <h3 className="price">
            <em>₹</em> 53,244/ 
            <span>Hour</span>
          </h3>
          <a href="" className="btn">Get Started</a>
        </div>

      </div>
    </section>
  )
}

export default pricing