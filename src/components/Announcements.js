import React from 'react'
import './news.css'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export const Announcements = () => {

    return (
        <div>
            <Navbar/>
            <div>
                <div class="container-fluid p-2">
                    <div class="row">
                        <div class="col-md-12 d-flex justify-content-center right-bck p-4">
                            <div class="registration-right">
                                <h2>Announcements</h2>
                                <div class="event-list">
                                    <div class="card flex-row"><img class="card-img-left img-fluid" src="" alt ="" />
                                        <div class="card-body">
                                            <h4 class="card-title h5 h4-sm"><i class="fas fa-caret-right" aria-hidden="true"></i><span>JAN 01 2022</span><i class="fas fa-caret-right" aria-hidden="true"></i><span>12:00 AM - 11:59 PM</span> </h4>
                                            <p class="card-text">Test 123!</p>
                                            <a href="url">Read more</a>
                                        </div>
                                    </div>
                                    <div class="card flex-row"><img class="card-img-left img-fluid" src="" alt = "" />
                                        <div class="card-body">
                                            <h4 class="card-title h5 h4-sm"><i class="fas fa-caret-right" aria-hidden="true"></i><span>JAN 01 2022</span><i class="fas fa-caret-right" aria-hidden="true"></i><span>12:00 AM - 11:59 PM</span> </h4>
                                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                                            <a href="url">Read more</a>
                                        </div>
                                    </div>
                                    <div class="card flex-row"><img class="card-img-left img-fluid" src="" alt = "" />
                                        <div class="card-body">
                                            <h4 class="card-title h5 h4-sm"><i class="fas fa-caret-right" aria-hidden="true"></i><span>JAN 01 2022</span><i class="fas fa-caret-right" aria-hidden="true"></i><span>12:00 AM - 11:59 PM</span> </h4>
                                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                                            <a href="url">Read more</a>
                                        </div>
                                    </div>
                                    <div class="card flex-row"><img class="card-img-left img-fluid" src="" alt = "" />
                                        <div class="card-body">
                                            <h4 class="card-title h5 h4-sm"><i class="fas fa-caret-right" aria-hidden="true"></i><span>JAN 01 2022</span><i class="fas fa-caret-right" aria-hidden="true"></i><span>12:00 AM - 11:59 PM</span> </h4>
                                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                                            <a href="url">Read more</a>
                                        </div>
                                    </div>
                                    <div class="card flex-row"><img class="card-img-left img-fluid" src="" alt = "" />
                                        <div class="card-body">
                                            <h4 class="card-title h5 h4-sm"><i class="fas fa-caret-right" aria-hidden="true"></i><span>JAN 01 2022</span><i class="fas fa-caret-right" aria-hidden="true"></i><span>12:00 AM - 11:59 PM</span> </h4>
                                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                                            <a href="url">Read more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
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