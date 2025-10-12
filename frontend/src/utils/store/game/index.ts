// utils/store/game.ts

import { create } from "zustand";

type Role =
  | "mafiaDon"
  | "mafia"
  | "killer"
  | "police"
  | "medic"
  | "whore"
  | "civil";

type Player = {
  name: string;
  role: Role | null;
};

type Store = {
  player: number;
  mafiaDon: number;
  mafia: number;
  killer: number;
  police: number;
  medic: number;
  whore: number;
  players: Player[];
  civil: () => number;
  inc: (key: keyof Omit<Store, "inc" | "dec">, value?: number) => void;
  dec: (key: keyof Omit<Store, "inc" | "dec">, value?: number) => void;
  assignRole: (name: string) => Role | null;
  resetGame: () => void;
};

const useGameStore = create<Store>()((set, get) => ({
  player: 6,
  mafiaDon: 0,
  mafia: 1,
  killer: 0,
  police: 1,
  medic: 1,
  whore: 0,
  players: [],
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
    set((state) => {
      const currentValue = state[key] as number;
      const newValue = currentValue + value;
      const allRoles =
        (key === "mafiaDon" ? newValue : state.mafiaDon) +
        (key === "mafia" ? newValue : state.mafia) +
        (key === "killer" ? newValue : state.killer) +
        (key === "police" ? newValue : state.police) +
        (key === "medic" ? newValue : state.medic) +
        (key === "whore" ? newValue : state.whore);

      if (allRoles <= state.player) {
        return { ...state, [key]: newValue };
      }
      return state;
    }),
  dec: (key, value = 1) =>
    set((state) => ({ [key]: Math.max(0, (state[key] as number) - value) })),
  assignRole: (name) => {
    const state = get();

    // создаём список всех доступных ролей по количеству
    const rolesPool: Role[] = [];
    const roleKeys: Role[] = [
      "mafiaDon",
      "mafia",
      "killer",
      "police",
      "medic",
      "whore",
    ];
    roleKeys.forEach((key) => {
      for (let i = 0; i < state[key]; i++) rolesPool.push(key);
    });
    for (let i = 0; i < state.civil(); i++) rolesPool.push("civil");

    // считаем уже выданные роли
    const usedRoles = state.players
      .map((p) => p.role)
      .filter(Boolean) as Role[];

    // оставляем только те, у которых ещё есть “запас”
    const availableRoles = rolesPool.filter((role) => {
      const countInPool = rolesPool.filter((r) => r === role).length;
      const countUsed = usedRoles.filter((r) => r === role).length;
      return countUsed < countInPool;
    });

    if (availableRoles.length === 0) return null;

    // выдаём случайную из оставшихся
    const randomRole =
      availableRoles[Math.floor(Math.random() * availableRoles.length)];

    set((state) => ({
      players: [...state.players, { name, role: randomRole }],
    }));

    return randomRole;
  },
  resetGame: () => set({ players: [] }),
}));

export default useGameStore;
