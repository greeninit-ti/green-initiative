import "./Login.css";
import React, { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isPending, error } = useLogin();
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-form-content">
          <h3 className="login-form-title">Sign In</h3>
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
            {isPending && (
              <button className="btn btn-primary" disabled>
                <span className="loader"></span>
              </button>
            )}

            {!isPending && (
              <button className="btn btn-primary">
                <span>Login</span>
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
