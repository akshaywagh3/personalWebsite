import React from 'react'
import './SectionFirst.css';
import {Link, NavLink} from 'react-router-dom';

const SectionFirst = () => {
  return (
    <div className='sections'>
        <div className='first'>
                <p>Hi! I'm</p> 
                <p>Akshay Wagh</p>
                <h3>Computer Engineer,interested in web development and database management.</h3>
                <NavLink to='/contact'><button className='hire'>Hire Me</button></NavLink>
                <NavLink to='/project'><button className='hire1'>My Work</button></NavLink>
                
        </div>
        
    </div>
  )
}

export default SectionFirst