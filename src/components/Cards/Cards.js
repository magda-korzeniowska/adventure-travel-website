import React from 'react';
import CardItem from '../CardItem';

import './styles.css';
import image from '../../assets/images/img-9.jpeg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={image}
              text='Explore the Hidden Waterfall'
              label='Adventure'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;