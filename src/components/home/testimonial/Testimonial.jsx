import React from 'react'
import Wrapper from '../../shared/wrapper/Wrapper'
import Heading from '../../shared/heading/Heading'
import Cards from "./Cards"
const Testimonial = () => {
    return (
        <Wrapper>
            <div id='testimonial' className='div-container min-h-screen flex xl:py-20 flex-col justify-center items-center w-full'>
                <Heading
                    tag="h1"
                    text="Testimonial"
                    styleType="h1"
                />
                <Heading
                    tag="h2"
                    text="Reviews from My Satisfied Clients"
                    styleType="h2"
                />
                <Cards />
            </div>
        </Wrapper>
    )
}

export default Testimonial