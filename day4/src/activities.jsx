import React from 'react'
import swimming from './assets/swimming.jpg'
import golfing from './assets/golfing.jpg'
import javelin from './assets/javelin.jpg'
import marathon from './assets/marathon.jpg'
import tennis from './assets/tennis.jpg' 
import JoinActivity from '../join'




export default function Activities() {
  return (
    <>
    <div className='activities'>
      <img src={swimming} alt='swimming pic'></img>
      <p> Join our swimming trainers for an exciting time in the water. We promise you wont drown.</p>
        <JoinActivity  sportsActivity='swimming'/>
    </div>

    <div className='activities'>
      <img src={golfing} alt='golf pic'></img>
      <p> Golf away with the elite of town. No filed to practice? Come to our!</p>
      <JoinActivity sportsActivity='golfing' />
    </div>

    <div className='activities'>
      <img src={javelin} alt='javelin pic'></img>
      <p> Join our javelin trainers for an exciting time. We know you like throwing stuff!</p>
      <JoinActivity  sportsActivity='javelin'/>
    </div>

    <div className='activities'>
      <img src={marathon} alt='marathon pic'></img>
      <p> Burn those calories in a marathon. Run with us!</p>
     <JoinActivity sportsActivity='marathon' />
      
    </div>

    <div className='activities'>
      <img src={tennis} alt='tennis pic'></img>
      <p> Our soccer teams need a player like you to complete the team. Training starts at 7</p>
      <br></br> <br></br> <br></br>
      <JoinActivity sportsActivity='tennis'/>
    </div>
</>
  )
}
