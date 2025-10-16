// frontend/src/components/Roll/index.tsx

import { useState } from "react";
import {
  Container,
  Card,
  Input,
  ActionBtn,
  RoleImage,
  RoleNameText,
  AssignedPlayersCount,
  ActionButtonPlaceholder, // Используем этот плейсхолдер
  InputSection, // Контейнер для Input и ActionBtn/их плейсхолдеров
} from "./style";
import useGameStore from "../../utils/store/game";

interface GameProps {
  goGame: () => void;
}

const roleImageMap: Record<string, string> = {
  mafiaDon: "https://i.ibb.co/jZ6L58T6/Don.png",
  mafia: "https://i.ibb.co/TxzbCmXQ/Mafia.png",
  killer: "https://i.ibb.co/39qjFq7Q/Maniac.png",
  police: "https://i.ibb.co/V0J3QtTM/Comissar.png",
  medic: "https://i.ibb.co/0RDN3yq6/Doctor.png",
  whore: "https://i.ibb.co/5g33Y5Sm/Whore.png",
  civil: "https://i.ibb.co/9knpcPG4/Civil.png",
  back: "https://i.ibb.co/v68LCsms/Back.png",
};

const roleDisplayNameMap: Record<string, string> = {
  mafiaDon: "Дон Мафии",
  mafia: "Мафия",
  killer: "Маньяк",
  police: "Комиссар",
  medic: "Доктор",
  whore: "Путана",
  civil: "Мирный житель",
  back: "",
};

const Roll = ({ goGame }: GameProps) => {
  const { assignRole, players, player } = useGameStore();
  const [name, setName] = useState("");
  const [currentRole, setCurrentRole] = useState<string | null>(null);

  const handleAssign = () => {
    if (!name.trim()) return;
    const role = assignRole(name.trim());
    if (role) {
      setCurrentRole(role);
    }
  };

  const handleNext = () => {
    setName("");
    setCurrentRole(null);
    if (players.length >= player) {
      goGame();
    }
  };

  const imageToDisplay = currentRole ? currentRole : "back";
  const imageSrc = roleImageMap[imageToDisplay];
  const roleDisplayName = currentRole ? roleDisplayNameMap[currentRole] : "";

  return (
    <Container>
      <Card>
        <RoleImage src={imageSrc} alt={imageToDisplay} />
      </Card>

      {/* Роль или заполнитель, всегда занимают одно и то же место */}
      {currentRole ? (
        <RoleNameText>{roleDisplayName}</RoleNameText>
      ) : (
        <RoleNameText />
      )}

      {/* Секция ввода/действия всегда занимает одинаковую высоту */}
      <InputSection>
        {!currentRole ? (
          <>
            <Input
              label="Имя игрока"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <ActionBtn onClick={handleAssign} disabled={!name.trim()}>
              {!name.trim() ? "Введите имя" : "Получить роль"}
            </ActionBtn>
          </>
        ) : (
          <>
            {/* Плейсхолдеры, которые занимают место Input и ActionBtn */}
            <ActionButtonPlaceholder isInput /> {/* Место для Input */}
            <ActionBtn onClick={handleNext}>
              {players.length >= player ? "Начать игру" : "Следующий игрок"}
            </ActionBtn>
          </>
        )}
      </InputSection>

      {/* Счетчик игроков */}
      <AssignedPlayersCount>
        Раздано: {players.length}/{player}
      </AssignedPlayersCount>
    </Container>
  );
};

export default Roll;
