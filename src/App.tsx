// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import AdminLayout from './layouts/AdminLayout';
import ClinicianLayout from './layouts/ClinicianLayout';
import PatientLayout from './layouts/PatientLayout';

// Pages
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Authentication Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Dashboard Routes */}
        <Route path="/admin/*" element={<AdminLayout />} />
        <Route path="/clinician/*" element={<ClinicianLayout />} />
        <Route path="/patient/*" element={<PatientLayout />} />

        {/* Default Redirect */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
