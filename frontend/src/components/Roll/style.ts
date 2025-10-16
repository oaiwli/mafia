// frontend/src/components/Roll/style.ts

import { Box, styled, Button, TextField, Typography } from "@mui/material";

export const Container = styled(Box)(() => ({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px 0",
  boxSizing: "border-box",
}));

export const Card = styled(Box)(({ theme }) => ({
  width: "200px",
  height: "320px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: `2px solid ${theme.palette.secondary.main}`,
  borderRadius: "10px",
  overflow: "hidden",
  boxShadow: "0px 8px 25px rgba(0,0,0,0.8)",
  marginBottom: "20px",
  background: theme.palette.background.paper,
}));

export const RoleImage = styled("img")(() => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
}));

export const RoleNameText = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: "2rem",
  fontWeight: 700,
  textAlign: "center",
  fontFamily: theme.typography.h2.fontFamily,
  textShadow: theme.typography.h2.textShadow,
  marginBottom: "30px",
  // height: "calc(2rem + 30px)", // Убрали, т.к. InputSection будет управлять пространством ниже
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

// InputSection теперь управляет общим блоком под RoleNameText
export const InputSection = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "150px", // Задаем минимальную высоту для секции (Input + ActionBtn + отступы)
  marginBottom: "20px", // Отступ до AssignedPlayersCount
}));

export const Input = styled(TextField)(({ theme }) => ({
  width: "80%",
  maxWidth: "350px",
  marginBottom: "20px", // Отступ до кнопки
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.secondary.main,
      borderWidth: "2px",
    },
    "&:hover fieldset": {
      borderColor: theme.palette.secondary.main,
      borderWidth: "2px",
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.secondary.main, // Без изменения цвета при фокусе
      borderWidth: "2px",
    },
    borderRadius: "8px",
    backgroundColor: theme.palette.background.paper,
  },
  "& .MuiInputBase-input": {
    color: theme.palette.text.primary,
    height: "30px",
    padding: "15px 14px",
    fontFamily: theme.typography.body1.fontFamily,
  },
  "& .MuiInputLabel-root": {
    color: theme.palette.text.primary,
    fontFamily: theme.typography.body1.fontFamily,
    "&.Mui-focused": {
      color: theme.palette.text.primary, // Без изменения цвета при фокусе
    },
  },
}));

export const ActionBtn = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "1.5rem",
  fontWeight: 700,
  backgroundColor: theme.palette.secondary.main,
  padding: "15px 40px",
  borderRadius: "10px",
  transition: "all 0.3s ease-in-out",
  boxShadow: "0px 6px 20px rgba(0,0,0,0.6)",
  border: `2px solid ${theme.palette.secondary.dark}`,
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
    boxShadow: "0px 8px 25px rgba(0,0,0,0.8)",
  },
  "&:disabled": {
    backgroundColor: theme.palette.background.paper,
    color: "rgba(255, 255, 255, 0.4)",
    border: `2px solid rgba(196, 156, 72, 0.3)`,
    boxShadow: "none",
  },
  fontFamily: theme.typography.button.fontFamily,
}));

// Плейсхолдер для сохранения места Input, когда он скрыт
export const ActionButtonPlaceholder = styled(Box)<{ isInput?: boolean }>(
  ({ isInput }) => ({
    width: "80%",
    maxWidth: isInput ? "350px" : "auto",
    height: isInput ? "calc(30px + 15px * 2 + 2px * 2)" : "auto", // Высота Input (высота текста + padding + border)
    marginBottom: isInput ? "20px" : "0", // Отступ как у Input
    // background: 'red', // Для отладки
  })
);

export const AssignedPlayersCount = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  opacity: 0.7,
  fontSize: "1rem",
  textAlign: "center",
  fontFamily: theme.typography.body1.fontFamily,
  marginTop: "10px",
  position: "relative",
  "&::before, &::after": {
    content: '""',
    position: "absolute",
    width: "15px",
    height: "1px",
    backgroundColor: theme.palette.secondary.main,
    top: "50%",
    transform: "translateY(-50%)",
  },
  "&::before": {
    left: "calc(50% - 70px)",
    transform: "rotate(0deg) translateY(-50%)",
  },
  "&::after": {
    right: "calc(50% - 70px)",
    transform: "rotate(0deg) translateY(-50%)",
  },
}));
