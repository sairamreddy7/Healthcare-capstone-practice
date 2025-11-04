// src/components/UserTable.tsx
const users = [
  {
    name: 'Liam Johnson',
    email: 'liam.johnson@healthapp.com',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiwLXp0KZ55Fqbhne-1n-d_bqqLAuXMeU9iqMBkrmPc3zFjwPZX4O2WIYM3bd3yLpxJz86wjy_SUEESDLT-F21o8VHcn_8aRrRcIITVV7Rdo9vUtDJx1C7wUIg3IOTL6QPneQp8nbHrmsO0tOwV9ESzbIHC9Sf8almO0iOR-uJMkbVBni8hhX1XbqWiUFhzfxSDf-ypARoHYDfVIf_f-EXFDfsK7JfM3v1Am7k51yMl05wUiuyOklAlrKW92BIKb-BgxwbYtgkNAU',
    status: 'Active',
    role: 'Patient',
    lastLogin: '2024-05-22 10:15 AM',
  },
  {
    name: 'Dr. Olivia Chen',
    email: 'olivia.chen@healthapp.com',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAr8CDo85ZsIU9sVlbhVcnWO0lsf1lmob2Ykeorw_2xfhcLm1TW5hReE-Fc6n5zL08xPhiwxcg_yxXrqVMBQU9MaLmXMDy0tybdyMgap_knjpLIyZ4RfZzIntuSH2XT1e1epiQPkMQAYAXH8-kYf4MSjUg4MgRojUoHqimYLvbZ92Qd0XgRsIneVxs22lwDxbJ1B33sccUQYF7yQLGPhq_oWg0jDll4oeeY6OJlFaBtAsCnWVOtskRI_J0oGLLfnUPkPJDd1hBt8HI',
    status: 'Active',
    role: 'Clinician',
    lastLogin: '2024-05-22 09:48 AM',
  },
  {
    name: 'Benjamin Carter',
    email: 'ben.carter@healthapp.com',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXCtm46IAdZwS6tQSPxSMgoT8QbX6E8k1qQBcqV_2rEuEEaD20QnP4kuX4GOMOelW1sQoVoaByQhZwLrl8xtcm2rg5PW2gBFYmm9o5j7ET1xVffs90Ep5ZQ-4eDljfy9MCecQO1_Vh__QHdPqEUAND6x8j38PvOc_99CWSYWTE4TcJo_o3YdexCp2Q4p6QX-iW6FhtQCS8blbeu3x8IfX-4bmoyMgW-VzpsUm0pE9UJ99cFHXmK12o4XukjfQV096J6dy67pvsPik',
    status: 'Inactive',
    role: 'Patient',
    lastLogin: '2024-03-15 02:30 PM',
  },
  {
    name: 'Chloe Garcia',
    email: 'chloe.garcia@healthapp.com',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyqrOChutUSFLAJoDDfb-WcmLsQDWxGFdPiXlSlonZRRun8U0IebGRBTwi0r1YYf6q02O1T1UGSN3-BEtFtu6mlH1vVjc4QySVNPFY0s4pAgj70wIwSy9CoRMzQwyBH8oVECLyI_sxQXWtrndVqb9VMdo-MKM5OBmWR5f5a7AI92CRnpVd5VJ_VnzJGxCIhlw7HTYKLxLj06eVHIPLw37C2gwGGfZNJkkfxdjljUS8v6AEwH8GqvIICJQetEAoVSBTZSV7eYqWVPo',
    status: 'Active',
    role: 'Patient',
    lastLogin: '2024-05-21 07:12 PM',
  },
  {
    name: 'Dr. Ethan Miller',
    email: 'ethan.miller@healthapp.com',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwU4WaED17L8_dQExxN4e1sAAHGsaCEHAk82y2M8F1jWnBllhV2lAQ7vwhRQ5lMOMoMIZxi678STJbgF_wBKWdoZqvN-wfLDNETjKFPTPldMNszb_ywiDk3BbkACkoHni0W--R4GVhOSiO1c4W75RTWznbz-diIqITTCxQKiN4F0q2SFpTnFsWReqnZcC1tQuaU2Ao9_OGhSF7PmOB78YeqNecV8ormtnjoeCp8mjn5S_YLn3TONTZ2N5lc8Gsm7PwuFh_aRzErrE',
    status: 'Pending',
    role: 'Clinician',
    lastLogin: '-',
  },
];

const UserTable = () => {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
        <thead className="bg-slate-50 dark:bg-slate-800/50">
          <tr>
            <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-slate-900 dark:text-white sm:pl-6" scope="col">User</th>
            <th className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-white" scope="col">Status</th>
            <th className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-white" scope="col">Role</th>
            <th className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-white" scope="col">Last Login</th>
            <th className="relative py-3.5 pl-3 pr-4 sm:pr-6" scope="col">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
          {users.map((user) => (
            <tr key={user.email}>
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                <div className="flex items-center">
                  <div className="size-10 flex-shrink-0">
                    <div
                      className="aspect-square size-10 rounded-full bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url("${user.avatar}")` }}
                    ></div>
                  </div>
                  <div className="ml-4">
                    <div className="font-medium text-slate-900 dark:text-white">{user.name}</div>
                    <div className="text-slate-500 dark:text-slate-400">{user.email}</div>
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-400">
                <span
                  className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                    user.status === 'Active'
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400'
                      : user.status === 'Inactive'
                      ? 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-400'
                  }`}
                >
                  <span
                    className={`mr-1.5 h-1.5 w-1.5 rounded-full ${
                      user.status === 'Active'
                        ? 'bg-green-500'
                        : user.status === 'Inactive'
                        ? 'bg-slate-500'
                        : 'bg-yellow-500'
                    }`}
                  ></span>
                  {user.status}
                </span>
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-400">{user.role}</td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-400">{user.lastLogin}</td>
              <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                <div className="flex items-center justify-end gap-2">
                  <button className="flex size-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-primary dark:text-slate-400 dark:hover:bg-slate-800">
                    <span className="material-symbols-outlined text-xl">edit</span>
                  </button>
                  <button className="flex size-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-primary dark:text-slate-400 dark:hover:bg-slate-800">
                    <span className="material-symbols-outlined text-xl">history</span>
                  </button>
                  <button className="flex size-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-primary dark:text-slate-400 dark:hover:bg-slate-800">
                    <span className="material-symbols-outlined text-xl">more_horiz</span>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
