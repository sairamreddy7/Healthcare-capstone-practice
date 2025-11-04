// src/pages/ClinicianDashboard.tsx
import DashboardStats from '../components/DashboardStats';
import UpcomingAppointments from '../components/UpcomingAppointments';
import MessagesAlerts from '../components/MessagesAlerts';

const ClinicianDashboard = () => {
  return (
    <div className="p-6 lg:p-8 flex-grow">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-text-secondary-light dark:text-text-secondary-dark mt-1">Welcome back, Dr. Reed. Here's a summary of your day.</p>
      </div>
      <DashboardStats />
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl p-6">
          <UpcomingAppointments />
        </div>
        <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl p-6">
          <MessagesAlerts />
        </div>
      </div>
    </div>
  );
};

export default ClinicianDashboard;
