import  { useState } from 'react';
import {gameObj} from "../../assets/gamesData";
//#6d59bc-purple , #7A9D54-green

function UltraInstinctTest() {
  const initialColor='#6d59bc';
  const startColor='#445069';
  const finalColor='#7A9D54';
  
  const [color, setColor] = useState(initialColor)
  const [startTime, setStartTime] = useState(null)
  const [reactionTime, setReactionTime] = useState(null)
  const [gameStatus, setGameStatus]=useState('start')
  const [level, setLevel]=useState(0)
  const [score, setScore]=useState([])
  const[finalScore,setFinalScore]=useState(null)

 
   const runGame=()=>{ 
      const randomDelay = Math.floor(Math.random() * 2000) + 3000; //dealy btw 3000ms-5000ms

       setTimeout(() => {
        setColor(finalColor);
        setStartTime(Date.now());
      }, randomDelay);

    }



  const handleUserClick = () => {
    if(color === initialColor){
        setColor(startColor)
        setGameStatus('running')
        runGame()
    }
    else if (color === finalColor && startTime) {
      const endTime = Date.now()
      setReactionTime(endTime - startTime)
      setLevel(level=>level+1)
    }
    
  }

  const gameOver=()=>{
    const sum = score.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average = sum / score.length;
    const averageFloor = Math.floor(average);
    setFinalScore(averageFloor)
    setGameStatus('over')
  }

  const handleResetGame = () => {

    if(finalScore){
      setColor(initialColor)
      setStartTime(null)
      setReactionTime(null)
      setGameStatus('start')
      setLevel(0)
      setScore([])
      setFinalScore(null)
      return
    } 
  
    //add to score
    setScore([...score,reactionTime])

    setColor(startColor);
    setStartTime(null);
    setReactionTime(null);

    if(level<4){
      runGame()
    }
    else{
      gameOver()
    }
    
  };

  return (
    <>
      {(gameStatus==='start')? (
        <div className={`py-5 flex flex-col justify-around items-center md:h-[570px] w-full cursor-pointer`}
      onClick={handleUserClick}
      style={{ backgroundColor: color }}
     >
       <div className='flex flex-col items-center'>
          <div className='h-[200px]' dangerouslySetInnerHTML={{ __html: gameObj.UltraInstinctTest.svg }} />
          <p className=" py-5 text-7xl font-extrabold text-white ">Reaction Time Test</p>
          <p className="text-3xl font-semibold text-white">Click as fast as your can, when the grey box turns green!</p>
          <p className="text-2xl font-medium text-white">Click Anywhere to Start</p>
       </div>   
     </div>):
     (gameStatus==='running'?
     (reactionTime?
     <div className={`py-5 flex flex-col justify-around items-center md:h-[570px] w-full cursor-pointer`}
      onClick={handleResetGame}
      style={{ backgroundColor: color }}
     >
       <div>
          <p className="text-6xl font-extrabold text-white">Your reaction time: {reactionTime} ms</p>
          <p className="text-3xl font-medium text-white">click to Keep Going !!</p>
       </div>   
     </div>
       
      : 
        <div className={`py-5 flex flex-col justify-around items-center md:h-[570px] w-full cursor-pointer`}
      onClick={handleUserClick}
      style={{ backgroundColor: color }}
     >
       <div>
          {color==startColor?<p className="text-7xl font-extrabold text-white">Wait for Green!</p>:
          <p className="text-7xl font-extrabold text-white">CLICK!</p> 
          }
       </div>   
     </div>)
     :
     (<div className={`py-5 flex flex-col justify-around items-center md:h-[570px] w-full cursor-pointer`}
      style={{ backgroundColor: color }}
     >
       <div className='flex flex-col items-center'>
          <div className='m-2 h-[80px]' dangerouslySetInnerHTML={{ __html: svgData.reactionTimeTest }} />
          <p className=" m-2 text-3xl font-extrabold text-white ">Reaction Time </p>
          <p className="text-8xl font-extrabold text-white">{finalScore}ms</p>
          <p className="m-3 text-3xl font-extrabold text-white">Save your score to compare in Dashboard</p>
          <div className='w-3/4 flex justify-between'>
          <button className="bg-[#E55807] hover:bg-[#e53707] text-white font-bold py-2 px-4 rounded text-2xl">
          save score
          </button>
          <button onClick={handleResetGame} className="bg-[#E55807] hover:bg-[#e53707] text-white font-bold py-2 px-4 rounded text-2xl">
          Try again
          </button>
          </div>
       </div>   
     </div>)

     )
      }
      </>
    
  );
}

export default UltraInstinctTest;
