// src/components/UpcomingAppointments.tsx
const appointments = [
  {
    time: '09:00 AM',
    patient: 'Olivia Chen',
    reason: 'Annual Check-up',
    status: 'Confirmed',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxVkxmvdd7Bm-7jKeMuiFOGOqvMvvXN31pPDp16sPLXvKlYOzxI3I4ghFTHRrztZ52wARat9PbCko3Yp1OM2M2yy04xoiH-X1z5ntP0WMGPNbomqzKwJau-Cu9nXOmoBu0u7M6V4OR6TX1lX43cNeQnx-IHIFJQ8bszim9Jyiyvy2RB1DZMCTzinO9-OYwjyfhVkTdm80m5qcOQKh8kA1PNLGvAD1RvJLV47I2hAstPiaQUFoxBKwlffMvQWU0TvD1M3A8fdL9SHI',
  },
  {
    time: '10:30 AM',
    patient: 'Liam Johnson',
    reason: 'Follow-up: Blood Pressure',
    status: 'Checked-in',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDneQG28kx9helW7fC2vMb-EIabsnlZxkpTTNRY1CIhgs251_Ktoe7dGL5vsZPoOiwJjOdMLbFX5k-5nCuebPyCg5sWnPubOkugrsnyJjGjnck20KkuEfloGzpvIrP45FyQ2Z_yoXHXrQhVWuUcPvu7E9v--4JetFOTKyHoToxqTZ9ZrTttpTs3RduoPzZVkahYsDWFcQ9DQERJIIg0xOQR0SgioOqeDZy8J-yrrxn_SVHVB-ayQqfFUKFAsWJfgrlNHGwQ3unIqpY',
  },
  {
    time: '11:15 AM',
    patient: 'Ava Garcia',
    reason: 'Telehealth Consultation',
    status: 'Confirmed',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJbv5-AOyagS6DGMejpoeLvn2616_Bl_5xGmcMfMV-V7SjvDX5d8cNK5s4CtXQ0OSfA3xkyxgDfh1h4OAXDziULSVcVZvGtKvde4h_WFsduOH951X50k7dpIw7bwiaQJ6P7rObaTJ9DBXTqwSCmV8K83fkuIR2HxcmOXAENmKibQ0bbxCCV9zST8u6K8S7jmNWLYuVsuqabxePjcLShAO4J3APp3RIUHPBmoxazzUx2GdDtuSq9oHbcfGxZVRv7LZSiB5mvsPwJRQ',
  },
];

const UpcomingAppointments = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Upcoming Appointments</h2>
        <a className="text-sm font-semibold text-primary hover:underline" href="#">View Full Schedule</a>
      </div>
      <div className="space-y-4">
        {appointments.map((appointment) => (
          <div key={appointment.time} className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors">
            <p className="font-semibold text-sm w-20">{appointment.time}</p>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{ backgroundImage: `url("${appointment.avatar}")` }}
            ></div>
            <div className="flex-1">
              <p className="font-semibold">{appointment.patient}</p>
              <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">{appointment.reason}</p>
            </div>
            <span
              className={`text-xs font-medium py-1 px-2 rounded-full ${
                appointment.status === 'Confirmed'
                  ? 'bg-secondary/20 text-secondary'
                  : 'bg-green-500/20 text-green-500'
              }`}
            >
              {appointment.status}
            </span>
            <button className="p-2 rounded-full hover:bg-primary/10">
              <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark">more_vert</span>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default UpcomingAppointments;
