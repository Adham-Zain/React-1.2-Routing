import React from 'react'
import Form_Inputs from './Form_Inputs'
import "./ContactMe.css"
import Star from '../star/Star'

export default function ContactMe() {
    return (
        <section id='contactMe' className='position-relative'>
            <div className='container py-5'>
              <h2 className='text-center mt-5 text-uppercase'>Contact With Me</h2>
              <Star/>
                <Form_Inputs/>
            </div>
        </section>
    )
}