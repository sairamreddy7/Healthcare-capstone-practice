// src/stores/authStore.ts
import { create } from 'zustand';

interface AuthState {
  isLoggedIn: boolean;
  userRole: 'admin' | 'clinician' | 'patient' | null;
  login: (role: 'admin' | 'clinician' | 'patient') => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  userRole: null,
  login: (role) => set({ isLoggedIn: true, userRole: role }),
  logout: () => set({ isLoggedIn: false, userRole: null }),
}));

export default useAuthStore;
