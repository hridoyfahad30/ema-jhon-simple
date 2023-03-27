import React from 'react';
import logo from '../../assets/header/Logo.png';
import './Header.css'

const Header = () => {
    return (
        <nav className='header container mx-auto h-20 text-white px-28 flex justify-between items-center'>
            
                <a href=""><img src={logo} alt="" /></a>
            
            <div>
                <a href="/order">Order</a>
                <a href="/order-review">Order Review</a>
                <a href="/manage-inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;