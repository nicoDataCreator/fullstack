import React from "react";
import GoogleButton from 'react-google-button';

const Login = () => {

  const handleGoogleLogin = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Redirect to the specified URL
    window.location.href = 'http://localhost:3000/auth/google';
  };

  return (
    <>
      <section className="section-login">
        <div className="container-login">
          <h2 className="login">Login</h2>
          <h3 className="">Don´t have an account? <a href="./signup">Sign up</a></h3>
          <form action="" className="form">
            <article className="user-login">
              <label htmlFor="">User
                <span className="required">*</span>:
              </label>
              <input type="text" placeholder="Introduce your mail" />
            </article>
            <article className="password-login">
              <label htmlFor="">Password
                <span className="required">*</span>:
              </label>
              <input type="password" placeholder="Password" />
            </article>
            <button className="botonsubmit" type="submit" >Submit</button>
            <button className="button-google-container">
              <GoogleButton className="google-button"
                onClick={handleGoogleLogin}
              />
            </button>
          </form>
        </div>
      </section>
    </>
  )
};

export default Login;
