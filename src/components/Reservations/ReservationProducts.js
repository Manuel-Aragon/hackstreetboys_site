
import React from 'react'
import { IndividualReservationProduct } from './IndividualReservationProducts'

export const ReservationProducts = ({reservationProducts,reservationProductIncrease,
    reservationProductDecrease}) => {
    return reservationProducts.map((reservationProduct)=>(
        <IndividualReservationProduct key={reservationProduct.ID} reservationProduct={reservationProduct}
           reservationProductIncrease={reservationProductIncrease}
           reservationProductDecrease={reservationProductDecrease}
        />
    ))
}