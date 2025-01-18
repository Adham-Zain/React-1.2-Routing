import React from 'react'
import "./ContactMe.css"
import Form_Inputs from './Form_Inputs'

export default function ContactMe() {


    return (
        <section id='contactMe' className='position-relative'>
            <div className='container py-5'>
                <Form_Inputs/>
            </div>
        </section>
    )
}