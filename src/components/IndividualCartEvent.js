import React from 'react'
import {Icon} from 'react-icons-kit'
import {plus} from 'react-icons-kit/feather/plus'
import {minus} from 'react-icons-kit/feather/minus'
import {auth,fs} from '../firebase-config'

export const IndividualEvent = ({CartEvent,CartEventIncrease,CartEventDecrease}) => {
    const handleCartEventIncrease=()=>{
        CartEventIncrease(CartEvent);
    }

    const handleCartEventDecrease=()=>{
        CartEventDecrease(CartEvent);
    }

    const handleCartEventDelete=()=>{
        auth.onAuthStateChanged(user=>{
            if(user){
                fs.collection('Cart ' + user.uid).doc(CartEvent.ID).delete().then(()=>{
                    console.log('successfully deleted');
                })
            }
        })
    }
    return (
        <div className='event'>
            <div className='event-img'>
                <img src={CartEvent.url} alt="event-img"/>
            </div>
            <div className='event-text title'>{CartEvent.title}</div>
            <div className='event-text description'>{CartEvent.description}</div>
            <div className='event-text date'>$ {CartEvent.date}</div>
            <div className='event-text location'>$ {CartEvent.location}</div>
            <div className='event-text price'>$ {CartEvent.price}</div>
            <span>Quantity</span>
            <div className='event-text quantity-box'>
                <div className='action-btns minus' onClick={handleCartEventDecrease} >
                    <Icon icon={minus} size={20}/>
                </div>                
                <div>{CartEvent.qty}</div>               
                <div className='action-btns plus' onClick={handleCartEventIncrease}>
                    <Icon icon={plus} size={20}/>
                </div>
            </div>
            <div className='event-text cart-price'>$ {CartEvent.TotalEventPrice}</div>
            <div className='btn btn-danger btn-md cart-btn' onClick={handleCartEventDelete} >DELETE</div>            
        </div>
    )
}