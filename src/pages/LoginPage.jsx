import "../styles/login.css";
function LoginPage() {
  return (
    <div className="login">
      <div className="centered-el">
        <p style={{ fontWeight: 600 }}>LogIn</p>
        <div className="form-1">
          <input type="email" id="address" placeholder="Email address" />
          <input type="password" id="pwd" name="pwd" placeholder="password" />
        </div>
        <button>Continue</button>
        <p>don't have an account?</p>
        <a href="signup">Click here</a>
        <div className="form-2">
          <input type="checkbox" />
          <p>By continuing,I agree to the terms of use and privacy policy. </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
