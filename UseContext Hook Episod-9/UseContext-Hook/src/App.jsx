import { createContext, useState } from "react";
import "./App.css";
import ChildA from "./Components/ChildA";

// UseContext is used to remove the prop driling
// Step-1:  Create Context

// const UserContext = createContext();

// Step-2: Wrap all the childs inside a provider
// pass values
// Go to the consumer and consume the value

const ThemeContext = createContext();

function App() {
  // const[user, setUser] = useState({name:"Zaheer Abbas"});

  const [theme, setTheme] = useState("light");

  return (
    // <>
    // <UserContext.Provider value={user}>
    //   <ChildA/>
    // </UserContext.Provider>
    // </>

    // How to use UseContext in Theme Concept

    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div
          id="container"
          style={{ backgroundColor: theme === 'light' ? 'beige' : 'black', color: theme === 'light' ? 'black' : 'white' }}
          // style={{backgroundColor: theme === 'light' ? "beige": "dark"}}
        >
          <ChildA />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
// export {UserContext}
export {ThemeContext}
