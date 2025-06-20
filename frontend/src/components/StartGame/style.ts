import {
  Box,
  styled,
  Typography,
  TextField,
  IconButton,
  Button,
} from "@mui/material";

export const Container = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
}));

export const HeaderText = styled(Typography)(({ theme }) => ({
  fontSize: "6rem",
  color: theme.palette.text.secondary,
  WebkitTextStroke: "1px",
  WebkitTextStrokeColor: theme.palette.text.primary,
}));

export const SelectBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const SelectText = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  color: theme.palette.text.primary,
}));

export const SelectPlayer = styled(Typography)(({ theme }) => ({
  fontSize: "6rem",
  color: theme.palette.text.primary,
}));

export const BtnBox = styled(Box)(() => ({
  display: "flex",
  marginBottom: "2%",
  gap: "15%",
}));

export const IconBtn = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  height: "50px",
  width: "50px",
  fontSize: "2rem",
}));

export const Btn = styled(Button)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "2rem",
}));
