// src/pages/AccountSettings.tsx
const AccountSettings = () => {
  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="border-b border-slate-200 p-6 dark:border-slate-800">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Profile Information</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Update your personal details here.</p>
        </div>
        <div className="p-6 space-y-6">
          <div className="flex items-center gap-6">
            <div
              className="aspect-square size-24 rounded-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBsZLEnOKTO3R7Rd_bU-5cH-u11qg3eTjVZY71g3YWRYHrGZYyuUrZ1gW8cXnIvyjSR6k9cJbekSClkmXbWhHeIjZScdq6hQmFxxf1_sHXhhC-WUyS4QTBnBLvp4z4UdmZ_dKKPFzpVzTst6kSvhR75x9l4x46xiflbFpX2Xdtu9MmLQr0HXoEd4zKtkIDerjjCDGq7ln8x_DiJk_FX-CP2vpH5u1B7HbFe7jYdaC1DzN1eAW4evyEt2Wv66Q3ITzLHNfSLhpGaDzc")' }}
            ></div>
            <div className="flex flex-col gap-2">
              <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90">Change Photo</button>
              <button className="rounded-lg border border-slate-300 bg-transparent px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">Remove Photo</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="fullName">Full Name</label>
              <input className="mt-1 block w-full rounded-lg border-slate-300 bg-white text-slate-900 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-white" id="fullName" type="text" value="Dr. Evelyn Reed" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="email">Email Address</label>
              <input className="mt-1 block w-full rounded-lg border-slate-300 bg-white text-slate-900 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-white" id="email" type="email" value="e.reed@healthapp.io" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="role">Role</label>
              <input className="mt-1 block w-full rounded-lg border-slate-300 bg-slate-100 text-slate-500 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 cursor-not-allowed" disabled id="role" type="text" value="Administrator" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="phone">Phone Number</label>
              <input className="mt-1 block w-full rounded-lg border-slate-300 bg-white text-slate-900 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-white" id="phone" type="tel" value="+1 (555) 123-4567" />
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-3 border-t border-slate-200 p-6 dark:border-slate-800">
          <button className="rounded-lg border border-slate-300 bg-transparent px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">Cancel</button>
          <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90">Save Changes</button>
        </div>
      </div>
      <div className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="border-b border-slate-200 p-6 dark:border-slate-800">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Security Settings</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Manage your password and two-factor authentication.</p>
        </div>
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="currentPassword">Current Password</label>
              <input className="mt-1 block w-full rounded-lg border-slate-300 bg-white text-slate-900 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-white" id="currentPassword" type="password" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="newPassword">New Password</label>
              <input className="mt-1 block w-full rounded-lg border-slate-300 bg-white text-slate-900 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-white" id="newPassword" type="password" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="confirmPassword">Confirm New Password</label>
              <input className="mt-1 block w-full rounded-lg border-slate-300 bg-white text-slate-900 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-white" id="confirmPassword" type="password" />
            </div>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-slate-200 p-4 dark:border-slate-800">
            <div>
              <h4 className="font-semibold text-slate-800 dark:text-slate-200">Two-Factor Authentication (2FA)</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">Protect your account with an extra layer of security.</p>
            </div>
            <label className="relative inline-flex cursor-pointer items-center" htmlFor="two-factor-auth">
              <input checked className="peer sr-only" id="two-factor-auth" type="checkbox" />
              <div className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/50 dark:bg-slate-700 dark:border-slate-600 dark:peer-focus:ring-primary/80"></div>
            </label>
          </div>
        </div>
        <div className="flex justify-end gap-3 border-t border-slate-200 p-6 dark:border-slate-800">
          <button className="rounded-lg border border-slate-300 bg-transparent px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">Cancel</button>
          <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90">Update Password</button>
        </div>
      </div>
      <div className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="border-b border-slate-200 p-6 dark:border-slate-800">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Notification Preferences</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Choose how you want to be notified.</p>
        </div>
        <div className="divide-y divide-slate-200 dark:divide-slate-800 p-6">
          <div className="flex items-center justify-between py-4">
            <div>
              <h4 className="font-semibold text-slate-800 dark:text-slate-200">System Alerts</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">Notifications about system health and critical errors.</p>
            </div>
            <label className="relative inline-flex cursor-pointer items-center" htmlFor="system-alerts">
              <input checked className="peer sr-only" id="system-alerts" type="checkbox" />
              <div className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/50 dark:bg-slate-700 dark:border-slate-600 dark:peer-focus:ring-primary/80"></div>
            </label>
          </div>
          <div className="flex items-center justify-between py-4">
            <div>
              <h4 className="font-semibold text-slate-800 dark:text-slate-200">User Activity Summaries</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">Receive daily or weekly reports on user activity.</p>
            </div>
            <label className="relative inline-flex cursor-pointer items-center" htmlFor="activity-summaries">
              <input className="peer sr-only" id="activity-summaries" type="checkbox" />
              <div className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/50 dark:bg-slate-700 dark:border-slate-600 dark:peer-focus:ring-primary/80"></div>
            </label>
          </div>
          <div className="flex items-center justify-between py-4">
            <div>
              <h4 className="font-semibold text-slate-800 dark:text-slate-200">Newsletter &amp; Updates</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">Stay informed about new features and updates.</p>
            </div>
            <label className="relative inline-flex cursor-pointer items-center" htmlFor="newsletter">
              <input checked className="peer sr-only" id="newsletter" type="checkbox" />
              <div className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/50 dark:bg-slate-700 dark:border-slate-600 dark:peer-focus:ring-primary/80"></div>
            </label>
          </div>
        </div>
        <div className="flex justify-end gap-3 border-t border-slate-200 p-6 dark:border-slate-800">
          <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90">Save Preferences</button>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
