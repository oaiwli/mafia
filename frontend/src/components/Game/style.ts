// frontend/src/components/Game/style.ts

import { Box, styled, Typography, Button, TextField } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  boxSizing: "border-box",
  backgroundColor: "transparent",
  color: theme.palette.text.primary,
  overflowY: "auto",
}));

export const HostButtonContainer = styled(Box)(() => ({
  marginTop: "40px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
}));

export const HostButton = styled(Button)(({ theme }) => ({
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
  maxWidth: "350px",
  width: "80%",
  fontFamily: theme.typography.button.fontFamily,
}));

export const HostMessage = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h2.fontSize,
  fontWeight: theme.typography.h2.fontWeight,
  fontFamily: theme.typography.h2.fontFamily,
  textShadow: theme.typography.h2.textShadow,
  textAlign: "center",
  color: theme.palette.secondary.main,
  marginBottom: "20px",
}));

export const PlayerItem = styled(Box)(({ theme }) => ({
  width: "80%",
  maxWidth: "450px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: theme.palette.background.paper,
  borderRadius: "10px",
  padding: "15px 20px",
  margin: "8px 0",
  boxShadow: "0px 4px 15px rgba(0,0,0,0.4)",
  border: `1px solid ${theme.palette.secondary.main}`,
}));

export const PlayerName = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  fontWeight: 700,
  flexGrow: 1,
  color: theme.palette.text.primary,
  fontFamily: theme.typography.body1.fontFamily,
}));

export const PlayerRole = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  color: theme.palette.text.secondary,
  marginLeft: "15px",
  fontFamily: theme.typography.body1.fontFamily,
}));

export const EditButton = styled(Button)(({ theme }) => ({
  minWidth: "auto",
  padding: "5px",
  marginLeft: "10px",
  backgroundColor: "transparent",
  color: theme.palette.secondary.main,
  "&:hover": {
    backgroundColor: "rgba(196, 156, 72, 0.1)",
    color: theme.palette.secondary.light,
  },
  "& svg": {
    fontSize: "1.4rem",
    filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.4))",
  },
}));

export const StyledInput = styled(TextField)(({ theme }) => ({
  flexGrow: 1,
  marginRight: "10px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.secondary.main,
      borderWidth: "1px",
    },
    "&:hover fieldset": {
      borderColor: theme.palette.secondary.light,
      borderWidth: "1px",
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
      borderWidth: "1px",
    },
    borderRadius: "5px",
    padding: "0 5px",
    backgroundColor: theme.palette.background.default,
  },
  "& .MuiInputBase-input": {
    color: theme.palette.text.primary,
    padding: "8px 10px",
    fontFamily: theme.typography.body1.fontFamily,
  },
}));
