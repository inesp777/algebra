import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import "./Login.css";


export default function Login() {
  const [username, setUsername] = useState(null);
  const [error, setError] = useState(false);


  const { onUserLogin } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !username.replace(/\s/g, "").length) {
      setError(true);
    } else {
      setError(false);
      onUserLogin(username);
    }
  };

  return (
    <div className="login-page">
      <div className="form-wrapper">
        <form className="form" onSubmit={handleSubmit}>
          <h2 >MyChatApp</h2>
          <div className="form-control">
            <input
              className="form__username-input"
              type="text"
              maxLength="25"
              placeholder={error ? 'You need enter your name!' : 'Please,enter your name!'}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <button type="submit" className="form__login-button">
            LogIn
          </button>
        </form>
      </div>
    </div>
  );
}
