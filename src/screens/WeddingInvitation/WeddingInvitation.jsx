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
  Footer,
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
      <Footer />
    </div>
  )
}

export default WeddingInvitation
