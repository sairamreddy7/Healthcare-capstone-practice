// src/pages/ClinicianAccountSettings.tsx
const ClinicianAccountSettings = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl p-6 lg:p-8 mb-8">
        <h2 className="text-xl font-bold mb-6">Profile Information</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          <div className="flex items-center gap-4 md:col-span-2">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-20"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCTZcTAO7sN_t9aKUAetOhDsiuv5qcShyXLFDoyeKAVf0ORsUTplz2K5ZoUPTf1q2OBatRT61yfhbR1vxY0Tqv2zWL9Qf4iIoD6oH8UZDkjvrbY9T1RTpHT1YNF7MmGk4rJkW_szoHLG41wZ2Ei9_TW3CJEmCYlVM5j6BmOnx-u3__T3aOFmOGJhWvhRAbnGc8i00qFBcNc9IwgHzaB7c-c4V3rSKwCkiEnssrNXvQUcwMKIALG1cRn0NXjftRG2CTIUp7sDdEJRCI")' }}
            ></div>
            <div>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-semibold leading-normal gap-2 shadow-sm hover:bg-primary/90 transition-colors">
                Change Photo
              </button>
              <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mt-2">JPG, GIF or PNG. 1MB max.</p>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="firstName">First Name</label>
            <input
              className="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary focus:ring-opacity-50 h-10 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark text-sm"
              id="firstName"
              type="text"
              value="Evelyn"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="lastName">Last Name</label>
            <input
              className="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary focus:ring-opacity-50 h-10 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark text-sm"
              id="lastName"
              type="text"
              value="Reed"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email Address</label>
            <input
              className="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary focus:ring-opacity-50 h-10 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark text-sm"
              id="email"
              type="email"
              value="e.reed@healthapp.clinic"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="specialty">Specialty</label>
            <input
              className="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary focus:ring-opacity-50 h-10 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark text-sm"
              id="specialty"
              type="text"
              value="Cardiologist"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone Number</label>
            <input
              className="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary focus:ring-opacity-50 h-10 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark text-sm"
              id="phone"
              type="tel"
              value="(555) 123-4567"
            />
          </div>
        </form>
      </div>
      <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl p-6 lg:p-8 mb-8">
        <h2 className="text-xl font-bold mb-6">Security Settings</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="currentPassword">Change Password</label>
            <input
              className="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary focus:ring-opacity-50 h-10 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark text-sm"
              id="currentPassword"
              placeholder="Current Password"
              type="password"
            />
          </div>
          <div>
            <input
              className="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary focus:ring-opacity-50 h-10 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark text-sm"
              placeholder="New Password"
              type="password"
            />
          </div>
          <div>
            <input
              className="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary focus:ring-opacity-50 h-10 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark text-sm"
              placeholder="Confirm New Password"
              type="password"
            />
          </div>
          <div className="flex items-center justify-between pt-2">
            <p className="text-sm font-medium">Two-Factor Authentication (2FA)</p>
            <label className="relative inline-flex items-center cursor-pointer">
              <input checked className="sr-only peer" type="checkbox" />
              <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/50 dark:peer-focus:ring-primary/80 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary text-white text-sm font-semibold leading-normal gap-2 shadow-sm hover:bg-primary/90 transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ClinicianAccountSettings;
