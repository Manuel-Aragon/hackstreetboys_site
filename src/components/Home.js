import React from 'react'
import { Navbar } from './Navbar'
import './Home.css'
import { Footer } from './Footer'

export const Home = () => {

    return (
        <div>
            <Navbar/>
            <div>
                Home Page
            </div>
            <Footer/>
        </div>
        
    )
}