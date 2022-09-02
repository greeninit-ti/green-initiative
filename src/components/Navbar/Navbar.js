import "./Navbar.css";
import { useLogout } from "../../hooks/useLogout";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import logo from "../../assets/green-initiative-logo.png";

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <header>
      <div className="navbar-upper-line"></div>
      <nav className="navbar">
        <img class="logo" src={logo} alt="logo" />
        {user && <p>Hello, {user.displayName}!</p>}

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
