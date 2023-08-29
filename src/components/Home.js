import React from 'react'
import './Home.css'
import photo from './Me.jpg';
import SectionFirst from './SectionFirst';
const Home = () => {
  return (
    <div className='home'>
          <div className='sections'>
  
            <section className='s1'>
              <SectionFirst/>   
              
            </section>
            <section className='s2'>
                    <img src={photo} alt=''/>
            </section>
            
          </div>
    </div>
    

  )
}

export default Home