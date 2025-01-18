import React from 'react'
import Star from '../star/Star.jsx'
import "./about.css"

export default function About() {
  return (
    <section className='about py-5'>
      <div className="container py-5 d-flex justify-content-center align-items-center flex-column">
        <h2 className='text-uppercase text-center fw-bold'>about component</h2>
        <Star />
        <div className='row py-5 row-gap-5'>
          <p className='col-lg-6'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          <p className='col-lg-6'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
      </div>
    </section>
  )
}