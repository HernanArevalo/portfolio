import React from 'react'
import './ContactSection.css'

export const ContactSection = () => {
  return (
    <div className="contact-container" id="contact">

        <div className="section-title">Contact</div>

        <div className="contact">
          <div className="contact-left">
            <box-icon color="rgb(238, 117, 74)" 
                      name='at'
                      size="lg">
                  
            </box-icon>
            <div className='email'>hernanarevalo16@gmail.com</div>
            <box-icon color="rgb(238, 117, 74)" 
                      name='linkedin-square'
                      type='logo'
                      size="lg">
                  
            </box-icon>
            <div className="linkedin-link">linkedin.com/in/arevalo-hernan</div>
          </div>
          <div className="contact-right">
            <form action="">
              <label>Name</label>
              <textarea type="text" className='name-input'/>
              <label>Email</label>
              <textarea type="text" className='email-input'/>
              <label>Message</label>
              <textarea type="text" className='message-input'/>
              <button className="submit-button"type="submit">Send</button>
            </form>
          </div>
        </div>
    </div>  )
}
