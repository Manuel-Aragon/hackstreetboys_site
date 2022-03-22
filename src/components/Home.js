import React from 'react'
import { Navbar } from './Navbar'
import './Home.css'

export const Home = () => {

    return (
        <div>
            <Navbar/>
            <section class="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-sm-start">
                <div class="container">
                    <div class="d-md-flex  justify-content-between row-cols-2">
                        <div>
                            <h1>Become a <span class="text-warning"> member </span></h1>
                            <p class="lead my-4">
                            Join a community dedicated to the hackstreet boys.
                            </p>
                            <button
                            class="btn btn-primary btn-lg"
                            data-bs-toggle="modal"
                            data-bs-target="#enroll"
                            >
                            Register
                            </button>
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
    )
}