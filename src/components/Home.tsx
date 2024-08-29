import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Home.css";
import PasswordChecklist from "react-password-checklist";


// const navigate = useNavigate();

// const handleLogoutClick = () => {
//   navigate("/login");
// };
function Home() {
  const css =  "* {margin: 10px;} h1 {font-size: 60px;} h1{color:darkblue;} h1 {padding-left: 400px}"
  return (
    <>
    <head>
      <style>{css}</style>
    </head>
    <div id="container">
      <h1>Welcome to AspireUp!</h1>
    </div>
      {/* <button onClick={handleLogoutClick}>Sign out</button> */}
    </>
  );
}

export default Home;
<h1>Welcome to AspireUp!</h1>