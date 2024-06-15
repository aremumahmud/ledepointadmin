import "../css/contact.css";
import jane from '../assets/update.jpg'

import {FaMessage} from 'react-icons/fa6'

import { useEffect } from 'react';

function Contact() {

  
  useEffect(() => {
    // Configure the scroll reveal animation
 
  }, []);

  return (
    <div className="contact" id="contact">
      <div className="profession client stat">
        <p className="client_title contact_title up">Contact Us.</p>
        <p className="up">Feel free to send a message through the contact box. We will send a reply with a proffesional within 24 hours</p>
      </div>
      <br />
      <div className="form">
        <form action="/send_email" method="post">
          <input name="full_name" className="up" type="text" placeholder="Full Name" required/>
          <input name="email" className="up" type="email" placeholder="Email address" required/>
          <input name="phone" className="up" type="tel" placeholder="Phone number" required/>
          <input name="location" className="up" type="text" placeholder="Home address / Location" required />
          <input name="location" className="up" type="text" placeholder="Service Required" required />
          <textarea  className="up"  name="message" id="" cols="30" rows="10" placeholder="Message" required></textarea>
          <button className="up"  type="submit">Send me a message <FaMessage /></button>
        </form>
        <div className="image1">
        <div className="image up">
          <img src={jane} alt="" />
         
        </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
