import React, { useState } from 'react'
import "./Counter.css"
const Counter = () => {
    const [count, setCount] = useState(0);

    // function handleClick(){
    //     setCount(count + 1);
    // }
  return (
    <div className='counter-container'>
        <p>You complete {count} times</p>
        <button onClick={()=>{
            setCount(count + 1)
        }}>Click Me</button>

    </div>
  )
}

export default Counter