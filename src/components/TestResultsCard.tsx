// src/components/TestResultsCard.tsx
const TestResultsCard = () => {
  return (
    <a className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-gray-700/50 dark:bg-[#111c22] dark:hover:shadow-primary/10" href="#">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <span className="material-symbols-outlined">science</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Recent Test Results</h3>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-gray-800 dark:text-gray-100">Comprehensive Metabolic Panel</p>
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800 dark:bg-green-900/50 dark:text-green-300">Available</span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">Results from Oct 20, 2023 are ready for review.</p>
      </div>
      <p className="text-sm font-medium text-primary hover:underline mt-auto pt-2">View Details</p>
    </a>
  );
};

export default TestResultsCard;
