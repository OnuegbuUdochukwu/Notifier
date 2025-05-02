import { create } from 'zustand';
import axios from 'axios';

const useAuthStore = create((set) => ({
  token: localStorage.getItem('authToken') || null,
  setToken: (token) => {
    localStorage.setItem('authToken', token);
    set({ token });
  },
  logout: async() => {
    try{
      await axios.get('http://localhost:5000/api/auth/logout', { withCredentials: true });
      localStorage.removeItem('authToken');
      set({ token: null });
    }
    catch(error){
      console.error('logout error:',error)
    }
   

  },
}));

export default useAuthStore;