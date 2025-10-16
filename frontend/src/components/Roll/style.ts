// style.ts

import { Box, styled, Button, TextField, Typography } from "@mui/material";

export const Container = styled(Box)(() => ({
  height: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between", // Распределяем пространство
  padding: "20px 0",
}));

export const Card = styled(Box)(() => ({
  width: "200px",
  height: "320px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid rgba(255, 255, 255, 0.7)",
  borderRadius: "10px",
  overflow: "hidden",
  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
  marginTop: "auto", // Отталкиваем карточку вверх
  marginBottom: "10px", // Отступ снизу для текста роли/заполнителя
}));

export const RoleImage = styled("img")(() => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
}));

export const RoleNameText = styled(Typography)(() => ({
  color: "white",
  fontSize: "1.5rem",
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: "20px", // Отступ до следующего элемента (Input или Btn)
  height: "calc(1.5rem + 20px)", // Фиксированная высота для резервирования места
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

// Новый компонент для резервирования места
export const BottomSpaceFiller = styled(Box)<{ height?: string }>(
  ({ height }) => ({
    height: height || "20px", // Высота по умолчанию или переданная
    width: "100%", // Занимает всю ширину, но не влияет на центрирование карточки
    display: "flex",
    justifyContent: "center", // Можно убрать, если не нужно центрировать ничего внутри
    alignItems: "center",
  })
);

export const Input = styled(TextField)(({ theme }) => ({
  width: "70%",
  maxWidth: "300px",
  margin: "20px 0",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.5)",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
    borderRadius: "8px",
  },
  "& .MuiInputBase-input": {
    color: "white",
    height: "20px", // Фиксируем высоту ввода
    padding: "10px 14px", // Добавляем padding
  },
  "& .MuiInputLabel-root": {
    color: "rgba(255, 255, 255, 0.7)",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: theme.palette.primary.main,
  },
}));

export const Btn = styled(Button)(({ theme }) => ({
  color: "white",
  fontSize: "1.4rem",
  fontWeight: "bold",
  backgroundColor: theme.palette.primary.main,
  padding: "10px 20px",
  borderRadius: "8px",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
  "&:disabled": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    color: "rgba(255, 255, 255, 0.5)",
  },
  marginBottom: "auto",
}));
