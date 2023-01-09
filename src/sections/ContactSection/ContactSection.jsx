import { useState } from 'react'
import { useForm } from '../../hooks/useForm/useForm'

export const ContactSection = () => {

  const [copied, setCopied] = useState(false)

  const onClickEmail = () => {


    navigator.clipboard.writeText('hernanarevalo16@gmail.com')
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 3000);

  }

  const { formState, onInputChange, onResetForm, name, email, message } = useForm({
    name: '',
    email: '',
    message: ''
  })

  console.log(name);


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
              <a href="https://linkedin.com/in/arevalo-hernan" target="_blank" rel="noopener noreferrer">
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
              <input 
                      type="text" 
                      className='name-input' 
                      name='name'
                      value = { name }
                      onChange = { onInputChange }
              />
              <label>Email</label>
              <input 
                      type="text" 
                      className='email-input' 
                      name='email'
                      value = { email }
                      onChange = { onInputChange }
              />
              <label>Message</label>
              <textarea 
                      type="text" 
                      className='message-input' 
                      name='message'
                      value = { message }
                      onChange = { onInputChange }
              />
              <button disabled={name.trim() == '' || message.trim() == ''} className="submit-button"type="submit" onClick={ onResetForm }>Send</button>
            </form>
          </div>
        </div>
    </div>  )
}
