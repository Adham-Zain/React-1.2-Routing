import React from 'react'
import Navbar from '../001-navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'

export default function Layout() {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}