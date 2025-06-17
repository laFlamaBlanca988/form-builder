import type { UIState } from "@/types/stores";
import { create } from "zustand";

export const useUIStore = create<UIState>((set) => ({
  selectedFieldId: null,
  setSelectedFieldId: (id) => set({ selectedFieldId: id }),
}));
