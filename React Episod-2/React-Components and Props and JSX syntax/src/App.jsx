
import './App.css'
import UserCard from './Components/UserCard'
import image1 from "./assets/image-2.jpg"
import image2 from "./assets/image-7.jpg"
import image3 from "./assets/zaheer.jpg"

function App() {
 

  return (
    <div className='container'>
      <UserCard name= "Zaheer Abbas" desc="I am Zaheer abbas" image= {image1} style = {{"border-radius": "20px"}}/>
      <UserCard name= "Noman khan" desc = "I am Noman khan" image = {image2} style = {{"border-radius": "20px"}}/>
      <UserCard name= "Ali" desc = "I am ali" image ={image3} style = {{"border-radius": "20px"}}/>
   </div>
  )
}

export default App
