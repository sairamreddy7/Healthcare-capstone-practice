// src/components/UserTable.tsx
interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  status: 'Active' | 'Inactive' | 'Pending';
  role: 'Patient' | 'Clinician' | 'Admin';
  lastLogin: string;
}

interface UserTableProps {
  users: User[];
}

const UserTable = ({ users }: UserTableProps) => {
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
