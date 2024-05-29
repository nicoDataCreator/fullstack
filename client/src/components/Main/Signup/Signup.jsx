import React from "react";
import GoogleButton from 'react-google-button';

const Signup = () => {
  return (
    <>
      <section className="section-signup">
        <div className="container-signup">
          <h2 className="signup">Create your account</h2>
          <h3 className="">Have an account? <a href="./login">Log in now</a></h3>
          <form action="" className="form">
            <article className="user-signup">
              <label htmlFor="">User
                <span className="required">*</span>:
              </label>
              <input type="text" placeholder="Introduce your mail" />
            </article>
            <article className="password-signup">
              <label htmlFor="">Password
                <span className="required">*</span>:
              </label>
              <input type="password" placeholder="Password" />
            </article>
            <button className="botonsubmit" type="submit" >Submit</button>
            <button className="button-google-container">
            <GoogleButton className="google-button"
              onClick={() => { console.log('Google button clicked') }}
            />
            </button>
          </form>
        </div>
      </section>
    </>
  )
};

export default Signup;
