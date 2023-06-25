import React from "react";
import "./App.css";
import Home from './components/Home/home';
import About from "./components/about/about";
import Sidebar from './components/sidebar/sidebar';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Service from './components/services/services';
import Contact from './components/contact/contact';
import Blog from './components/blog/blog';
import Testimonials from './components/testimonials/testimonials';
import Pricing from './components/pricing/pricing';

function App() {
  return (
    <>
      <Sidebar/>
        <main className='main'>
          <Home/>
          <About/>
          <Service/>
          <Resume/>
          <Portfolio/>
          {/* <Pricing /> */}
          <Testimonials/>
          {/* <Blog/> */}
          <Contact/>
        </main>
    </>
  );
}

export default App;
