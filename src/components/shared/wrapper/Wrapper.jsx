import React from 'react'

const Wrapper = ({ children }) => {
    return (
        <div className=' md:max-w-screen-lg xl:max-w-screen-xl mx-auto sm:px-3'>
            {children}
        </div>
    )
}

export default Wrapper