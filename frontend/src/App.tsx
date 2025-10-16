// frontend/src/App.tsx

import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import StartGame from "./components/StartGame";
import ChoiceRole from "./components/ChoiceRole";
import Roll from "./components/Roll";
import Game from "./components/Game";
import { useState, useEffect } from "react"; // Добавляем useEffect

// Добавляем импорт шрифтов из Google Fonts (можно добавить в index.html или через @import в CSS)
// Для примера, можно использовать:
// <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Old+Standard+TT:wght@400;700&display=swap" rel="stylesheet">

export const THEME = {
  palette: {
    primary: { main: "#B80F0A" }, // Глубокий красный для акцентов
    secondary: { main: "#C49C48" }, // Золотистый для декоративных элементов
    text: { primary: "#D6C6AD", secondary: "#B80F0A" }, // Светлый текст и красный акцентный текст
    background: { default: "#1a1a1a", paper: "#282828" }, // Темный фон
  },
  typography: {
    fontFamily: '"Old Standard TT", serif', // Основной шрифт с засечками
    h1: {
      fontFamily: '"Cinzel Decorative", cursive', // Специальный шрифт для логотипов/заголовков
      fontWeight: 700,
      fontSize: "4rem",
      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
    },
    h2: {
      fontFamily: '"Cinzel Decorative", cursive',
      fontWeight: 700,
      fontSize: "2.5rem",
      textShadow: "1px 1px 3px rgba(0,0,0,0.4)",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    button: {
      fontFamily: '"Old Standard TT", serif',
      fontWeight: 700,
      textTransform: "uppercase",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px", // Общий радиус для кнопок
          transition: "all 0.3s ease-in-out",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
          },
        },
      },
    },
  },
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

  // Добавляем шрифты через useEffect или в public/index.html
  useEffect(() => {
    const link1 = document.createElement("link");
    link1.href =
      "https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&display=swap";
    link1.rel = "stylesheet";
    document.head.appendChild(link1);

    const link2 = document.createElement("link");
    link2.href =
      "https://fonts.googleapis.com/css2?family=Old+Standard+TT:wght@400;700&display=swap";
    link2.rel = "stylesheet";
    document.head.appendChild(link2);

    return () => {
      document.head.removeChild(link1);
      document.head.removeChild(link2);
    };
  }, []);

  useEffect(() => {
    // Список всех изображений ролей, которые нужно заранее подгрузить
    const imagePaths = [
      "/public/mafiaDon.png",
      "/public/mafia.png",
      "/public/killer.png",
      "/public/police.png",
      "/public/medic.png",
      "/public/whore.png",
      "/public/civil.png",
    ];

    // Создаём Image-объекты и подгружаем
    const preloadImages = imagePaths.map((path) => {
      const img = new Image();
      img.src = path;
      return img;
    });

    // Возвращаем функцию очистки (не обязательно, но корректно)
    return () => {
      preloadImages.forEach((img) => (img.src = ""));
    };
  }, []);

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
