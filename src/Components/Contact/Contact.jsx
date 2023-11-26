
import React, { useState } from 'react'
import './Contact.css'

import emailjs from '@emailjs/browser';
import { useRef } from 'react';
const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iauju5k', 'template_jwce6va', form.current, '9iiRe99ygbPOpuova')
      .then((result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="contact-form" id='Contacts'>
        <div className="c-left">
            <div className="contact">
                <h2><span>Get in touch</span></h2>

                
                <div
                   className='blur s-blur1'
                   style={{background:"#ABF1FF94"}}
                ></div>
            </div>
        </div>
        <div className="c-right">
            <form  ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" className='user' placeholder='Name'/>
            <input type="email" name='user_email' className='user' placeholder='Email'/>
            <textarea name='message' className='user' placeholder='Message'/>
            <input type="submit" value="Send" className='button'/>
            <span>{done && "Thanks for contacting me !"}</span>
            <div 
                className='blur c-blur1'
                style={{background:"var(--purple)"}}
                ></div>
            </form>
        </div>
    </div>
  )
}

export default Contact