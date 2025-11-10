// src/pages/SignUpPage.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      navigate('/login');
    }
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 flex flex-1 justify-center py-5 sm:py-10">
          <div className="layout-content-container flex flex-col w-full max-w-xl flex-1">
            <header className="flex items-center justify-center whitespace-nowrap px-4 sm:px-10 py-3">
              <div className="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white">
                <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                  <path d="M9 12L11 14L15 10" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                </svg>
                <span>HealthApp</span>
              </div>
            </header>
            <main className="flex flex-col flex-1 items-center bg-white dark:bg-background-dark border dark:border-white/10 rounded-xl shadow-sm p-6 sm:p-10 mt-6">
              <div className="flex w-full flex-col items-center gap-3 pb-8">
                <p className="text-[#111618] dark:text-white text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em] text-center">Create Your Account</p>
                <p className="text-slate-600 dark:text-slate-400 text-base text-center">Join our secure healthcare portal to manage your health with ease.</p>
              </div>
              <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row w-full flex-wrap items-end gap-4">
                  <label className="flex flex-col min-w-40 flex-1">
                    <p className="text-[#111618] dark:text-slate-300 text-base font-medium leading-normal pb-2">First Name</p>
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111618] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#dbe2e6] dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary dark:focus:border-primary h-14 placeholder:text-[#617c89] p-[15px] text-base font-normal leading-normal"
                      placeholder="Enter your first name"
                      name="firstName"
                      onChange={handleChange}
                    />
                  </label>
                  <label className="flex flex-col min-w-40 flex-1">
                    <p className="text-[#111618] dark:text-slate-300 text-base font-medium leading-normal pb-2">Last Name</p>
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111618] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#dbe2e6] dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary dark:focus:border-primary h-14 placeholder:text-[#617c89] p-[15px] text-base font-normal leading-normal"
                      placeholder="Enter your last name"
                      name="lastName"
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <label className="flex flex-col w-full">
                  <p className="text-[#111618] dark:text-slate-300 text-base font-medium leading-normal pb-2">Email Address</p>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111618] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#dbe2e6] dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary dark:focus:border-primary h-14 placeholder:text-[#617c89] p-[15px] text-base font-normal leading-normal"
                    placeholder="Enter your email address"
                    type="email"
                    name="email"
                    onChange={handleChange}
                  />
                </label>
                <label className="flex flex-col w-full">
                  <p className="text-[#111618] dark:text-slate-300 text-base font-medium leading-normal pb-2">Password</p>
                  <div className="relative flex w-full flex-1 items-stretch">
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111618] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#dbe2e6] dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary dark:focus:border-primary h-14 placeholder:text-[#617c89] p-[15px] text-base font-normal leading-normal"
                      placeholder="Create a password"
                      type="password"
                      name="password"
                      onChange={handleChange}
                    />
                    <button className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-500 dark:text-slate-400 hover:text-primary" type="button">
                      <span className="material-symbols-outlined">visibility</span>
                    </button>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">8+ characters, one uppercase, one number.</p>
                </label>
                <label className="flex flex-col w-full">
                  <p className="text-[#111618] dark:text-slate-300 text-base font-medium leading-normal pb-2">Confirm Password</p>
                  <div className="relative flex w-full flex-1 items-stretch">
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111618] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#dbe2e6] dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary dark:focus:border-primary h-14 placeholder:text-[#617c89] p-[15px] text-base font-normal leading-normal"
                      placeholder="Confirm your password"
                      type="password"
                      name="confirmPassword"
                      onChange={handleChange}
                    />
                    <button className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-500 dark:text-slate-400 hover:text-primary" type="button">
                      <span className="material-symbols-outlined">visibility_off</span>
                    </button>
                  </div>
                </label>
                <div className="flex flex-col w-full gap-2">
                  <p className="text-[#111618] dark:text-slate-300 text-base font-medium leading-normal">I am a...</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer has-[:checked]:bg-primary/10 has-[:checked]:border-primary dark:border-slate-700 dark:has-[:checked]:bg-primary/20 dark:has-[:checked]:border-primary transition-colors duration-150">
                      <input className="form-radio text-primary focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark" name="role" type="radio" value="patient" onChange={handleChange} />
                      <span className="text-base font-medium text-[#111618] dark:text-slate-300">Patient</span>
                    </label>
                    <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer has-[:checked]:bg-primary/10 has-[:checked]:border-primary dark:border-slate-700 dark:has-[:checked]:bg-primary/20 dark:has-[:checked]:border-primary transition-colors duration-150">
                      <input className="form-radio text-primary focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark" name="role" type="radio" value="clinician" onChange={handleChange} />
                      <span className="text-base font-medium text-[#111618] dark:text-slate-300">Clinician</span>
                    </label>
                  </div>
                </div>
                <div className="flex items-start gap-3 pt-2">
                  <input
                    className="form-checkbox mt-1 h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary dark:focus:ring-offset-background-dark dark:bg-slate-800 dark:border-slate-600"
                    id="terms"
                    type="checkbox"
                  />
                  <label className="text-sm text-slate-600 dark:text-slate-400" htmlFor="terms">
                    By creating an account, you agree to our <a className="font-semibold text-primary hover:underline" href="#">Terms of Service</a> and{' '}
                    <a className="font-semibold text-primary hover:underline" href="#">Privacy Policy</a>.
                  </label>
                </div>
                <button className="flex items-center justify-center w-full bg-primary text-white font-bold h-14 rounded-lg text-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark transition-colors duration-300 mt-4">
                  Create Account
                </button>
              </form>
              <div className="pt-8 text-center">
                <p className="text-slate-600 dark:text-slate-400">
                  Already have an account? <a className="font-semibold text-primary hover:underline" href="/login">Log In</a>
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
