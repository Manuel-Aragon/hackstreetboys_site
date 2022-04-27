import React from 'react'
import './news.css'
import { Navbar } from './Navbar'
import {Footer} from './Footer'


export const Bio = () => {

    return (
        <div>

            <Navbar/>
            <br></br>
            <div>
                <div class="px-4 py-5  text-center bg-dark">
                    <h1 class="display-5 fw-bold text-light">Members</h1>
                        <div class="col-lg-6 mx-auto">
                            <p class="lead mb-4 text-light">
                                As the world is awed by the rapid-success of the Hackstreet Boys, it would be crazy to not look deeper into the roots of the band. The band member themselves. As the bread and butter to the whole band, the band cannot be whole without each of the members and their efforts to the music you all love today. With Sana Alhamad, Ahmed Alrimawi, Manuel Aragon, and Cade Johnson shocking the world together, it is important to know them individually.
                            </p>
                        </div>
                    </div>

                <div class="b-example-divider  "></div>

                <div class="px-4 py-5  text-center bg-dark">
                    <h1 class="display-5 fw-bold text-light"> Sana Alhamad</h1>
                        <div class="col-lg-6 mx-auto">
                            <p class="lead mb-4 text-light">
                                As the Co-Lead Singer of the band, Sana Alhamad has defied all odds pushing through the cracks of society and becoming the rockstar she is today. With her being the only female artist in The Hackstreet Boys, she has faced a lot of backlash in the community being one of the biggest celebrities in the world in a boy-band. With all the talk, she used it as fuel to elevate her status and skill set to be the person she is today!
                            </p>
                            <img src={require("../img/member4.png")} alt="logo" style={{width: '300px'}}/>
                        </div>
                    </div>

                <div class="b-example-divider  "></div>

                <div class="px-4 py-5  text-center bg-dark">
                    <h1 class="display-5 fw-bold text-light"> Ahmed Alrimawi</h1>
                        <div class="col-lg-6 mx-auto">
                            <p class="lead mb-4 text-light">
                                As the Guitarist of the group, Ahmed Alrimawi is definitely the ladies man of the group. But within all of the good looks and rockstar persona, Ahmed Alrimawi has the skillset to shred on the guitar as one of the backbones of the instrumental aspect of the group. The chaotic side of his personality is beautified and translated within the flow of the music, which is why he is loved by millions around the world.
                            </p>
                            <img src={require("../img/member3.png")} alt="logo" style={{width: '300px'}}/>
                        </div>
                    </div>

                <div class="b-example-divider  "></div>

                <div class="px-4 py-5  text-center bg-dark">
                    <h1 class="display-5 fw-bold text-light">Manuel Aragon</h1>
                        <div class="col-lg-6 mx-auto">
                            <p class="lead mb-4 text-light">
                                As the other Co-Lead singer of the band, Manuel Aragon's melodic voice has changed the lives of many around the globe. With his voice being recognized internationally, it is hard to believe that he used to perform in a crowd of only ten people! Now being the face of the most famous band in the world, his humbleness and work-ethic is unmatched, separating him from the rest of the competition.
                            </p>
                            <img src={require("../img/member2.png")} alt="logo" style={{width: '300px'}}/>
                        </div>
                    </div>

                <div class="b-example-divider  "></div>

                <div class="px-4 py-5  text-center bg-dark">
                    <h1 class="display-5 fw-bold text-light"> Cade Johnson</h1>
                        <div class="col-lg-6 mx-auto">
                            <p class="lead mb-4 text-light">
                                Every member needs a bad-ass drummer, and Cade Johnson is definitely that. With the love of drumming flowing through his blood, he has been nicknamed "The Drummer of Life." Not only does the beat of his drums shake the heart of his fans, but he is the one that brought The Hackstreet Boys together. Although he is in the back on the drums, he is the foundation of the best band in the world.
                            </p>
                            <img src={require("../img/member1.png")} alt="logo" style={{width: '300px'}}/>
                        </div>
                    </div>

            </div>

            <div>
                <Footer/>
            </div>
        </div>    
    )
}