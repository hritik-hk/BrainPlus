import Gamecard from "./component/Gamecard"
import Navbar from "./component/Navbar"
import StartScreen from "./component/StartScreen"



function App(){

  return(
    <div className="bg-[#111111]  text-white w-full">
    <Navbar />
    <StartScreen />
    <div className="w-full h-24 flex items-center justify-center text-lg font-semibold tracking-wider"><span><q> FUN FACT: Your brain’s storage capacity is considered virtually unlimited ! </q></span></div>
    <div className="h-[600px] w-full bg-red-900">
    <Gamecard />
    </div>
    </div>
  )
}

export default App
