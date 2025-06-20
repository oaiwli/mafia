import { create } from "zustand";

type Store = {
  player: number;
  inc: () => void;
  dec: () => void;
  mafiaDon: number;
  mafia: number;
  killer: number;
  police: number;
  medic: number;
  whore: number;
  civil: number;
};

const useGameStore = create<Store>()((set) => ({
  player: 9,
  mafiaDon: 1,
  mafia: 1,
  killer: 1,
  police: 1,
  medic: 1,
  whore: 1,
  civil: 3,

  inc: () => set((state) => ({ player: state.player + 1 })),
  dec: () => set((state) => ({ player: Math.max(0, state.player - 1) })),
}));

export default useGameStore;
