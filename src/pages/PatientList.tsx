// src/pages/PatientList.tsx
import PageHeading from '../components/PageHeading';
import PatientTable from '../components/PatientTable';

const PatientList = () => {
  return (
    <>
      <PageHeading title="Patient List" description="Manage your patients, view records, and schedule appointments." />
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark">
            <span className="material-symbols-outlined">filter_list</span> Filter
          </button>
          <button className="flex items-center gap-2 text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark">
            <span className="material-symbols-outlined">swap_vert</span> Sort
          </button>
        </div>
        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Showing 1-10 of 124 patients</p>
      </div>
      <PatientTable />
    </>
  );
};

export default PatientList;
