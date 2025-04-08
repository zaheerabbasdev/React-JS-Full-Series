
import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  // Create State
  // Manage State
  // Change State
  // and sync the state in all the childs


  const [name, setName] = useState('');
 

  return (
    <>
      <Card title = "Card1" name = {name} setName={setName }/>
      <Card title = "Card2" name = {name} setName={setName }/>
      {/* <p>I am inside Parent Component and value of name is {name}</p> */}
    </>
  )
}

export default App
