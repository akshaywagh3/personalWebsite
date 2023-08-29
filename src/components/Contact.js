import React ,{useRef,useState}from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = (props) => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const msgRef = useRef('');
    const [isSent,setIsSent]=useState(false);

    function submitHandler(event) {
      setIsSent(prev=>!prev);
      event.preventDefault();
      const msg = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: msgRef.current.value,
      };

      props.onAddmsg(msg);
      
    };
    
  return (
    <div className='dd'>
      <div className='contact'>
      <h1>Contact me</h1>
      <form className='contact-form' onSubmit={submitHandler}>
        <label htmlFor='name'>Name*</label>
          <input type='text' id='name' name='name' ref={nameRef} placeholder='Name' required/>
        
        <label htmlFor='email'>Email*</label>
          <input type='email' id='email' name='email' ref={emailRef} placeholder='Email' required/>
        
        <label htmlFor='message'>Message*</label>
          <textarea type='textarea' id='message' name='message'  ref={msgRef} placeholder='write message' required/>
        
        <button type='submit'  >SEND MESSAGE</button>
        {isSent && alert('Message Sent successfully')}

      </form>
      </div>
      <div className='extra'>
        <section>
          <FontAwesomeIcon icon={faLocationDot} size='2xl'style={{margin:'20px 20px'  }}/>
          <span>
          <h2>My Address</h2>
          <h3>Nandanvan Scociety,Near Akurdi Railway Station,Akurdi,Pune</h3>
          </span>
        </section>
        <section>
          <FontAwesomeIcon icon={faMobile} size='2xl'style={{margin:'20px 20px'  }}/>
          <span>
          <h2>Mobile Number</h2>
          <h3>+917774868664</h3>
          </span>
        </section>
        <section>
          <FontAwesomeIcon icon={faEnvelope} size='2xl'style={{margin:'20px 20px'  }}/>
          <span>
            <h2>Email Address</h2>
            <h3>akshayw3121@gmail.com</h3>
          </span>
          
        </section>
      </div>
    </div>
    
  )
}

export default Contact