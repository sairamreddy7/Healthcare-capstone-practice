// src/pages/Dashboard.tsx
import React from 'react';
import PageHeading from '../components/PageHeading';
import NotificationBanner from '../components/NotificationBanner';
import UpcomingAppointments from '../components/UpcomingAppointments';
import RecentMessages from '../components/RecentMessages';
import NewTestResults from '../components/NewTestResults';
import CurrentMedications from '../components/CurrentMedications';
import BillingSummary from '../components/BillingSummary';

const Dashboard: React.FC = () => {
  return (
    <main className="flex-1 overflow-y-auto p-8">
      <div className="mx-auto max-w-7xl">
        <PageHeading />
        <NotificationBanner />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
          <UpcomingAppointments />
          <RecentMessages />
          <NewTestResults />
          <CurrentMedications />
          <BillingSummary />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
