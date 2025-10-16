// frontend/src/components/Game/style.ts

import { Box, styled, Typography, Button, TextField } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%", // Меняем на 100% для соответствия родительскому контейнеру App
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center", // По умолчанию центрирование
  padding: "20px",
  boxSizing: "border-box", // Учитываем padding
  backgroundColor: "transparent", // Фон должен быть от body/root
  color: theme.palette.text.primary, // Основной цвет текста из темы
  overflowY: "auto", // Добавляем скролл, если контента много
}));

export const HostButtonContainer = styled(Box)(() => ({
  marginTop: "40px", // Увеличим отступ
  width: "100%",
  display: "flex",
  justifyContent: "center",
}));

export const HostButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main, // Красный текст
  fontSize: "1.5rem",
  fontWeight: 700,
  backgroundColor: theme.palette.secondary.main, // Золотистый фон
  padding: "15px 40px", // Соответствие другим кнопкам
  borderRadius: "10px",
  transition: "all 0.3s ease-in-out",
  boxShadow: "0px 6px 20px rgba(0,0,0,0.6)",
  border: `2px solid ${theme.palette.secondary.dark}`,
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
    boxShadow: "0px 8px 25px rgba(0,0,0,0.8)",
  },
  maxWidth: "350px", // Увеличим максимальную ширину
  width: "80%",
  fontFamily: theme.typography.button.fontFamily,
}));

export const HostMessage = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h2.fontSize, // Используем h2 из темы
  fontWeight: theme.typography.h2.fontWeight,
  fontFamily: theme.typography.h2.fontFamily,
  textShadow: theme.typography.h2.textShadow,
  textAlign: "center",
  color: theme.palette.secondary.main, // Золотистый для важных сообщений
  marginBottom: "20px", // Добавим отступ снизу
}));

export const PlayerItem = styled(Box)(({ theme }) => ({
  width: "90%",
  maxWidth: "450px", // Увеличим максимальную ширину
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: theme.palette.background.paper, // Фон карточки как у других компонентов
  borderRadius: "10px",
  padding: "15px 20px", // Увеличим padding
  margin: "8px 0", // Немного уменьшим отступ между элементами
  boxShadow: "0px 4px 15px rgba(0,0,0,0.4)", // Более выраженная тень
  border: `1px solid ${theme.palette.secondary.main}`, // Золотая рамка
}));

export const PlayerName = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem", // Увеличим размер шрифта
  fontWeight: 700,
  flexGrow: 1,
  color: theme.palette.text.primary, // Светлый текст
  fontFamily: theme.typography.body1.fontFamily,
}));

export const PlayerRole = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  color: theme.palette.text.secondary, // Красный акцентный текст
  marginLeft: "15px",
  fontFamily: theme.typography.body1.fontFamily,
  // textTransform: 'uppercase', // Можно добавить, если хотим выделить
}));

export const EditButton = styled(Button)(({ theme }) => ({
  minWidth: "auto",
  padding: "5px",
  marginLeft: "10px",
  backgroundColor: "transparent",
  color: theme.palette.secondary.main, // Золотая иконка
  "&:hover": {
    backgroundColor: "rgba(196, 156, 72, 0.1)", // Легкий золотистый фон при наведении
    color: theme.palette.secondary.light, // Более светлый золотистый при наведении
  },
  "& svg": {
    fontSize: "1.4rem", // Увеличим размер иконки
    filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.4))",
  },
}));

export const StyledInput = styled(TextField)(({ theme }) => ({
  flexGrow: 1,
  marginRight: "10px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.secondary.main, // Золотая рамка
      borderWidth: "1px",
    },
    "&:hover fieldset": {
      borderColor: theme.palette.secondary.light, // Более светлая золотая при наведении
      borderWidth: "1px",
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main, // Красная при фокусе
      borderWidth: "1px",
    },
    borderRadius: "5px",
    padding: "0 5px",
    backgroundColor: theme.palette.background.default, // Фон ввода темнее
  },
  "& .MuiInputBase-input": {
    color: theme.palette.text.primary,
    padding: "8px 10px",
    fontFamily: theme.typography.body1.fontFamily,
  },
}));
