import React from 'react'

export const IndividualEvent = ({individualEvent, reserve}) => {
    const handlereserve=()=>{
        reserve(individualEvent);
    }   
    return (
        <div className='Event'>
            <div className="timeline timeline-left mx-lg-10">
                <div className="timeline-breaker">{individualEvent.date}</div>
                    <div className="timeline-item mt-3 row text-center p-2">
                        <div className="col font-weight-bold text-md-right">{individualEvent.city}, {individualEvent.state}</div>
                        <div className="col-12 text-xs text-muted">{individualEvent.location}</div>
                        <button 
                            type="button" className=" w-100 btn btn-lg btn-outline-success" onClick={handlereserve}>${individualEvent.price} Reserve</button>
                    </div>
                </div>
        </div> 
    )
}