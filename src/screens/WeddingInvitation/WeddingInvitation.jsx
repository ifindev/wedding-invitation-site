import React from 'react'
import {
  WelcomePage,
  BrideGroom,
  EventDetails,
  CountdownTimer,
  TimelineContent,
  HealthProtocols,
} from '../../composites'

const WeddingInvitation = () => {
  return (
    <div>
      <WelcomePage />
      <BrideGroom />
      <TimelineContent />
      <EventDetails />
      <CountdownTimer />
      <HealthProtocols />
    </div>
  )
}

export default WeddingInvitation
