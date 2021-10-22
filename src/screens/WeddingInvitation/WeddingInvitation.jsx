import React from 'react'
import {
  WelcomePage,
  BrideGroom,
  EventDetails,
  CountdownTimer,
  TimelineContent,
  HealthProtocols,
  PictureGallery,
  ClosingPage,
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
      <ClosingPage />
    </div>
  )
}

export default WeddingInvitation
