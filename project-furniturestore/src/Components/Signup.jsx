import React from 'react';
import './signup1.css';

function signup() {
  return (
    <form className="form">
      <p className="title">Signup</p>
      <p className="message">Signup now and get full access to our app.</p>

      <div className="label-container">
        <label className="label">
          <input required placeholder="" type="Name" className="input" />
          <span>Name</span>
        </label>
      </div>

      <div className="label-container">
        <label className="label">
          <input required placeholder="" type="number" className="input" />
          <span>Age</span>
        </label>
      </div>

      <div className="label-container">
        <label className="label">
          <input required placeholder="" type="email" className="input" />
          <span>Email</span>
        </label>
      </div>

      <div className="label-container">
        <label className="label">
          <input
            required
            placeholder=""
            type="password"
            className="input"
          />
          <span>Password</span>
        </label>
      </div>

      <div className="label-container">
        <label className="label">
          <input
            required
            placeholder=""
            type="password"
            className="input"
          />
          <span>Confirm password</span>
        </label>
      </div>
      <br></br>

      <button type="submit" className="submit">
        Submit
      </button>


    </form>
  );
}

export default signup;