// frontend/src/components/StartGame/style.ts

import { Box, styled, Typography, IconButton, Button } from "@mui/material";

export const Container = styled(Box)(() => ({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "30px",
  padding: "20px",
  boxSizing: "border-box",
}));

export const MafiaTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: theme.typography.h1.fontSize,
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
    backgroundColor: theme.palette.secondary.main,
    boxShadow: "0px 0px 10px rgba(196, 156, 72, 0.7)",
  },
}));

export const PlayersCountBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px 20px",
  backgroundColor: theme.palette.background.paper,
  borderRadius: "8px",
  border: `1px solid ${theme.palette.secondary.main}`,
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

export const PlayersCountText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: "1.2rem",
  fontFamily: theme.typography.body1.fontFamily,
  fontWeight: 700,
}));

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

  minWidth: "3ch",
  textAlign: "center",
}));

export const ArrowButton = styled(IconButton)(({ theme }) => ({
  position: "relative",
  color: theme.palette.primary.main,
  "& svg": {
    fontSize: "3rem",
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

export const StartButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.primary.main,
  padding: "15px 40px",
  fontSize: "2rem",
  fontWeight: 700,
  borderRadius: "10px",
  boxShadow: "0px 6px 20px rgba(0,0,0,0.6)",
  position: "relative",
  border: `2px solid ${theme.palette.secondary.dark}`,
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
    boxShadow: "0px 8px 25px rgba(0,0,0,0.8)",
  },
  fontFamily: theme.typography.button.fontFamily,
}));

export const BottomHint = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  opacity: 0.7,
  fontSize: "0.9rem",
  textAlign: "center",
  fontFamily: theme.typography.body1.fontFamily,
}));
