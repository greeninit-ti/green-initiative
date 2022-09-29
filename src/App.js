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
import { useAuthContext } from "./hooks/useAuthContext";

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
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
