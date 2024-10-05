import "../styles/login.css";
function SignUp() {
  return (
    <div className="login">
      <div className="centered-el">
        <p style={{ fontWeight: 600 }}>LogIn</p>
        <div className="form-1">
          <input type="email" id="address" placeholder="Email address" />
          <input
            type="password"
            id="pwd"
            name="pwd"
            placeholder="set password"
          />
          <input
            type="password"
            id="pwd"
            name="pwd"
            placeholder="repeat password"
          />
        </div>
        <button>Continue</button>
        <p> have an account?</p>
        <a href="login">LogIn</a>
        <div className="form-2">
          <input type="checkbox" />
          <p>By continuing,I agree to the terms of use and privacy policy. </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
