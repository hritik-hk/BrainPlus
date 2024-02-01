import { useState, useRef } from "react";
import {gameObj} from "../../assets/gamesData";
import { Watch } from  'react-loader-spinner';

const DigitPlaybackTest = () => {
    const color='#6d59bc';

    const [status, setStatus] = useState('start');
    const [num, setNum] = useState('');
    const [level, setLevel] = useState(0);
    const spn = useRef();
    const input = useRef();
  
    const generateNum = () => {
      let n = '';
      for (let i = 0; i <= level; i++) {
        const r = Math.floor(Math.random() * 10);
        n += r;
      }
      setNum(n);
    };
  
    const start = () => {
      setStatus('game');
      generateNum();
      setTimeout(() => {
        setTimeout(() => {
          setStatus('input');
        }, 3000);
      }, 20);
    };
  
    const check = () => {
      if (+input.current.value === num) {
        setLevel(level + 1);
        setStatus('result');
      } else {
        setStatus('fail');
      }
    };
  
    const saveScore = () => {
      localStorage.setItem('number', `level ${level}`);
    };
  
    return (
        <div className={`py-5 flex flex-col justify-around items-center md:h-[570px] w-full cursor-pointer`}
        style={{ backgroundColor: color }}>
        {status === 'start' && (
          <div className='flex flex-col items-center'>
          <div className='h-[200px]' dangerouslySetInnerHTML={{ __html: gameObj.DigitPlaybackTest.svg }} />
          <p className=" py-5 text-7xl font-extrabold text-white ">Sequence Memory Test</p>
          <p className="m-1 text-3xl font-medium text-white">Memorize the pattern</p>
          <button onClick={start} className="mt-2 bg-[#e53707] hover:bg-[#E55807] text-white font-bold py-2 px-4 rounded text-2xl">Start</button>
       </div>
        )}
  
        {status=='game'  && (
          <div className='flex flex-col items-center' >
          <h1 className=" text-[150px] text-white" >{num}</h1>
          <Watch
             height="100"
             width="100"
             radius="48"
             color="#fff"
             ariaLabel="watch-loading"
             wrapperStyle={{}}
             wrapperClassName=""
             visible={true}
           />
          </div>
        )}
  
        {status === 'input' && (
            <div className='flex flex-col items-center' >
            <h2 className=" text-7xl text-white">What was the number?</h2>
            <input className=" text-5xl m-7 text-black" type="text" ref={input} />
            <button onClick={check} className="mt-4 bg-[#e53707] hover:bg-[#E55807] text-white font-bold py-2 px-4 rounded text-4xl">
            Submit
            </button>
          </div>
        )}
  
        {status === 'result' && (
          <div className='flex flex-col items-center'>
            <p className=" text-3xl ">Number</p>
            <h2 className=" text-6xl" >{num}</h2>
            <p className=" text-3xl " > Your answer</p>
            <h2 className=" text-6xl" >{input.current.value}</h2>
            <h1 className=" text-9xl">Level {level}</h1>
            <button onClick={start} className="mt-4 bg-[#e53707] hover:bg-[#E55807] text-white font-bold py-2 px-4 rounded text-4xl">
            Next
            </button>
          </div>
        )}
  
        {status === 'fail' && (
          <>
            <p>Number</p>
            <h2>{num}</h2>
            <p>Your answer</p>
            <h2 style={{ textDecoration: 'line-through', color: 'red' }}>
              {input.current.value}
            </h2>
            <h1>Level {level}</h1>
            <button className="primary-btn" onClick={saveScore}>
              save score
            </button>
            <a href="/">Home</a>
          </>
        )}
      </div>
    );
  };
  
  export default DigitPlaybackTest;