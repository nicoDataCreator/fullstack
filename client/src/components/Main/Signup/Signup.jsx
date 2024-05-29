import React from "react";
import axios from 'axios';
import GoogleButton from 'react-google-button';

const Signup = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      password: e.target.password.value
    }

    try {
      console.log(data);
      const response = await axios.post('/api/signup', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Success:', response.data);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  }

  return (
    <>
      <section className="section-signup">
        <div className="container-signup">
          <h2 className="signup">Create your account</h2>
          <h3 className="">Have an account? <a href="./login">Log in now</a></h3>
          <form action="" className="form" onSubmit={handleSubmit}>
            <article className="user-signup">
              <label htmlFor="">User
                <span className="required">*</span>:
              </label>
              <input type="email" placeholder="Introduce your mail" name="email"/>
            </article>
            <article className="password-signup">
              <label htmlFor="">Password
                <span className="required">*</span>:
              </label>
              <input type="password" placeholder="Password" name="password"/>
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
