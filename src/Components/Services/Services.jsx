import React from 'react';
import './Services.css';
import service_1 from '../../assets/service-1.jpg';
import service_2 from '../../assets/service-2.jpg';
import service_3 from '../../assets/service-3.jpg';
import services_icon_1 from '../../assets/service-icon-1.png';
import services_icon_2 from '../../assets/service-icon-2.png';
import services_icon_3 from '../../assets/service-icon-3.png';

const Service = () => {
  return (
    <div className='services'> 
        <div className="service">
            <img src={service_1} alt="" />
            <div className="caption">
              <img src={services_icon_1} alt="" />
              <p>Retail Banking</p>
            </div>
        </div>
        <div className="service">
            <img src={service_2} alt="" />
            <div className="caption">
              <img src={services_icon_2} alt="" />
              <p>Corporate Banking</p>
            </div>
        </div>
        <div className="service">
            <img src={service_3} alt="" />
            <div className="caption">
              <img src={services_icon_3} alt="" />
              <p>Digital Banking</p>
            </div>
        </div>
    </div>
  )
}

export default Service;