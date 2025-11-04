// src/layouts/ClinicianSideNavBar.tsx
import { NavLink } from 'react-router-dom';

const navLinks = [
  { to: 'dashboard', icon: 'dashboard', text: 'Dashboard' },
  { to: 'patients', icon: 'groups', text: 'Patients' },
  { to: 'appointments', icon: 'calendar_month', text: 'Appointments' },
  { to: 'messages', icon: 'mail', text: 'Messages' },
  { to: 'records', icon: 'folder_open', text: 'Records' },
];

const ClinicianSideNavBar = () => {
  return (
    <aside className="w-64 flex-shrink-0 bg-primary flex flex-col">
      <div className="h-16 flex items-center justify-center px-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white rounded-lg">
            <span className="material-symbols-outlined text-primary text-2xl !fill-1">stethoscope_arrow</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight text-white">HealthApp</h2>
        </div>
      </div>
      <div className="flex flex-col justify-between flex-grow p-4">
        <nav className="flex flex-col gap-2">
          {navLinks.map(({ to, icon, text }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/80 hover:bg-white/10 hover:text-white transition-colors duration-200 ${
                  isActive ? 'bg-white/20 text-white' : ''
                }`
              }
            >
              <span className="material-symbols-outlined">{icon}</span>
              <p className="text-sm font-medium">{text}</p>
            </NavLink>
          ))}
        </nav>
        <div className="flex flex-col gap-2">
          <NavLink
            to="account-settings"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/80 hover:bg-white/10 hover:text-white transition-colors duration-200 ${
                isActive ? 'bg-white/20 text-white' : ''
              }`
            }
          >
            <span className="material-symbols-outlined">settings</span>
            <p className="text-sm font-medium">Account Settings</p>
          </NavLink>
          <a href="/login" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/80 hover:bg-white/10 hover:text-white transition-colors duration-200">
            <span className="material-symbols-outlined">logout</span>
            <p className="text-sm font-medium">Logout</p>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default ClinicianSideNavBar;
