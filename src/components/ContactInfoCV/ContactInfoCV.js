import React from 'react';
import Contact from '../../components/Contact/Contact';
import './ContactInfoCV.css';

function ContactInfoCV() {
  return (
    <div className='contact-info-cv'>
      <h3 className='ed-title'>Contact</h3>
      <ul className='contact-details'>
        <li>
          <a><i class="fas fa-map-marker-alt"></i></a>
          <p>Milan, Italy</p>
        </li>
        <li>
          <a href='mailto:n.boglar3@gmailcom?'><i className='far fa-envelope'></i></a>
          <p> n.boglar3@gmail.com</p>
        </li>
        <li>
          <a href='https://wa.link/zzcbtw'><i class="fab fa-whatsapp"></i></a>
          <p> +36/203137212</p>
        </li>
        
      </ul>
      <Contact />
    </div>
  )
}

export default ContactInfoCV;
