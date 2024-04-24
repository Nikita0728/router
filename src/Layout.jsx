import React from 'react'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import About from './components/About/About'
import Home from './components/Home/Home'
import { Github } from './components/Github/Github'

export const Layout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Home/>
        <About/>
        <Github/>
        <Footer/>
    </div>
  )
}
