import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import StartGame from "./components/StartGame";
import ChoiceRole from "./components/ChoiceRole";
import Roll from "./components/Roll";
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
type GameStage = "start" | "role" | "roll" | "game";

const App = () => {
  const [gameStage, setGameStage] = useState<GameStage>("start");
  const goRole = () => {
    setGameStage("role");
  };
  const goRoll = () => {
    setGameStage("roll");
  };
  const goStart = () => {
    setGameStage("start");
  };
  const goGame = () => {
    setGameStage("game");
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        {gameStage === "start" && <StartGame goRole={goRole} />}
        {gameStage === "role" && (
          <ChoiceRole goRoll={goRoll} goStart={goStart} />
        )}
        {gameStage === "roll" && <Roll goGame={goGame} />}
        {gameStage === "game" && <Game />}
      </ThemeProvider>
    </>
  );
};

export default App;
