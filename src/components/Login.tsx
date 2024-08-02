import React, { useState } from "react";
import "../css/Login.css";

function Login() {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="firstName">First name:</label>
        <input type="text" id="firstName" name="firstName" />
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Last name:</label>
        <input type="text" id="lastName" name="lastName" />
      </div>

      <div className="form-group">
        <label htmlFor="grade">Grade:</label>
        <br />
        <input type="radio" id="grade9" name="grade9" />
        <label>9</label>
        <br />
        <input type="radio" id="grade10" name="grade10" />

        <label>10</label>
        <br />
        <input type="radio" id="grade11" name="grade11" />
        <label>11</label>
        <br />
        <input type="radio" id="grade12" name="grade12" />
        <label>12</label>
        <br />
      </div>

      <div className="form-group">
        <label htmlFor="birthday">Birthday</label>
        <input type="date" id="birthdate" name="birthdate" />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
      </div>
    </form>
  );
}

export default Login;
