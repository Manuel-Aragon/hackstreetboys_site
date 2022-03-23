import React from 'react'
import { Navbar } from './Navbar'

export const Events = ( ) => {

    return (
        <div>
            <Navbar/>
            <div>
                <hr class="hr-lg mt-0 mb-2 w-10 mx-auto hr-p"></hr>
                    <h2 class="text-slab text-center text-uppercase mt-0 mb-5">
                    Events <span class="font-weight-bold"> t </span>
                    </h2>
                <div class="timeline timeline-left mx-lg-10">
                <div class="timeline-breaker">Apr 22</div>
  
                <div class="timeline-item mt-3 row text-center p-2">
                    <div class="col font-weight-bold text-md-right">Dallas, Tx</div>
                    <div class="col-12 text-xs text-muted">Arena</div>
                    <button 
                    type="button" class=" w-100 btn btn-lg btn-outline-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#reserve"
                >
                    Reserve
                </button>
                </div>
                
                </div>
                <div class="timeline timeline-left mx-lg-10 row-cols-3 row-cols-md-1 ">
                <div class="timeline-breaker">Apr 23</div>

                <div class="timeline-item mt-3 text-center p-2">
                    <div class="col font-weight-bold text-md-right">Greenville, SC, US</div>
                    <div class="col-12 text-xs text-muted">Arena</div>
                    <button 
                    type="button" class="w-100 btn btn-lg btn-outline-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#reserve"
                >
                    Reserve
                </button>
                </div>
                
                </div>
                <div
                class="modal fade"
                id="reserve"
                tabindex="-1"
                aria-labelledby="reserveLabel"
                aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="reserveLabel">Venue</h5>
            <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            ></button>
            </div>
            <div class="modal-body">
            <form>
                <div class="mb-3">
                <div class="col font-weight-bold text-md-right">Arena</div>
                <div class="col font-weight-bold text-md-right">650 N. Academy St</div>
                <div class="col font-weight-bold text-md-right">29601</div>
                <div class="col font-weight-bold text-md-right">Greenville, SC, US</div>
                <div class="col font-weight-bold text-md-right">Price: US $35.00</div>
                <div class="col-12 text-xs text-muted">Doors open 19:00</div>
                </div>
            </form>
            </div>
            <div class="modal-footer">
            <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
            >
                Cancel
            </button>
            <button type="button" class="btn btn-primary">Confirm</button>
            </div>
        </div>
        </div>
                </div>
            </div>
        </div>
    )
}