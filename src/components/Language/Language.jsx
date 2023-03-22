import { useState } from 'react'
import { useHref, useNavigate } from 'react-router-dom'
import './Language.css'

export const Language = () => {

  const href = useHref()
  const navigate = useNavigate()

  const [spanish, setSpanish] = useState(href.includes("es"))

  const activeSpanish = () => {
    setSpanish(true)
    navigate('/es')  
  }
  const activeEnglish = () => {
    setSpanish(false)
    navigate('/en')
  }

  return (
    <>
      <div className='lang-container  animate__animated animate__fadeIn animate__delay-2s'>
        <div className='lang'>
          <div className='lang-es active' onClick={ activeSpanish }>
            ES
          </div>
          <div className='lang-en' onClick={ activeEnglish }>
            EN
          </div>
          <div className={`background-active ${spanish? "es-active":"en-active"}`}></div>

        </div>
      </div>
    </>
  )
}
