// src/layouts/SideNavBar.tsx
import { NavLink } from 'react-router-dom';

const navLinks = [
  { to: 'dashboard', icon: 'dashboard', text: 'Dashboard' },
  { to: 'user-management', icon: 'group', text: 'User Management' },
  { to: 'system-settings', icon: 'settings', text: 'System Settings' },
  { to: 'audit-logs', icon: 'history', text: 'Audit Logs' },
  { to: 'reports', icon: 'summarize', text: 'Reports' },
];

const SideNavBar = () => {
  return (
    <aside className="flex w-64 flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark">
      <div className="flex items-center gap-3 p-6 text-primary">
        <div className="size-8">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z" fill="currentColor"></path>
          </svg>
        </div>
        <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] text-slate-900 dark:text-white">HealthApp</h2>
      </div>
      <div className="flex flex-1 flex-col justify-between p-4">
        <div className="flex flex-col gap-2">
          {navLinks.map(({ to, icon, text }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 ${
                  isActive ? 'bg-primary/20 text-primary active' : ''
                }`
              }
            >
              <span className="material-symbols-outlined text-2xl">{icon}</span>
              <p className="text-sm font-medium leading-normal">{text}</p>
            </NavLink>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1 border-t border-slate-200 dark:border-slate-800 pt-4">
            <NavLink
              to="account-settings"
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 ${
                  isActive ? 'bg-primary/20 text-primary active' : ''
                }`
              }
            >
              <span className="material-symbols-outlined text-2xl">account_circle</span>
              <p className="text-sm font-medium leading-normal">Account Settings</p>
            </NavLink>
          </div>
          <div className="flex gap-3">
            <div
              className="aspect-square size-10 rounded-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBsZLEnOKTO3R7Rd_bU-5cH-u11qg3eTjVZY71g3YWRYHrGZYyuUrZ1gW8cXnIvyjSR6k9cJbekSClkmXbWhHeIjZScdq6hQmFxxf1_sHXhhC-WUyS4QTBnBLvp4z4UdmZ_dKKPFzpVzTst6kSvhR75x9l4x46xiflbFpX2Xdtu9MmLQr0HXoEd4zKtkIDerjjCDGq7ln8x_DiJk_FX-CP2vpH5u1B7HbFe7jYdaC1DzN1eAW4evyEt2Wv66Q3ITzLHNfSLhpGaDzc")' }}
            ></div>
            <div className="flex flex-col">
              <h1 className="text-base font-medium leading-normal text-slate-900 dark:text-white">Dr. Evelyn Reed</h1>
              <p className="text-sm font-normal leading-normal text-slate-500 dark:text-slate-400">Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideNavBar;
