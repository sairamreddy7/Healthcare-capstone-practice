// src/App.tsx
import React from 'react';
import SideNavBar from './layouts/SideNavBar';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen w-full bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark">
      <SideNavBar />
      <Dashboard />
    </div>
  );
};

export default App;
