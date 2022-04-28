import React from 'react'
import {Icon} from 'react-icons-kit'
import {plus} from 'react-icons-kit/feather/plus'
import {minus} from 'react-icons-kit/feather/minus'
import {auth,fs} from '../../firebase-config'

export const IndividualReservationProduct = ({reservationProduct,reservationProductIncrease,reservationProductDecrease}) => {

    const handleReservationProductIncrease=()=>{
        reservationProductIncrease(reservationProduct);
    }

    const handleReservationProductDecrease=()=>{
        reservationProductDecrease(reservationProduct);
    }

    const handleReservationProductDelete=()=>{
        auth.onAuthStateChanged(user=>{
            if(user){
                fs.collection('Reservation ' + user.uid).doc(reservationProduct.ID).delete().then(()=>{
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
                        <img src={reservationProduct.url} alt="product-img" width="40"/>
                    </div>
                    <div className="ml-2">
                        <span className="font-weight-bold d-block px-2">{reservationProduct.title}</span>
                        <span className="spec px-2">{reservationProduct.description}</span>
                    </div>
                </div>
            <div className="d-flex flex-row align-items-center p-3">
                <span>Quantity</span>
                <div className='product-text quantity-box'>
                    <div className='action-btns minus' onClick={handleReservationProductDecrease} >
                        <Icon icon={minus} size={20}/>
                    </div>                
                    <div>{reservationProduct.qty}</div>               
                    <div className='action-btns plus' onClick={handleReservationProductIncrease}>
                        <Icon icon={plus} size={20}/>
                    </div>
                </div>
                <span className="d-block ml-5 font-weight-bold px-4 align-items-center">${reservationProduct.price}</span>
                <div className='product-text reservation-price '>${reservationProduct.TotalProductPrice}</div>
                <div className='btn btn-danger btn-md reservation-btn' onClick={handleReservationProductDelete} >DELETE</div>  
            </div>
          
            </div>
        </div>
    )
}

// async function timer() {
//     // Set the date we're counting down to
// var countDownDate = new Date().getTime()+(1000)*60*10;
//   // Get today's date and time
//   var now = new Date().getTime();
    
//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;
    
//   // Time calculations for days, hours, minutes and seconds

//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
//   // Output the result in an element with id="demo"
//   document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";
    
//   // If the count down is over, write some text 
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
//   }


//   setInterval(check, 60000);