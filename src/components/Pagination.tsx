// src/components/Pagination.tsx
const Pagination = () => {
  return (
    <div className="mt-6 flex items-center justify-between">
      <p className="text-sm text-slate-600 dark:text-slate-400">
        Showing <span className="font-semibold text-slate-900 dark:text-white">1</span> to <span className="font-semibold text-slate-900 dark:text-white">5</span> of <span className="font-semibold text-slate-900 dark:text-white">1,482</span> results
      </p>
      <div className="flex items-center gap-2">
        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
          disabled
        >
          <span className="material-symbols-outlined text-xl">chevron_left</span>
        </button>
        <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
          <span className="material-symbols-outlined text-xl">chevron_right</span>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
