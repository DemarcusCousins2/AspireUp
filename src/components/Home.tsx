import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Home.module.css";
import PasswordChecklist from "react-password-checklist";

// const navigate = useNavigate();

// const handleLogoutClick = () => {
//   navigate("/login");
// };
function Home() {
  return (
    <>
      <div id="container">
        <h1>Welcome to AspireUp!</h1>
      </div>
      {/* <button onClick={handleLogoutClick}>Sign out</button> */}
    </>
  );
}

export default Home;
<h1>Welcome to AspireUp!</h1>;
