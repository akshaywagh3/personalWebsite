import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faJava } from "@fortawesome/free-brands-svg-icons";
import { SiMysql } from 'react-icons/si';
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import './About.css'
import myImage from './DSC_4149-02-01-01-01.jpeg';
import Akshay from './AkshayWagh_.pdf';
const About = () => {

 
  return (
    <div className='full'>
      <span>
        <h1>ABOUT ME</h1>
        <h4>SOFTWARE ENGINEER BASED IN INDIA.</h4>
      </span>
      

      <div className='about'>
         <img src={myImage} alt=''/>
        <div className='myself'>
          <h2>I'm Akshay Wagh</h2>
          <h3>A Web Developer based in India</h3>

          <span>I love to design and Develop stylish,modern,responsive and interactive websites.My passion is to design and develop user interfaces through bold interfaces and meaningful interactions.Check out my portfolio.</span>
          <div className='details'>
              <div className='col'>
                  <div className='media'>
                      <label>Birthday :</label>
                      <label>6 June 2001</label>
                  </div>
                  <div className='media'>
                      <label>Age :</label>
                      <label>22 Years</label>
                  </div>
                  <div className='media'>
                      <label>Residance :</label>
                      <label>India</label>
                  </div>
              </div>
              
              <div className='col2'>
                <div className='media'>
                      <label>Email :</label>
                      <label>akshayw3121@gmail.com</label>
                </div>
                <div className='media'>
                      <label>phone :</label>
                      <label>7774868664</label>
                </div>
                <div className='media'>
                      <label>Address :</label>
                      <label>Pune,India</label>
                </div>
              </div>
          </div>
          <a href={Akshay} download="Akshay_Wagh_Resume" target='_blank'>
                  <button className='hire'>Download Resume</button></a>
        </div>
      </div>
      
      <div className='skills'>
        <h1>My Skills</h1>
        <div className='skill-list'>
          <section>
            <h2>HTML</h2>
            <FontAwesomeIcon icon={faHtml5} size='2xl'/>
          </section>
          <section>
            <h2>CSS</h2>
            <FontAwesomeIcon icon={faCss3Alt} size='2xl' />
          </section>
          <section>
            <h2>Javascript</h2>
            <FontAwesomeIcon icon={faSquareJs} size='2xl'/>          
          </section>
          <section>
            <h2>ReactJs</h2>
            <FontAwesomeIcon icon={faReact} size='2xl'/>
          </section>
          <section>
            <h2>Python</h2>
            <FontAwesomeIcon icon={faPython} size='2xl'/>
          </section>
          <section>
            <h2>Java</h2>
            <FontAwesomeIcon icon={faJava} size='2xl' />
            </section>
          <section>
            <h2>Github</h2>
            <FontAwesomeIcon icon={faGithub} size='2xl'/>
          </section>
          <section>
            <h2>Mysql</h2>
            <SiMysql style={{width:'35px',height:'45px'}}/>
          </section>
        </div>
      </div>
      
      
    </div>
    
  )
}

export default About