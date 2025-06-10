import React from 'react'

function Border() {
    return (
        <div>
            <h1 className='border-4 border-pink-400'>Hello this border</h1>
            <h1 className='border-4 border-dashed rounded-2xl border-pink-400'>Hello this border</h1>
            <h1 className='border-4 border-dotted border-pink-400'>Hello this border</h1>
            <h1 className='border-4 border-pink-400'>Hello this border</h1>
            <h1 className='border-4 order-double border-pink-400'>Hello this border</h1>

            <h1 className='outline-8 rounded-3xl outline-lime-300 outline-dashed'>outline</h1>
        </div>
    )
}

export default Border
