import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export const AnnouncementsPage = () => {

    return (
        <div>
            <Navbar/>
            <html>
            <div>
                <div class="container-fluid p-2 bg-dark">
                    <div class="row">
                        <div class="col-md-12 d-flex justify-content-center right-bck p-4">
                            <div class="registration-right">
                                <h2>Announcements</h2>
                                <div class="event-list">
                                    <div class="card flex-row"><img class="card-img-left img-fluid" src="" alt ="Announcement image" />
                                        <div class="card-body">
                                            <h4 class="card-title h5 h4-sm"><em class="fas fa-caret-right" aria-hidden="true"></em><span>APR 20 2022</span><em class="fas fa-caret-right" aria-hidden="true"></em><span>3:41 PM</span> </h4>
                                            <p class="card-text">The Hackstreet Boys are coming to Dallas, TX.</p>
                                            <button id="modal-btn"> Read More</button>

                                        </div>
                                    </div>
                                    <div class="card flex-row"><img class="card-img-left img-fluid" src="" alt = "Announcement image" />
                                        <div class="card-body">
                                            <h4 class="card-title h5 h4-sm"><em class="fas fa-caret-right" aria-hidden="true"></em><span>APR 03 2022</span><em class="fas fa-caret-right" aria-hidden="true"></em><span>9:35 AM</span> </h4>
                                            <p class="card-text">Ahmed Alrimawi's wife gave birth to their 7th child this morning at 8:13 AM.</p>
                                            <a href="url" target="_self">Read more</a>
                                        </div>
                                    </div>
                                    <div class="card flex-row"><img class="card-img-left img-fluid" src="" alt = "Announcement image" />
                                        <div class="card-body">
                                            <h4 class="card-title h5 h4-sm"><em class="fas fa-caret-right" aria-hidden="true"></em><span>MAR 17 2022</span><em class="fas fa-caret-right" aria-hidden="true"></i><span>10:00 PM</span> </h4>
                                            <p class="card-text">We are very excited to announce that we will be in Greenville on April 23.</p>
                                            <a href="url" target="_self">Read more</a>
                                        </div>
                                    </div>
                                    <div class="card flex-row"><img class="card-img-left img-fluid" src="" alt = "Announcement image" />
                                        <div class="card-body">
                                            <h4 class="card-title h5 h4-sm"><em class="fas fa-caret-right" aria-hidden="true"></em><span>Feb 03 2022</span><em class="fas fa-caret-right" aria-hidden="true"></i><span>12:09 AM</span> </h4>
                                            <p class="card-text">Meet and Greet officially scheduled.</p>
                                            <a href="url"target="_self">Read more</a>
                                        </div>
                                    </div>
                                    <div class="card flex-row"><img class="card-img-left img-fluid" src="" alt = "Announcement image" />
                                        <div class="card-body">
                                            <h4 class="card-title h5 h4-sm"><em class="fas fa-caret-right" aria-hidden="true"></em><span>JAN 01 2022</span><em class="fas fa-caret-right" aria-hidden="true"></i><span>11:34 AM</span> </h4>
                                            <p class="card-text">The Hackstreet Boys are officially going on tour!</p>
                                            <a href="url"target="_self">Read more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </html>

            
            <div>
                <Footer/>
            </div>
        </div>    
    )
}