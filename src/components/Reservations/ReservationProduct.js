
import React from 'react'
import { IndividualReservation } from './IndividualReservation'

export const ReservationProducts = ({reservationProducts,reservationIncrease,
    reservationDecrease}) => {
    return reservationProducts.map((reservationProduct)=>(
        <IndividualReservation key={reservationProduct.ID} reservationProduct={reservationProduct}
           reservationIncrease={reservationIncrease}
           reservationDecrease={reservationDecrease}
        />
    ))
}