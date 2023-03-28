import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(()=> {

        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))

    }, [])

    const addToCart = (product) =>{
        let newCart = [...cart, product]
        setCart(newCart)
        

        addToDb(product.id)
    }
    
     useEffect(() => {

        const storedCart = getShoppingCart();
        const savedCart = [];

        for (const id in storedCart) {

            const addedProduct = products.find(product => product.id === id);

            if(addedProduct){

                const quantity = storedCart[id]
                addedProduct.quantity = quantity;

                savedCart.push(addedProduct);
            }
            
        }
        
        setCart(savedCart);

     }, [products])
    

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
                <Cart cart={cart} ></Cart>
            </div>
        </div>
    );
};

export default Shop;