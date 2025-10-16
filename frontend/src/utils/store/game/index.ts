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
  id: string; // Добавляем уникальный ID для каждого игрока
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
  isHostAssigned: boolean; // Новый стейт для ведущего
  civil: () => number;
  inc: (
    key: keyof Omit<
      Store,
      | "inc"
      | "dec"
      | "civil"
      | "assignRole"
      | "resetGame"
      | "setHostAssigned"
      | "updatePlayerName"
    >,
    value?: number
  ) => void;
  dec: (
    key: keyof Omit<
      Store,
      | "inc"
      | "dec"
      | "civil"
      | "assignRole"
      | "resetGame"
      | "setHostAssigned"
      | "updatePlayerName"
    >,
    value?: number
  ) => void;
  assignRole: (name: string) => Role | null;
  resetGame: () => void;
  setHostAssigned: (isAssigned: boolean) => void; // Функция для установки ведущего
  updatePlayerName: (id: string, newName: string) => void; // Функция для изменения имени игрока
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
  isHostAssigned: false, // Изначально ведущий не назначен
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
      const allRolesCount =
        (key === "mafiaDon" ? newValue : state.mafiaDon) +
        (key === "mafia" ? newValue : state.mafia) +
        (key === "killer" ? newValue : state.killer) +
        (key === "police" ? newValue : state.police) +
        (key === "medic" ? newValue : state.medic) +
        (key === "whore" ? newValue : state.whore) +
        state.civil(); // Учитываем civil в общей сумме ролей для проверки лимита

      // Проверяем, не превышаем ли мы общее количество игроков
      if (allRolesCount <= state.player) {
        return { ...state, [key]: newValue };
      }
      return state;
    }),
  dec: (key, value = 1) =>
    set((state) => ({ [key]: Math.max(0, (state[key] as number) - value) })),
  assignRole: (name) => {
    const state = get();

    // Создаем список всех доступных ролей по количеству
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

    // Считаем уже выданные роли
    const usedRoles = state.players
      .map((p) => p.role)
      .filter(Boolean) as Role[];

    // Оставляем только те, у которых ещё есть “запас”
    const availableRoles = rolesPool.filter((role) => {
      const countInPool = rolesPool.filter((r) => r === role).length;
      const countUsed = usedRoles.filter((r) => r === role).length;
      return countUsed < countInPool;
    });

    if (availableRoles.length === 0) return null;

    // Выдаём случайную из оставшихся
    const randomRole =
      availableRoles[Math.floor(Math.random() * availableRoles.length)];

    set((state) => ({
      players: [
        ...state.players,
        { id: Date.now().toString(), name, role: randomRole },
      ], // Генерируем ID
    }));

    return randomRole;
  },
  resetGame: () => set({ players: [], isHostAssigned: false }), // Сбрасываем и ведущего
  setHostAssigned: (isAssigned: boolean) => set({ isHostAssigned: isAssigned }),
  updatePlayerName: (id, newName) => {
    set((state) => ({
      players: state.players.map((p) =>
        p.id === id ? { ...p, name: newName } : p
      ),
    }));
  },
}));

export default useGameStore;
