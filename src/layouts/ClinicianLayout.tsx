// src/layouts/ClinicianLayout.tsx
import { Routes, Route } from 'react-router-dom';
import ClinicianSideNavBar from './ClinicianSideNavBar';
import ClinicianTopNavBar from './ClinicianTopNavBar';

// Pages
import ClinicianDashboard from '../pages/ClinicianDashboard';
import PatientList from '../pages/PatientList';
import AppointmentManagement from '../pages/AppointmentManagement';
import ClinicianMessages from '../pages/ClinicianMessages';
import PatientRecords from '../pages/PatientRecords';
import ClinicianAccountSettings from '../pages/ClinicianAccountSettings';

const ClinicianLayout = () => {
  return (
    <div className="flex h-screen w-full">
      <ClinicianSideNavBar />
      <div className="flex flex-1 flex-col overflow-y-auto">
        <ClinicianTopNavBar />
        <main className="flex-1 p-8">
          <Routes>
            <Route path="dashboard" element={<ClinicianDashboard />} />
            <Route path="patients" element={<PatientList />} />
            <Route path="appointments" element={<AppointmentManagement />} />
            <Route path="messages" element={<ClinicianMessages />} />
            <Route path="records" element={<PatientRecords />} />
            <Route path="account-settings" element={<ClinicianAccountSettings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default ClinicianLayout;
