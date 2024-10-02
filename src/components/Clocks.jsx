import React, { useContext } from 'react';
import { LoadingContext } from '../context/LoadingContext';
import { ModeContext } from '../context/ModeContext';
import AnalogClock from './AnalogClock';
import DigitalClock from './DigitalClock';
import ClipLoader from "react-spinners/ClipLoader";

function Clocks() {
    const { loading } = useContext(LoadingContext);
    const { mode } = useContext(ModeContext);

    return (
        <div className="relative flex flex-col items-center">
            {loading && (
                <div className="absolute inset-0 flex justify-center items-center z-10">
                    <ClipLoader color={mode ? "#FFFFFF" : "#060a30"} loading={loading} size={50} />
                </div>
            )}
            <div className={loading ? "opacity-10 flex flex-col justify-center items-center" : "flex flex-col justify-center items-center"}>
                <AnalogClock />
                <DigitalClock />
            </div>
        </div>
    );
}

export default Clocks;
