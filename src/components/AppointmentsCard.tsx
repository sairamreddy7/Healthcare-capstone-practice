// src/components/AppointmentsCard.tsx
const AppointmentsCard = () => {
  return (
    <a className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-gray-700/50 dark:bg-[#111c22] dark:hover:shadow-primary/10" href="#">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <span className="material-symbols-outlined">calendar_month</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Upcoming Appointments</h3>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-4 border-b border-gray-200 pb-4 dark:border-gray-700/50">
          <div className="flex flex-col items-center justify-center rounded bg-gray-100 px-3 py-1 text-center dark:bg-gray-800">
            <span className="text-xs font-bold uppercase text-primary">OCT</span>
            <span className="text-xl font-bold text-gray-800 dark:text-gray-200">28</span>
          </div>
          <div>
            <p className="font-semibold text-gray-800 dark:text-gray-100">Annual Physical Exam</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">10:30 AM with Dr. Evelyn Reed</p>
          </div>
        </div>
      </div>
      <p className="text-sm font-medium text-primary hover:underline mt-auto pt-2">View All Appointments</p>
    </a>
  );
};

export default AppointmentsCard;
