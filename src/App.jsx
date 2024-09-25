import React from 'react';
import ModeContextProvider from './context/ModeContextProvider.jsx';
import AppContent from './components/AppContent.jsx'; // Create a separate file for this component

function App() {
    return (
        <ModeContextProvider>
            <AppContent />
        </ModeContextProvider>
    );
}

export default App;
