import { useRef, useState } from 'react';
import {gameObj} from "../../assets/gamesData";
import "../../assets/css/WorkingMemoryTest.css"

const WorkingMemoryTest = () => {
  const color='#6d59bc';
  

  const [status, setStatus] = useState('start');
  const [curNum, setCurNum] = useState(1);
  const [hidden, setHidden] = useState(false);

  const lives = useRef(3);
  const level = useRef(1);
  const array = useRef([]);
  const indexes = useRef([]);

  const genArr = () => {
    const tempArr=[]
    for (let i = 1; i <= level.current + 3; i++) {
        tempArr.push(i)
      }
    array.current =tempArr
  };

  const genIndexes = () => {
    const arr = [];
    while (arr.length != level.current + 3) {
      let r = Math.floor(Math.random() * 9 * 7);
      if (!arr.includes(r)) {
        arr.push(r);
      }
    }
    indexes.current = arr;
  };

  const hide = () => {
    document
      .querySelectorAll('.game div')
      .forEach((div) => div.classList.add('active'));
  };

  const reset = () => {
    setCurNum(1);
    setHidden(false);
    document.querySelectorAll('.game div').forEach((d) => {
      d.classList.remove('active');
      d.innerText = '';
      d.style.visibility = 'hidden';
    });
  };

  const show = async () => {
    reset();
    setTimeout(() => {
      if (document.querySelector('.game')) {
        for (let i = 0; i < indexes.current.length; i++) {
          const index = indexes.current[i];
          document.querySelector(`#cell-${index}`).innerText = array.current[i];
          document.querySelector(`#cell-${index}`).style.visibility = 'visible';
        }
      }
    }, 500);
  };

  const next=()=>{
    genArr();
    genIndexes();
    if(status!=='next'){
        setStatus('next');
        return;
    }

    setStatus('game');
    
    setTimeout(() => {
      show();
    }, 10);
  }

  const check = (e) => {
    if (!hidden) {
      hide();
      setHidden(true);
      return;
    }

    e.target.classList.remove('active');

    if (curNum === parseInt(e.target.innerText)) {
      if (curNum === array.current.length) {
        level.current++;
        next()
      } else {
        setCurNum(curNum + 1);
      }
    } else {
      lives.current--;
    //   genArr();
    //   genIndexes();
    //   show();

      if (lives.current === 0) {
        setStatus('result');
      }
      else{
        setStatus('next')
      }
    }
  };

  const saveScore = () => {
    localStorage.setItem('chimp', `level ${level.current}`);
  };

  return (
    <div className={`py-5 flex flex-col justify-around items-center md:h-[570px] w-full cursor-pointer`}
      style={{ backgroundColor: color }}>
      {status === 'start' && (
        <>
         <div className='h-[200px]' dangerouslySetInnerHTML={{ __html: gameObj.WorkingMemoryTest.svg }} />
          <h2 className="text-7xl">Test your working memory.</h2>
          <div className="flex flex-col justify-around items-center">
          <p className="text-2xl font-[300]">Remember the squares and then click the squares in order according to their numbers, when numbers disappear</p>
          <p className="text-2xl font-[300]">The difficulty increases as game progresses</p>
          <p className="text-2xl bg-black p-1" >You will get 3 lives before a game overs!</p>
          </div>
          <button onClick={next} className="mt-2 bg-[#e53707] hover:bg-[#E55807] text-white font-bold py-2 px-4 rounded text-2xl">
          Start
          </button>
        </>
      )}

      {status === 'game' && (
        <>
          <div className="game grid grid-cols-[repeat(9,60px)] grid-rows-[repeat(7,60px)] gap-5 place-items-center">
            {[...Array(9 * 7).keys()].map((x) => (
              <div 
              key={x} 
              id={`cell-${x}`} 
              onClick={check}></div>
            ))}
          </div>
        </>
      )}

      {status === 'next' && (
        <>
          <p className="text-3xl">NUMBERS</p>
          <h1 className="text-8xl">{level.current+3}</h1>
          <p className="text-3xl">Lives Left</p>
          <h1 className="text-6xl">{lives.current} of 3</h1>
          <button onClick={next} className="mt-2 bg-[#e53707] hover:bg-[#E55807] text-white font-bold py-2 px-4 rounded text-2xl">
          Continue
          </button>
        </>
      )}

      {status === 'result' && (
        <>
          <p className="text-4xl">Score</p>
          <h1 className="text-8xl">{level.current}</h1>
          <button onClick={saveScore} className="mt-2 bg-[#e53707] hover:bg-[#E55807] text-white font-bold py-2 px-4 rounded text-2xl">
          Save score
          </button>
          <button className="mt-2 bg-[#c1eb29] hover:bg-[#62ff46] text-white font-bold py-2 px-4 rounded text-2xl">
           Home
          </button>
        </>
      )}
    </div>
  );
};

export default WorkingMemoryTest;