// src/layouts/AdminLayout.tsx
import { Routes, Route } from 'react-router-dom';
import SideNavBar from './SideNavBar';
import TopNavBar from './TopNavBar';

// Pages
import AdminDashboard from '../pages/AdminDashboard';
import UserManagement from '../pages/UserManagement';
import SystemSettings from '../pages/SystemSettings';
import AuditLogs from '../pages/AuditLogs';
import Reports from '../pages/Reports';
import AccountSettings from '../pages/AccountSettings';

const AdminLayout = () => {
  return (
    <div className="flex h-screen w-full">
      <SideNavBar />
      <div className="flex flex-1 flex-col overflow-y-auto">
        <TopNavBar />
        <main className="flex-1 p-8">
          <Routes>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="user-management" element={<UserManagement />} />
            <Route path="system-settings" element={<SystemSettings />} />
            <Route path="audit-logs" element={<AuditLogs />} />
            <Route path="reports" element={<Reports />} />
            <Route path="account-settings" element={<AccountSettings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
