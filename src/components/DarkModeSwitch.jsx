import {useContext} from 'react'
import {ModeContext} from '../context/ModeContext.jsx'
import sun from '../assets/images/sun.svg';
import moon from '../assets/images/moon.svg';


function DarkModeSwitch(){

     const {mode, setMode} = useContext(ModeContext)

    const toggleMode = () => {
        setMode( m => !m)
    }

    return(
        <div className="w-11/12 lg:w-8/12 pt-10 md:pt-0 pb-5 flex justify-end">
            <div className={`w-20 h-8 rounded-3xl p-1 relative ${ mode ? '[box-shadow:_inset_0_3px_10px_#000000;] bg-[#1d214d]':'[box-shadow:_inset_0_3px_10px_#d2dddd;] bg-[#f4ffff]'}`} > 
                <div onClick={toggleMode} className={`w-[24px] h-[24px] p-1 rounded-full absolute transition-all duration-700 
                ${ mode ?'right-[4px] bg-white rotate-[30deg] ' :'left-[4px] right-[100%]] bg-dark-purple rotate-0'}`}>

                    {mode ? <img src={sun} /> : <img src={moon} />}

                </div>
            </div>
        </div>
    )
}
export default DarkModeSwitch