import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

// ---------- Login Component ----------
function Login({ setIsAuth }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuth(true);          // mark as logged in
    navigate("/dashboard");   // go to dashboard
  };

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

// ---------- Dashboard Component ----------
function Dashboard() {
  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h2>Student Dashboard</h2>
      <p>Only authenticated users can access this page.</p>
    </div>
  );
}

// ---------- Main App ----------
function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {/* Login route */}
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />

        {/* Protected dashboard route */}
        <Route
          path="/dashboard"
          element={isAuth ? <Dashboard /> : <Navigate to="/login" />}
        />

        {/* Default route */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
