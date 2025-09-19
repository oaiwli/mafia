// Roll style

import { Box, styled, Button, TextField } from "@mui/material";

export const Container = styled(Box)(() => ({
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  gap: "3%",
}));

export const Card = styled(Box)(() => ({
  width: "200px",
  height: "320px",
  display: "flex",
  border: "1px solid white",
}));

export const Input = styled(TextField)(({ theme }) => ({
  width: "70%",
  display: "flex",
}));

export const Btn = styled(Button)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "2rem",
}));
