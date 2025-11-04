// src/pages/PatientAppointments.tsx
const PatientAppointments = () => {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Your Appointments</h2>
          <p className="text-gray-500 dark:text-gray-400">Manage your upcoming and past appointments.</p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90">
          <span className="material-symbols-outlined text-base">add</span>
          Schedule New Appointment
        </button>
      </div>
      <div className="rounded-xl border border-gray-200 bg-white dark:border-gray-700/50 dark:bg-[#111c22]">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Upcoming Appointments</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-800/50">
              <div className="flex flex-col items-center justify-center rounded bg-gray-100 px-4 py-2 text-center dark:bg-gray-700">
                <span className="text-xs font-bold uppercase text-primary">OCT</span>
                <span className="text-2xl font-bold text-gray-800 dark:text-gray-200">28</span>
              </div>
              <div className="flex-grow">
                <p className="font-bold text-gray-800 dark:text-gray-100">Annual Physical Exam</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">10:30 AM with Dr. Evelyn Reed (Cardiology)</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Main Hospital, 2nd Floor, Suite 205</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-sm font-medium text-primary hover:underline">Reschedule</button>
                <button className="text-sm font-medium text-red-500 hover:underline">Cancel</button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700/50 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Past Appointments</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center justify-center rounded bg-gray-100 px-4 py-2 text-center dark:bg-gray-800">
                <span className="text-xs font-bold uppercase text-gray-500 dark:text-gray-400">JUL</span>
                <span className="text-2xl font-bold text-gray-600 dark:text-gray-300">15</span>
              </div>
              <div className="flex-grow">
                <p className="font-bold text-gray-800 dark:text-gray-100">Follow-up Consultation</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">02:00 PM with Dr. Alan Grant (Endocrinology)</p>
              </div>
              <div className="flex items-center gap-2">
                <a className="text-sm font-medium text-primary hover:underline" href="#">View Visit Summary</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center justify-center rounded bg-gray-100 px-4 py-2 text-center dark:bg-gray-800">
                <span className="text-xs font-bold uppercase text-gray-500 dark:text-gray-400">MAR</span>
                <span className="text-2xl font-bold text-gray-600 dark:text-gray-300">03</span>
              </div>
              <div className="flex-grow">
                <p className="font-bold text-gray-800 dark:text-gray-100">Dental Cleaning</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">11:00 AM with Dr. Sarah Harding (Dentistry)</p>
              </div>
              <div className="flex items-center gap-2">
                <a className="text-sm font-medium text-primary hover:underline" href="#">View Visit Summary</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientAppointments;
