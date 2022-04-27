import React,{useState, useEffect} from 'react'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'
import { Products } from './Products'
import {auth,fs} from '../../firebase-config'
import {useNavigate} from 'react-router-dom'
import './Merch.css'


export const Merch = (props) => {
        // gettin current user uid
        function GetUserUid(){
            const [uid, setUid]=useState(null);
            useEffect(()=>{
                auth.onAuthStateChanged(user=>{
                    if(user){
                        setUid(user.uid);
                    }
                })
            },[])
            return uid;
        }
    
        const uid = GetUserUid();

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
    console.log(user);
    
    // state of products
    const [products, setProducts]=useState([]);

    // getting products function
    const getProducts = async ()=>{
        const products = await fs.collection('Products').get();
        const productsArray = [];
        for (var snap of products.docs){
            var data = snap.data();
            data.ID = snap.id;
            productsArray.push({
                ...data
            })
            if(productsArray.length === products.docs.length){
                setProducts(productsArray);
            }
        }
    }

    useEffect(()=>{
        getProducts();
    },[])

    let Product;
    let navigate = useNavigate();
    const addToCart = (product)=>{
        if(uid!==null){
            // console.log(product);
            Product=product;
            Product['qty']=1;
            Product['TotalProductPrice']=Product.qty*Product.price;
            fs.collection('Cart ' + uid).doc(product.ID).set(Product).then(()=>{
                console.log('successfully added to cart');
            })

        }
        else{

            navigate('/login');
        }
    }

    return (
        <div>
            <Navbar/>  
            <br></br>         
            <br></br>
            <br></br>
            <div class="container-fluid py-3 px-4 bg-dark">

                    {products.length > 0 && (
                    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center bg-dark">
                    <Products products={products} addToCart={addToCart}/>
                        </div>

                    )}
                    {products.length < 1 && (
                        <div className='container-fluid'>Please wait....</div>
                    )}
            </div>
            <br></br>
            <Footer/>
        </div>
    )
}