import React from 'react'
import {
  WelcomePage,
  BrideGroom,
  EventDetails,
  CountdownTimer,
} from '../../composites'

const WeddingInvitation = () => {
  return (
    <div>
      <WelcomePage />
      <BrideGroom />
      <EventDetails />
      <CountdownTimer />
    </div>
  )
}

export default WeddingInvitation
