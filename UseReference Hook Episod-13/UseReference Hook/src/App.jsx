import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);

  let timerRef = useRef(null);
  // const [count, setCount] = useState(0);
  // // let value = 1;
  // // the value of normal variable is not persist so we use the useRef hook see in the below

  // let value = useRef(0);
  // let btnRef = useRef();

  // function handleClick() {
  //   value.current = value.current + 1;
  //   console.log("The value is:", value.current);
  //   setCount(count + 1);
  // }

  // function changeColor(){
  //   btnRef.current.style.backgroundColor = "green";


  // }

  // // it runs on every render
  // useEffect(() => {
  //   console.log("i will run on every render");
  // });

  function startTimer(){
    timerRef.current = setInterval(() => {
      setTime(time => time + 1);
      
      
    }, 1000);

  }

  function stopTimer(){
    clearInterval(timerRef.current);
    timerRef.current = null;

  }

  function resetTimer(){
    stopTimer();
    setTime(0);

  }

  return (
    <div>
      {/* <div>
        <h3>Count: {count}</h3>
      </div>
      <br />
      <button onClick={handleClick} ref={btnRef}>Increment</button>

      <br />
      <br />
      <button onClick={changeColor}>
        Change Color of 1st Button
      </button> */}
      
      <h1>Stopwatch: {time} Seconds </h1>

      <button onClick={startTimer}>
        Start
      </button>

      <br />
      <br />
      <button onClick={stopTimer}>
        Stop
      </button>

      <br />
      <br />
      <button onClick={resetTimer}>
        Reset
      </button>
    </div>
  );
}

export default App;
