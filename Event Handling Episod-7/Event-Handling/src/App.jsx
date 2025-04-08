import './App.css'

function App() {

  function handleClick() {
    alert("Hi Zaheer abbas");
  }


  function handleMouseOver(){
    alert("Mouse was over");
  }


  function handleInputChange(e){
    console.log("The value till now", e.target.value);
  }
  

  function handleSubmit(e){
    e.preventDefault();
    // i am writing my custom behaviour down
    alert("Submit the form");
  }

  return (
    <>

    <form action="" onSubmit={handleSubmit}>
      <input type="text" onChange={handleInputChange} />
      <button type='submit'>Submit</button>
    </form>

    <p onMouseOver={handleMouseOver} style={{border: "1px solid black", margin: "20px"}}>Hi Zaheer Abbas</p>
     <button onClick={handleClick}>
      Click Me
     </button>

    {/* This is called immediate invoke so don't do that remove the error use arrow function like the below second Click me button */}
     {/* <button onClick={alert("please Click me")}>Click Me!</button> */}
     <div>
      <button onClick={() => {alert("Please Click Me thank you")}}>Click Me</button>
     </div>
    </>
  )
}

export default App
