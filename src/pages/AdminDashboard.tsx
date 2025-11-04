// src/pages/AdminDashboard.tsx
import PageHeading from '../components/PageHeading';
import Stats from '../components/Stats';
import Charts from '../components/Charts';
import QuickActions from '../components/QuickActions';

const AdminDashboard = () => {
  return (
    <>
      <PageHeading title="Welcome back, Evelyn!" description="Here is a summary of the system's current status." />
      <Stats />
      <Charts />
      <QuickActions />
    </>
  );
};

export default AdminDashboard;
