import { useEffect, useState } from 'react'
import './App.css'
import Logger from './Components/Logger'
import Timer from './Components/Timer'
import DataFetcher from './Components/DataFetcher'
import ResizeWindow from './Components/ResizeWindow'
import MultipleEffect from './Components/MultipleEffect'

function App() {
  const [count, SetCount] = useState(0);
  const [total, SetTotal] = useState(1);

  function handleClick(){
    SetCount (count + 1);
  }


  function handleTotal(){
    SetTotal(total + 1);
  }

  // First:  Side-effect Function
  // Second: Clean-up Function
  // Third: Comma separated dependencies list


  // useEffect(() => {
  //   first
  
  //   return () => {
  //     second
  //   }
  // }, [third])



  // Variation: 1
  // run on every render

  // useEffect(() =>{
  //   alert("I will run on each render");

  // }) 



  // Variation: 2
  // That run on only first render

  // useEffect(() =>{
  //   alert("I will run on only first render");
  // }, [])


  

  // Variation: 3

  // useEffect(() =>{
  //   alert("I will run every time when count is updated");
  // }, [count])



  // Variation: 4
  // Multiple Dependencies

  // useEffect(() =>{
  //   alert("I will run every time when count and total is updated");

  // }, [count, total])



  // Variation: 5
  // Add clean-up function
  useEffect(() => {
    alert("count is updated");
  
    return () => {
      alert("count is unmouted(mean remove) from UI");
    }
  }, [count])
  

  return (
    <>
     <button onClick={handleClick}>
      Click Me
     </button>
     <br />
     <p>Count is: {count}</p>
     <br />
     <button onClick={handleTotal}>
      Total
     </button>
     <p>Total is:{total}</p>

     {/* <Logger/> */}
     {/* <Timer/> */}
     {/* <DataFetcher/> */}
     {/* <ResizeWindow/> */}
     {/* <MultipleEffect/> */}
    </>
  )




}

export default App
