// src/components/MedicationsCard.tsx
const MedicationsCard = () => {
  return (
    <a className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-gray-700/50 dark:bg-[#111c22] dark:hover:shadow-primary/10" href="#">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <span className="material-symbols-outlined">pill</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Active Medications</h3>
      </div>
      <ul className="space-y-2">
        <li className="flex items-center justify-between">
          <span className="text-gray-700 dark:text-gray-300">Lisinopril (10mg)</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">1 daily</span>
        </li>
        <li className="flex items-center justify-between">
          <span className="text-gray-700 dark:text-gray-300">Metformin (500mg)</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">2 daily</span>
        </li>
      </ul>
      <p className="text-sm font-medium text-primary hover:underline mt-auto pt-2">View Full List</p>
    </a>
  );
};

export default MedicationsCard;
