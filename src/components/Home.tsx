import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();

// const handleLogoutClick = () => {
//   navigate("/login");
// };
function Home() {
  return (
    <>
      <h1>Successfully logged in!</h1>
      {/* <button onClick={handleLogoutClick}>Sign out</button> */}
    </>
  );
}

export default Home;
