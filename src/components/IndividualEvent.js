import React from 'react'

export const IndividualEvent = ({individualEvent}) => {
    // console.log(individualEvent);
    return (
        <div className='Event'>
            <div class="timeline timeline-left mx-lg-10">
                <div class="timeline-breaker">{individualEvent.date}</div>
                    <div class="timeline-item mt-3 row text-center p-2">
                        <div class="col font-weight-bold text-md-right">{individualEvent.city}, {individualEvent.state}</div>
                        <div class="col-12 text-xs text-muted">{individualEvent.location}</div>
                        <button 
                            type="button" class=" w-100 btn btn-lg btn-outline-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#reserve">${individualEvent.price} Reserve</button>
                    </div>
                </div>
        </div> 
    )
}