import "../css/Login.css";

function Login() {
  return (
    <>
      <div className="login">
        <h1>Login</h1>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" placeholder="Email" />
          <label htmlFor="password">Password:</label>
          <input type="password" placeholder="Password" />
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
