import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <p>MealsDB</p>
            <div>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
            </div>
        </div>
    );
};

export default Header;