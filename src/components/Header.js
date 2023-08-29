import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';
const Header = () => {
  
  
  return (
    <header className='header'>
        
        
        
        <nav className='navbar'>
            <h1>Akshay<span style={{'color':'red'}}>.</span></h1>
            <ul className='list'>
                <NavLink to='/' className={({isActive})=>isActive ? 'active':undefined}>HOME</NavLink>
                <li><NavLink to='/about' className={({isActive})=>isActive ? 'active':undefined}>ABOUT</NavLink></li>
                <li><NavLink to='/project' className={({isActive})=>isActive ? 'active':undefined}>PROJECTS</NavLink></li>
                <li><NavLink to='/contact' className={({isActive})=>isActive ? 'active':undefined}>CONTACT</NavLink></li>
            </ul>
        </nav>
        
    </header>
    
  )
}

export default Header