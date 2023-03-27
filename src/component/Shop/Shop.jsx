import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [price, setPrice] = useState(0)
    const [shipping, setShipping] = useState(0)
    const [tax, setTax] = useState(0)
    
    

    useEffect(()=> {

        fetch('../../../public/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))

    }, [])

    const addToCart = (product) =>{
        let newCart = [...cart, product]
        setCart(newCart)
        
        setPrice(product.price + price)
        setShipping(product.shipping + shipping)
        setTax(price * 0.1)
    }
    
    

    return (
        <div className='shopContainer container mx-auto'>
            <div id='shopCardContainer' className='break-words mt-28 mx-4'>
                
                <div className=' grid grid-cols-3 gap-5'>
                    {
                        products.map(product => <Product key={product.id} product={product} addToCart={addToCart}></Product>)
                    }
                </div>

            </div>
            <div id='orderSummery' className='break-words px-6 pt-7'>
                <h1 className=' text-2xl text-center font-medium mb-12'>Order Summery</h1>
                <h3 className=' text-lg font-medium mb-6'>Selected Items: {cart.length}</h3>
                <h3 className=' text-lg font-medium mb-6'>Total Price: $ {price}</h3>
                <h3 className=' text-lg font-medium mb-6'>Total Shipping Charge: $ {shipping}</h3>
                <h3 className=' text-lg font-medium mb-6'>Tax: $ {tax}</h3>
                
            </div>
        </div>
    );
};

export default Shop;