import React from 'react'
import Slider from '../../Custom Tools/Carousels/Slider'
import BestOfMyntra from './Best of Myntra/BestOfMyntra'
import DealsOfTheDays from './DealsOfTheDay/DealsOfTheDays'

function Home() {
  return (
    <div>
    <Slider/>
    <DealsOfTheDays/>
    <BestOfMyntra/>
    </div>
  )
}

export default Home