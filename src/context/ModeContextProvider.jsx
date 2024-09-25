import React, {useState} from 'react'
import ModeContext from './ModeContext.js'


const ModeContextProvider = ({children}) => {

    const [mode, setMode] = useState(false)

    return (
        <ModeContext.Provider value={{mode, setMode}}>
            {children}
        </ModeContext.Provider>
    )

}

export default ModeContextProvider