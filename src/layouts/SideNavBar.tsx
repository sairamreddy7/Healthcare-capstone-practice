// src/layouts/SideNavBar.tsx
import React from 'react';

const SideNavBar: React.FC = () => {
  return (
    <aside className="flex w-64 flex-col border-r border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-4">
      <div className="mb-8 flex items-center gap-2">
        <span className="material-symbols-outlined text-primary text-3xl">health_and_safety</span>
        <h1 className="text-xl font-bold text-card-foreground-light dark:text-card-foreground-dark">Health Portal</h1>
      </div>
      <nav className="flex flex-col gap-2">
        <a className="flex items-center gap-3 rounded-DEFAULT bg-primary/10 px-3 py-2 text-primary" href="#">
          <span className="material-symbols-outlined">dashboard</span>
          <p className="text-sm font-medium">Dashboard</p>
        </a>
        <a className="flex items-center gap-3 rounded-DEFAULT px-3 py-2 text-muted-light dark:text-muted-dark hover:bg-primary/10 hover:text-primary transition-colors" href="#">
          <span className="material-symbols-outlined">calendar_month</span>
          <p className="text-sm font-medium">Appointments</p>
        </a>
        <a className="flex items-center gap-3 rounded-DEFAULT px-3 py-2 text-muted-light dark:text-muted-dark hover:bg-primary/10 hover:text-primary transition-colors" href="#">
          <span className="material-symbols-outlined">mail</span>
          <p className="text-sm font-medium">Messages</p>
          <span className="ml-auto flex size-5 items-center justify-center rounded-full bg-warning text-xs font-bold text-white">3</span>
        </a>
        <a className="flex items-center gap-3 rounded-DEFAULT px-3 py-2 text-muted-light dark:text-muted-dark hover:bg-primary/10 hover:text-primary transition-colors" href="#">
          <span className="material-symbols-outlined">science</span>
          <p className="text-sm font-medium">Test Results</p>
          <span className="ml-auto flex size-2 items-center justify-center rounded-full bg-success"></span>
        </a>
        <a className="flex items-center gap-3 rounded-DEFAULT px-3 py-2 text-muted-light dark:text-muted-dark hover:bg-primary/10 hover:text-primary transition-colors" href="#">
          <span className="material-symbols-outlined">medication</span>
          <p className="text-sm font-medium">Medications</p>
        </a>
        <a className="flex items-center gap-3 rounded-DEFAULT px-3 py-2 text-muted-light dark:text-muted-dark hover:bg-primary/10 hover:text-primary transition-colors" href="#">
          <span className="material-symbols-outlined">receipt_long</span>
          <p className="text-sm font-medium">Billing</p>
        </a>
      </nav>
      <div className="mt-auto flex flex-col gap-2">
        <a className="flex items-center gap-3 rounded-DEFAULT px-3 py-2 text-muted-light dark:text-muted-dark hover:bg-primary/10 hover:text-primary transition-colors" href="#">
          <span className="material-symbols-outlined">settings</span>
          <p className="text-sm font-medium">Account Settings</p>
        </a>
        <a className="flex items-center gap-3 rounded-DEFAULT px-3 py-2 text-muted-light dark:text-muted-dark hover:bg-primary/10 hover:text-primary transition-colors" href="#">
          <span className="material-symbols-outlined">logout</span>
          <p className="text-sm font-medium">Logout</p>
        </a>
        <div className="mt-4 border-t border-border-light dark:border-border-dark pt-4">
          <div className="flex items-center gap-3">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User avatar image" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC-6oz1YSMZdHBrOrT6Q5arb0is0TB2xeBXSVHsUtwm5qGwLx3zt3KhDFvJs2pCfpRr9Pc5DLzKP208vigppXmlwsO4D9YCbW76vcdVlj8uH-XMdeI84T0zjyfGqwPC-B6YFUQ1ytUl26omxy_KiBcV0GuWDj0gfru2jfjWKsJJqS28GF0LKcP_Nj_2c3jy57-_nyBOqW78iAV6qZp5YdN2Vw_DjSg4KYT8d4gvx5Q5J08mZIJFau6UtrTdlZQKbRCdBSmJgJAalSY")'}}></div>
            <div className="flex flex-col">
              <p className="text-card-foreground-light dark:text-card-foreground-dark text-sm font-medium leading-normal">Sarah Johnson</p>
              <p className="text-muted-light dark:text-muted-dark text-xs font-normal leading-normal">sarah.j@email.com</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideNavBar;
