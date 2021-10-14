import React from 'react'
import {
  WelcomePage,
  BrideGroom,
  EventDetails,
  CountdownTimer,
  TimelineContent,
  HealthProtocols,
  PictureGallery,
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
      <PictureGallery />
    </div>
  )
}

export default WeddingInvitation
