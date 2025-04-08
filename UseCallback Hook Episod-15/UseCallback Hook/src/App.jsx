// import { useCallback, useState } from "react";
// import "./App.css";
// import ChildComponent from "./Components/ChildComponent";

// function App() {
//   // Case-1
//   const [count, setCount] = useState(0);

//   // function handleClick() {
//   //   setCount(count + 1);
//   // }

//   const handleClick = useCallback(() => {
//     setCount(count + 1);
//   }, [count]);

//   return (
//     <div>
//       <p>Count is: {count}</p>
//       <button onClick={handleClick}>Increase Count</button>
//       <br />
//       <br />
//       <ChildComponent buttonName="Click Me" handleClick={handleClick} />
//     </div>
//   );
// }

// export default App;


import React from 'react'
import ExpensiveComponent from './Components/ExpensiveComponent'

const App = () => {
  // Case-2
  return (
    <div>
      <ExpensiveComponent/>
    </div>
  )
}

export default App