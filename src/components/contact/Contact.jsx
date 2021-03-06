import React, { useEffect, useRef, useState } from 'react'
import './contact.css'

import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'



function Contact() {
  const [emty, setEmty] = useState('')
  const formRef = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0svr949', 'template_4frijcr', formRef.current, 'T4VLADPzr_y7cYwlM')
    formRef.current[0].value = '';
    formRef.current[1].value = '';
    formRef.current[2].value = '';

  }
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>nhatbinh211120@gmail.com</h5>  
            <a href="mailto:nhatbinh211120@gmail.com" target="_blank">Send a message</a>
          </article>  

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Nhật Bình</h5>  
            <a href="https://m.me/nhatbinh.fan/" target="_blank">Send a message</a>
          </article> 

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Phone number</h4>
            <h5>0344594705</h5>  
            <a href="tel:0344594705" target="_blank">Call me</a>
          </article> 
        </div>  

        <form ref={formRef} onSubmit={sendEmail}>
          <input onChange={(e) => (setEmty(e.target.value))} type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact