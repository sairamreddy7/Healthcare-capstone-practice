// src/components/CurrentMedications.tsx
import React from 'react';

const CurrentMedications: React.FC = () => {
  return (
    <div className="flex flex-col rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-card-foreground-light dark:text-card-foreground-dark">Current Medications</h2>
        <a className="text-sm font-medium text-primary hover:underline" href="#">View All & Refills</a>
      </div>
      <div className="flex flex-col divide-y divide-border-light dark:divide-border-dark">
        {/* ListItem */}
        <div className="flex items-center gap-4 py-3">
          <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-10">
            <span className="material-symbols-outlined">pill</span>
          </div>
          <div className="flex flex-col justify-center flex-1">
            <p className="text-card-foreground-light dark:text-card-foreground-dark text-base font-medium leading-normal">Lisinopril</p>
            <p className="text-muted-light dark:text-muted-dark text-sm font-normal leading-normal">10mg, once daily</p>
          </div>
          <p className="text-sm text-muted-light dark:text-muted-dark">2 refills left</p>
        </div>
        {/* ListItem */}
        <div className="flex items-center gap-4 py-3">
          <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-10">
            <span className="material-symbols-outlined">medication_liquid</span>
          </div>
          <div className="flex flex-col justify-center flex-1">
            <p className="text-card-foreground-light dark:text-card-foreground-dark text-base font-medium leading-normal">Albuterol Inhaler</p>
            <p className="text-muted-light dark:text-muted-dark text-sm font-normal leading-normal">As needed for asthma</p>
          </div>
          <p className="text-sm text-error">Refill needed</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentMedications;
