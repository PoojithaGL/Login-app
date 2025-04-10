// import React, { useState, useContext } from "react";
// import "./Loginpage.css";
// import ColorContext from "../../Context/ColorContext";

// const Loginpage = () => {
//   const [action, setAction] = useState("Login");
//   const [message, setMessage] = useState();
//   const color = useContext(ColorContext);
//   console.log(color);
//   const { username, setUserName, email, setEmail, password, setPassword } =
//     useContext(ColorContext);

//   const handleUsername = (event) => {
//     console.log(event.target.value);
//     setUserName(event.target.value);
//   };

//   const handleEmail = (event) => {
//     console.log(event.target.value);
//     setEmail(event.target.value);
//   };

//   const handlePassword = (event) => {
//     console.log(event.target.value);
//     setPassword(event.target.value);
//   };

//   const handleLogin = () => {
//     setMessage("Login successful! Redirecting...");

//     if (username === "") {
//       setUserName("Poojitha");
//     } else if (email === "") {
//       setEmail("poojitha@123456");
//     } else if (password === "") {
//       setPassword("12345");
//     }
//   };

//   return (
//     <div className={{ username, email, password }}>
//       <div className="header">
//         <div className="text">
//           {" "}
//           <b>{action}</b>
//         </div>
//         <div className="underline"> </div>
//       </div>
//       <div className="inputs">
//         <div className="input">
//           <input
//             name="userName"
//             value={username}
//             onChange={handleUsername}
//             type="text"
//             placeholder="Username"
//           />
//         </div>
//         <div className="input">
//           <input
//             name="Email"
//             value={email}
//             onChange={handleEmail}
//             type="email"
//             placeholder="Email"
//           />
//         </div>
//         <div className="input">
//           <input
//             name="Password"
//             value={password}
//             onChange={handlePassword}
//             type="password"
//             placeholder="Password"
//           />
//         </div>
//         <div className="Forgot Password">
//           Forgot Password ?<span>Click Here</span>
//         </div>
//       </div>
//       {message && <p className="message">{message}</p>}
//       <div className="submit-container">
//         <button className="submit" onClick={handleLogin}>
//           Login
//         </button>
//         {/* <div className="submit">Login</div> */}
//       </div>
//     </div>
//   );
// };

// export default Loginpage;

import React, { useContext, useState } from "react";
import "./Loginpage.css";
import ColorContext from "../../Context/ColorContext";
const Loginpage = () => {
  const [userName,setUserName] = useState('');
  const [password,setPassword] = useState('');
  const [email,setEmail] = useState('');

  const { state, dispatch } = useContext(ColorContext);
  const [message, setMessage] = useState("");

  const handleUsername = (event) => {
    dispatch({ type: "SET_USERNAME", payload: event.target.value });
    // setUserName(event.target.value)
  };

  const handleEmail = (event) => {
    dispatch({ type: "SET_PASSWORD", payload: event.target.value });
    // setEmail(event.target.value)
  };

  const handlePassword = (event) => {
    dispatch({ type: "SET_PASSWORD", payload: event.target.value });
    // setPassword(event.target.value)
  };

  const handleLogin = () => {
    setMessage("Login successful! Redirecting...");
    dispatch({ type: "SET_USERNAME", payload: userName });
    dispatch({ type: "SET_EMAIL", payload:  email});
    dispatch({ type: "SET_PASSWORD", payload: password });
  };

  return (
    <div className="login-container">
      <div className="header">
        <div className="text">
          <b>Login</b>
        </div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <input
            name="username"
            value={state.userName}
            onChange={handleUsername}
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="input">
          <input
            name="email"
            value={state.email}
            onChange={handleEmail}
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="input">
          <input
            name="password"
            value={state.password}
            onChange={handlePassword}
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="forgot-password">
          Forgot Password? <span>Click Here</span>
        </div>
      </div>
      {message && <p className="message">{message}</p>}
      <div className="submit-container">
        <button className="submit" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Loginpage;





