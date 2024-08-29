import React from 'react';
import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

const About = ({setPlayState}) => {
  return (
    <div className='about'>

        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>

        <div className="about-right">
            <h3>About University</h3>
            <h2>Our Mission & Achievement</h2>
            <p>Established in 1997, Bengal Commercial Bank has grown to become one of Bangladesh's leading financial institutions. Our journey has been marked by a commitment to innovation, integrity, and customer satisfaction.</p>
            <p>Our mission is to provide exceptional financial services that empower individuals and businesses to achieve their dreams. We envision a future where every customer thrives with Bengal Commercial Bank by their side.</p>
            <p>Over the years, Bengal Commercial Bank has been recognized for excellence in banking, customer service, and corporate responsibility. We are proud to be awarded the 'Best Digital Bank' in 2023.</p>
            <p>Meet our dedicated leadership team, committed to guiding Bengal Commercial Bank towards continued growth and success. Our executives bring decades of experience and a passion for excellence.</p>
        </div>
         
    </div>
  )
}

export default About;