import React, { useState } from 'react'
import { FrontPageInvitation, WeddingInvitation } from '../'
import { PlaySong } from '../../components'

const MainScreen = () => {
  const [isInvitationOpen, setInvitationOpen] = useState(false)

  const renderInvitation = () => (
    <>
      {isInvitationOpen ? (
        <>
          <PlaySong isInvitationOpen={isInvitationOpen} />
          <WeddingInvitation />
        </>
      ) : (
        <FrontPageInvitation setInvitationOpen={setInvitationOpen} />
      )}
    </>
  )

  return <>{renderInvitation()}</>
}

export default MainScreen
