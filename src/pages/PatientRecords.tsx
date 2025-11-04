// src/pages/PatientRecords.tsx
import PageHeading from '../components/PageHeading';

const records = [
  { patient: 'Olivia Chen', type: 'Lab Results - CBC', date: '2023-10-26', status: 'Reviewed' },
  { patient: 'Liam Johnson', type: 'Cardiology Report', date: '2023-10-25', status: 'Pending Review' },
  { patient: 'Ava Garcia', type: 'Consultation Notes', date: '2023-10-24', status: 'Reviewed' },
  { patient: 'John Smith', type: 'Lab Results - Metabolic Panel', date: '2023-10-23', status: 'Action Required' },
  { patient: 'Noah Williams', type: 'Prescription History', date: '2023-10-22', status: 'Reviewed' },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Reviewed': return 'bg-green-500/20 text-green-500';
    case 'Pending Review': return 'bg-yellow-500/20 text-yellow-500';
    case 'Action Required': return 'bg-danger/20 text-danger';
    default: return 'bg-gray-500/20 text-gray-500';
  }
};

const PatientRecords = () => {
  return (
    <>
      <PageHeading title="Patient Records" description="Access and manage all patient medical records." />
      <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-background-light dark:bg-background-dark text-xs text-text-secondary-light dark:text-text-secondary-dark uppercase">
              <tr>
                <th className="px-6 py-3" scope="col">Patient Name</th>
                <th className="px-6 py-3" scope="col">Record Type</th>
                <th className="px-6 py-3" scope="col">Date Added</th>
                <th className="px-6 py-3" scope="col">Status</th>
                <th className="px-6 py-3 text-right" scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => (
                <tr key={index} className="border-b border-border-light dark:border-border-dark hover:bg-primary/5 transition-colors">
                  <td className="px-6 py-4 font-semibold text-text-primary-light dark:text-text-primary-dark whitespace-nowrap">{record.patient}</td>
                  <td className="px-6 py-4">{record.type}</td>
                  <td className="px-6 py-4">{record.date}</td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-medium py-1 px-2 rounded-full ${getStatusColor(record.status)}`}>{record.status}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 rounded-full hover:bg-primary/10">
                      <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark text-base">visibility</span>
                    </button>
                    <button className="p-2 rounded-full hover:bg-primary/10">
                      <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark text-base">download</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between p-4 border-t border-border-light dark:border-border-dark">
          <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
            Showing <span className="font-semibold">1</span> to <span className="font-semibold">5</span> of <span className="font-semibold">32</span> results
          </span>
          <div className="inline-flex items-center space-x-2">
            <button className="px-3 py-1.5 text-sm font-medium border rounded-md border-border-light dark:border-border-dark hover:bg-primary/10">Previous</button>
            <button className="px-3 py-1.5 text-sm font-medium border rounded-md border-border-light dark:border-border-dark hover:bg-primary/10">Next</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientRecords;
