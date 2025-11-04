// src/components/DashboardStats.tsx
const stats = [
  { title: "Today's Appointments", value: '12' },
  { title: 'Unread Messages', value: '5' },
  { title: 'Records to Review', value: '3' },
];

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {stats.map(({ title, value }) => (
        <div key={title} className="flex flex-col gap-2 rounded-xl p-6 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark">
          <p className="text-base font-medium text-text-secondary-light dark:text-text-secondary-dark">{title}</p>
          <p className="text-3xl font-bold">{value}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
