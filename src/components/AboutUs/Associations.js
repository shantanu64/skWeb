import React from 'react'
import AssociationsSlider from './AssociationsSlider'

const Associations = () => {
    return (
        <div className='my-6'>
            <h2 className='font-bold px-6 md:px-0 text-headGreen text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center'>
                Companies We Are Associated With
            </h2>
            <div>
                <AssociationsSlider />
            </div>
        </div>
    )
}

export default Associations