// src/components/PageHeading.tsx
import React from 'react';

const PageHeading: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
      <h1 className="text-foreground-light dark:text-foreground-dark text-3xl font-bold leading-tight tracking-tight">Good Morning, Sarah</h1>
      <button className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-DEFAULT h-10 px-4 bg-primary text-white text-sm font-medium leading-normal shadow-sm hover:bg-primary/90 transition-colors">
        <span className="material-symbols-outlined text-base">add</span>
        <span className="truncate">Schedule New Appointment</span>
      </button>
    </div>
  );
};

export default PageHeading;
