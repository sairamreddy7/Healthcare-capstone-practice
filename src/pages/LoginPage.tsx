// src/pages/LoginPage.tsx
const LoginPage = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 flex flex-1 justify-center items-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-6xl flex-1">
            <div className="flex flex-col lg:flex-row min-h-[700px] w-full bg-white dark:bg-background-dark shadow-xl rounded-xl overflow-hidden">
              <div className="w-full lg:w-1/2 flex flex-col">
                <div className="p-8 md:p-12 lg:p-16 flex-grow">
                  <header className="mb-8">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-2xl">stethoscope_arrow</span>
                      </div>
                      <p className="text-2xl font-bold tracking-tight text-charcoal dark:text-white">HealthApp</p>
                    </div>
                  </header>
                  <main>
                    <h1 className="text-charcoal dark:text-white tracking-tight text-[32px] font-bold leading-tight text-left pb-3 pt-6">Secure Portal Login</h1>
                    <p className="text-gray-500 dark:text-gray-400 mb-8">Welcome back. Please enter your credentials.</p>
                    <form className="flex flex-col gap-4">
                      <div className="flex max-w-full flex-wrap items-end gap-4">
                        <label className="flex flex-col w-full flex-1">
                          <p className="text-charcoal dark:text-gray-200 text-base font-medium leading-normal pb-2">Username or Email</p>
                          <input
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-charcoal dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-slate-800 focus:border-primary h-14 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal"
                            placeholder="Enter your email address"
                            type="email"
                            value=""
                          />
                        </label>
                      </div>
                      <div className="flex max-w-full flex-wrap items-end gap-4">
                        <label className="flex flex-col w-full flex-1">
                          <div className="flex justify-between items-center pb-2">
                            <p className="text-charcoal dark:text-gray-200 text-base font-medium leading-normal">Password</p>
                            <a className="text-primary text-sm font-medium leading-normal underline hover:text-primary/80" href="#">Forgot Password?</a>
                          </div>
                          <div className="flex w-full flex-1 items-stretch rounded-lg">
                            <input
                              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-charcoal dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-slate-800 focus:border-primary h-14 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-[15px] rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
                              placeholder="Enter your password"
                              type="password"
                              value=""
                            />
                            <button
                              aria-label="Toggle password visibility"
                              className="text-gray-500 dark:text-gray-400 flex border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-slate-800 items-center justify-center px-4 rounded-r-lg border-l-0 hover:bg-gray-100 dark:hover:bg-slate-700"
                              type="button"
                            >
                              <span className="material-symbols-outlined">visibility</span>
                            </button>
                          </div>
                        </label>
                      </div>
                      <button
                        className="flex items-center justify-center font-bold text-white h-14 w-full rounded-lg bg-primary hover:bg-primary/90 transition-colors mt-6 text-base leading-normal px-4 py-2"
                        type="submit"
                      >
                        Sign In Securely
                      </button>
                    </form>
                    <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
                      <p>Don't have an account? <a className="font-medium text-primary hover:underline" href="/signup">Sign Up</a></p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-8 text-gray-500 dark:text-gray-400">
                      <span className="material-symbols-outlined text-green-700 dark:text-green-500">verified_user</span>
                      <p className="text-xs font-medium">Secure &amp; HIPAA Compliant</p>
                    </div>
                  </main>
                </div>
                <footer className="text-center p-6 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 mt-auto">
                  <a className="hover:underline" href="#">Privacy Policy</a>
                  <span className="mx-2">|</span>
                  <a className="hover:underline" href="#">Terms of Service</a>
                </footer>
              </div>
              <div
                className="hidden lg:flex w-1/2 bg-center bg-no-repeat bg-cover aspect-auto"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBakvdAE4b7W8ODhuyD4lYtpC7sjPDlDrVhtxbCwlyhVsyG7bbjdBMDAWoa-tQYIpH5kefjmgQHCwZx7RvzQNV7S6oeTnf-br2RWP80waR-DK4JQkaj8BLVuGahoBGRRUvqbHUpifYPdWRkKh3XlRaDjqURB6exoOtB3jHPAxvVgJlmPlV7pDDx8RULWL959_p9dvCn_Db9WD6HTaJ4fZiYuxO3wmzFiykJhz3CA6YyBkfi0FCAt04TGX-0ES2JGeF6YNQmad_18jc")' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
