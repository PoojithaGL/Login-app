import React, { useState } from "react";
function Login() {
  const [password, setPassword] = useState("");
  const [state, setState] = useState("");

  // const handleChange = (event) => {
  //  console.log(event.target.value);
  //  setState(event.target.value);
  // }

  // const handlePassword = (event) => {
  //   console.log(event.target.value);
  //   setPassword(event.target.value)
  // }

  function handleInput(event) {
    console.log(event.target.name);
    if (event.target.name === "email") {
      setState(event.target.value);
    } else if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  }
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          name="email"
          value={state}
          onChange={handleInput}
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          name="password"
          value={password}
          onChange={handleInput}
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Login;
