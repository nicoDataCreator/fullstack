import React from "react";
import axios from "axios";
import GoogleButton from "react-google-button";

const Signup = () => {
  console.log("Signup component loaded");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit called");

    const formData = new FormData(e.target.form); // Pasar el formulario directamente
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    console.log("Form data:", data);
    try {
      console.log(data);
      const response = await axios.post(
        "http://localhost:3000/api/signup/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Success:", response.data);
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <>
      <section className="section-signup">
        <div className="container-signup">
          <h2 className="signup">Create your account</h2>
          <h3>
            Have an account? <a href="./login">Log in now</a>
          </h3>
          <form className="form" onSubmit={handleSubmit}>
            <article className="user-signup">
              <label htmlFor="email">
                User
                <span className="required">*</span>:
              </label>
              <input
                type="email"
                placeholder="Introduce your mail"
                name="email"
                id="email"
                required
              />
            </article>
            <article className="password-signup">
              <label htmlFor="password">
                Password
                <span className="required">*</span>:
              </label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                required
              />
            </article>
            <button className="botonsubmit" type="submit">
              Submit
            </button>
          </form>
          <div className="button-google-container">
            <GoogleButton
              className="google-button"
              onClick={() => {
                console.log("Google button clicked");
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
