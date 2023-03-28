import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [shipping, setShipping] = useState(0)
    const tax = totalPrice * 0.1;
    const grandTotal = totalPrice + shipping + tax;
    
    

    useEffect(()=> {

        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))

    }, [])

    const addToCart = (product) =>{
        let newCart = [...cart, product]
        setCart(newCart)
        
        setTotalPrice(product.price + totalPrice)
        setShipping(product.shipping + shipping)
    }
    
    

    return (
        <div className='shopContainer container mx-auto'>
            <div id='shopCardContainer' className='break-words mt-28 mx-4'>
                
                <div className=' grid grid-cols-1 xl:grid-cols-3 gap-5'>
                    {
                        products.map(product => <Product key={product.id} product={product} addToCart={addToCart}></Product>)
                    }
                </div>

            </div>
            <div id='cartContainer'>
                <Cart cart={cart} price={totalPrice} shipping={shipping} tax={tax} grandTotal={grandTotal}></Cart>
            </div>
        </div>
    );
};

export default Shop;