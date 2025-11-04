// src/pages/PatientTestResults.tsx
const results = [
  { name: 'Comprehensive Metabolic Panel', date: 'Oct 20, 2023', status: 'Available' },
  { name: 'Lipid Panel', date: 'Oct 20, 2023', status: 'Available' },
  { name: 'Thyroid Panel (TSH)', date: 'Sep 15, 2023', status: 'Available' },
  { name: 'Complete Blood Count (CBC)', date: 'Aug 01, 2023', status: 'Archived' },
  { name: 'Urinalysis', date: 'Jul 22, 2023', status: 'Archived' },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Available': return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300';
    case 'Archived': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300';
    default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-300';
  }
};

const PatientTestResults = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Test Results</h1>
        <p className="text-gray-500 dark:text-gray-400">Review your recent and past laboratory results.</p>
      </div>
      <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white dark:border-gray-700/50 dark:bg-[#111c22]">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-800/50 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3" scope="col">Test Name</th>
              <th className="px-6 py-3" scope="col">Date</th>
              <th className="px-6 py-3" scope="col">Status</th>
              <th className="px-6 py-3" scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result) => (
              <tr key={result.name} className="border-b bg-white hover:bg-gray-50 dark:border-gray-700/50 dark:bg-[#111c22] dark:hover:bg-gray-800/50">
                <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">{result.name}</td>
                <td className="px-6 py-4">{result.date}</td>
                <td className="px-6 py-4">
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusColor(result.status)}`}>{result.status}</span>
                </td>
                <td className="flex items-center gap-4 px-6 py-4">
                  <a className="font-medium text-primary hover:underline" href="#">View Details</a>
                  <button className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                    <span className="material-symbols-outlined text-base">download</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientTestResults;
