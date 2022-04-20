
import React from 'react'
import {IndividualEvent} from './IndividualEvent'

export const Events = ({events}) => {

    // console.log(Events);
    
    return events.map((individualEvent)=>(
        <IndividualEvent key = {individualEvent.ID} individualEvent={individualEvent}
        />
    ))
}