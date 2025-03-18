
// import React, { useReducer, useState } from "react";
// import ColorContext from "./Context/ColorContext.js";
// import Loginpage from "./components/Login/Loginpage.jsx";



// function App() {
//   // const [state, dispatch] = useReducer(ColorContext, "bg-danger");

//     const [username, setUserName] = useState("");
//      const [email,setEmail]=useState("");
//      const [password,setPassword]=useState("");
//   return (
//     <ColorContext.Provider value={{username, setUserName,email, setEmail, password,setPassword}}>
//       <Loginpage />
//     </ColorContext.Provider>
//   );
// }

// export default App;




import React from "react";
import { ColorProvider } from "./Context/ColorContext"; 
import Loginpage from "./components/Login/Loginpage.jsx";

function App() {
  return (
    <ColorProvider>
      <Loginpage />
    </ColorProvider>
  );
}

export default App;











