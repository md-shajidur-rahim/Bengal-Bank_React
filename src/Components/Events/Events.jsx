import React from 'react';
import './Events.css';
import event_1 from '../../assets/events-1.jpg';
import event_2 from '../../assets/events-2.jpg';
import event_3 from '../../assets/events-3.jpg';
import event_4 from '../../assets/events-4.jpg';
import white_arrow from '../../assets/white-arrow.png';

const Events = () => {
  return (
    <div className='events'>
      <div className="event">
        <img src={event_1} alt="" />
        <img src={event_2} alt="" />
        <img src={event_3} alt="" />
        <img src={event_4} alt="" />
      </div>
      <button className='btn dark-btn'>
        See more here <img src={white_arrow} alt="" />
      </button>
    </div>
  )
}

export default Events;