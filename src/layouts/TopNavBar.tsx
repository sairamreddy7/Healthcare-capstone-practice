// src/layouts/TopNavBar.tsx
import { useLocation } from 'react-router-dom';

const TopNavBar = () => {
  const location = useLocation();

  const getTitle = () => {
    const path = location.pathname.split('/').pop();
    switch (path) {
      case 'dashboard':
        return 'Admin Dashboard';
      case 'user-management':
        return 'User Management';
      case 'system-settings':
        return 'System Settings';
      case 'audit-logs':
        return 'Audit Logs';
      case 'reports':
        return 'Reports';
      case 'account-settings':
        return 'Account Settings';
      default:
        return 'Admin Dashboard';
    }
  };

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between whitespace-nowrap border-b border-slate-200 bg-white/80 px-10 py-3 backdrop-blur-sm dark:border-slate-800 dark:bg-background-dark/80">
      <div className="flex items-center gap-4 text-slate-900 dark:text-white">
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">{getTitle()}</h2>
      </div>
      <div className="flex flex-1 items-center justify-end gap-4">
        <label className="relative flex min-w-40 max-w-64 flex-col !h-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500 dark:text-slate-400">
            <span className="material-symbols-outlined text-2xl">search</span>
          </div>
          <input
            className="form-input h-full w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border-slate-300 bg-white pl-10 text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500"
            placeholder="Search"
            value=""
          />
        </label>
        <button className="flex h-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-transparent p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800">
          <span className="material-symbols-outlined text-2xl">notifications</span>
        </button>
        <div
          className="aspect-square size-10 rounded-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBtHxSgzHlCbvxVhZvcaMVANqhqcAHzCYAwJYRaBc1_rTB0vKMppgo_lpf4iojLvrjD2J34fB5j23rLSxjr_wpx7VW05zGtF5mWciXjgPuMBBeX2WBZw4iMA_eNiGaIVelCRCgUyWVNf1nLqflB-6xdnY7ZJ1mUJHYrw2s6jyusx9ShZbfQIJd7bXyG-y5doY-vGpbLzXFwBPI8MEjMGmH0S5I1-JD5hH5K8ZqXUvyUvkOTCIa1WSJdGTL5BUOYibeUQRFYO0YnbQE")' }}
        ></div>
      </div>
    </header>
  );
};

export default TopNavBar;
