// src/stores/patientListStore.ts
import { create } from 'zustand';

interface Patient {
  id: string;
  name: string;
  dob: string;
  lastVisit: string;
  status: 'Active' | 'Inactive' | 'Monitoring';
  avatar: string;
}

interface PatientListState {
  patients: Patient[];
  fetchPatients: () => Promise<void>;
}

const usePatientListStore = create<PatientListState>((set) => ({
  patients: [],
  fetchPatients: async () => {
    const response = await fetch('/api/patients');
    const patients = await response.json();
    set({ patients });
  },
}));

export default usePatientListStore;
