// src/components/PatientTable.tsx
const patients = [
  {
    id: 'PT-001',
    name: 'Olivia Chen',
    dob: '1985-04-12',
    lastVisit: '2023-10-25',
    status: 'Active',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxVkxmvdd7Bm-7jKeMuiFOGOqvMvvXN31pPDp16sPLXvKlYOzxI3I4ghFTHRrztZ52wARat9PbCko3Yp1OM2M2yy04xoiH-X1z5ntP0WMGPNbomqzKwJau-Cu9nXOmoBu0u7M6V4OR6TX1lX43cNeQnx-IHIFJQ8bszim9Jyiyvy2RB1DZMCTzinO9-OYwjyfhVkTdm80m5qcOQKh8kA1PNLGvAD1RvJLV47I2hAstPiaQUFoxBKwlffMvQWU0TvD1M3A8fdL9SHI',
  },
  {
    id: 'PT-002',
    name: 'Liam Johnson',
    dob: '1978-09-21',
    lastVisit: '2023-11-02',
    status: 'Active',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDneQG28kx9helW7fC2vMb-EIabsnlZxkpTTNRY1CIhgs251_Ktoe7dGL5vsZPoOiwJjOdMLbFX5k-5nCuebPyCg5sWnPubOkugrsnyJjGjnck20KkuEfloGzpvIrP45FyQ2Z_yoXHXrQhVWuUcPvu7E9v--4JetFOTKyHoToxqTZ9ZrTttpTs3RduoPzZVkahYsDWFcQ9DQERJIIg0xOQR0SgioOqeDZy8J-yrrxn_SVHVB-ayQqfFUKFAsWJfgrlNHGwQ3unIqpY',
  },
  {
    id: 'PT-003',
    name: 'Ava Garcia',
    dob: '1992-02-18',
    lastVisit: '2023-09-15',
    status: 'Monitoring',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJbv5-AOyagS6DGMejpoeLvn2616_Bl_5xGmcMfMV-V7SjvDX5d8cNK5s4CtXQ0OSfA3xkyxgDfh1h4OAXDziULSVcVZvGtKvde4h_WFsduOH951X50k7dpIw7bwiaQJ6P7rObaTJ9DBXTqwSCmV8K83fkuIR2HxcmOXAENmKibQ0bbxCCV9zST8u6K8S7jmNWLYuVsuqabxePjcLShAO4J3APp3RIUHPBmoxazzUx2GdDtuSq9oHbcfGxZVRv7LZSiB5mvsPwJRQ',
  },
  {
    id: 'PT-004',
    name: 'Noah Williams',
    dob: '1965-11-30',
    lastVisit: '2023-11-01',
    status: 'Active',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9puGqQmQno5xvQ--YCTzlPvsPZyOtCJ5WtskBYs-1glrk5xFIDV3VQ-bc9gj-FDzACB4nM_RJQk0_xk8lapamCWHq51iObWr72itpHJdA32_6TIvilgvnmm-QPzQqcuY4SWoyveNLHVQEgrrNy6dNr0vNtATWsL0z2Eag1prIRpKDGPPDhHhOS8p5RAIKQ3C64s4QBeiXxh2qjqJ1BvlXS_i7VANrZk5dUfMaQqhd74GmWVAq8qqarKIs4DFLQKTIXtzc-k-SlLk',
  },
  {
    id: 'PT-005',
    name: 'Emma Brown',
    dob: '2001-07-22',
    lastVisit: '2023-08-05',
    status: 'Inactive',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTZcTAO7sN_t9aKUAetOhDsiuv5qcShyXLFDoyeKAVf0ORsUTplz2K5ZoUPTf1q2OBatRT61yfhbR1vxY0Tqv2zWL9Qf4iIoD6oH8UZDkjvrbY9T1RTpHT1YNF7MmGk4rJkW_szoHLG41wZ2Ei9_TW3CJEmCYlVM5j6BmOnx-u3__T3aOFmOGJhWvhRAbnGc8i00qFBcNc9IwgHzaB7c-c4V3rSKwCkiEnssrNXvQUcwMKIALG1cRn0NXjftRG2CTIUp7sDdEJRCI',
  },
];

const PatientTable = () => {
  return (
    <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-background-light dark:bg-background-dark">
            <tr>
              <th className="p-4 text-sm font-semibold text-text-secondary-light dark:text-text-secondary-dark">Patient Name</th>
              <th className="p-4 text-sm font-semibold text-text-secondary-light dark:text-text-secondary-dark">Date of Birth</th>
              <th className="p-4 text-sm font-semibold text-text-secondary-light dark:text-text-secondary-dark">Last Visit</th>
              <th className="p-4 text-sm font-semibold text-text-secondary-light dark:text-text-secondary-dark">Status</th>
              <th className="p-4 text-sm font-semibold text-text-secondary-light dark:text-text-secondary-dark text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id} className="border-t border-border-light dark:border-border-dark">
                <td className="p-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                      style={{ backgroundImage: `url("${patient.avatar}")` }}
                    ></div>
                    <div>
                      <p className="font-semibold">{patient.name}</p>
                      <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">ID: {patient.id}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-sm whitespace-nowrap">{patient.dob}</td>
                <td className="p-4 text-sm whitespace-nowrap">{patient.lastVisit}</td>
                <td className="p-4 whitespace-nowrap">
                  <span
                    className={`text-xs font-medium py-1 px-2.5 rounded-full ${
                      patient.status === 'Active'
                        ? 'bg-secondary/20 text-secondary'
                        : patient.status === 'Monitoring'
                        ? 'bg-yellow-500/20 text-yellow-500'
                        : 'bg-gray-500/20 text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    {patient.status}
                  </span>
                </td>
                <td className="p-4 whitespace-nowrap text-right">
                  <a className="font-semibold text-primary text-sm hover:underline" href="#">View Record</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center p-4 border-t border-border-light dark:border-border-dark">
        <button className="flex items-center gap-2 text-sm font-medium px-4 h-9 rounded-lg hover:bg-primary/10 disabled:opacity-50" disabled>
          <span className="material-symbols-outlined text-base">chevron_left</span> Previous
        </button>
        <div className="flex items-center gap-2 text-sm">
          <a className="flex items-center justify-center size-9 rounded-lg bg-primary/10 text-primary font-semibold" href="#">1</a>
          <a className="flex items-center justify-center size-9 rounded-lg hover:bg-primary/10" href="#">2</a>
          <a className="flex items-center justify-center size-9 rounded-lg hover:bg-primary/10" href="#">3</a>
          <span>...</span>
          <a className="flex items-center justify-center size-9 rounded-lg hover:bg-primary/10" href="#">13</a>
        </div>
        <button className="flex items-center gap-2 text-sm font-medium px-4 h-9 rounded-lg hover:bg-primary/10">
          Next <span className="material-symbols-outlined text-base">chevron_right</span>
        </button>
      </div>
    </div>
  );
};

export default PatientTable;
