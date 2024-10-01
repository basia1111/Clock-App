import React, {useState, useEffect} from 'react'
import useTime from '../hooks/useTime.js'

function AnalogClock(){

    const minutes = Array.from({length: 60}, (_, i) => i);

    let time = useTime();
    const hours = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();
    
    return(
        <div className ="w-full max-w-[270px] aspect-square rounded-full border-4 p-20 border-dark-purple  dark:border-white relative">

            <div className = "absolute  z-10 bg-dark-purple  dark:bg-white w-[3px] h-[25%] origin-bottom bottom-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 "
                style={{transform: `rotate(${hours * 30}deg)`, transition: hours === 0 ? 'none' : 'transform 0.05s linear',}}
            ></div>
            <div className = "absolute  z-20 bg-dark-purple  dark:bg-white w-[3px] h-[35%] origin-bottom bottom-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 "
                style={{transform: `rotate(${min * 6}deg)`, transition: min === 0 ? 'none' : 'transform 0.05s linear',}}
            ></div>
            <div className = "absolute z-30 bg-dark-purple  dark:bg-white w-[2px] h-[43%] origin-bottom bottom-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 " 
                style={{transform: `rotate(${sec * 6}deg)`, transition: sec === 0 ? 'none' : 'transform 0.05s linear',}}
            ></div>
            <div className = "absolute z-40 bg-dark-purple  dark:bg-white  w-[4%] h-[4%] origin-bottom top-[50%] left-[50%]  transform -translate-x-1/2 -translate-y-1/2 rounded-full "></div>

            {minutes.map( min => (
                        <div key={min} className = "absolute w-[50%] h-[2px] origin-[0_0] top-[50%] left-[50%]"
                        style={{transform: `rotate(${min * 6}deg)`}}
                        >
                            <div className = {`absolute z-30 bg-dark-purple  dark:bg-white origin-[0_-5%] top-0 right-0 rounded-tl-[1px] rounded-bl-[1px]
                                ${min % 5 === 0 ? 'w-[7%] h-[2px]' : 'w-[4%] h-[2px]'}
                            `}> </div> 
                        </div>
                    )
                )
            }

        </div>
    )
}

export default AnalogClock
