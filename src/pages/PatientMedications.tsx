// src/pages/PatientMedications.tsx
const medications = [
  { name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily', doctor: 'Dr. Evelyn Reed', status: 'Active', refillDue: 'Dec 15, 2023' },
  { name: 'Metformin', dosage: '500mg', frequency: 'Twice daily', doctor: 'Dr. Evelyn Reed', status: 'Active', refillDue: 'Nov 30, 2023' },
  { name: 'Atorvastatin', dosage: '20mg', frequency: 'Once daily at bedtime', doctor: 'Dr. Alan Grant', status: 'Refill due', refillDue: 'Oct 25, 2023' },
  { name: 'Amoxicillin', dosage: '500mg', frequency: 'Every 8 hours', doctor: 'Dr. Sarah Miller', status: 'Inactive', refillDue: 'N/A' },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Active': return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300';
    case 'Refill due': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300';
    case 'Inactive': return 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-300';
  }
};

const PatientMedications = () => {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Your Medications</h1>
          <p className="text-gray-500 dark:text-gray-400">A list of your current and past prescriptions.</p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90">
          <span className="material-symbols-outlined text-base">add</span>
          Request Refill
        </button>
      </div>
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-700/50 dark:bg-[#111c22]">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left text-xs uppercase text-gray-500 dark:bg-gray-800/50 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3 font-medium">Medication</th>
                <th className="px-6 py-3 font-medium">Dosage</th>
                <th className="px-6 py-3 font-medium">Frequency</th>
                <th className="px-6 py-3 font-medium">Prescribing Doctor</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Refill Due</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700/50">
              {medications.map((med) => (
                <tr key={med.name} className="hover:bg-gray-50 dark:hover:bg-gray-800/20">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{med.name}</td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{med.dosage}</td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{med.frequency}</td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{med.doctor}</td>
                  <td className="px-6 py-4">
                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusColor(med.status)}`}>{med.status}</span>
                  </td>
                  <td className={`px-6 py-4 font-semibold ${med.status === 'Refill due' ? 'text-yellow-700 dark:text-yellow-400' : 'text-gray-600 dark:text-gray-300'}`}>
                    {med.refillDue}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PatientMedications;
