import React, {useState, useEffect} from 'react'
import useTime from '../hooks/useTime.js'

function DigitalClock(){

    const time = useTime().toLocaleTimeString();
    return(
        <>
            <div className="digital-wrapper">
                <div className='font-digital text-dark-purple  dark:text-white lg:text-5xl sm:text-4xl text-3xl text-center [text-shadow:_1px_0_5px_#737892] dark:[text-shadow:_1px_0_10px_rgb(225_225_225)] p-7'>{time}</div>
            </div>
        </>
    )

}


export default DigitalClock