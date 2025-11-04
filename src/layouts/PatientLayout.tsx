// src/layouts/PatientLayout.tsx
import { Routes, Route } from 'react-router-dom';
import PatientSideNavBar from './PatientSideNavBar';
import PatientTopNavBar from './PatientTopNavBar';

// Pages
import PatientDashboard from '../pages/PatientDashboard';
import PatientAppointments from '../pages/PatientAppointments';
import PatientMessages from '../pages/PatientMessages';
import PatientTestResults from '../pages/PatientTestResults';
import PatientMedications from '../pages/PatientMedications';
import PatientBillings from '../pages/PatientBillings';
import PatientAccountSettings from '../pages/PatientAccountSettings';

const PatientLayout = () => {
  return (
    <div className="flex h-screen w-full">
      <PatientSideNavBar />
      <div className="flex flex-1 flex-col overflow-y-auto">
        <PatientTopNavBar />
        <main className="flex-1 p-8">
          <Routes>
            <Route path="dashboard" element={<PatientDashboard />} />
            <Route path="appointments" element={<PatientAppointments />} />
            <Route path="messages" element={<PatientMessages />} />
            <Route path="test-results" element={<PatientTestResults />} />
            <Route path="medications" element={<PatientMedications />} />
            <Route path="billings" element={<PatientBillings />} />
            <Route path="account-settings" element={<PatientAccountSettings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default PatientLayout;
