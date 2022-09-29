import "./Navbar.css";
import { useLogout } from "../../hooks/useLogout";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import logo from "../../assets/green-initiative-logo.png";
import Points from "./Points";

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const x = ({ isActive, isPending }) => {
    return isActive ? "active" : isPending ? "pending" : "";
  };

  return (
    <header>
      <div className="navbar-upper-line"></div>
      <nav className="navbar">
        <img className="logo" src={logo} alt="logo" />
        {user && (
          <>
            <p>{user.displayName}</p>
            <Points userId={user.uid} />
          </>
        )}

        <ul>
          {!user && (
            <>
              <li>
                <NavLink to="/login" className={x}>
                  Login
                </NavLink>
              </li>
              <li>
                NavLink
                <NavLink to="/signup" className={x}>
                  Signup
                </NavLink>
              </li>
            </>
          )}

          {user && (
            <>
              <li>
                <NavLink to="/plants" className={x}>
                  Plants
                </NavLink>
              </li>
              <li>
                <NavLink to="/profiles/1" className={x}>
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/history" className={x}>
                  History
                </NavLink>
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
