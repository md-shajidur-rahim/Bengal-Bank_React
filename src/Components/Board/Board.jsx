import React, { useRef } from 'react';
import './Board.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import board_2 from '../../assets/board-2.png';
import board_3 from '../../assets/board-3.png';
import board_4 from '../../assets/board-4.png';

const Board = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if(tx < -50){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className='board'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className='slide'>
                    <div className="board-info">
                        <img src={board_2} alt="" />
                        <div>
                            <h3>Machael Scott</h3>
                            <span>Chairman, BCB</span>
                        </div>
                    </div>
                    <p>Dear Valued Customers, On behalf of the Board of Directors, I welcome you to Bengal Commercial Bank. Our commitment to you is unwavering, and we are focused on providing the highest level of service and security. Thank you for choosing us as your financial partner.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className="board-info">
                        <img src={board_3} alt="" />
                        <div>
                            <h3>Dwight Schrute</h3>
                            <span>Director, BCB</span>
                        </div>
                    </div>
                    <p>As the Director, I am excited about the future of Bengal Commercial Bank. We are constantly innovating and adapting to meet the evolving needs of our customers. Together, we will continue to grow and achieve new milestones.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className="board-info">
                        <img src={board_4} alt="" />
                        <div>
                            <h3>Jim Halpert</h3>
                            <span>Managing Director, BCB</span>
                        </div>
                    </div>
                    <p>As the Managing Director, I am excited about the future of Bengal Commercial Bank. We are constantly innovating and adapting to meet the evolving needs of our customers. Together, we will continue to grow and achieve new milestones.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Board;