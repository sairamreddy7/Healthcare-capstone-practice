// src/components/PatientTable.tsx
interface Patient {
  id: string;
  name: string;
  dob: string;
  lastVisit: string;
  status: 'Active' | 'Inactive' | 'Monitoring';
  avatar: string;
}

interface PatientTableProps {
  patients: Patient[];
}

const PatientTable = ({ patients }: PatientTableProps) => {
  return (
    <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-background-light dark:bg-background-dark">
            <tr>
              <th className="p-4 text-sm font-semibold text-text-secondary-light dark:text-text-secondary-dark">Patient Name</th>
              <th className="p-4 text-sm font-semibold text-text-secondary-light dark:text-text-secondary-dark">Date of Birth</th>
              <th className="p-4 text-sm font-semibold text-text-secondary-light dark:text-text-secondary-dark">Last Visit</th>
              <th className="p-4 text-sm font-semibold text-text-secondary-light dark:text-text-secondary-dark">Status</th>
              <th className="p-4 text-sm font-semibold text-text-secondary-light dark:text-text-secondary-dark text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id} className="border-t border-border-light dark:border-border-dark">
                <td className="p-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                      style={{ backgroundImage: `url("${patient.avatar}")` }}
                    ></div>
                    <div>
                      <p className="font-semibold">{patient.name}</p>
                      <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">ID: {patient.id}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-sm whitespace-nowrap">{patient.dob}</td>
                <td className="p-4 text-sm whitespace-nowrap">{patient.lastVisit}</td>
                <td className="p-4 whitespace-nowrap">
                  <span
                    className={`text-xs font-medium py-1 px-2.5 rounded-full ${
                      patient.status === 'Active'
                        ? 'bg-secondary/20 text-secondary'
                        : patient.status === 'Monitoring'
                        ? 'bg-yellow-500/20 text-yellow-500'
                        : 'bg-gray-500/20 text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    {patient.status}
                  </span>
                </td>
                <td className="p-4 whitespace-nowrap text-right">
                  <a className="font-semibold text-primary text-sm hover:underline" href="#">View Record</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center p-4 border-t border-border-light dark:border-border-dark">
        <button className="flex items-center gap-2 text-sm font-medium px-4 h-9 rounded-lg hover:bg-primary/10 disabled:opacity-50" disabled>
          <span className="material-symbols-outlined text-base">chevron_left</span> Previous
        </button>
        <div className="flex items-center gap-2 text-sm">
          <a className="flex items-center justify-center size-9 rounded-lg bg-primary/10 text-primary font-semibold" href="#">1</a>
          <a className="flex items-center justify-center size-9 rounded-lg hover:bg-primary/10" href="#">2</a>
          <a className="flex items-center justify-center size-9 rounded-lg hover:bg-primary/10" href="#">3</a>
          <span>...</span>
          <a className="flex items-center justify-center size-9 rounded-lg hover:bg-primary/10" href="#">13</a>
        </div>
        <button className="flex items-center gap-2 text-sm font-medium px-4 h-9 rounded-lg hover:bg-primary/10">
          Next <span className="material-symbols-outlined text-base">chevron_right</span>
        </button>
      </div>
    </div>
  );
};

export default PatientTable;
