// src/components/UpcomingAppointments.tsx
import React from 'react';

const UpcomingAppointments: React.FC = () => {
  return (
    <div className="flex flex-col rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark shadow-sm p-6 xl:col-span-2">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-card-foreground-light dark:text-card-foreground-dark">Upcoming Appointments</h2>
        <a className="text-sm font-medium text-primary hover:underline" href="#">View All</a>
      </div>
      <div className="flex flex-col gap-4">
        {/* ListItem */}
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-12 text-primary">
            <span className="material-symbols-outlined">cardiology</span>
          </div>
          <div className="flex flex-col justify-center flex-1">
            <p className="text-card-foreground-light dark:text-card-foreground-dark text-base font-medium leading-normal">Cardiologist Check-up</p>
            <p className="text-muted-light dark:text-muted-dark text-sm font-normal leading-normal">Dr. Evelyn Reed • General Hospital</p>
          </div>
          <div className="text-right shrink-0">
            <p className="text-card-foreground-light dark:text-card-foreground-dark text-sm font-medium">Tues, Oct 24</p>
            <p className="text-muted-light dark:text-muted-dark text-sm">10:30 AM</p>
          </div>
        </div>
        {/* ListItem */}
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-12 text-primary">
            <span className="material-symbols-outlined">dermatology</span>
          </div>
          <div className="flex flex-col justify-center flex-1">
            <p className="text-card-foreground-light dark:text-card-foreground-dark text-base font-medium leading-normal">Dermatology Follow-up</p>
            <p className="text-muted-light dark:text-muted-dark text-sm font-normal leading-normal">Dr. James Carter • Skin Health Clinic</p>
          </div>
          <div className="text-right shrink-0">
            <p className="text-card-foreground-light dark:text-card-foreground-dark text-sm font-medium">Fri, Nov 3</p>
            <p className="text-muted-light dark:text-muted-dark text-sm">2:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingAppointments;
