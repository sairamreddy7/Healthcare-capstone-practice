// src/pages/PatientDashboard.tsx
import { useEffect } from 'react';
import AppointmentsCard from '../components/AppointmentsCard';
import MessagesCard from '../components/MessagesCard';
import TestResultsCard from '../components/TestResultsCard';
import MedicationsCard from '../components/MedicationsCard';
import BillingsCard from '../components/BillingsCard';
import usePatientDashboardStore from '../stores/patientDashboardStore';

const PatientDashboard = () => {
  const { fetchDashboardData } = usePatientDashboardStore();

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome back, Maria!</h1>
        <p className="text-gray-500 dark:text-gray-400">Here is a summary of your health records.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        <AppointmentsCard />
        <MessagesCard />
        <TestResultsCard />
        <MedicationsCard />
        <BillingsCard />
      </div>
    </div>
  );
};

export default PatientDashboard;
