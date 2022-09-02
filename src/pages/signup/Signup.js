import "./Signup.css";
import React, { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isPending, error } = useSignup();

  const register = (e) => {
    e.preventDefault();
    signup(email, password, username);
  };
  return (
    <div className="signup-form-container">
      <form className="signup-form" onSubmit={register}>
        <div className="signup-form-content">
          <h3 className="signup-form-title">Sign Up</h3>
          {error && <p className="error">{error}</p>}
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="username"
              className="form-control mt-1"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button className="btn btn-primary" disabled={isPending}>
              {isPending && <span className="loader"></span>}
              {!isPending && <span>Signup</span>}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
