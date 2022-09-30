import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./pages/Profile/Profile";
import Dashboard from "./pages/Dashboard/Dashboard";
import History from "./pages/History/History";
import { useAuthContext } from "./hooks/useAuthContext";
import sagLogo from "./assets/SoftwareAG.png";
import emailSvg from "./assets/mail_FILL0_wght400_GRAD0_opsz24.svg";
import phoneSvg from "./assets/call_FILL0_wght400_GRAD0_opsz24.svg";

function App() {
  const { authIsReady, user } = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route
              exact
              path="/"
              element={user ? <Dashboard /> : <Navigate to="/login" replace />}
            />
            <Route
              path="/login"
              element={user ? <Navigate to="/" replace /> : <Login />}
            />
            <Route
              path="/signup"
              element={user ? <Navigate to="/" replace /> : <Signup />}
            />
            <Route
              path="/profiles/:id"
              element={user ? <Profile /> : <Navigate to="/" replace />}
            />
            <Route
              path="/plants"
              element={user ? <Dashboard /> : <Navigate to="/" replace />}
            />
            <Route
              path="/history"
              element={user ? <History /> : <Navigate to="/" replace />}
            />
          </Routes>
        </Router>
      )}
      <footer>
        <div className="wrapper">
          <div className="contact-section">
            <h5>Contact us</h5>
            <div id="contact-info">
              <div>
                <embed src={emailSvg} type="image/svg+xml" className="icon" />
                <div>test@softwareag.com</div>
              </div>
              <div>
                <embed src={phoneSvg} type="image/svg+xml" className="icon" />
                <div>+35911000111</div>
              </div>
            </div>
          </div>
          <div className="powered-by-section">
            <p>Powered by</p>
            <img src={sagLogo} alt="logo" id="sagLogo" />
          </div>
        </div>
        <div>©Software AG</div>
      </footer>
    </div>
  );
}

export default App;
