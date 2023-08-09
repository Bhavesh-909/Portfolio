import React from 'react';
import "./contact.css";


const contact = () => {
  return (
    <section className="contact container section" id="Contact">
      <h3 className="section__title">Contact Me</h3>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about our fascinating project !</h3>

          <p className="contact__details">
            Do you hate forms ? Send me an email👋.
          </p>
        </div>

        <form className="contact__form" action="https://formspree.io/f/xoqoajbe" method='POST'>
            <div className="contact__form-group">
                
                <div className="contact__form-div">
              <input type="text"
                className="contact__form-input"
                name='username'
                  placeholder="Insert your name "/>
                </div>


                <div className="contact__form-div">
              <input
                type="email"
                name='email'
                className="contact__form-input"
                placeholder="Insert your email " />
                </div>
            </div>


                <div className="contact__form-div">
                  <input type="text" className="contact__form-input" name='message'
                  placeholder="Insert your subject "/>
                </div>

                <div className="contact__form-div  contact__form-area" >
                  <textarea
                    name="message" id=""
                    cols="30"
                    rows="10"
                    className="contact__form-input"
                    placeholder="write yout message.">
                    </textarea>
                </div>
                <button className="btn">Send Message</button>

          </form>


          </div>

    </section>
  )
}

export default contact