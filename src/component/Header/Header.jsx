import React from 'react';
import logo from '../../assets/header/Logo.png';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';
import './Header.css'

const Header = () => {
    return (
        <nav className='header mx-auto xl:h-20 text-white py-4 px-28 xl:flex justify-between items-center sticky top-0 z-50'>
            
                <a href=""><img src={logo} alt="" /></a>
            
            <div>
                
                <ActiveLink to="/">Shop</ActiveLink>
                <ActiveLink to="/orders">Orders</ActiveLink>
                <ActiveLink to="/inventory">Inventory</ActiveLink>
                <ActiveLink to="/login">Login</ActiveLink>
            </div>
        </nav>
    );
};

export default Header;