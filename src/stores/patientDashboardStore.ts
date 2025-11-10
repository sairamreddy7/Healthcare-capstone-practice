// src/stores/patientDashboardStore.ts
import { create } from 'zustand';

interface Appointment {
  date: string;
  time: string;
  doctor: string;
  reason: string;
}

interface Message {
  from: string;
  preview: string;
}

interface TestResult {
  name: string;
  status: string;
}

interface Medication {
  name: string;
  dosage: string;
}

interface PatientDashboardState {
  appointments: Appointment[];
  messages: Message[];
  testResults: TestResult[];
  medications: Medication[];
  billing: {
    balance: string;
    dueDate: string;
  };
  fetchDashboardData: () => Promise<void>;
}

const usePatientDashboardStore = create<PatientDashboardState>((set) => ({
  appointments: [],
  messages: [],
  testResults: [],
  medications: [],
  billing: {
    balance: '',
    dueDate: '',
  },
  fetchDashboardData: async () => {
    const response = await fetch('/api/patient/dashboard');
    const data = await response.json();
    set(data);
  },
}));

export default usePatientDashboardStore;
