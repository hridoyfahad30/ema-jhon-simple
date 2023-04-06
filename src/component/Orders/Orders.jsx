import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import './Order.css'
import { useLoaderData } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import { removeFromDb } from '../../utilities/fakedb';


const Orders = () => {

    let savedCart = useLoaderData();

    const [cart, setCart] = useState(savedCart)

    const removeReviewItem = (id) => {
        const remaining = cart.filter(pd => pd.id !==id)
        setCart(remaining);
        removeFromDb(id)
    }

    return (
        <div className='my-10'>
            <h1 className='text-center text-3xl font-semibold my-8 '>Total Selected Item: {cart.length}</h1>
            <div className='orderContainer'>
                <div  className='flex flex-col gap-5 justify-between items-center my-auto'>
                    {
                        cart.map(p => <CartItem key={p.id} cart={p} removeReviewItem={removeReviewItem}></CartItem>)
                    }
                    
                </div>
                <div className='cartContainer'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;