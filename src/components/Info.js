import React from 'react'
import Profile from '../images/img.png'

const Info = () => {
  return (
    <section className="info">
        <img src={Profile} alt="" />
        <h2>Laura Smith</h2>
        <h4>Frontend Developer</h4>
        <p>laurasmit.website</p>
        <div className="btn-group">
            <a href="#" className="btn btn-grey">Email</a>
            <a href="#" className="btn btn-blue">linekedin</a>
        </div>
    </section>
  )
}

export default Info