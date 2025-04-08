import React, { useEffect, useState } from 'react'

const Logger = () => {
    const [count, SetCount] = useState(0);

    function handleClick(){
        SetCount(count + 1);
    }

    // run on every render


    useEffect(() =>{
        console.log("component render or count change", count);
    });


  return (
    <div>
        <h3>Count: {count}</h3>
        <button onClick={handleClick}>Increament</button>
    </div>
  )
}

export default Logger