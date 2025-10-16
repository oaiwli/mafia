// frontend/src/components/Game/index.tsx

import { useState } from "react";
import {
  Container,
  PlayerItem,
  PlayerName,
  PlayerRole,
  EditButton,
  StyledInput,
  HostButtonContainer,
  HostButton,
  HostMessage,
} from "./style";
import useGameStore from "../../utils/store/game";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
// Удаляем импорт ThemeProvider и createTheme, так как тема уже общая
// import { ThemeProvider, createTheme } from "@mui/material/styles";

const roleDisplayNameMap: Record<string, string> = {
  mafiaDon: "Дон Мафии",
  mafia: "Мафия",
  killer: "Маньяк",
  police: "Комиссар",
  medic: "Доктор",
  whore: "Путана",
  civil: "Мирный житель",
};

const Game = () => {
  const {
    players,
    updatePlayerName,
    isHostAssigned,
    setHostAssigned,
    // resetGame, // Не используется в этом компоненте, можно удалить
  } = useGameStore();
  const [editingPlayerId, setEditingPlayerId] = useState<string | null>(null);
  const [editedPlayerName, setEditedPlayerName] = useState("");

  const handleEditClick = (playerToEditId: string, currentName: string) => {
    setEditingPlayerId(playerToEditId);
    setEditedPlayerName(currentName);
  };

  const handleSaveClick = (playerToSaveId: string) => {
    if (editedPlayerName.trim()) {
      updatePlayerName(playerToSaveId, editedPlayerName.trim());
    }
    setEditingPlayerId(null);
    setEditedPlayerName("");
  };

  const handleHostAssign = () => {
    setHostAssigned(true);
  };

  if (!isHostAssigned) {
    return (
      // Удаляем ThemeProvider
      <Container>
        <HostMessage variant="h2">Добро пожаловать в игру!</HostMessage>{" "}
        {/* Используем h2 из темы */}
        <HostButtonContainer>
          <HostButton onClick={handleHostAssign}>
            ЗАНЯТЬ РОЛЬ ВЕДУЩЕГО
          </HostButton>
        </HostButtonContainer>
      </Container>
      // </ThemeProvider>
    );
  }

  return (
    // Удаляем ThemeProvider
    <Container
      style={{
        // При наличии игроков, выравниваем по верхнему краю с отступами
        justifyContent: players.length === 0 ? "center" : "flex-start",
        paddingTop: players.length === 0 ? "20px" : "40px", // Отступ сверху при отображении списка
        paddingBottom: players.length === 0 ? "20px" : "20px", // Отступ снизу
        // alignItems: "center", // Уже есть в styled компоненте по умолчанию
      }}
    >
      {players.length === 0 ? (
        <HostMessage variant="h2">
          Начните раздачу ролей в "Roll" компоненте.
        </HostMessage>
      ) : (
        players.map((p) => (
          <PlayerItem key={p.id}>
            {editingPlayerId === p.id ? (
              <StyledInput
                value={editedPlayerName}
                onChange={(e) => setEditedPlayerName(e.target.value)}
                onBlur={() => handleSaveClick(p.id)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSaveClick(p.id);
                  }
                }}
                autoFocus
              />
            ) : (
              <PlayerName>{p.name}</PlayerName>
            )}

            <PlayerRole>
              {roleDisplayNameMap[p.role as keyof typeof roleDisplayNameMap]}
            </PlayerRole>

            {editingPlayerId === p.id ? (
              <EditButton onClick={() => handleSaveClick(p.id)}>
                <SaveIcon style={{ fontSize: "1.2rem" }} />
              </EditButton>
            ) : (
              <EditButton onClick={() => handleEditClick(p.id, p.name)}>
                <EditIcon style={{ fontSize: "1.2rem" }} />
              </EditButton>
            )}
          </PlayerItem>
        ))
      )}
    </Container>
    // </ThemeProvider>
  );
};

export default Game;
