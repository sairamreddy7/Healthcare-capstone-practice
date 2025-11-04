// src/components/NewTestResults.tsx
import React from 'react';

const NewTestResults: React.FC = () => {
  return (
    <div className="flex flex-col rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-card-foreground-light dark:text-card-foreground-dark">New Test Results</h2>
        <a className="text-sm font-medium text-primary hover:underline" href="#">View All</a>
      </div>
      <div className="flex flex-col divide-y divide-border-light dark:divide-border-dark">
        {/* ListItem */}
        <div className="flex items-center gap-4 py-3">
          <div className="text-success flex items-center justify-center rounded-lg bg-success/10 shrink-0 size-10">
            <span className="material-symbols-outlined">science</span>
          </div>
          <div className="flex flex-col justify-center flex-1">
            <p className="text-card-foreground-light dark:text-card-foreground-dark text-base font-medium leading-normal">Blood Panel</p>
            <p className="text-muted-light dark:text-muted-dark text-sm font-normal leading-normal">Oct 20, 2023</p>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-success/10 px-2.5 py-0.5 text-xs font-semibold text-success">
            <span className="flex size-2 rounded-full bg-success"></span>
            New
          </div>
        </div>
        {/* ListItem */}
        <div className="flex items-center gap-4 py-3">
          <div className="text-muted-light dark:text-muted-dark flex items-center justify-center rounded-lg bg-primary/5 shrink-0 size-10">
            <span className="material-symbols-outlined">radiology</span>
          </div>
          <div className="flex flex-col justify-center flex-1">
            <p className="text-card-foreground-light dark:text-card-foreground-dark text-base font-medium leading-normal">X-Ray Results</p>
            <p className="text-muted-light dark:text-muted-dark text-sm font-normal leading-normal">Sep 15, 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTestResults;
