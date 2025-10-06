import React from 'react'
import { Wrapper } from '../../shared/wrapper'
import Heading from '../../shared/heading/Heading'
import Cards from "./Cards"
const Learning = () => {
    return (
        <Wrapper>
            <div id='learning' className='div-container min-h-screen flex xl:py-20 flex-col justify-center items-center w-full'>
                <Heading
                    tag="h1"
                    text="Learning Journey"
                    styleType="h1"
                />
                <Heading
                    tag="h2"
                    text="Courses and training that shaped my skills"
                    styleType="h2"
                />
                <Cards />
            </div>
        </Wrapper>
    )
}

export default Learning