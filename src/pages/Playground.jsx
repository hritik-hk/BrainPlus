import Gamecard from "../component/Gamecard";
import Navbar from "../component/Navbar";
import WorkingMemoryTest from "./Games/WorkingMemoryTest";

export default function Playground(){

  return(<>
     <div className="bg-[#111111]  text-white w-full">
    <Navbar />
    <WorkingMemoryTest/>
    <div className="w-full h-24 flex items-center justify-center text-lg font-semibold tracking-wider"><span><q> FUN FACT: Your brain’s storage capacity is considered virtually unlimited ! </q></span></div>
    <div className="h-[600px] w-full bg-red-900">
    <Gamecard />
    </div>
    </div>
  </>)

}