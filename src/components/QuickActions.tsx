// src/components/QuickActions.tsx
const actions = [
  { icon: 'person_add', title: 'Add New User', description: 'Onboard a new patient, clinician, or admin.' },
  { icon: 'policy', title: 'View Latest Audit Logs', description: 'Review recent system and user activities.' },
  { icon: 'lock_reset', title: 'Initiate Password Resets', description: 'Help users who are locked out of their accounts.' },
];

const QuickActions = () => {
  return (
    <div className="mt-8 flex flex-col rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
      <h3 className="text-lg font-bold text-slate-900 dark:text-white">Quick Actions</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400">Quickly access common administrative tasks.</p>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {actions.map(({ icon, title, description }) => (
          <button
            key={title}
            className="flex items-center gap-3 rounded-lg bg-slate-100 p-4 text-left text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
          >
            <div className="rounded-lg bg-primary/20 p-2 text-primary">
              <span className="material-symbols-outlined">{icon}</span>
            </div>
            <div>
              <p className="font-semibold">{title}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
