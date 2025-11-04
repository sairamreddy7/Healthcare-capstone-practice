// src/layouts/ClinicianTopNavBar.tsx
const ClinicianTopNavBar = () => {
  return (
    <header className="h-16 flex-shrink-0 flex items-center justify-between whitespace-nowrap border-b border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark px-6">
      <label className="relative hidden sm:block">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary-light dark:text-text-secondary-dark">search</span>
        <input
          className="form-input w-full min-w-[20rem] rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary focus:ring-opacity-50 h-10 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark pl-10 text-sm"
          placeholder="Search patients, records..."
          type="search"
        />
      </label>
      <div className="flex items-center gap-4">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-semibold leading-normal gap-2 shadow-sm hover:bg-primary/90 transition-colors">
          <span className="material-symbols-outlined">add</span>
          <span className="truncate">New Appointment</span>
        </button>
        <button className="relative flex items-center justify-center size-10 rounded-full hover:bg-primary/10 transition-colors">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-1.5 right-1.5 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-danger opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-danger"></span>
          </span>
        </button>
        <div className="flex items-center gap-3">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD9puGqQmQno5xvQ--YCTzlPvsPZyOtCJ5WtskBYs-1glrk5xFIDV3VQ-bc9gj-FDzACB4nM_RJQk0_xk8lapamCWHq51iObWr72itpHJdA32_6TIvilgvnmm-QPzQqcuY4SWoyveNLHVQEgrrNy6dNr0vNtATWsL0z2Eag1prIRpKDGPPDhHhOS8p5RAIKQ3C64s4QBeiXxh2qjqJ1BvlXS_i7VANrZk5dUfMaQqhd74GmWVAq8qqarKIs4DFLQKTIXtzc-k-SlLk")' }}
          ></div>
          <div className="flex-col hidden md:flex">
            <h1 className="font-semibold text-sm">Dr. Evelyn Reed</h1>
            <p className="text-text-secondary-light dark:text-text-secondary-dark text-xs">MD, Cardiologist</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ClinicianTopNavBar;
