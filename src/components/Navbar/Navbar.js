import "./Navbar.css";
import { useLogout } from "../../hooks/useLogout";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <header>
      <nav className="navbar">
        <img
          className="logo"
          src={require("C:\\Users\\yai\\react-projects\\plant-app\\plant-app\\src\\assets\\green-initiative-logo.png")}
          alt="logo"
        />
        {user && <p>Hello, {user.displayName}</p>}

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
