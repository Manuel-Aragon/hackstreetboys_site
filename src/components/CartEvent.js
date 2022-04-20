import React from 'react'
import { IndividualCartEvent } from './IndividualCartEvent'

export const CartEvents = ({CartEvents}) => {
    return CartEvents.map((CartEvent)=>(
        <IndividualCartEvent key={CartEvent.ID} CartEvent={CartEvent}/>
    ))
}