import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface zustandConfig {
  token: string;
  saveToken: (token: string) => void;
  getToken: () => string;
  clearToken: () => void;
}

export const useAppStore = create<zustandConfig>()(
  persist(
    (set, get) => ({
      token: '',
      saveToken: (token: string) => set({ token }),
      getToken: () => get().token,
      clearToken: () => set({ token: '' }),
    }),
    {
      name: '@expoMuseum',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
