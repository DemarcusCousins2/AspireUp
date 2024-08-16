const Email = () => {
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
              required
            />
          </div>
          <div className="form-group">
            <button type="submit">Verify Code</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Email;
