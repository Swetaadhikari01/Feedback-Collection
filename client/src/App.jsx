import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminLogin from './components/AdminLogin';
import AdminPage from './pages/AdminPage';

function App() {
  const isAdmin = localStorage.getItem('admin');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={isAdmin ? <AdminPage /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
