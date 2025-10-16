import { Box, styled, Typography, Button, TextField } from "@mui/material";

export const Container = styled(Box)(() => ({
  width: "100%",
  height: "100vh", // Устанавливаем высоту в 100% от высоты видового экрана
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center", // Добавляем центрирование по вертикали по умолчанию
  padding: "20px",
  backgroundColor: "#333",
  color: "white",
  // Убираем overflowY, чтобы избежать скролла
}));

export const HostButtonContainer = styled(Box)(() => ({
  marginTop: "30px", // Уменьшил отступ
  width: "100%",
  display: "flex",
  justifyContent: "center",
}));

export const HostButton = styled(Button)(({ theme }) => ({
  color: "white",
  fontSize: "1.5rem", // Уменьшил размер шрифта
  fontWeight: "bold",
  backgroundColor: theme.palette.primary.main,
  padding: "10px 20px", // Уменьшил padding
  borderRadius: "8px", // Немного уменьшил радиус
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
  maxWidth: "300px", // Ограничиваем ширину
  width: "80%", // Уменьшаем ширину
}));

export const HostMessage = styled(Typography)(() => ({
  fontSize: "1.8rem", // Уменьшил размер шрифта
  fontWeight: "bold",
  textAlign: "center",
  color: "white",
}));

export const PlayerItem = styled(Box)(() => ({
  width: "90%",
  maxWidth: "400px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#444",
  borderRadius: "10px",
  padding: "10px 15px",
  margin: "10px 0",
  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
}));

export const PlayerName = styled(Typography)(() => ({
  fontSize: "1.1rem",
  fontWeight: "bold",
  flexGrow: 1,
}));

export const PlayerRole = styled(Typography)(() => ({
  fontSize: "1rem",
  color: "rgba(255, 255, 255, 0.7)",
  marginLeft: "15px",
}));

export const EditButton = styled(Button)(() => ({
  minWidth: "auto",
  padding: "5px",
  marginLeft: "10px",
  backgroundColor: "transparent",
  color: "rgba(255, 255, 255, 0.7)",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "white",
  },
}));

export const StyledInput = styled(TextField)(() => ({
  flexGrow: 1,
  marginRight: "10px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.3)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(255, 255, 255, 0.7)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#FF4D4D",
    },
    borderRadius: "5px",
    padding: "0 5px",
  },
  "& .MuiInputBase-input": {
    color: "white",
    padding: "8px 10px",
  },
}));
