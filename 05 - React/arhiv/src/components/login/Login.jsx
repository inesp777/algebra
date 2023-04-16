import React, { useContext,  useState } from "react";
import UserContext from "../context/UserContext";
import "./Login.css";


export default function Login() {
  const [username, setUsername] = useState(null);
  const [avatar, setAvatar] = useState("👧");
  const [error, setError] = useState(false);
 

  const { onUserLogin } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !username.replace(/\s/g, "").length) {
      setError(true);
    } else {
      setError(false);
      onUserLogin(username, avatar);
    }
  };

  return (
    <div className="login-page">
      <div className="form-wrapper">
        
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-control">
           
                <label htmlFor="name">Name:
                
              <input
                className="form__username-input"
                type="text"
                maxLength="20"
                placeholder={error ?'Please, enter your name!':''}
                onChange={(e) => setUsername(e.target.value)}
              />
              </label>
             
              
            </div>
            <div className="form-control">
              <div>
                <label htmlFor="avatar">Avatar</label>
              </div>
              <select
                className="form__avatar-input"
                onChange={(e) => setAvatar(e.target.value)}
              >
                <option value="👧">👧</option>
                <option value="🧒">🧒</option>
                <option value="😈">😈</option>
                <option value="🤖">🤖</option>
                <option value="🎃">🎃</option>
                <option value="👽">👽</option>
                <option value="👻">👻</option>
                <option value="🌸">🌸</option>
                <option value="🦔">🦔</option>
                <option value="🐸">🐸</option>
              </select>
            </div>
           
              <button type="submit" className="form__login-button">
               Start Chat
              </button>
            
          </form>
        
      </div>
      
    </div>
  );
}
