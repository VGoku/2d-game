// import { create } from 'zustand';

// interface AuthState {
//   user: { id: string; username: string } | null;
//   token: string | null;
//   isAuthenticated: boolean;
//   login: (user: { id: string; username: string }, token: string) => void;
//   logout: () => void;
// }

// export const useAuthStore = create<AuthState>((set) => ({
//   user: null,
//   token: null,
//   isAuthenticated: false,
//   login: (user, token) =>
//     set({ user, token, isAuthenticated: true }),
//   logout: () =>
//     set({ user: null, token: null, isAuthenticated: false }),
// }));


// src/store/authStore.ts
import { create } from "zustand";

interface AuthState {
  user: { username: string } | null;
  login: (user: { username: string }) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
}));
