import React from 'react'
import {
    faGithubAlt,
    faInstagram,
    faFacebook,
    faTwitter
  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <footer>
        <FontAwesomeIcon icon={faGithubAlt} />
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={ faTwitter} />
    </footer>
  )
}

export default Footer