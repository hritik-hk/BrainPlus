import  { useState, useEffect } from 'react';

//#6d59bc-purple , #E55807-orange

function ReactionTimeTest() {
  const [color, setColor] = useState('#6d59bc')
  const [startTime, setStartTime] = useState(null)
  const [reactionTime, setReactionTime] = useState(null)
  const [gameon,setGameon]=useState(false)

  useEffect(() => {
    if (color === '#6d59bc') {
      const randomDelay = Math.floor(Math.random() * 2000) + 3000; //dealy btw 3000ms-5000ms
      const timer = setTimeout(() => {
        setColor('#E55807');
        setStartTime(Date.now());
      }, randomDelay);

      return () => clearTimeout(timer);
    }
  }, [color]);



  const handleUserClick = () => {
    if (color === '#E55807' && startTime && !gameon) {
      const endTime = Date.now();
      setReactionTime(endTime - startTime);
      setGameon(true)
    }
    
  };

  const handleResetGame = () => {
    if(setGameon){
    setColor('#6d59bc');
    setStartTime(null);
    setReactionTime(null);
    setGameon(false);
    }
  };

  return (
    <>
      {reactionTime ? (
     <div className={`py-5 flex flex-col justify-around items-center md:h-[570px] w-full bg-[${color}] cursor-pointer `}
      onClick={handleResetGame}
     >
       <div>
          <p className="text-6xl font-extrabold text-white">Your reaction time: {reactionTime} ms</p>
          <p className="text-4xl font-extrabold text-white">Click to Keep Going !!</p>
       </div>   
     </div>
       
      
      ) : (
        <div className={`py-5 flex flex-col justify-around items-center md:h-[570px] w-full bg-[${color}] cursor-pointer `}
      onClick={handleUserClick}
     >
       <div>
          {color=="#6d59bc"?<p className="text-7xl font-extrabold text-white">Wait for Orange</p>:
          <p className="text-7xl font-extrabold text-white">CLICK!</p> 
          }
       </div>   
     </div>
   
      )}
      </>
    
  );
}

export default ReactionTimeTest;
