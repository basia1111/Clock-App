import React, {createContext, useState } from 'react'

export const TimeZoneOffsetContext = createContext();

export const TimeZoneOffsetContextProvider = ({children}) => {

    // getTimezoneOffset returns the offset in minutes, we multiply by -60 to convert it to seconds
    const [timeZoneOffset, setTimeZoneOffset] = useState(new Date().getTimezoneOffset() * -60);

    return (
        <TimeZoneOffsetContext.Provider value = {{timeZoneOffset, setTimeZoneOffset}}>
            {children}
        </TimeZoneOffsetContext.Provider>

    )

}