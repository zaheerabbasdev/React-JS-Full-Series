import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ParamComponent from "./Components/ParamComponent";
import { Children } from "react";
import Courses from "./Components/Courses";
import Reports from "./Components/Reports";
import Notfound from "./Components/Notfound";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
  {
    path: "dashboard",
    element: (
      <div>
        <Navbar />
        <Dashboard />
      </div>
    ),
    // using Nested Routing
    children: [
      { path: "courses", element: <Courses /> },
      { path: "reports", element: <Reports /> },
    ],
  },
  // Using Parameters like id in the below example
  {
    path: "/student/:id",
    element: (
      <div>
        <Navbar />
        <ParamComponent />
      </div>
    ),
  },
  {
    path: "*",
    element: <Notfound/>
  }
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
