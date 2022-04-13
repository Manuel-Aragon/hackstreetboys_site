import React from 'react'

import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Link } from 'react-router-dom'
import './Merch.css'

export const Merch = ( ) => {

    return (
        <div>
            <div>
                <Navbar/>
                <br></br>
            </div>
            <div class="row row-cols-1 row-cols-md-3 mb-3 text-center bg-dark">
            <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm">


                <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">Shirt 1</h4>
                </div>

                <div class="card-body">
                    <img class="card-img-left img-fluid" src="" />
                    <span><Link to="/Login" className="w-100 btn btn-lg btn-outline-primary">add to cart</Link></span>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">Shirt 2</h4>
                </div>
                <div class="card-body">
                <span><Link to="/Login" className="w-100 btn btn-lg btn-outline-primary">add to cart</Link></span>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">Shirt 3</h4>
                </div>
                <div class="card-body">
                <span><Link to="/Login" className="w-100 btn btn-lg btn-outline-primary">add to cart</Link></span>
                </div>
                </div>
            </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
