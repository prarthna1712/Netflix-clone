import React, { useEffect, useRef } from 'react'
import './Titlecarts.css'
import cards_data from '../../assets/cards/Cards_data'


const Titlecarts = () => {
  return (
    <div className='title-carts'>
      <h2>Popular on Netflix</h2>
      <div className="cart-list" ref={cardsRef}>
        {cards_data.map((card, index)=>{
          return <div className='cart' key={index}>
            <img src={card.image} alt=''/>
            <p>{card.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default Titlecarts
