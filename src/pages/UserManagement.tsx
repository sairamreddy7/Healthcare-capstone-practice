// src/pages/UserManagement.tsx
import PageHeading from '../components/PageHeading';
import UserTable from '../components/UserTable';
import Pagination from '../components/Pagination';

const UserManagement = () => {
  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <PageHeading title="Manage Users" description="Oversee and manage all user accounts within the system." />
        <div className="flex items-center gap-2">
          <button className="flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-slate-300 px-4 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
            <span className="material-symbols-outlined text-xl">filter_list</span>
            <span>Filter</span>
          </button>
          <button className="flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-primary px-4 text-sm font-semibold text-white hover:bg-primary/90">
            <span className="material-symbols-outlined text-xl">add</span>
            <span>Add New User</span>
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <UserTable />
          </div>
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default UserManagement;
