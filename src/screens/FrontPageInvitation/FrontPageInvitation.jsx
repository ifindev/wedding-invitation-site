import React from 'react'
import { HeaderSeparator, Button } from '../../components'

import styles from './styles.module.css'

const FrontPageInvitation = ({ setInvitationOpen }) => {
  return (
    <div>
      <div className={styles.mobileAdditionalBg} />
      <div className={styles.container}>
        <div className={styles.separatorContainer}>
          <HeaderSeparator />
          <p className={styles.textName}>Arifin &amp; Fitria</p>
          <HeaderSeparator />
        </div>
        <p className={styles.invitationText}>
          We are getting married, and we want you <br /> to be part of our
          special day
        </p>
        <div className={styles.buttonContainer}>
          <Button
            text="Open Invitation"
            onClick={() => setInvitationOpen(true)}
          />
        </div>
      </div>
      <div className={styles.mobileAdditionalBg} />
    </div>
  )
}

export default FrontPageInvitation
