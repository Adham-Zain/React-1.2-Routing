import React from 'react';
import './modal.css';
import card1 from '../assets/images/card1.png';
import card2 from '../assets/images/card2.png';
import card3 from '../assets/images/card3.png';
import card4 from '../assets/images/card4.png';
import card5 from '../assets/images/card5.png';
import card6 from '../assets/images/card6.png';

export default function Modal({ index, onClose }) {
    let cards = [card1, card2, card3, card4, card5, card6];
    let card = cards[index];

    return (
        <div className='my-modal d-block position-absolute top-0 start-0 w-100'>
            <div className='container'>
                <div className='vh-100 d-flex justify-content-center align-items-center position-relative'>
                    <img src={card} alt={`Card ${index}`} className='mt-5 d-block mx-auto' />
                    <div onClick={onClose}>
                        <i className="btn fa-solid fa-xmark position-absolute" role="button"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}