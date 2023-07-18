import React, { useState, useEffect } from "react";
import axios from "axios";

function Login(props) {
  const handleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
}

function Navbar(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("http:localhost:5000/auth/login/success", { withCredentials: true })
      .then((res) => {
        if (!res.data.error) {
          setUser(res.data.user);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleLogout = () => {
    axios
      .get("http://localhost:5000/auth/logout", { withCredentials: true })
      .then((res) => {
        if (res.status === 200) {
          setUser(null);
          window.location.href = "http://localhost:3000";
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
}

export { Login, Navbar };