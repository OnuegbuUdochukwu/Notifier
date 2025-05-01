import { create } from 'zustand';

const useAuthStore = create((set) => ({
  token: localStorage.getItem('authToken') || null,
  setToken: (token) => {
    localStorage.setItem('authToken', token);
    set({ token });
  },
  logout: () => {
    localStorage.removeItem('authToken');
    set({ token: null });
  },
}));

export default useAuthStore;