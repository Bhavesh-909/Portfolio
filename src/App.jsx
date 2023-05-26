import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Experience } from './components';

const App=()=> {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeate bg-center"> 
          <Navbar />
          <Hero/>
        </div>
        <About />
        <Tech />
        <Works/>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas/>
        </div>

      </div>  
    </BrowserRouter>
  )
}

export default App
