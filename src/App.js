
import React, { useReducer } from "react";
import ColorContext from "./Context/ColorContext.js";
import Loginpage from "./components/Login/Loginpage.jsx";



function App() {
  const [state, dispatch] = useReducer(colorReducer, "bg-danger");

  return (
    <ColorContext.Provider value={{ state }}>
      <Loginpage />
    </ColorContext.Provider>
  );
}

export default App;