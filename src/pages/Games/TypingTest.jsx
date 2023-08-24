import { useEffect, useState, useRef } from "react";
import "../../assets/css/TypingTest.css";

const TypingTest = () => {
  const color = "#6d59bc";
  const [seconds, setSeconds] = useState(0);
  const [started, setStarted] = useState(false);
  const text =`Once upon a time there lived a poor widow and her son Jack. One day, Jack's mother told him to sell their only cow. Jack went to the market and on the way he met a man who wanted to buy his cow. Jack asked, "What will you give me in return for my cow?" The man answered, "I will give you five magic beans!" Jack took the magic beans and gave the man the cow. But when he reached home, Jack's mother was very angry. She said, "You fool! He took away your cow and gave you some beans!" She threw the beans out of the window. Jack was very sad and went to sleep without dinner.`;

  const correct = useRef(0);
  const input = useRef(0);
  let curIndex = 0;
  // let started = false;

  useEffect(() => {
    let loop = null;
    if (started) {
      loop = setInterval(() => {
        console.log("loop");
        setSeconds(seconds + 1);
      }, 1000);
    } else if (!started && seconds !== 0) {
      clearInterval(loop);
    } else {
      document.addEventListener("keypress", key);
      document.addEventListener("keydown", del);
    }

    return () => clearInterval(loop);
  }, [started, seconds]);

  const del = (e) => {
    if (e.key !== "Backspace") return;
    if (curIndex !== 0) {
      curIndex--;
      document.querySelector(
        `.input-area .letter[data-index="${curIndex}"]`
      ).className = "letter";
      moveCursor(0);
    }
  };

  const moveCursor = (n) => {
    document.querySelector(".text-cursor").remove();
    const nextElm = document.querySelector(
      `.input-area .letter[data-index="${curIndex + n}"]`
    );
    const span = document.createElement("span");
    span.innerText = "|";
    span.classList.add("text-cursor");
    document.querySelector(".input-area").insertBefore(span, nextElm);
  };

  // const timer = () => {
  //   setInterval(() => {
  //     seconds.current++;
  //     console.log('loop');
  //   }, 1000);
  // };

  const key = (e) => {

    e.preventDefault();

    if (!started) {
      setStarted(true);
      // timer();
    }

    const curElm = document.querySelector(
      `.input-area .letter[data-index="${curIndex}"]`
    );

    if (curElm) {
      input.current++;
      if (text[curIndex] === e.key) {
        curElm.classList.add("right");
        correct.current++;
      } else {
        curElm.classList.add("wrong");
      }
      moveCursor(1);
      curIndex += 1;
    }

    if (input.current === text.length) {
      // clearInterval(loop);
      // setLoop(null);
      setStarted(false);
    }
  };

  const saveScore = () => {
    const s = Math.floor(correct.current / 5 / (seconds / 60));
    localStorage.setItem("typing", `${s} WPM`);
  };

  return (
    <div
      className={`py-5 flex flex-col justify-around items-center md:h-[570px] w-full cursor-pointer`}
      style={{ backgroundColor: color }}
    >
      {text.length !== input.current && (
        <>
          {seconds === 0 && <h2 className="text-6xl">Typing Test</h2>}
          {seconds !== 0 && (
            <h2 className="text-6xl">{Math.floor(correct.current / 5 / (seconds / 60))}</h2>
          )}

          <p className="text-3xl">How many words per minute can you type?</p>
          <div className="input-area bg-slate-200 text-black text-[23px] font-light w-3/5 p-6 rounded-lg leading-relaxed ">
            {/* spliting text string to array of characters,
            then mapping each character to <span>character</span> 
            to make an array of span elements containing each character of text string  */}

            <span className="text-cursor">|</span>
            {text.split("").map((k, i) => (
              <span key={i} data-index={i} className="letter">
                {k}
              </span>
            ))}
          </div>
          <p className="text-2xl font-normal">Start typing to begin.</p>
        </>
      )}

      {text.length === input.current && (
        <>
          <p className="text-4xl">Typing Test</p>
          <h2 className="text-7xl">{Math.floor(correct.current / 5 / (seconds / 60))} WPM</h2>
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
export default TypingTest;
