import React, { useState, useContext } from 'react';
import { TimeZoneOffsetContext } from '../context/TimeZoneOffsetContext';
import { LoadingContext } from '../context/LoadingContext';

function TimeZone() {
    const { setTimeZoneOffset } = useContext(TimeZoneOffsetContext);
    const [currentTimeZone, setCurrentTimeZone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);
    const { setLoading } = useContext(LoadingContext);
    
    const timeZoneList = [
        "America/New_York", 
        "America/Los_Angeles",  
        "Europe/London",    
        "Europe/Moscow",  
        "Asia/Tokyo", 
        "Asia/Dubai",  
        "Australia/Sydney",  
        "Asia/Singapore",  
    ];

    const API_KEY = 'GBSZ2MHWYSAC';

    const fetchTime = (newTimezone) => {
        setLoading(true);
        fetch(`https://api.timezonedb.com/v2.1/get-time-zone?key=${API_KEY}&format=json&by=zone&zone=${newTimezone}`)
            .then((response) => response.json())
            .then((data) => {
                if (data && data.status === 'OK') {
                    setTimeZoneOffset(data.gmtOffset);
                } else {
                    console.error('Error fetching time:', data.message);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching time:', err);
                setLoading(false);
            });
    };

    const changeTimeZone = (e) => {
        const newTimeZone = e.target.value;
        setCurrentTimeZone(newTimeZone);
        fetchTime(newTimeZone);
    };

    return (
        <div>
            <select 
                onChange={changeTimeZone} 
                value={currentTimeZone} 
                className="pr-10 pl-3 pt-3 pb-3 rounded-3xl shadow-[inset_0_3px_10px_#484f88] 
                           dark:shadow-[inset_0_3px_10px_#344646] bg-dark-purple dark:bg-[#e1ecec] 
                           text-white dark:text-[#070b32] appearance-none dark:bg-down-dark 
                           bg-down-light bg-no-repeat bg-custom-position bg-custom-size">
                <option value={Intl.DateTimeFormat().resolvedOptions().timeZone}>
                    Current Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
                </option>
                {timeZoneList.map((timezone, index) => (
                    <option key={index} value={timezone}>
                        {timezone}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default TimeZone;
