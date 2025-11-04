// src/components/Stats.tsx
const stats = [
  { title: 'Total Users', value: '1,482', change: '+1.5%', changeType: 'positive' },
  { title: 'Active Sessions', value: '128', change: '-2.1%', changeType: 'negative' },
  { title: 'System Health', value: '99.9% Uptime', change: '+0.0%', changeType: 'positive' },
  { title: 'Failed Logins (24h)', value: '4', change: '+10.0%', changeType: 'positive' },
];

const Stats = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map(({ title, value, change, changeType }) => (
        <div key={title} className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-base font-medium leading-normal text-slate-600 dark:text-slate-400">{title}</p>
          <p className="text-2xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white">{value}</p>
          <p className={`text-base font-medium leading-normal ${changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>{change}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
