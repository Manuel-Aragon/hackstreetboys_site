
   
import React,{useState, useEffect} from 'react'
import {auth,fs} from '../../firebase-config'
import { ReservationProducts } from './ReservationProducts';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export const Reservation = () => {


    // console.log(user);
    
    // state of cart products
    const [reservationProducts, setReservationProducts]=useState([]);

    // getting cart products from firestore collection and updating the state
    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            if(user){
                fs.collection('Reservation ' + user.uid).onSnapshot(snapshot=>{
                    const newReservationProduct = snapshot.docs.map((doc)=>({
                        ID: doc.id,
                        ...doc.data(),
                    }));
                    setReservationProducts(newReservationProduct);                    
                })
            }
            else{
                console.log('user is not signed in to retrieve cart');
            }
        })
    },[])

    // console.log(reservationProducts);

    // getting the TotalProductPrice from reservationProducts in a seperate array
    const price = reservationProducts.map((reservationProduct)=>{
        return reservationProduct.TotalProductPrice;
    })

    // reducing the price in a single value
    const reducerOfPrice = (accumulator,currentValue)=>accumulator+currentValue;

    const subtotalPrice = price.reduce(reducerOfPrice,0);
    const shippingPrice = 1.00;
    const totalPrice = subtotalPrice*1.08 + shippingPrice;

    // global variable
    let Product;
    
    // cart product increase function
    const reservationProductIncrease=(reservationProduct)=>{
        // console.log(reservationProduct);
        Product=reservationProduct;
        Product.qty=Product.qty+1;
        Product.TotalProductPrice=Product.qty*Product.price;
        // updating in database
        auth.onAuthStateChanged(user=>{
            if(user){
                fs.collection('Reservation ' + user.uid).doc(reservationProduct.ID).update(Product).then(()=>{
                    console.log('increment added');
                })
            }
            else{
                console.log('user is not logged in to increment');
            }
        })
    }

    // cart product decrease functionality
    const reservationProductDecrease =(reservationProduct)=>{
        Product=reservationProduct;
        if(Product.qty > 1){
            Product.qty=Product.qty-1;
            Product.TotalProductPrice=Product.qty*Product.price;
             // updating in database
            auth.onAuthStateChanged(user=>{
                if(user){
                    fs.collection('Reservation ' + user.uid).doc(reservationProduct.ID).update(Product).then(()=>{
                        console.log('decrement');
                    })
                }
                else{
                    console.log('user is not logged in to decrement');
                }
            })
        }
    }

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
              const carts = await fs.collection('Reservation ' + uid).get();
              for(var snap of carts.docs){
                  fs.collection('Reservation ' + uid).doc(snap.id).delete();
              }
        }
        else{
            alert('Something went wrong in checkout');
        }
     }
   
    return (
        <>        
            <br></br>
            <div className="container p-5 bg-dark d-flex">
                <div className="container mt-5 p-5 rounded cart">
                    <div className="row no-gutters">
                        <div className="col-md-8">
                            <div className="product-details mr-2">
                                <h6 className="mb-0">Shopping cart</h6>
                                <div className="d-flex justify-content-between"><span>You have {reservationProducts.length} items in your cart</span>
                                </div>
                                {reservationProducts.length > 0 && (
                                        <div className='products-box'>
                                            <ReservationProducts reservationProducts={reservationProducts}
                                            reservationProductIncrease={reservationProductIncrease}
                                            reservationProductDecrease={reservationProductDecrease}
                                            />
                                        </div>
                                )}
                                {reservationProducts.length < 1 && (
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