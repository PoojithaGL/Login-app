import { createContext, useReducer } from "react";
import   ColorContext from "./Context/ColorContext.js";
import logo from "./logo.svg";
import "./App.css";
import Loginpage from "./components/Login/Loginpage.jsx";
function App() {

  const [state, dispatch] = useReducer(ColorContext, "bg-danger");

  return (
    <ColorContext.Provider value={state}>
      <Loginpage />
    </ColorContext.Provider>
  );
}

export default App;
