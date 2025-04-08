import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }


  function expensiveTask(num){
    console.log("inside Expensive Task");
    for(let i = 0; i <= 1000000000; i++){

    }
    return num * 2;

  }


  let doubleValue = useMemo(() => expensiveTask(input), [input]);
 

  return (
    <div>
    <h3>Count is: {count}</h3>
    <br />
    <div>
      Double is: {doubleValue}
     </div>
     <br />
     <input type="number" placeholder='Enter number' value={input} onChange={(e) => setInput(e.target.value)} />
     <br />
     <br />
     <button onClick={handleClick}>
      Increase Count
     </button>
     
    </div>
  )
}

export default App
