import React, { useContext } from 'react';
import ModeContext from '../context/ModeContext';
import DarkModeSwitch from './DarkModeSwitch';
import DigitalClock from './DigitalClock';
import AnalogClock from './AnalogClock';
import CurrentDate from './CurrentDate';

function AppContent() {
    const { mode } = useContext(ModeContext);

    return (
        <div className={mode ? 'dark' : ''}>
            <div className="h-screen w-screen flex flex-col items-center justify-top md:justify-center dark:bg-[url('./assets/images/bg-dark.png')] bg-[url('./assets/images/bg-light2.png')] bg-cover md:bg-center bg-left">
                <DarkModeSwitch />
                <div className="w-11/12 lg:w-8/12 h-4/5 bg-transparent-white backdrop-blur-[30px] flex flex-col justify-around items-center rounded-3xl sm:p-10 p-5">
                    <h1 className="font-poppins text-dark-purple dark:text-white text-4xl font-bold">React Clock</h1>
                    <AnalogClock />
                    <DigitalClock />
                    <CurrentDate />
                </div>
            </div>
        </div>
    );
}

export default AppContent;
