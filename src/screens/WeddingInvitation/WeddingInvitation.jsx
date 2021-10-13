import React from 'react'
import {
  WelcomePage,
  BrideGroom,
  EventDetails,
  CountdownTimer,
  TimelineContent,
} from '../../composites'

const WeddingInvitation = () => {
  return (
    <div>
      <WelcomePage />
      <BrideGroom />
      <TimelineContent />
      <EventDetails />
      <CountdownTimer />
    </div>
  )
}

export default WeddingInvitation
