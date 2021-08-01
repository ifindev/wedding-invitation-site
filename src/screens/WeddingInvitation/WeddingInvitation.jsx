import React, { Suspense, lazy } from 'react'
import Loader from 'react-loader-spinner'

const WelcomePage = lazy(() =>
  import('../../composites/WelcomePage/WelcomePage')
)
const BrideGroom = lazy(() => import('../../composites/BrideGroom/BrideGroom'))
const EventDetails = lazy(() =>
  import('../../composites/EventDetails/EventDetails')
)

const WeddingInvitation = () => {
  const renderSpinner = () => (
    <Loader
      type="Hearts"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  )

  return (
    <div>
      <Suspense fallback={() => renderSpinner()}>
        <WelcomePage />
        <BrideGroom />
        <EventDetails />
      </Suspense>
    </div>
  )
}

export default WeddingInvitation
