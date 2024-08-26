import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Email() {
  const navigate = useNavigate();
  const verificationAPI =
    "https://7am7ptsimk.execute-api.us-west-2.amazonaws.com/prod/verifier";
  const verifyCode = async () => {
    const response = await fetch(verificationAPI, {
      method: "POST",
      body: JSON.stringify({
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": "true",
        },
        code: code,
        email: "ajaynadar2008@gmail.com",
      }),
    });

    const data = await response.json();
    if (data["message"] === true) {
      navigate("/home");
    }
  };

  const [code, setCode] = useState("");
  return (
    <>
      <div className="container">
        <h1>Email Verification</h1>
        <p>Please enter the verification code sent to your email address.</p>
        <form action="/verify" method="post">
          <div className="form-group">
            <label htmlFor="verificationCode">Verification Code:</label>
            <input
              type="text"
              id="verificationCode"
              name="verificationCode"
              onChange={(e) => setCode(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <button type="button" onClick={verifyCode}>
              Verify Code
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Email;
