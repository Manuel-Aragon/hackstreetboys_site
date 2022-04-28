import React from 'react'
import {Icon} from 'react-icons-kit'
import {plus} from 'react-icons-kit/feather/plus'
import {minus} from 'react-icons-kit/feather/minus'
import {auth,fs} from '../../firebase-config'

export const IndividualCartProduct = ({cartProduct,cartProductIncrease,cartProductDecrease}) => {

    const handleCartProductIncrease=()=>{
        cartProductIncrease(cartProduct);
    }

    const handleCartProductDecrease=()=>{
        cartProductDecrease(cartProduct);
    }

    const handleCartProductDelete=()=>{
        auth.onAuthStateChanged(user=>{
            if(user){
                fs.collection('Cart ' + user.uid).doc(cartProduct.ID).delete().then(()=>{
                    console.log('successfully deleted');
                })
            }
        })
    }
    
    return (

        <div className='product'>
            <div className="d-flex justify-content-between align-items-center mt-4 items rounded">
                <div className="d-flex flex-row">
                    <div className='product-img'>
                        <img src={cartProduct.url} alt="product-img" width="40"/>
                    </div>
                    <div className="ml-2">
                        <span className="font-weight-bold d-block px-2">{cartProduct.title}</span>
                        <span className="spec px-2">{cartProduct.description}</span>
                    </div>
                </div>
            <div className="d-flex flex-row align-items-center p-3">
                <span>Quantity</span>
                <div className='product-text quantity-box'>
                    <div className='action-btns minus' onClick={handleCartProductDecrease} >
                        <Icon icon={minus} size={20}/>
                    </div>                
                    <div>{cartProduct.qty}</div>               
                    <div className='action-btns plus' onClick={handleCartProductIncrease}>
                        <Icon icon={plus} size={20}/>
                    </div>
                </div>
                <span className="d-block ml-5 font-weight-bold px-4 align-items-center">${cartProduct.price}</span>
                <div className='d-block ml-5 font-weight-bold px-4 align-items-center text-success'>${cartProduct.TotalProductPrice}</div>
                <div className='btn btn-danger btn-md reservation-btn ml-5 font-weight-bold px-4 align-items-center' onClick={handleCartProductDelete} >DELETE</div>  
            </div>
          
            </div>
        </div>
    )
}