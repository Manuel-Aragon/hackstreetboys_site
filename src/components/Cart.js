import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import './cart.css'

export const Cart = () => {

    return (
        <div>
            <Navbar/>
                    <div class="container p-5 bg-dark d-flex">
        <div class="container mt-5 p-5 rounded cart">
          <div class="row no-gutters">
              <div class="col-md-8">
                  <div class="product-details mr-2">
                                    <h6 class="mb-0">Shopping cart</h6>
                    <div class="d-flex flex-row align-items-center"><i class="fa fa-long-arrow-left"></i><span class="ml-2">Continue Shopping</span></div>
                    <h6 class="mb-0">Shopping cart</h6>
                      <div class="d-flex justify-content-between"><span>You have 2 items in your cart</span>
                      </div>
                      <div class="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                              <div class="ml-2"><span class="font-weight-bold d-block px-2">Shirt M</span><span class="spec px-2">White</span></div>
                          </div>
                          
                          <div class="d-flex flex-row align-items-center"><span class="d-block px-5">2</span><span class="d-block ml-5 font-weight-bold">$0</span><i class="fa fa-trash-o ml-3 text-black-50"></i></div>
                          <button type="button" class="btn btn-danger">REMOVE</button>
    
                        </div>
                      <div class="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                          <div class="ml-2"><span class="font-weight-bold d-block px-2">Shirt L</span><span class="spec px-2">White</span></div>
                          </div>
                          <div class="d-flex flex-row align-items-center"><span class="d-block px-5">2</span><span class="d-block ml-5 font-weight-bold">$0</span><i class="fa fa-trash-o ml-3 text-black-50"></i></div>
                          <button type="button" class="btn btn-danger">REMOVE</button>
    
                        </div>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="payment-info">
                      <div class="row">
                      </div>
                      <div class="d-flex justify-content-between information"><span>Subtotal</span><span>$0.00</span></div>
                      <div class="d-flex justify-content-between information"><span>Shipping</span><span>$0.00</span></div>
                      <div class="d-flex justify-content-between information"><span>Total(Incl. taxes)</span><span>$0.00</span></div>
                      <button class="btn btn-primary btn-block d-flex justify-content-between mt-3" type="button "><span>Checkout</span></button>
                  </div>
              </div>
        </div>
        <Footer/>
        </div>

    )
}