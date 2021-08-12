import React from 'react';
import CardItem from '../CardItem';

import './styles.css';
// import image from '../../assets/images/img-1.jpeg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src = {require('../../assets/images/img-1.jpeg').default}
              text='Hike on glaciers, visit crystal ice caves, experience the Northern Lights on Iceland'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src = {require('../../assets/images/img-2.jpeg').default}
              text='Riding in a hot air balloon over Cappadocia, Turkey'
              label='Adventure'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src = {require('../../assets/images/img-3.jpeg').default}
              text='Visit Dracula&#39;s castle in Romania'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src = {require('../../assets/images/img-4.jpeg').default}
              text='Travel to the Islands of Bali in a private cruise'
              label='Luxury'
              path='/services'
            />
            <CardItem
              src = {require('../../assets/images/img-5.jpeg').default}
              text='Scuba diving with sharks in Phillipines'
              label='Adrenaline'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;