import { useState } from "react";
import "./App.css";
import LoginBtn from "./Components/LoginBtn";
import LogoutBtn from "./Components/LogoutBtn";
function App() {
  // Using If-else Condition
  // const [isLoggedIn, setIsLoggedIn] = useState(true);

  //  if(isLoggedIn){
  //   return(
  //     <LogoutBtn/>
  //   )
  //  }
  //  else{
  //   return(
  //     <LoginBtn/>
  //   )
  //  }

  // Using Ternary Operator
  //  const [isLoggedIn, setIsLoggedIn] = useState(true);

  //  return(
  //   <div>
  //     {isLoggedIn ? <LogoutBtn/> : <LoginBtn/>}
  //   </div>
  //  )

  // Using Logical Operator
  // const [isLoggedIn, setIsLoggedIn] = useState(true);

  // return(
  //   <div>
  //     <p>Welcome Zaheer Abbas Web Development Course</p>
  //     <div>
  //       {isLoggedIn && <LogoutBtn/>}
  //     </div>
  //   </div>
  // )

  // Using Early return Method
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  if (!isLoggedIn) {
    return <LoginBtn />;
  }

  return (
    <div>
      <p>Welcome Zaheer Abbas Web Development Course</p>
      <div>{isLoggedIn && <LogoutBtn />}</div>
    </div>
  );
}

export default App;
