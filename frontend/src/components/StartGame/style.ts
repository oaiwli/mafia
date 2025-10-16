// frontend/src/components/StartGame/style.ts

import { Box, styled, Typography, IconButton, Button } from "@mui/material";

export const Container = styled(Box)(() => ({
  // Изменения здесь:
  height: "100%", // Контейнер занимает всю доступную высоту родителя
  width: "100%", // Контейнер занимает всю доступную ширину родителя
  display: "flex",
  flexDirection: "column",
  justifyContent: "center", // Центрирование по вертикали
  alignItems: "center", // Центрирование по горизонтали
  gap: "30px", // Отступ между элементами (можно настроить)
  padding: "20px", // Внутренние отступы, чтобы контент не прилипал к краям
  boxSizing: "border-box", // Учитываем padding в размере элемента
  // Убираем позиционирование absolute и transform, т.к. родитель (root) уже центрирует App
  // Если root не центрирует, и App занимает 100% ширины/высоты, то этот контейнер будет центрирован.
}));

// MafiaTitle вместо HeaderText
export const MafiaTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main, // Красный из палитры
  fontSize: theme.typography.h1.fontSize, // Используем h1 из темы
  fontFamily: theme.typography.h1.fontFamily,
  fontWeight: theme.typography.h1.fontWeight,
  textShadow: theme.typography.h1.textShadow,
  marginBottom: "10px",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-20px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "80%",
    height: "2px",
    backgroundColor: theme.palette.secondary.main, // Золотистый акцент
    boxShadow: "0px 0px 10px rgba(196, 156, 72, 0.7)",
  },
}));

// PlayersCountBox вместо SelectBox для текста "Количество игроков:"
export const PlayersCountBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px 20px",
  backgroundColor: theme.palette.background.paper, // Темный фон для блока
  borderRadius: "8px",
  border: `1px solid ${theme.palette.secondary.main}`, // Золотая рамка
  boxShadow: "0px 4px 15px rgba(0,0,0,0.4)",
  position: "relative",
  "&::before, &::after": {
    content: '""',
    position: "absolute",
    width: "20px",
    height: "2px",
    backgroundColor: theme.palette.secondary.main,
    top: "50%",
    transform: "translateY(-50%)",
  },
  "&::before": {
    left: "-10px",
    transform: "rotate(45deg) translateY(-50%)",
  },
  "&::after": {
    right: "-10px",
    transform: "rotate(-45deg) translateY(-50%)",
  },
}));

// PlayersCountText вместо SelectText
export const PlayersCountText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: "1.2rem",
  fontFamily: theme.typography.body1.fontFamily,
  fontWeight: 700,
}));

// Новая обертка для числа и стрелок (ранее BtnBox и SelectPlayer были отдельно)
export const PlayersCountValueWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "15px",
  position: "relative",
}));

export const PlayersCountValue = styled(Typography)(({ theme }) => ({
  fontSize: "3rem",
  fontWeight: 700,
  color: theme.palette.secondary.main,
  textShadow: "1px 1px 5px rgba(0,0,0,0.7)",
  fontFamily: theme.typography.body1.fontFamily,

  minWidth: "3ch", // ✅ фиксированная ширина под 2–3 цифры
  textAlign: "center", // ✅ чтобы число всегда по центру
}));

// ArrowButton вместо IconBtn
export const ArrowButton = styled(IconButton)(({ theme }) => ({
  position: "relative",
  color: theme.palette.primary.main, // Красные стрелки
  "& svg": {
    fontSize: "3rem", // Большие стрелки
    filter: "drop-shadow(1px 1px 3px rgba(0,0,0,0.5))",
  },
  "&:hover": {
    backgroundColor: "transparent",
    color: theme.palette.primary.dark,
  },
  "&:disabled": {
    color: "#525252",
    cursor: "not-allowed",
    transform: "none",
  },
}));

// StartButton вместо Btn
export const StartButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main, // Золотистый фон
  color: theme.palette.primary.main, // Красный текст
  padding: "15px 40px",
  fontSize: "2rem",
  fontWeight: 700,
  borderRadius: "10px",
  boxShadow: "0px 6px 20px rgba(0,0,0,0.6)",
  position: "relative",
  border: `2px solid ${theme.palette.secondary.dark}`, // Более темная золотая обводка
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
    boxShadow: "0px 8px 25px rgba(0,0,0,0.8)",
  },
  fontFamily: theme.typography.button.fontFamily, // Используем шрифт для кнопок
}));

// BottomHint для подсказки
export const BottomHint = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  opacity: 0.7,
  fontSize: "0.9rem",
  // Убираем marginTop: "auto", чтобы не "прилипало" к низу.
  // gap в Container отвечает за отступы между элементами.
  textAlign: "center",
  fontFamily: theme.typography.body1.fontFamily,
}));
