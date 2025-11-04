// src/pages/PatientAccountSettings.tsx
const PatientAccountSettings = () => {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Personal Information</h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Update your personal details here.</p>
        </div>
        <div className="md:col-span-2">
          <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700/50 dark:bg-[#111c22]">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="first-name">First Name</label>
                  <input className="form-input mt-1 block w-full rounded-lg border-gray-300 bg-gray-50 focus:border-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700/50 dark:text-white" id="first-name" type="text" value="Maria" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="last-name">Last Name</label>
                  <input className="form-input mt-1 block w-full rounded-lg border-gray-300 bg-gray-50 focus:border-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700/50 dark:text-white" id="last-name" type="text" value="Sanchez" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">Email Address</label>
                <input className="form-input mt-1 block w-full rounded-lg border-gray-300 bg-gray-50 focus:border-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700/50 dark:text-white" id="email" type="email" value="maria.sanchez@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="phone">Phone Number</label>
                <input className="form-input mt-1 block w-full rounded-lg border-gray-300 bg-gray-50 focus:border-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700/50 dark:text-white" id="phone" type="tel" value="(555) 123-4567" />
              </div>
              <div className="flex justify-end">
                <button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark" type="submit">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="my-10 border-t border-gray-200 dark:border-gray-700/50"></div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Change Password</h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Choose a strong, new password.</p>
        </div>
        <div className="md:col-span-2">
          <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700/50 dark:bg-[#111c22]">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="current-password">Current Password</label>
                <input className="form-input mt-1 block w-full rounded-lg border-gray-300 bg-gray-50 focus:border-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700/50 dark:text-white" id="current-password" type="password" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="new-password">New Password</label>
                <input className="form-input mt-1 block w-full rounded-lg border-gray-300 bg-gray-50 focus:border-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700/50 dark:text-white" id="new-password" type="password" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="confirm-password">Confirm New Password</label>
                <input className="form-input mt-1 block w-full rounded-lg border-gray-300 bg-gray-50 focus:border-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700/50 dark:text-white" id="confirm-password" type="password" />
              </div>
              <div className="flex justify-end">
                <button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark" type="submit">Update Password</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="my-10 border-t border-gray-200 dark:border-gray-700/50"></div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Notifications</h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Manage how you receive alerts.</p>
        </div>
        <div className="md:col-span-2">
          <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700/50 dark:bg-[#111c22]">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="flex flex-col">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Email Notifications</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Receive alerts via email.</span>
                </span>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input checked className="peer sr-only" type="checkbox" />
                  <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/50 dark:bg-gray-700 dark:border-gray-600 dark:peer-focus:ring-primary/80"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex flex-col">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">SMS Notifications</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Receive alerts via text message.</span>
                </span>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input className="peer sr-only" type="checkbox" />
                  <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/50 dark:bg-gray-700 dark:border-gray-600 dark:peer-focus:ring-primary/80"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientAccountSettings;
