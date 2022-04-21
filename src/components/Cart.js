
   
import React,{useState, useEffect} from 'react'
import {Navbar} from './Navbar'
import {auth,fs} from '../firebase-config'
import { CartProducts } from './CartProducts';
import './cart.css'

export const Cart = () => {

    // getting current user function
    function GetCurrentUser(){
        const [user, setUser]=useState(null);
        useEffect(()=>{
            auth.onAuthStateChanged(user=>{
                if(user){
                    fs.collection('users').doc(user.uid).get().then(snapshot=>{
                        setUser(snapshot.data().FullName);
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
    const [cartProducts, setCartProducts]=useState([]);

    // getting cart products from firestore collection and updating the state
    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            if(user){
                fs.collection('Cart ' + user.uid).onSnapshot(snapshot=>{
                    const newCartProduct = snapshot.docs.map((doc)=>({
                        ID: doc.id,
                        ...doc.data(),
                    }));
                    setCartProducts(newCartProduct);                    
                })
            }
            else{
                console.log('user is not signed in to retrieve cart');
            }
        })
    },[])

    // console.log(cartProducts);

    // global variable
    let Product;
    
    // cart product increase function
    const cartProductIncrease=(cartProduct)=>{
        // console.log(cartProduct);
        Product=cartProduct;
        Product.qty=Product.qty+1;
        Product.TotalProductPrice=Product.qty*Product.price;
        // updating in database
        auth.onAuthStateChanged(user=>{
            if(user){
                fs.collection('Cart ' + user.uid).doc(cartProduct.ID).update(Product).then(()=>{
                    console.log('increment added');
                })
            }
            else{
                console.log('user is not logged in to increment');
            }
        })
    }

    // cart product decrease functionality
    const cartProductDecrease =(cartProduct)=>{
        Product=cartProduct;
        if(Product.qty > 1){
            Product.qty=Product.qty-1;
            Product.TotalProductPrice=Product.qty*Product.price;
             // updating in database
            auth.onAuthStateChanged(user=>{
                if(user){
                    fs.collection('Cart ' + user.uid).doc(cartProduct.ID).update(Product).then(()=>{
                        console.log('decrement');
                    })
                }
                else{
                    console.log('user is not logged in to decrement');
                }
            })
        }
    }
   
    return (
        <>
            <Navbar user={user} />           
            <br></br>
            <div class="container p-5 bg-dark d-flex">
                <div class="container mt-5 p-5 rounded cart">
                    <div class="row no-gutters">
                        <div class="col-md-8">
                            <div class="product-details mr-2">
                                <h6 class="mb-0">Shopping cart</h6>
                                <div class="d-flex justify-content-between"><span>You have 2 items in your cart</span>
                                </div>
                                {cartProducts.length > 0 && (
                                        <div className='products-box'>
                                            <CartProducts cartProducts={cartProducts}
                                            cartProductIncrease={cartProductIncrease}
                                            cartProductDecrease={cartProductDecrease}
                                            />
                                        </div>
                                )}
                                {cartProducts.length < 1 && (
                                    <div className='container-fluid'>No products to show</div>
                                ) }    
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="payment-info">
                                <div class="d-flex justify-content-between align-items-center">
                                    <span>Card details</span>
                                </div>
                                    <div>
                                        <label class="credit-card-label">Name on card</label>
                                        <input type="text" class="form-control credit-inputs" placeholder="Name"></input>
                                    </div>
                                    <div>
                                        <label class="credit-card-label">Card number</label>
                                        <input type="text" class="form-control credit-inputs" placeholder="0000 0000 0000 0000"></input>

                                    </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label class="credit-card-label">Date</label>
                                        <input type="text" class="form-control credit-inputs" placeholder="01/01"></input>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="credit-card-label">CVV</label>
                                        <input type="text" class="form-control credit-inputs" placeholder="111"></input>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between information"><span>Subtotal</span><span>$0.00</span></div>
                                <div class="d-flex justify-content-between information"><span>Shipping</span><span>$0.00</span></div>
                                <div class="d-flex justify-content-between information"><span>Total(Incl. taxes)</span><span>$0.00</span></div>
                                <button class="btn btn-primary btn-block d-flex justify-content-between mt-3" type="button "><span>Checkout</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}