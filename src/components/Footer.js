import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from 'react-router-dom';
import './Footer.css';



const Footer = () => {
  return (
    <div className='footer'>
        <div className='copyright'>
            <h1>Akshay<span style={{'color':'red'}}>.</span></h1>
            <p>Copyright © all rights reserved at Akshay.</p>

        </div>
        
        <div className='address'>
        <section>
          <FontAwesomeIcon icon={faLocationDot} size='xl'style={{margin:'20px 20px'  }}/>
          <span>
          
          <h3>Nandanvan Scociety,Near Akurdi Railway Station,Akurdi,Pune</h3>
          </span>
        </section>
        <section>
          <FontAwesomeIcon icon={faMobile} size='xl'style={{margin:'20px 20px'  }}/>
          <span>
          
          <h3>+917774868664</h3>
          </span>
        </section>
        <section>
          <FontAwesomeIcon icon={faEnvelope} size='xl'style={{margin:'20px 20px'  }}/>
          <span>
            <h3>akshayw3121@gmail.com</h3>
          </span>
          
        </section>
      </div>
      <div className='social'>
            <span>My Social media handles</span>
            <div className='icons'>
                <NavLink to='https://www.linkedin.com/in/akshay-wagh-011412231/'><FontAwesomeIcon icon={faLinkedin} size='xl'style={{color:'white'  }} /></NavLink>
                <NavLink to='https://github.com/akshaywagh3'><FontAwesomeIcon icon={faGithub} size='xl' style={{color:'white'  }} /></NavLink>
                <NavLink to='https://www.instagram.com/akshay.wagh3'><FontAwesomeIcon icon={faInstagram} size='xl' style={{color:'white'  }} /></NavLink>
                <NavLink to='https://twitter.com/akshay_w3'><FontAwesomeIcon icon={faTwitter} size='xl' style={{color:'white'  }} /></NavLink>
                
                
            </div>
            
            
            
      </div>
    </div>
  )
}

export default Footer