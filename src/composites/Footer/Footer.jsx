import React from 'react'
import { Favorite, GitHub } from '@material-ui/icons'

import './styles.css'

const Footer = () => {
  return (
    <div className="footer-container">
      <p>
        Designed &amp; Made with <Favorite className="icon" /> <br />
        by Muhammad Arifin &amp; Fitria Andaryani
      </p>
      <p>
        See code on{' '}
        <a
          href="https://github.com/ifindev/wedding-invitation-site"
          target="_blank"
        >
          <GitHub className="icon" />
        </a>
      </p>
    </div>
  )
}

export default Footer
