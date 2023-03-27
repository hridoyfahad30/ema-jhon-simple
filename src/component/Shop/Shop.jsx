import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([])

    useEffect(()=> {

        fetch('../../../public/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))

    }, [])

    return (
        <div className='shopContainer container mx-auto'>
            <div id='shopCardContainer' className='break-words'>
                
                <div className=' grid grid-cols-3 gap-5'>
                    {
                        products.map(product => <Product key={product.id} product={product}></Product>)
                    }
                </div>

            </div>
            <div id='orderSummery' className='break-words'>
                <h1>this is from order</h1>
                <h1>this is </h1>
                <h1>thiss order</h1>
                <h1>this is from order</h1>
            </div>
        </div>
    );
};

export default Shop;