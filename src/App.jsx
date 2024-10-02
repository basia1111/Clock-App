import React from 'react';
import { ModeContextProvider } from './context/ModeContext.jsx';
import { TimeZoneOffsetContextProvider } from './context/TimeZoneOffsetContext.jsx';
import { LoadingContextProvider } from './context/LoadingContext.jsx';
import AppContent from './components/AppContent.jsx';

function App() {
    return (

        <ModeContextProvider>
            <TimeZoneOffsetContextProvider>
                <LoadingContextProvider>
                    <AppContent />
                </LoadingContextProvider>
            </TimeZoneOffsetContextProvider>
        </ModeContextProvider>
    );
}

export default App;
