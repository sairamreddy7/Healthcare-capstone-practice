// src/pages/SystemSettings.tsx
import PageHeading from '../components/PageHeading';

const SystemSettings = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between gap-3 pb-6">
        <PageHeading title="System Configuration" description="Manage global application settings and parameters." />
        <div className="flex items-start gap-3">
          <button className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800">Discard Changes</button>
          <button className="rounded-lg border border-primary bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary/90 dark:border-primary dark:bg-primary dark:hover:bg-primary/90">Save Changes</button>
        </div>
      </div>
      <div className="space-y-8">
        {/* Security Policies */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/20">
              <span className="material-symbols-outlined text-3xl">security</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Security Policies</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Configure authentication, password policies, and session management.</p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 border-t border-slate-200 pt-6 dark:border-slate-800 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="password-length">Minimum Password Length</label>
              <input className="form-input rounded-lg border-slate-300 bg-white text-slate-900 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-white" id="password-length" type="number" defaultValue={12} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="session-timeout">Session Timeout (minutes)</label>
              <input className="form-input rounded-lg border-slate-300 bg-white text-slate-900 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-white" id="session-timeout" type="number" defaultValue={30} />
            </div>
            <div className="flex items-center justify-between md:col-span-2">
              <div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Enable Two-Factor Authentication (2FA)</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Require all users to set up 2FA for enhanced security.</p>
              </div>
              <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input defaultChecked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-2 appearance-none cursor-pointer" id="toggle-2fa" name="toggle" type="checkbox" />
                <label className="toggle-label block overflow-hidden h-6 rounded-full bg-slate-300 cursor-pointer" htmlFor="toggle-2fa"></label>
              </div>
            </div>
          </div>
        </div>

        {/* Data Retention Settings */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/20">
              <span className="material-symbols-outlined text-3xl">database</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Data Retention Settings</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Define policies for automatic data archival and deletion.</p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 border-t border-slate-200 pt-6 dark:border-slate-800 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="patient-records">Patient Records Retention (years)</label>
              <input className="form-input rounded-lg border-slate-300 bg-white text-slate-900 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-white" id="patient-records" type="number" defaultValue={7} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="audit-logs">Audit Log Retention (days)</label>
              <input className="form-input rounded-lg border-slate-300 bg-white text-slate-900 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-white" id="audit-logs" type="number" defaultValue={365} />
            </div>
          </div>
        </div>

        {/* Third-Party Integrations */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/20">
              <span className="material-symbols-outlined text-3xl">hub</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Third-Party Integrations</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Manage API keys and connections to external services.</p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 border-t border-slate-200 pt-6 dark:border-slate-800">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="azure-api">Azure Active Directory API Key</label>
              <div className="flex items-center gap-2">
                <input className="form-input w-full rounded-lg border-slate-300 bg-slate-50 text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400" id="azure-api" readOnly type="text" defaultValue="•••••••••••••••••••••••••••••••••••_abc" />
                <button className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800">Update</button>
              </div>
            </div>
          </div>
        </div>

        {/* Application-wide Notifications */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/20">
              <span className="material-symbols-outlined text-3xl">campaign</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Application-wide Notifications</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Broadcast messages to all users, such as for maintenance.</p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 border-t border-slate-200 pt-6 dark:border-slate-800">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="notification-message">Notification Message (optional)</label>
              <textarea className="form-textarea w-full rounded-lg border-slate-300 bg-white text-slate-900 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-white" id="notification-message" placeholder="e.g., Scheduled maintenance on Sunday at 2 AM EST." rows={3}></textarea>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Enable Maintenance Mode</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Redirects all non-admin users to a maintenance page.</p>
              </div>
              <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-2 appearance-none cursor-pointer" id="toggle-maintenance" name="toggle" type="checkbox" />
                <label className="toggle-label block overflow-hidden h-6 rounded-full bg-slate-300 cursor-pointer" htmlFor="toggle-maintenance"></label>
              </div>
            </div>
          </div>
        </div>

        {/* General Platform Configurations */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/20">
              <span className="material-symbols-outlined text-3xl">tune</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">General Platform Configurations</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Adjust general settings like timezone and application name.</p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 border-t border-slate-200 pt-6 dark:border-slate-800 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="app-name">Application Name</label>
              <input className="form-input rounded-lg border-slate-300 bg-white text-slate-900 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-white" id="app-name" type="text" defaultValue="HealthApp" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="timezone">System Timezone</label>
              <select className="form-select rounded-lg border-slate-300 bg-white text-slate-900 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-white" id="timezone">
                <option>UTC-5:00 (Eastern Time)</option>
                <option>UTC-6:00 (Central Time)</option>
                <option>UTC-7:00 (Mountain Time)</option>
                <option>UTC-8:00 (Pacific Time)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SystemSettings;
