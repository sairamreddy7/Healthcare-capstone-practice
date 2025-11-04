// src/pages/AppointmentManagement.tsx
import PageHeading from '../components/PageHeading';

const appointments = [
  { time: '09:00', patient: 'Olivia Chen' },
  { time: '10:30', patient: 'Liam Johnson' },
  { time: '09:00', patient: 'Ava Garcia' },
  { time: '11:15', patient: 'Noah Williams' },
  { time: '14:00', patient: 'Emma Jones' },
  { time: '10:00', patient: 'Lucas Brown' },
  { time: '13:00', patient: 'Sophia Miller' },
  { time: '15:00', patient: 'Mason Wilson' },
];

const AppointmentManagement = () => {
  return (
    <>
      <PageHeading title="Appointment Management" description="View, schedule, and manage patient appointments." />
      <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl">
        <div className="flex items-center justify-between p-4 border-b border-border-light dark:border-border-dark">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-semibold">March 2024</h2>
            <div className="flex items-center">
              <button className="p-2 rounded-full hover:bg-primary/10 transition-colors"><span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark">chevron_left</span></button>
              <button className="p-2 rounded-full hover:bg-primary/10 transition-colors"><span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark">chevron_right</span></button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-sm font-semibold rounded-md bg-primary/10 text-primary">Week</button>
            <button className="px-3 py-1.5 text-sm font-medium rounded-md hover:bg-primary/10 transition-colors text-text-secondary-light dark:text-text-secondary-dark">Month</button>
            <button className="px-3 py-1.5 text-sm font-medium rounded-md hover:bg-primary/10 transition-colors text-text-secondary-light dark:text-text-secondary-dark">Day</button>
          </div>
        </div>
        <div className="grid grid-cols-7">
          <div className="text-center py-3 text-sm font-semibold text-text-secondary-light dark:text-text-secondary-dark border-b border-r border-border-light dark:border-border-dark">Mon</div>
          <div className="text-center py-3 text-sm font-semibold text-text-secondary-light dark:text-text-secondary-dark border-b border-r border-border-light dark:border-border-dark">Tue</div>
          <div className="text-center py-3 text-sm font-semibold text-text-secondary-light dark:text-text-secondary-dark border-b border-r border-border-light dark:border-border-dark">Wed</div>
          <div className="text-center py-3 text-sm font-semibold text-text-secondary-light dark:text-text-secondary-dark border-b border-r border-border-light dark:border-border-dark">Thu</div>
          <div className="text-center py-3 text-sm font-semibold text-text-secondary-light dark:text-text-secondary-dark border-b border-r border-border-light dark:border-border-dark">Fri</div>
          <div className="text-center py-3 text-sm font-semibold text-text-secondary-light dark:text-text-secondary-dark border-b border-r border-border-light dark:border-border-dark">Sat</div>
          <div className="text-center py-3 text-sm font-semibold text-text-secondary-light dark:text-text-secondary-dark border-b border-border-light dark:border-border-dark">Sun</div>

          {Array.from({ length: 35 }).map((_, i) => {
            const day = i - 4;
            const isCurrentMonth = day > 0 && day < 32;
            const appointmentsForDay = day === 4 ? [appointments[0], appointments[1]] : day === 5 ? [appointments[2], appointments[3], appointments[4]] : day === 6 ? [appointments[5]] : day === 8 ? [appointments[6], appointments[7]] : [];

            return (
              <div
                key={i}
                className={`h-40 border-b border-r border-border-light dark:border-border-dark p-2 ${
                  isCurrentMonth ? '' : 'text-text-secondary-light dark:text-text-secondary-dark'
                } ${day === 5 ? 'bg-primary/5' : ''}`}
              >
                <span className={`font-semibold ${day === 5 ? 'text-primary' : ''}`}>{isCurrentMonth ? day : ''}</span>
                <div className="mt-1 space-y-1">
                  {appointmentsForDay.map((apt) => (
                    <div key={apt.patient} className={`p-1 rounded text-xs truncate ${day === 5 ? 'bg-primary text-white' : 'bg-secondary/20 text-secondary'}`}>{apt.time} {apt.patient}</div>
                  ))}
                  {day === 5 && <div className="text-center text-xs text-primary font-medium mt-1 cursor-pointer">+2 more</div>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AppointmentManagement;
