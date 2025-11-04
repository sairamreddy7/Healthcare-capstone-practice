// src/pages/AuditLogs.tsx
import PageHeading from '../components/PageHeading';

const logs = [
  { timestamp: '2023-10-27 14:30:15', userId: 'USR-001 (Admin)', action: 'LOGIN', resource: 'System Access', status: 'Success', details: 'User successfully authenticated.' },
  { timestamp: '2023-10-27 14:28:40', userId: 'USR-125 (Clinician)', action: 'UPDATE', resource: 'Patient Record #P-58293', status: 'Success', details: 'Updated patient\'s medication list.' },
  { timestamp: '2023-10-27 14:25:10', userId: 'USR-001 (Admin)', action: 'DELETE', resource: 'User Account #USR-089', status: 'Success', details: 'User account permanently deleted.' },
  { timestamp: '2023-10-27 14:22:05', userId: 'USR-342 (Patient)', action: 'CREATE', resource: 'Appointment #A-9942', status: 'Success', details: 'Scheduled a new appointment.' },
  { timestamp: '2023-10-27 14:20:01', userId: 'UNAUTH', action: 'LOGIN_ATTEMPT', resource: 'System Access', status: 'Failed', details: 'Invalid credentials provided.' },
  { timestamp: '2023-10-27 14:15:55', userId: 'USR-001 (Admin)', action: 'EXPORT', resource: 'User List', status: 'Success', details: 'Exported user list to CSV.' },
  { timestamp: '2023-10-27 14:12:30', userId: 'USR-045 (Clinician)', action: 'READ', resource: 'Patient Record #P-48151', status: 'Success', details: 'Viewed patient\'s medical history.' },
];

const getActionColor = (action: string) => {
  switch (action) {
    case 'LOGIN': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300';
    case 'UPDATE': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300';
    case 'DELETE': return 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300';
    case 'CREATE': return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300';
    case 'LOGIN_ATTEMPT': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300';
    case 'EXPORT': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300';
    case 'READ': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300';
    default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-300';
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Success': return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300';
    case 'Failed': return 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300';
    default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-300';
  }
};

const AuditLogs = () => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6">
        <PageHeading title="Audit Logs" description="Review all system activities and user actions." />
        <div className="flex items-center gap-3">
          <button className="flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-slate-300 bg-white px-4 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800">
            <span className="material-symbols-outlined text-xl">filter_list</span>
            <span>Filter</span>
          </button>
          <button className="flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-primary px-4 text-sm font-medium text-white hover:bg-primary/90">
            <span className="material-symbols-outlined text-xl">download</span>
            <span>Export Logs</span>
          </button>
        </div>
      </div>
      <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
              <tr>
                <th className="px-6 py-4 font-semibold" scope="col">
                  <div className="flex items-center gap-1 cursor-pointer">
                    <span>Timestamp</span>
                    <span className="material-symbols-outlined text-base">arrow_downward</span>
                  </div>
                </th>
                <th className="px-6 py-4 font-semibold" scope="col">User ID</th>
                <th className="px-6 py-4 font-semibold" scope="col">Action Type</th>
                <th className="px-6 py-4 font-semibold" scope="col">Resource</th>
                <th className="px-6 py-4 font-semibold" scope="col">Status</th>
                <th className="px-6 py-4 font-semibold" scope="col">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {logs.map((log, index) => (
                <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="whitespace-nowrap px-6 py-4 text-slate-700 dark:text-slate-300">{log.timestamp}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-slate-700 dark:text-slate-300">{log.userId}</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getActionColor(log.action)}`}>{log.action}</span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-slate-700 dark:text-slate-300">{log.resource}</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(log.status)}`}>{log.status}</span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-slate-500 dark:text-slate-400">{log.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 p-4 dark:border-slate-800">
          <span className="text-sm text-slate-600 dark:text-slate-400">Showing 1 to 7 of 2,456 entries</span>
          <div className="flex items-center gap-2">
            <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800">
              <span className="material-symbols-outlined text-xl">chevron_left</span>
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-primary bg-primary/20 text-primary dark:border-primary/50 dark:bg-primary/20">1</button>
            <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800">2</button>
            <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800">3</button>
            <span className="text-slate-400 dark:text-slate-600">...</span>
            <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800">351</button>
            <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800">
              <span className="material-symbols-outlined text-xl">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuditLogs;
