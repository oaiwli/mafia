// frontend/src/components/Roll/index.tsx

import { useState } from "react";
import {
  Container,
  Card,
  Input,
  Btn,
  RoleImage,
  RoleNameText,
  BottomSpaceFiller,
} from "./style"; // Добавим BottomSpaceFiller
import useGameStore from "../../utils/store/game";
import { ThemeProvider, createTheme } from "@mui/material/styles";

interface GameProps {
  goGame: () => void;
}

const roleImageMap: Record<string, string> = {
  mafiaDon: "/Don.png",
  mafia: "/Mafia.png",
  killer: "/Maniac.png",
  police: "/Comissar.png",
  medic: "/Doctor.png",
  whore: "/Whore.png",
  civil: "/Civil.png",
  back: "/Back.png",
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

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF4D4D",
      dark: "#CC0000",
    },
    text: {
      secondary: "white",
    },
  },
});

const Roll = ({ goGame }: GameProps) => {
  const { assignRole, players, player } = useGameStore(); // Убрали isHostAssigned, setHostAssigned
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
    <ThemeProvider theme={theme}>
      <Container>
        <Card>
          <RoleImage src={imageSrc} alt={imageToDisplay} />
        </Card>
        {/* Пространство для названия роли */}
        {currentRole ? (
          <RoleNameText>{roleDisplayName}</RoleNameText>
        ) : (
          <BottomSpaceFiller height="1.5rem + 20px" />
        )}{" "}
        {/* Высота текста + margin-bottom */}
        {!currentRole ? (
          <>
            <Input
              label="Имя игрока"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              InputLabelProps={{
                style: { color: "rgba(255, 255, 255, 0.7)" },
              }}
              InputProps={{
                style: { color: "white" },
              }}
            />
            <Btn onClick={handleAssign} disabled={!name.trim()}>
              {!name.trim() ? "Введите имя" : "Получить роль"}
            </Btn>
          </>
        ) : (
          <>
            {/* Заполнители, чтобы Input и Btn не "прыгали" */}
            <BottomSpaceFiller height="60px" /> {/* Высота Input примерно */}
            <Btn onClick={handleNext}>
              {players.length >= player ? "Начать игру" : "Следующий игрок"}
            </Btn>
          </>
        )}
        <p style={{ color: "white", marginTop: "auto" }}>
          Раздано: {players.length}/{player}
        </p>
      </Container>
    </ThemeProvider>
  );
};

export default Roll;
