import React, {useState, useEffect} from 'react'

export default function useTime(){

    const[time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime( t => new Date())
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return time;

}

