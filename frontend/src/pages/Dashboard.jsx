import {AiFillPlayCircle} from "react-icons/ai"
import {ImStatsDots} from 'react-icons/im'


export default function Dashboard() {
  return (
    <div className="bg-[#111111]  text-white w-full">
      <div className="flex flex-col  justify-center items-center">
        <div className="bg-[#262A56] mt-5 mb-2 h-[270px] w-2/3 p-7 rounded-lg shadow-sm flex flex-col justify-evenly items-start">
          <div>
            <p className=" text-2xl text-slate-300">Username</p>
            <h2 className="text-5xl font-bold tracking-wide">slash_hritik</h2>
          </div>
          <div>
            <p className=" text-2xl text-slate-300">Joined</p>
            <h3 className=" text-3xl">1 month ago</h3>
          </div>
          <div className="text-2xl text-slate-300">
            <span className="text-red-500">Login</span> or <span className="text-red-500">Sign-up</span> to save your results!
          </div>
        </div>
        <div className="bg-[#262A56] mt-5 mb-2 h-[600px] w-2/3 p-7 rounded-lg shadow-sm">
          <table className="w-full h-full border-separate border-spacing-y-4">
            <thead>
              <tr className="text-3xl">
                <th>Games</th>
                <th>Actions</th>
                <th>Current score</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#222549] text-2xl text-center">
                <td className="text-2xl text-center">Sequence Symphony</td>
                <td className="text-center text-2xl">
                <span><AiFillPlayCircle className="inline"/>  Play</span>
                <span className="ml-5"><ImStatsDots className="inline"/>  Stats</span>
                </td>
                <td><span className="text-3xl">44.0</span><span className="text-base"> points</span></td>
              </tr>
              <tr className="bg-[#222549] text-2xl text-center">
                <td className="text-2xl text-center" >Typing Test</td>
                <td className="text-center text-2xl">
                <span><AiFillPlayCircle className="inline"/>  Play</span>
                <span className="ml-5"><ImStatsDots className="inline"/>  Stats</span>
                </td>
                <td><span className="text-3xl">44.0</span><span className="text-base"> points</span></td>
              </tr>
              <tr className="bg-[#222549] text-2xl text-center">
                <td >Working Memory</td>
                <td >
                <span><AiFillPlayCircle className="inline"/>  Play</span>
                <span className="ml-5"><ImStatsDots className="inline"/>  Stats</span>
                </td>
                <td><span className="text-3xl">44.0</span><span className="text-base"> points</span></td>
              </tr>
              <tr className="bg-[#222549] text-2xl text-center">
                <td className="text-2xl text-center">Digit Playback</td>
                <td className="text-center text-2xl">
                <span><AiFillPlayCircle className="inline"/>  Play</span>
                <span className="ml-5"><ImStatsDots className="inline"/>  Stats</span>
                </td>
                <td><span className="text-3xl">44.0</span><span className="text-base"> points</span></td>
              </tr>
              <tr className="bg-[#222549] text-2xl text-center">
                <td className="text-2xl text-center">Ultra instinct</td>
                <td className="text-center text-2xl">
                <span><AiFillPlayCircle className="inline"/>  Play</span>
                <span className="ml-5"><ImStatsDots className="inline"/>  Stats</span>
                </td>
                <td><span className="text-3xl">44.0</span><span className="text-base"> points</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
