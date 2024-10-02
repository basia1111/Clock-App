import React, { useState, useEffect, useContext, useRef } from 'react';
import { TimeZoneOffsetContext } from '../context/TimeZoneOffsetContext';

export default function useTime() {
    const [time, setTime] = useState(new Date());
    const { timeZoneOffset } = useContext(TimeZoneOffsetContext);
    const offsetRef = useRef(timeZoneOffset);

    const updateTime = () => {
        const currentOffset = new Date().getTimezoneOffset() * -60;
        const currentTime = new Date();
        setTime(new Date(currentTime.getTime() + (offsetRef.current - currentOffset) * 1000));
    };

    useEffect(() => {
        offsetRef.current = timeZoneOffset;
        updateTime();

        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, [timeZoneOffset]);

    return time;
}
