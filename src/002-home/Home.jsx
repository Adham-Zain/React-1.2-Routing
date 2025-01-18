import React from 'react'
import "./home.css"
import  mainImg  from "../assets/images/mainImg.svg"
import Star from '../star/Star'

export default function Home() {
    return (
        <section className='home'>
                <div className='container py-5'>
                    <div className='content text-center'>
                            <img src={ mainImg } alt="main img" />
                            <h1 className='text-uppercase'>Start Framework</h1>
                            <Star/>
                            <p>Graphic Artist - Web Designer - Illustrator</p>
                    </div>
                </div>
        </section>
    )
}