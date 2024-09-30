import React, {useState, useEffect, useContext} from 'react';
import { TimeZoneOffsetContext } from '../context/TimeZoneOffsetContext';

export default function useTime(){

    const[time, setTime] = useState(new Date());
    const{timeZoneOffset} = useContext(TimeZoneOffsetContext);
    
   useEffect(() => {
        const interval = setInterval(() => {
            let currentOffset = new Date().getTimezoneOffset() * -60;
            let currentTime =  new Date();
            setTime(new Date(currentTime.getTime() + (timeZoneOffset - currentOffset) * 1000));
        }, 1000);
        console.log('new timezone');

        return () => clearInterval(interval);
    },[timeZoneOffset]);

    return time;

}

