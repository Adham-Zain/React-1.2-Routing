import React, { useState } from 'react';
import './portofolio.css';
import Star from '../star/Star';
import card1 from '../assets/images/card1.png';
import card2 from '../assets/images/card2.png';
import card3 from '../assets/images/card3.png';
import card4 from '../assets/images/card4.png';
import card5 from '../assets/images/card5.png';
import card6 from '../assets/images/card6.png';
import Modal from '../007-modal/Modal';

let cards = [card1, card2, card3, card4, card5, card6];

export default function Portofolio() {
  const [cardIndex, setCard] = useState(0);
  const [showModal, setShowModal] = useState(false);

  function getindex(i) {
    setCard(i);
    setShowModal(true);
  }

  function hideModal() {
    setShowModal(false);
  }

  return (
    <section className='portofolio'>
      <div className="container py-5">
        <h2 className='text-center text-uppercase fw-bold'>portfolio component</h2>
        <Star />
        <div className='row my-5'>
          {cards.map((card, index) => (
            <div
              key={index}
              className='col-md-6 col-lg-4 p-2'
              onClick={() => getindex(index)}
              role='button'
            >
              <div>
                <img src={card} alt={`Image ${index + 1}`} className='w-100' />
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && <Modal index={cardIndex} onClose={hideModal} />}
    </section>
  );
}
