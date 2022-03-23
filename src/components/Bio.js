import React from 'react'
import './Home.css'
import { Navbar } from './Navbar'

export const Bio = () => {

    return (
        <div>
            <Navbar/>
            <div>
                <header class="d-flex justify-content-center py-4 bg-dark">
                <ul class="d-flex nav nav-pills">
                    <li class="nav-item"><a href="#" class="nav-link active text-light " aria-current="page">Member 1</a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-secondary">Member 2</a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-secondary">Member 3</a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-secondary">Member 4</a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-secondary">Member 5</a></li>
                </ul>
                </header>
            </div>
            <div>
                <h1 class="visually-hidden">Example</h1>

                <div class="px-4 py-5  text-center bg-dark">
                    <h1 class="display-5 fw-bold text-light">Member Name</h1>
                    <div class="col-lg-6 mx-auto">
                    <p class="lead mb-4 text-light">TLDR</p>
                    </div>
                </div>

                <div class="b-example-divider  "></div>

                <div class="px-4 py-5  text-center bg-dark">
                    <h1 class="display-5 fw-bold text-light">EarlyLife</h1>
                    <div class="col-lg-6 mx-auto">
                    <p class="lead mb-4 text-light">TLDR</p>
                    </div>
                </div>
                </div>
        </div>    
    )
}