import React, { useState } from "react";
import "./Login.scss";

const LoginForm = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  })
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("the input value is =>", input);
    if (input.email === "") {
      alert("email is empty")
    }
    else if (input.password === "") {
      alert("empty password")
    }
    else {
      alert("Submitted Succefully !!")
    }
  }

  return (
    <>
      <div className="tech_login">
        <form class="form_main">
          <img
            width={70}
            src="https://www.freeiconspng.com/thumbs/login-icon/register-secure-security-user-login-icon--7.png"
            alt=""
          />
          <p class="heading">Login Form</p>
          <div class="inputContainer">
            <input
              type="email"
              class="inputField"
              id="email"
              value={input.email}
              placeholder="Email"
              onChange={(event) => {
                setInput({
                  ...input,
                  email: event.target.value,
                })
              }}
            /> 
          </div>

          <div class="inputContainer">
            <svg
              class="inputIcon"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#2e2e2e"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
            </svg>
            <input
              type="password"
              class="inputField"
              id="password"
              value={input.password}
              placeholder="Password"
              onChange={(event) => {
                setInput({
                  ...input,
                  password: event.target.value,
                })
              }}
            />
          </div>
          <a href="#/" className="super-admin-forgot">
            Forget password
          </a>
          <button id="button" onClick={handleSubmit}>Submit</button>
          {console.log("the value is ---->", input)}
        </form>
      </div>
    </>
  );
};

export default LoginForm;