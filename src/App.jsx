import React from 'react';
import { ModeContextProvider } from './context/ModeContext.jsx';
import { TimeZoneOffsetContextProvider } from './context/TimeZoneOffsetContext.jsx';
import AppContent from './components/AppContent.jsx';

function App() {
    return (

        <ModeContextProvider>
            <TimeZoneOffsetContextProvider>
                <AppContent />
            </TimeZoneOffsetContextProvider>
        </ModeContextProvider>
    );
}

export default App;
