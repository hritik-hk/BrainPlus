import Gamecard from "./component/Gamecard";
import ReactionTimeTest from "./component/Games/ReactionTimeTest";
import Navbar from "./component/Navbar";



export default function Playground(){

  return(<>
     <div className="bg-[#111111]  text-white w-full">
    <Navbar />
    <ReactionTimeTest/>
    <div className="w-full h-24 flex items-center justify-center text-lg font-semibold tracking-wider"><span><q> FUN FACT: Your brain’s storage capacity is considered virtually unlimited ! </q></span></div>
    <div className="h-[600px] w-full bg-red-900">
    <Gamecard />
    </div>
    </div>
  </>)

}