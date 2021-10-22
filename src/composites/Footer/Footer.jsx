import React from 'react'
import { FaHeart, FaGithub } from 'react-icons/fa'

import './styles.css'

const Footer = () => {
  return (
    <div className="footer-container">
      <p>
        Designed &amp; Made with <FaHeart className="icon" /> <br />
        by Muhammad Arifin &amp; Fitria Andaryani
      </p>
      <p>
        See code on{' '}
        <a
          href="https://github.com/ifindev/wedding-invitation-site"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="icon" />
        </a>
      </p>
    </div>
  )
}

export default Footer
