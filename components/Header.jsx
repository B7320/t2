import React from 'react';
import './Header.css';

const Header =() => 
{
return (
<header className='header'>
    <nav className='navbar'>
        <div className='title'>Landing</div>
        <ul className='nav-links'>

            
           <li><a href='#home'>Home</a></li>
           <li><a href='#about'>About</a></li>
           <li><a href='#contact'>Contact</a></li>

        </ul>

<button className='buy-now'>Buy Now</button>



    </nav>


</header>



);
};
export default Header;