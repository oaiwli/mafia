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
import { ThemeProvider, createTheme } from "@mui/material/styles";

const roleDisplayNameMap: Record<string, string> = {
  mafiaDon: "Дон Мафии",
  mafia: "Мафия",
  killer: "Маньяк",
  police: "Комиссар",
  medic: "Доктор",
  whore: "Путана",
  civil: "Мирный житель",
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

const Game = () => {
  const {
    players,
    updatePlayerName,
    isHostAssigned,
    setHostAssigned,
    resetGame,
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
      <ThemeProvider theme={theme}>
        <Container style={{ justifyContent: "center", alignItems: "center" }}>
          <HostMessage>Добро пожаловать в игру!</HostMessage>
          <HostButtonContainer>
            <HostButton onClick={handleHostAssign}>
              ЗАНЯТЬ РОЛЬ ВЕДУЩЕГО
            </HostButton>
          </HostButtonContainer>
        </Container>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Container
        style={{
          justifyContent: players.length === 0 ? "center" : "flex-start",
          alignItems: "center",
        }}
      >
        {players.length === 0 ? (
          <HostMessage>Начните раздачу ролей в "Roll" компоненте.</HostMessage>
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
    </ThemeProvider>
  );
};

export default Game;
