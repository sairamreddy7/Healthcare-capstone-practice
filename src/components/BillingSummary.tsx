// src/components/BillingSummary.tsx
import React from 'react';

const BillingSummary: React.FC = () => {
  return (
    <div className="flex flex-col rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-card-foreground-light dark:text-card-foreground-dark">Billing Summary</h2>
        <a className="text-sm font-medium text-primary hover:underline" href="#">View Statements</a>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 bg-background-light dark:bg-background-dark p-6 rounded-lg text-center">
        <p className="text-sm text-muted-light dark:text-muted-dark">Current Balance</p>
        <p className="text-4xl font-bold text-foreground-light dark:text-foreground-dark">$125.50</p>
        <p className="text-sm text-muted-light dark:text-muted-dark">Due on November 1, 2023</p>
      </div>
      <button className="flex mt-4 w-full min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-DEFAULT h-10 px-4 bg-success text-white text-sm font-medium leading-normal shadow-sm hover:bg-success/90 transition-colors">
        <span className="material-symbols-outlined text-base">payment</span>
        <span className="truncate">Pay Bill</span>
      </button>
    </div>
  );
};

export default BillingSummary;
