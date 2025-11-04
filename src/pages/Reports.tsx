// src/pages/Reports.tsx
import PageHeading from '../components/PageHeading';

const recentActivity = [
  { date: '2023-10-26 14:30', user: 'Dr. Aiden Carter', action: 'Login', details: 'Successful login from IP 192.168.1.1', status: 'Success' },
  { date: '2023-10-26 14:25', user: 'Admin System', action: 'Database Backup', details: 'Automatic daily backup initiated.', status: 'Info' },
  { date: '2023-10-26 14:20', user: 'Patient #P58293', action: 'Record Access', details: 'Viewed lab results from 2023-10-20.', status: 'Success' },
  { date: '2023-10-26 14:15', user: 'Anonymous', action: 'Login Attempt', details: 'Failed login for user \'admin\' from IP 203.0.113.5', status: 'Failed' },
  { date: '2023-10-26 14:10', user: 'Dr. Evelyn Reed', action: 'User Management', details: 'Added new clinician \'Dr. Ben Jacobs\'.', status: 'Success' },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Success': return 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-400';
    case 'Info': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-400';
    case 'Failed': return 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-400';
    default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900/50 dark:text-gray-400';
  }
};

const Reports = () => {
  return (
    <>
      <PageHeading title="Generate and View Reports" description="Create, analyze, and export system and user data reports." />
      <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Report Generator</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Select your parameters to generate a new report.</p>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="report-type">Report Type</label>
            <select className="form-select mt-1 block w-full rounded-lg border-slate-300 bg-white text-slate-900 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-white" id="report-type">
              <option>User Activity</option>
              <option>System Performance</option>
              <option>Data Trends</option>
              <option>Appointment Analytics</option>
              <option>Login Attempts</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="start-date">Start Date</label>
            <input className="form-input mt-1 block w-full rounded-lg border-slate-300 bg-white text-slate-900 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-white" id="start-date" type="date" />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="end-date">End Date</label>
            <input className="form-input mt-1 block w-full rounded-lg border-slate-300 bg-white text-slate-900 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-white" id="end-date" type="date" />
          </div>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/90">
              <span className="material-symbols-outlined text-xl">play_arrow</span>
              <span>Generate Report</span>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Export as:</p>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
              <span className="material-symbols-outlined text-xl">picture_as_pdf</span>
              <span>PDF</span>
            </button>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
              <span className="material-symbols-outlined text-xl">description</span>
              <span>CSV</span>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-6">
        <div className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-base font-medium leading-normal text-slate-900 dark:text-white">User Activity Report (Last 30 Days)</p>
          <p className="truncate text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white">12,830 Actions</p>
          <div className="flex gap-1">
            <p className="text-base font-normal leading-normal text-slate-500 dark:text-slate-400">vs. previous 30 days</p>
            <p className="text-base font-medium leading-normal text-green-600">+8.1%</p>
          </div>
          <div className="flex min-h-[250px] flex-1 flex-col gap-8 py-4">
            <svg fill="none" height="100%" preserveAspectRatio="none" viewBox="-3 0 478 150" width="100%" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z" fill="url(#paint0_linear_chart)"></path>
              <path className="text-primary" d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" stroke="currentColor" stroke-linecap="round" stroke-width="3"></path>
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_chart" x1="236" x2="236" y1="1" y2="149">
                  <stop className="text-primary/30 dark:text-primary/20" stop-color="currentColor"></stop>
                  <stop className="text-primary/0" offset="1" stop-color="currentColor" stop-opacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          <table className="min-w-full text-sm">
            <thead className="text-left text-slate-600 dark:text-slate-400">
              <tr>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">User</th>
                <th className="p-4 font-medium">Action Type</th>
                <th className="p-4 font-medium">Details</th>
                <th className="p-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {recentActivity.map((activity, index) => (
                <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="whitespace-nowrap p-4 text-slate-700 dark:text-slate-300">{activity.date}</td>
                  <td className="p-4 text-slate-900 dark:text-white">{activity.user}</td>
                  <td className="p-4 text-slate-700 dark:text-slate-300">{activity.action}</td>
                  <td className="p-4 text-slate-700 dark:text-slate-300">{activity.details}</td>
                  <td className="p-4">
                    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(activity.status)}`}>{activity.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Reports;
