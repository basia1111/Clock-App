import React, { useState, useContext} from 'react';
import { TimeZoneOffsetContext } from '../context/TimeZoneOffsetContext';

function TimeZone() {


    const {setTimeZoneOffset} = useContext(TimeZoneOffsetContext);
    const [currentTimeZone, setCurrentTimeZone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);
    
    const timeZoneList = [
        "America/New_York", 
        "America/Los_Angeles",  
        "Europe/London",  
        "Europe/Paris", 
        "Europe/Moscow",  
        "Asia/Tokyo", 
        "Asia/Dubai",  
        "Australia/Sydney",  
        "Asia/Singapore",  
      ];

    const API_KEY = 'GBSZ2MHWYSAC';

    const fetchTime =  (newTimezone) => {

        fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=${API_KEY}&format=json&by=zone&zone=${newTimezone}`)
            .then( response => response.json())
            .then( data => {

                if (data && data.status == 'OK') {
                   
                    console.log(data.gmtOffset);
                    setTimeZoneOffset(data.gmtOffset);
                } else {
                    console.error('Error fetching time: ', data.message);
                }

            })
            .catch(err => console.error('Error fetching time: ', err));
    }

    
   const changeTimeZone = (e) => {
        let currentTimeZone = e.target.value;
        setCurrentTimeZone(currentTimeZone)
        fetchTime(currentTimeZone);
    }

    return(
        <div>
            <select onChange={changeTimeZone} value={currentTimeZone}>
                <option value={Intl.DateTimeFormat().resolvedOptions().timeZone}>CurrentTimezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}</option>
                {timeZoneList.map((t, index) => (
                    <option key={index} value={t}>
                        {t}
                    </option>
                ))}
            </select>
        </div>  
    );
}


export default TimeZone
