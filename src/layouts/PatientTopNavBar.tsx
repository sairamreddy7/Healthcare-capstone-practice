// src/layouts/PatientTopNavBar.tsx
const PatientTopNavBar = () => {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between whitespace-nowrap border-b border-gray-200 dark:border-gray-700/50 bg-background-light/80 dark:bg-background-dark/80 px-10 py-4 backdrop-blur-sm">
      <div className="flex-1">
        <label className="relative flex w-full max-w-sm items-center">
          <span className="material-symbols-outlined absolute left-4 text-gray-500 dark:text-gray-400">search</span>
          <input
            className="form-input w-full rounded-lg border-gray-300 bg-gray-100 py-2 pl-12 pr-4 text-sm text-gray-800 placeholder:text-gray-500 focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-[#233c48] dark:text-white dark:placeholder:text-gray-400"
            placeholder="Search records, messages..."
            type="search"
          />
        </label>
      </div>
      <div className="flex items-center gap-4">
        <button className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-[#233c48] dark:text-gray-300 dark:hover:bg-gray-700">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        <div className="flex items-center gap-3">
          <div
            className="h-10 w-10 rounded-full bg-cover bg-center"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAOBHOyFMt7NP08kf199bW_92_8qA0EkWak9NVRK2VOG8sErBfxYFHQDrqlCTgCDah7PsHZgR6RkUqnF2sVfegje4Gdo0U-0YqWsz4fw40zd9WxFdATu521vK_W01pG32w336N7ajtQUN7VY5mH1xwuDJ-X-u8KuRQp51EvxSoislRoB02V_GDNGlo64aSFnx9dmnfEkkL5Zxf41qylHiCuGXpIdaMAMxE52Ns6c93oc6iWRtsuWMijaVbtL3IYwhC97n1aJ5rVPaA")' }}
          ></div>
          <div className="flex flex-col text-sm">
            <h2 className="font-medium text-gray-800 dark:text-white">Maria Sanchez</h2>
            <p className="text-gray-500 dark:text-gray-400">Patient ID: 789123</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PatientTopNavBar;
