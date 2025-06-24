import { create } from "zustand";

type Store = {
  player: number;
  mafiaDon: number;
  mafia: number;
  killer: number;
  police: number;
  medic: number;
  whore: number;
  civil: () => number;
  inc: (key: keyof Omit<Store, "inc" | "dec">, value?: number) => void;
  dec: (key: keyof Omit<Store, "inc" | "dec">, value?: number) => void;
};

const useGameStore = create<Store>()((set, get) => ({
  player: 9,
  mafiaDon: 1,
  mafia: 1,
  killer: 1,
  police: 1,
  medic: 1,
  whore: 1,
  civil: () => {
    const state = get();
    return Math.max(
      0,
      state.player -
        (state.mafiaDon +
          state.mafia +
          state.killer +
          state.police +
          state.medic +
          state.whore)
    );
  },
  inc: (key, value = 1) =>
    set((state) => ({ [key]: (state[key] as number) + value })),
  dec: (key, value = 1) =>
    set((state) => ({ [key]: Math.max(0, (state[key] as number) - value) })),
}));

export default useGameStore;
