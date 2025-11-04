// src/pages/PatientBillings.tsx
const bills = [
  { date: 'Oct 15, 2023', description: 'Annual Physical Exam', amount: '$75.00', status: 'Due' },
  { date: 'Sep 22, 2023', description: 'Lab Work - Blood Panel', amount: '$120.00', status: 'Paid' },
  { date: 'Aug 05, 2023', description: 'Follow-up Consultation', amount: '$50.00', status: 'Paid' },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Due': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300';
    case 'Paid': return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300';
    default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-300';
  }
};

const PatientBillings = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Billings & Payments</h1>
        <p className="text-gray-500 dark:text-gray-400">View and manage your medical bills.</p>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="rounded-xl border border-gray-200 bg-white dark:border-gray-700/50 dark:bg-[#111c22]">
            <div className="border-b border-gray-200 p-6 dark:border-gray-700/50">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Billing History</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50 text-xs uppercase text-gray-500 dark:border-gray-700/50 dark:bg-gray-800/50 dark:text-gray-400">
                    <th className="px-6 py-3 font-medium">Date</th>
                    <th className="px-6 py-3 font-medium">Description</th>
                    <th className="px-6 py-3 font-medium">Amount</th>
                    <th className="px-6 py-3 font-medium">Status</th>
                    <th className="px-6 py-3 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700/50">
                  {bills.map((bill) => (
                    <tr key={bill.description}>
                      <td className="px-6 py-4">{bill.date}</td>
                      <td className="px-6 py-4 font-medium text-gray-800 dark:text-gray-200">{bill.description}</td>
                      <td className="px-6 py-4">{bill.amount}</td>
                      <td className="px-6 py-4">
                        <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(bill.status)}`}>{bill.status}</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        {bill.status === 'Due' ? (
                          <button className="font-medium text-primary hover:underline">Pay Now</button>
                        ) : (
                          <a className="font-medium text-primary hover:underline" href="#">View Receipt</a>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700/50 dark:bg-[#111c22]">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Current Balance</h3>
            <div className="mt-4 flex flex-col items-start gap-1 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
              <p className="text-sm font-medium text-yellow-800 dark:text-yellow-300">Outstanding balance:</p>
              <p className="text-3xl font-bold text-yellow-900 dark:text-yellow-200">$75.00</p>
              <p className="text-xs text-yellow-700 dark:text-yellow-400">Due by Nov 15, 2023</p>
            </div>
            <button className="mt-6 w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-white hover:bg-primary/90">Pay Full Amount</button>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700/50 dark:bg-[#111c22]">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Payment Methods</h3>
            <div className="mt-4 flex items-center gap-4">
              <img alt="Visa" className="h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgdnG4YNrpWJXaAao07x0IPeApPQ2bFHpqENwMPxNzYFst-Lp2zZCfTri7e3gAz1a-A1t8vmRMkVcMK05m3mzV3istIZddxan2yQOm_t4hrcVuX0Hfky4vGE4lkFDqnBruoemdKdequpb1-b7pb-d2u2ALnl1-A1uIL9i_504dJZV_KxH9gNicDp20cnoGHSqF9qhLXvAAUrZApl3NRFiaQwvXgRFbiqaQAR_8oAJr20rAqvJjyrXbpkXbogfV96Qh7kocF-A5oeM" />
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-200">Visa ending in 1234</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Expires 12/2025</p>
              </div>
            </div>
            <button className="mt-4 w-full rounded-lg border border-gray-300 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800">
              Manage Payment Methods
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientBillings;
