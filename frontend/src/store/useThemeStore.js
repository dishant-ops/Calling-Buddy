import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("Calling-Buddy - theme") || "dark",
  setTheme: (theme) => {
    localStorage.setItem("Calling-Buddy - theme", theme);
    set({ theme });
  },
}));
