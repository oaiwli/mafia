import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import StartGame from "./components/StartGame";
import ChoiceRole from "./components/ChoiceRole";
import Game from "./components/Game";
import { useState } from "react";

export const THEME = {
  palette: {
    primary: { main: "#45666B" },
    secondary: { main: "#4F282D" },
    text: { primary: "#D6C6AD", secondary: "#D20222" },
  },
  typography: { fontFamily: '"Stem","Tahoma","Arial",sans-serif' },
};

const theme = createTheme(THEME as any);
type GameStage = "start" | "role" | "game";

const App = () => {
  const [gameStage, setGameStage] = useState<GameStage>("start");
  const goRole = () => {
    setGameStage("role");
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        {gameStage === "start" && <StartGame goRole={goRole} />}
        {gameStage === "role" && <ChoiceRole />}
        {gameStage === "game" && <Game />}
      </ThemeProvider>
    </>
  );
};

export default App;
