// src/components/BillingsCard.tsx
const BillingsCard = () => {
  return (
    <a className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-gray-700/50 dark:bg-[#111c22] dark:hover:shadow-primary/10" href="#">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <span className="material-symbols-outlined">receipt_long</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Outstanding Bills</h3>
      </div>
      <div className="flex flex-col items-start gap-1 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
        <p className="text-sm font-medium text-yellow-800 dark:text-yellow-300">You have an outstanding balance:</p>
        <p className="text-2xl font-bold text-yellow-900 dark:text-yellow-200">$75.00</p>
        <p className="text-xs text-yellow-700 dark:text-yellow-400">Due by Nov 15, 2023</p>
      </div>
      <p className="text-sm font-medium text-primary hover:underline mt-auto pt-2">View Billing Details</p>
    </a>
  );
};

export default BillingsCard;
