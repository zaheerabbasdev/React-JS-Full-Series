
import { useState } from 'react'
import './App.css'
import Button from './Components/Button'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0);

  function handleClick (){
    setCount (count + 1);
  }
  

  return (
    <>
      <Card name= "Zaheer Abbas">
      {/* the below are the clidrens */}
      <h1>Hello Zaheer Abbas</h1>
      <p>Where you from</p>
      <p>i Am form Swabi</p>

      </Card>

      <Card name= "Noman">
        <p>How are you?</p>

      </Card>

      <Button handleClick= {handleClick} text = "Click Me">
      <h1>{count}</h1>

      </Button>
    </>
  )
}

export default App
