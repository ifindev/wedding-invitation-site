import { useState } from 'react'
import { FrontPageInvitation, WeddingInvitation } from './screens'
import { PlaySong } from './components'

import './app.module.css'

function App() {
  const [isInvitationOpen, setInvitationOpen] = useState(false)

  return (
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
}

export default App
