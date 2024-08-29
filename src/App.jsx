import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Services from './Components/Services/Services';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Events from './Components/Events/Events';
import Board from './Components/Board/Board';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subtitle='Our Services' title='What We Provide'/> 
        <Services/>
        <About setPlayState={setPlayState}/>
        <Title subtitle='News & Events' title='Keep Informed About Us'/>
        <Events/>
        <Title subtitle='Meet The Board' title='Message From Directors'/>
        <Board/>
        <Title subtitle='Contact Us' title='Get In Touch'/>
        <Contact/>
        <Footer/>
      </div>

      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App;