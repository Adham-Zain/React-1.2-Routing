import React from 'react'
import "./Contact_Info.css"
import Location from './Location'
import Social_Media from './Social_Media'
import About_Developer from './About_Developer'

export default function Contact_Info() {
    return (
        <section className='contact_Info text-white'>
            <div className='container py-5'>
                <div className='row g-5'>
                    <Location />
                    <Social_Media />
                    <About_Developer />
                </div>
            </div>
        </section>
    )
}