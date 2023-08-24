import { useState, useRef } from 'react';
import svgData from "../../assets/icons";

const SequenceSymphonyTest = () => {
  const color='#6d59bc';
  const sound = ['C3', 'D3', 'E3', 'F3', 'G3', 'A4', 'B4', 'C4', 'D4'];

  const [status, setStatus] = useState('start');
  const [level, setLevel] = useState(1);
  const [playing, setPlaying] = useState(false);
  const curIndex = useRef(0);
  const sequence = useRef([]);

  const playSound = (i) => {
    let s = new Audio(
      `https://www.virtualmusicalinstruments.com/musical_instruments/xylophone/sounds/${sound[i]}.mp3`,
    );
    s.volume = 0.5;
    s.currentTime = 0;
    s.loop = false;
    s.play();
  };

  const genSequence = () => {
    const r = Math.floor(Math.random() * 9);

    sequence.current.push(r);
  };

  const wait = (ms) => {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, ms);
    });
  };

  const playSequence = async () => {
    setPlaying(true);

    await wait(600);
    for (let i = 0; i < sequence.current.length; i++) {
      const index = sequence.current[i];
      playSound(index);
      await wait(100);
      const elm = document.querySelector(`.game > [data-index="${index + 1}"]`);
      elm.classList.remove('bg-[#453875]');
      elm.classList.add('bg-[#fff]');
      await wait(500);
      elm.classList.remove('bg-[#fff]');
      elm.classList.add('bg-[#453875]');
      await wait(100);

    }

    setPlaying(false);
  };

  const start = async () => {
    setStatus('game');
    genSequence();
    setTimeout(() => {
      playSequence();
    }, 10);
  };

  const check = async (e) => {
    if (playing) return;

    e.target.classList.remove('bg-[#453875]');
    e.target.classList.add('bg-[#fff]');
    setTimeout(() => {
    e.target.classList.remove('bg-[#fff]');
    e.target.classList.add('bg-[#453875]');
    }, 300);

    console.log(e.target.dataset.index, sequence.current[curIndex.current] + 1);

    if (+e.target.dataset.index !== sequence.current[curIndex.current] + 1) {
      setStatus('result');
      return;
    }

    playSound(e.target.dataset.index - 1);
    curIndex.current += 1;

    if (curIndex.current >= sequence.current.length) {
      setLevel(level + 1);
      curIndex.current = 0;
      genSequence();
      playSequence();
    }
  };

  const saveScore = () => {
    localStorage.setItem('sequence', `level ${level}`);
  };

  return (
    <div className={`py-5 flex flex-col justify-around items-center md:h-[570px] w-full cursor-pointer`}
      style={{ backgroundColor: color }}>

      {status === 'start' && (
       <div className='flex flex-col items-center' onClick={start}>
          <div className='h-[200px]' dangerouslySetInnerHTML={{ __html: svgData.reactionTimeTest }} />
          <p className=" py-5 text-7xl font-extrabold text-white ">Sequence Memory Test</p>
          <p className="m-1 text-3xl font-medium text-white">Memorize the pattern</p>
          <p className="text-xl font-medium text-white">Click Anywhere to Start</p>
       </div>)
      }

      {status === 'game' && (
        <div className='game grid grid-cols-3 gap-5 place-items-center' onClick={check}>

         <div className="w-[100px] h-[100px] rounded-md bg-[#453875] transition ease-in-out duration-200 cursor-pointer" data-index="1"></div>
         <div className="w-[100px] h-[100px] rounded-md bg-[#453875] transition ease-in-out duration-200 cursor-pointer" data-index="2"></div>
         <div className="w-[100px] h-[100px] rounded-md bg-[#453875] transition ease-in-out duration-200 cursor-pointer" data-index="3"></div>
         <div className="w-[100px] h-[100px] rounded-md bg-[#453875] transition ease-in-out duration-200 cursor-pointer" data-index="4"></div>
         <div className="w-[100px] h-[100px] rounded-md bg-[#453875] transition ease-in-out duration-200 cursor-pointer" data-index="5"></div>
         <div className="w-[100px] h-[100px] rounded-md bg-[#453875] transition ease-in-out duration-200 cursor-pointer" data-index="6"></div>
         <div className="w-[100px] h-[100px] rounded-md bg-[#453875] transition ease-in-out duration-200 cursor-pointer" data-index="7"></div>
         <div className="w-[100px] h-[100px] rounded-md bg-[#453875] transition ease-in-out duration-200 cursor-pointer" data-index="8"></div>
         <div className="w-[100px] h-[100px] rounded-md bg-[#453875] transition ease-in-out duration-200 cursor-pointer" data-index="9"></div>

        </div>
      )}

      {status === 'result' && (
        <div>
          <p>Sequence Memory</p>
          <h1>Level {level}</h1>
          <button className="primary-btn" onClick={saveScore}>
            save score
          </button>
          <a href="/">Home</a>
        </div>
      )}
        </div>
  );
};

export default SequenceSymphonyTest;