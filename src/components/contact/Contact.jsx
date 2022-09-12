import React, { useRef } from 'react';
import './Contact.css'
import {MdOutlineAttachEmail } from 'react-icons/md'
import {IoLogoWhatsapp } from 'react-icons/io'
import {RiMessengerLine } from 'react-icons/ri'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kxxxz6d', 'template_2efqr4r', form.current, 'qIA3i970s4gNgCxG1')
    
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className='contact__option'>
          <MdOutlineAttachEmail className='contact__option-icon'/>
        <h4>E-mail</h4>
        <h5>any@any.com</h5>
        <a href="mailto:any@any.com" target='_blank'>Send a message</a>
        </article>
        <article className='contact__option'>
          <IoLogoWhatsapp className='contact__option-icon'/>
        <h4>WhatsApp</h4>
        <h5>+123456789</h5>
        <a href="https://api.whatsapp.com/send?phone+123456789" target='_blank'>Send a message</a>
        </article>
        <article className='contact__option'>
        <RiMessengerLine className='contact__option-icon'/>
        <h4>Messenger</h4>
        <h5>Ildiko Csilla Fabian</h5>
        <a href="https://m.me/" target='_blank' >Send a message</a>
        </article>
      </div> 
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Name' required />
        <input type="email" name='email' placeholder='Your E-mail' required />
        <textarea name='message' rows='/' placeholder='Your message' required/>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form> 
    
    </div>
    </section>
  )
}

export default Contact