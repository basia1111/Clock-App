import React, {useState} from 'react'

function CurrentDate(){
    
    const [date, setDate] = useState(new Date());
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return(
        <div className='font-poppins text-white text-center sm:text-2xl  text-xl font-extralight'>
            {date.toLocaleDateString("en-US", options)}
        </div>
    );

}

export default CurrentDate