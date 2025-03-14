import React, { useState,useContext } from "react";
import "./Loginpage.css";
import ColorContext from "../../Context/ColorContext";

const Loginpage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [action, setAction] = useState("Login");
  const [message, setMessage] = useState();
  const color = useContext(ColorContext)
  console.log(color);

  const handleUsername = (event) => {
    console.log(event.target.value);
    setUsername(event.target.value);
  };

  const handleEmail = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    setMessage("Login successful! Redirecting...");
  };
  return (
    <div className={color}>
      <div className="header">
        <div className="text">
          {" "}
          <b>{action}</b>
        </div>
        <div className="underline"> </div>
      </div>
      <div className="inputs">
        <div className="input">
          <input 
           name="userName"
           value={username}
           onChange={handleUsername}type="text" placeholder="Username" />
        </div>
        <div className="input">
          <input
           name="Email"
           value={email}
           onChange={handleEmail} type="email" placeholder="Email" />
        </div>
        <div className="input">
          <input 
           name="Password"
           value={password}
           onChange={handlePassword}type="password" placeholder="Password" />
        </div>
        <div className="Forgot Password">
          Forgot Password ?<span>Click Here</span>
        </div>
      </div>
      {message && <p className="message">{message}</p>}
      <div className="submit-container">
      <button className="submit" onClick={handleLogin}>Login</button>
        {/* <div className="submit">Login</div> */}
      </div>
    </div>
  );
};

export default Loginpage; 
