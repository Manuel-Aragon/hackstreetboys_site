import React from 'react'
import LogoShirt from '../../img/logo_shirt.jpg'

export const IndividualProduct = ({individualProduct, addToCart}) => {
    // console.log(individualProduct);
    const handleAddToCart=()=>{
        addToCart(individualProduct);
    }   
    return (
        <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                    <div className='product-text title'>{individualProduct.title}</div>
                </div>
                <div class="card-body">
                        <div className='product-text description row row-cols-md-2'>

                        </div>
                        <div className='product-img'>
                            <img src={LogoShirt} alt="product-img-front" width={150}/>
                            <img src={individualProduct.url} alt="product-img-back" width={150}/>
                        </div>
                    <div className='product-text description'>{individualProduct.description}</div>
                    <div className='product-text price'>$ {individualProduct.price}</div>
                    <div className='btn btn-danger btn-md cart-btn' onClick={handleAddToCart}>ADD TO CART</div>
                </div>
        </div>
    )
}