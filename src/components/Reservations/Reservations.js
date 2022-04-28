import React,{useState, useEffect} from 'react'
import {Navbar} from '../Navbar'
import {auth,fs} from '../../firebase-config'
import '../Cart/cart.css'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export const Reservations = () => {

    // getting current user function
    function GetCurrentUser(){
        const [user, setUser]=useState(null);
        useEffect(()=>{
            auth.onAuthStateChanged(user=>{
                if(user){
                    fs.collection('users').doc(user.uid).get().then(snapshot=>{
                        setUser(snapshot.data().Name);
                    })
                }
                else{
                    setUser(null);
                }
            })
        },[])
        return user;
    }

    const user = GetCurrentUser();
    // console.log(user);
    
    // state of cart products
    const [reservationItems, setReservations]=useState([]);

    // getting cart products from firestore collection and updating the state
    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            if(user){
                fs.collection('Reservation ' + user.uid).onSnapshot(snapshot=>{
                    const newReservation = snapshot.docs.map((doc)=>({
                        ID: doc.id,
                        ...doc.data(),
                    }));
                    setReservations(newReservation);                    
                })
            }
            else{
                console.log('user is not signed in to retrieve cart');
            }
        })
    },[])


    // getting the TotalProductPrice from cartProducts in a seperate array
    const price = reservationItems.map((reservation)=>{
        return reservationItems.TotalProductPrice;
    })

    // reducing the price in a single value
    const reducerOfPrice = (accumulator,currentValue)=>accumulator+currentValue;

    const subtotalPrice = price.reduce(reducerOfPrice,0);
    const shippingPrice = 1.00;
    const totalPrice = subtotalPrice*1.08 + shippingPrice;

    // global variable
    let Ticket;
    
    // cart product increase function
    // const reservationIncrease=(reservation)=>{
    //     // console.log(cartTicket);
    //     Ticket=reservation;
    //     Ticket.qty=Ticket.qty+1;
    //     Ticket.TotalProductPrice=Ticket.qty*Ticket.price;
    //     // updating in database
    //     auth.onAuthStateChanged(user=>{
    //         if(user){
    //             fs.collection('Reservation ' + user.uid).doc(reservation.ID).update(Ticket).then(()=>{
    //                 console.log('increment added');
    //             })
    //         }
    //         else{
    //             console.log('user is not logged in to increment');
    //         }
    //     })
    // }

    // cart product decrease functionality
    // const reservationDecrease =(reservation)=>{
    //     Ticket=reservation;
    //     if(Ticket.qty > 1){
    //         Ticket.qty=Ticket.qty-1;
    //         Ticket.TotalTicketPrice=Ticket.qty*Ticket.price;
    //          // updating in database
    //         auth.onAuthStateChanged(user=>{
    //             if(user){
    //                 fs.collection('Reservation ' + user.uid).doc(reservation.ID).update(Ticket).then(()=>{
    //                     console.log('decrement');
    //                 })
    //             }
    //             else{
    //                 console.log('user is not logged in to decrement');
    //             }
    //         })
    //     }
    // }

    //checkout
     const navigate = useNavigate();
     const handleCheckout = async()=>{
        const status = 'success';
        if(status==='success'){
            navigate('/');
            toast.success('Your order has been placed successfully', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
              });
              
              const uid = auth.currentUser.uid;
              const reservations = await fs.collection('Reservation ' + uid).get();
              for(var snap of reservations.docs){
                  fs.collection('Reservation ' + uid).doc(snap.id).delete();
              }
        }
        else{
            alert('Something went wrong in checkout');
        }
     }
// Set the date we're counting down to
var countDownDate = new Date().getTime()+(1000)*6*10;

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds

  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


   
    return (
        <>
            <Navbar user={user} />           
            <br></br>
            <div className="container p-5 bg-dark d-flex">
                <div className="container mt-5 p-5 rounded cart">
                    <div className="row no-gutters">
                        <div className="col-md-8">
                            <div className="product-details mr-2">
                                <h6 className="mb-0">Shopping cart</h6>
                                {setInterval(() => {
                                    
                                }, 1)}
                                <div className="d-flex justify-content-between"><span>You have {reservationItems.length} items in your cart</span>
                                </div>
                                {/* {reservationItems.length > 0 && (
                                        <div className='products-box'>
                                            <ReservationProducts reservationItems={reservationItems}
                                            reservationIncrease={reservationIncrease}
                                            reservationDecrease={reservationDecrease}
                                            />
                                        </div>
                                )} */}
                                {reservationItems.length < 1 && (
                                    <div className='container-fluid'>No products to show</div>
                                ) }    
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="payment-info">
                                <div className="d-flex justify-content-between align-items-center">
                                    <span>Card details</span>
                                </div>
                                
                                    <div>
                                        <label className="credit-card-label">Name on card</label>
                                        <input type="text" className="form-control" placeholder="Name"></input>
                                    </div>
                                    <div>
                                        <label className="credit-card-label">Card number</label>
                                        <input type="text" className="form-control credit-inputs" placeholder="0000 0000 0000 0000"></input>

                                    </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="credit-card-label">Date</label>
                                        <input type="text" className="form-control credit-inputs" placeholder="01/01"></input>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="credit-card-label">CVV</label>
                                        <input type="text" className="form-control credit-inputs" placeholder="111"></input>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between information"><span>Subtotal</span><span>${subtotalPrice}</span></div>
                                <div className="d-flex justify-content-between information"><span>Shipping</span><span>${shippingPrice}</span></div>
                                <div className="d-flex justify-content-between information"><span>Total(Incl. taxes)</span><span>${totalPrice}</span></div>
                                <button className="btn btn-primary btn-block d-flex justify-content-between mt-3" type="button " onClick={handleCheckout}><span>Checkout</span></button>
                                </div>
                                <div className='summary-box'>
                    </div>     
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}