import "./Navbar.css";
import { useLogout } from "../../hooks/useLogout";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import logo from "../../assets/green-initiative-logo.png";
import Points from "./Points";

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <header>
      <div className="navbar-upper-line"></div>
      <nav className="navbar">
        <img className="logo" src={logo} alt="logo" />
        {user && (
          <>
            <p>Hello, {user.displayName}!</p>
            <Points userId={user.uid} />
          </>
        )}

        <ul>
          {!user && (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </>
          )}

          {user && (
            <>
              <li>
                <Link to="/plants">Plants</Link>
              </li>
              <li>
                <Link to="/profiles/1">Profile</Link>
              </li>
              <li>
                <button className="btn" onClick={logout}>
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
