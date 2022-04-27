import React from 'react'
import {Icon} from 'react-icons-kit'
import {plus} from 'react-icons-kit/feather/plus'
import {minus} from 'react-icons-kit/feather/minus'
import {auth,fs} from '../../firebase-config'

export const IndividualReservation = ({reservationProduct,reservationIncrease,reservationDecrease}) => {

    const handleReservationIncrease=()=>{
        reservationIncrease(reservationProduct);
    }

    const handleReservationDecrease=()=>{
        reservationDecrease(reservationProduct);
    }

    const handleReservationDelete=()=>{
        auth.onAuthStateChanged(user=>{
            if(user){
                fs.collection('Cart ' + user.uid).doc(reservationProduct.ID).delete().then(()=>{
                    console.log('successfully deleted');
                })
            }
        })
    }
    
    return (

        <div className='product'>
            <div class="d-flex justify-content-between align-items-center mt-4 items rounded">
                <div class="d-flex flex-row">
                    <div className='product-img'>
                        <img src={reservationProduct.url} alt="product-img" width="40"/>
                    </div>
                    <div class="ml-2">
                        <span class="font-weight-bold d-block px-2">{reservationProduct.title}</span>
                        <span class="spec px-2">{reservationProduct.description}</span>
                    </div>
                </div>
            <div class="d-flex flex-row align-items-center p-3">
                <span>Quantity</span>
                <div className='product-text quantity-box'>
                    <div className='action-btns minus' onClick={handleReservationDecrease} >
                        <Icon icon={minus} size={20}/>
                    </div>                
                    <div>{reservationProduct.qty}</div>               
                    <div className='action-btns plus' onClick={handleReservationIncrease}>
                        <Icon icon={plus} size={20}/>
                    </div>
                </div>
                <span class="d-block ml-5 font-weight-bold px-4 align-items-center">${reservationProduct.price}</span>
                <div className='product-text cart-price '>${reservationProduct.TotalProductPrice}</div>
                <div className='btn btn-danger btn-md cart-btn' onClick={handleReservationDelete} >DELETE</div>  
            </div>
          
            </div>
        </div>
    )
}