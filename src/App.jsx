import DigitalClock from './components/DigitalClock.jsx'
import AnalogClock from './components/AnalogClock.jsx'
import CurrentDate from './components/CurrentDate.jsx'

function App() {

  return(
    <>
      <div className="w-11/12 lg:w-8/12  h-4/5 bg-transparent-white backdrop-blur-[30px] flex flex-col justify-around items-center  rounded-3xl sm:p-10 p-5">
        <h1 className="font-poppins text-white text-4xl font-bold"> Clock</h1>
        <AnalogClock />
        <DigitalClock />
        <CurrentDate />  
      </div>
    </>
  )

}

export default App
