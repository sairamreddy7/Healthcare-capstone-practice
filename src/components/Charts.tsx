// src/components/Charts.tsx
const Charts = () => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-5">
      <div className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 lg:col-span-3">
        <p className="text-base font-medium leading-normal text-slate-900 dark:text-white">User Activity (Last 7 Days)</p>
        <p className="truncate text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white">3,450 Actions</p>
        <div className="flex gap-1">
          <p className="text-base font-normal leading-normal text-slate-500 dark:text-slate-400">Last 7 Days</p>
          <p className="text-base font-medium leading-normal text-green-600">+5.2%</p>
        </div>
        <div className="flex min-h-[220px] flex-1 flex-col gap-8 py-4">
          <svg fill="none" height="100%" preserveAspectRatio="none" viewBox="-3 0 478 150" width="100%" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z" fill="url(#paint0_linear_chart)"></path>
            <path className="text-primary" d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_chart" x1="236" x2="236" y1="1" y2="149">
                <stop className="text-primary/30 dark:text-primary/20" stopColor="currentColor"></stop>
                <stop className="text-primary/0" offset="1" stopColor="currentColor" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
          <div className="flex justify-around">
            <p className="text-[13px] font-bold leading-normal tracking-[0.015em] text-slate-500 dark:text-slate-400">Mon</p>
            <p className="text-[13px] font-bold leading-normal tracking-[0.015em] text-slate-500 dark:text-slate-400">Tue</p>
            <p className="text-[13px] font-bold leading-normal tracking-[0.015em] text-slate-500 dark:text-slate-400">Wed</p>
            <p className="text-[13px] font-bold leading-normal tracking-[0.015em] text-slate-500 dark:text-slate-400">Thu</p>
            <p className="text-[13px] font-bold leading-normal tracking-[0.015em] text-slate-500 dark:text-slate-400">Fri</p>
            <p className="text-[13px] font-bold leading-normal tracking-[0.015em] text-slate-500 dark:text-slate-400">Sat</p>
            <p className="text-[13px] font-bold leading-normal tracking-[0.015em] text-slate-500 dark:text-slate-400">Sun</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 lg:col-span-2">
        <p className="text-base font-medium leading-normal text-slate-900 dark:text-white">User Role Distribution</p>
        <p className="truncate text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white">1,482 Total Users</p>
        <div className="flex gap-1">
          <p className="text-base font-normal leading-normal text-slate-500 dark:text-slate-400">All Time</p>
          <p className="text-base font-medium leading-normal text-green-600">+1.5%</p>
        </div>
        <div className="flex h-full min-h-[220px] flex-1 items-center justify-center py-4">
          <div className="relative flex h-48 w-48 items-center justify-center">
            <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 36 36">
              <circle className="stroke-current text-slate-200 dark:text-slate-700" cx="18" cy="18" fill="transparent" r="15.9154943092" strokeWidth="3"></circle>
              <circle className="stroke-current text-primary" cx="18" cy="18" fill="transparent" r="15.9154943092" strokeDasharray="60 100" strokeDashoffset="0" strokeWidth="3"></circle>
              <circle className="stroke-current text-teal-500" cx="18" cy="18" fill="transparent" r="15.9154943092" strokeDasharray="30 100" strokeDashoffset="-60" strokeWidth="3"></circle>
              <circle className="stroke-current text-amber-500" cx="18" cy="18" fill="transparent" r="15.9154943092" strokeDasharray="10 100" strokeDashoffset="-90" strokeWidth="3"></circle>
            </svg>
            <div className="absolute flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-slate-900 dark:text-white">1,482</span>
              <span className="text-sm text-slate-500 dark:text-slate-400">Users</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div>
            <div className="flex items-center justify-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <p className="text-xs font-medium text-slate-600 dark:text-slate-400">Patients (60%)</p>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center gap-2">
              <div className="h-2 w-2 rounded-full bg-teal-500"></div>
              <p className="text-xs font-medium text-slate-600 dark:text-slate-400">Clinicians (30%)</p>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center gap-2">
              <div className="h-2 w-2 rounded-full bg-amber-500"></div>
              <p className="text-xs font-medium text-slate-600 dark:text-slate-400">Admins (10%)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
