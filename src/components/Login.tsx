import "../css/Login.css";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginErrorMessage, setLoginErrorMessage] = useState(false);
  const verificationAPI =
    "https://wbagtzgip4.execute-api.us-west-2.amazonaws.com/prod/Authenticator";
  const authenticateUser = async () => {
    const response = await fetch(verificationAPI, {
      method: "POST",
      body: JSON.stringify({
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": "true",
        },
        email: email,
        password: password,
      }),
    });

    const data = await response.json();
    if (data["message"] == true) {
      navigate("/home");
    } else {
      alert("Invalid email or password");   
    }
  };
  return (
    <>
      <div className="login">
        <h1>Login</h1>
        <form>
          <p
            className={
              loginErrorMessage ? "error-message visible" : "error-message"
            }
          >
            Field cannot be empty
          </p>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button type="button" onClick={authenticateUser}>
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
