// src/layouts/PatientSideNavBar.tsx
import { NavLink } from 'react-router-dom';

const navLinks = [
  { to: 'dashboard', icon: 'dashboard', text: 'Dashboard' },
  { to: 'appointments', icon: 'calendar_month', text: 'Appointments' },
  { to: 'messages', icon: 'mail', text: 'Messages' },
  { to: 'test-results', icon: 'science', text: 'Test Results' },
  { to: 'medications', icon: 'pill', text: 'Medications' },
  { to: 'billings', icon: 'receipt_long', text: 'Billings' },
];

const PatientSideNavBar = () => {
  return (
    <aside className="flex w-64 flex-col bg-white dark:bg-[#111c22] border-r border-gray-200 dark:border-gray-700/50">
      <div className="flex items-center gap-3 px-6 py-5 border-b border-gray-200 dark:border-gray-700/50">
        <div className="text-primary size-8">
          <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H8v-2h3V7h2v4h3v2h-3v4h-2z"></path>
          </svg>
        </div>
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">HealthApp</h1>
      </div>
      <div className="flex h-full flex-col justify-between p-4">
        <div className="flex flex-col gap-2">
          {navLinks.map(({ to, icon, text }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800/50 ${
                  isActive ? 'bg-primary/10 text-primary dark:bg-primary/20' : ''
                }`
              }
            >
              <span className="material-symbols-outlined">{icon}</span>
              <p className="text-sm font-medium">{text}</p>
            </NavLink>
          ))}
        </div>
        <div className="flex flex-col gap-2 border-t border-gray-200 dark:border-gray-700/50 pt-4">
          <NavLink
            to="account-settings"
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800/50 ${
                isActive ? 'bg-primary/10 text-primary dark:bg-primary/20' : ''
              }`
            }
          >
            <span className="material-symbols-outlined">settings</span>
            <p className="text-sm font-medium">Account Settings</p>
          </NavLink>
          <a
            href="/login"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800/50"
          >
            <span className="material-symbols-outlined">logout</span>
            <p className="text-sm font-medium">Logout</p>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default PatientSideNavBar;
