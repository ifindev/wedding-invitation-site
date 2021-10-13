import React, { useEffect, useState } from 'react'
import { parse } from 'qs'
import { HeaderSeparator, Button } from '../../components'

import styles from './styles.module.css'

const FrontPageInvitation = ({ setInvitationOpen }) => {
  const [invTo, setInvTo] = useState('')

  useEffect(() => {
    const invTo = parse(window.location.search.substring(1))
    setInvTo(invTo.to)
  }, [])

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
          {invTo && (
            <span>
              Dear <br />
              <span className={styles.invitationTo}>{invTo}</span>
              <br />
            </span>
          )}
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
