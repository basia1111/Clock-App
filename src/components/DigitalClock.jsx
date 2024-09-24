import React, {useState, useEffect} from 'react'
import useTime from '../hooks/useTime.js'

function DigitalClock(){

    const time = useTime().toLocaleTimeString();
    return(
        <>
            <div className="digital-wrapper">
                <div className='font-digital text-white lg:text-7xl sm:text-5xl text-3xl text-center [text-shadow:_1px_0_10px_rgb(225_225_225)] p-7'>{time}</div>
                <div className='font-poppins text-white text-center text-base font-light'>{Intl.DateTimeFormat().resolvedOptions().timeZone}</div>
            </div>
        </>
    )

}


export default DigitalClock