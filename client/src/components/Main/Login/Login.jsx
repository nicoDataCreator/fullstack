import React from "react";
import GoogleButton from 'react-google-button';

const Login = () => {
 

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.get('http://localhost:3000/api/auth', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log('Success:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};

  return (
    <>
      <section className="section-login">
        <div className="container-login">
          <h2 className="login">Login</h2>
          <h3 className="">Don´t have an account? <a href="./signup">Sign up</a></h3>
          <form action="" className="form" onSubmit={handleSubmit}>
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
              <input type="text" placeholder="Password" />
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

export default Login;
