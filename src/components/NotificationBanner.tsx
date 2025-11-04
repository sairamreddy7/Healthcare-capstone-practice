// src/components/NotificationBanner.tsx
import React from 'react';

const NotificationBanner: React.FC = () => {
  return (
    <div className="flex items-center gap-4 rounded-lg bg-warning/10 p-4 mb-8 border border-warning/20">
      <span className="material-symbols-outlined text-warning text-2xl">warning</span>
      <div className="flex-1">
        <p className="font-semibold text-warning">Action Required</p>
        <p className="text-sm text-muted-light dark:text-muted-dark">Please review your new lab results from your recent visit.</p>
      </div>
      <button className="text-muted-light dark:text-muted-dark hover:text-foreground-light dark:hover:text-foreground-dark">
        <span className="material-symbols-outlined">close</span>
      </button>
    </div>
  );
};

export default NotificationBanner;
