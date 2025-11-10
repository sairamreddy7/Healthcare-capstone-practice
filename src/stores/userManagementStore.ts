// src/stores/userManagementStore.ts
import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  status: 'Active' | 'Inactive' | 'Pending';
  role: 'Patient' | 'Clinician' | 'Admin';
  lastLogin: string;
}

interface UserManagementState {
  users: User[];
  fetchUsers: () => Promise<void>;
}

const useUserManagementStore = create<UserManagementState>((set) => ({
  users: [],
  fetchUsers: async () => {
    const response = await fetch('/api/users');
    const users = await response.json();
    set({ users });
  },
}));

export default useUserManagementStore;
