import React from 'react'
import { useState } from 'react'
import './ContactSection.css'

export const ContactSection = () => {

  const [copied, setCopied] = useState(false)

  const onClickEmail = () => {


    navigator.clipboard.writeText('hernanarevalo16@gmail.com')
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 3000);

  }

  return (
    <div className="contact-container" id="contact">

        <div className="section-title">Contact</div>

        <div className="contact">
          <div className="contact-left">
            <box-icon color="rgb(238, 117, 74)" 
                      name='at'
                      size="lg"
                      onClick={ onClickEmail }>
                  
            </box-icon>
            <div className="email-container">
              <div className='email' onClick={ onClickEmail }>hernanarevalo16@gmail.com</div>
              {copied? <div className='copied'>email copied!</div>: null}
            </div>

            <box-icon color="rgb(238, 117, 74)" 
                      name='linkedin-square'
                      type='logo'
                      size="lg">
                  
            </box-icon>
            <div className="linkedin-link">
              <a href="http://linkedin.com/in/arevalo-hernan" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/arevalo-hernan
              </a>
            </div>
          </div>
          <div className="contact-right">
            <form 
                  target="_blank" 
                  action="https://formsubmit.co/hernanarevalo16@gmail.com" 
                  method="POST"
            >
              <label>Name</label>
              <input type="text" className='name-input' name='name'/>
              <label>Email</label>
              <input type="text" className='email-input' name='email'/>
              <label>Message</label>
              <textarea type="text" className='message-input' name='message'/>
              <button className="submit-button"type="submit">Send</button>
            </form>
          </div>
        </div>
    </div>  )
}
