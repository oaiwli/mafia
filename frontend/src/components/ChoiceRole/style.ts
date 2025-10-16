// frontend/src/components/ChoiceRole/style.ts

import { Box, styled, IconButton, Button, Typography } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  boxSizing: "border-box",
  gap: "20px",
}));

export const MafiaTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: theme.typography.h2.fontSize,
  fontFamily: theme.typography.h2.fontFamily,
  fontWeight: theme.typography.h2.fontWeight,
  textShadow: theme.typography.h2.textShadow,
  marginBottom: "10px",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-10px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "60%",
    height: "2px",
    backgroundColor: theme.palette.secondary.main,
    boxShadow: "0px 0px 8px rgba(196, 156, 72, 0.6)",
  },
}));

export const RolesSection = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "400px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
}));

export const RoleGroupHeader = styled(Typography)<{ hostile?: boolean }>(
  ({ theme, hostile }) => ({
    fontSize: "1.3rem",
    fontFamily: theme.typography.h2.fontFamily,
    fontWeight: 700,
    color: hostile ? theme.palette.primary.main : theme.palette.text.primary,
    textAlign: "left",
    marginLeft: "5px",
    textShadow: hostile ? "1px 1px 2px rgba(0,0,0,0.4)" : "none",
  })
);

export const RolesGrid = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(90px, 1fr))",
  gap: "10px",
  justifyContent: "center",
  width: "100%",
}));

export const RoleCard = styled(Box)<{ wide?: boolean }>(({ theme, wide }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: "8px",
  padding: "10px",
  minHeight: "100px",
  boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
  position: "relative",
  overflow: "hidden",

  ...(wide && {
    gridColumn: "1 / -1",
    flexDirection: "row",
    justifyContent: "center",
    gap: "20px",
  }),
}));

export const RoleName = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: 700,
  color: theme.palette.text.primary,
  textAlign: "center",
  fontFamily: theme.typography.body1.fontFamily,
}));

export const RoleCountWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "5px",
}));

export const RoleCount = styled(Typography)(({ theme }) => ({
  fontSize: "1.8rem",
  fontWeight: 700,
  color: theme.palette.secondary.main,
  textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
  fontFamily: theme.typography.body1.fontFamily,
}));

export const ArrowButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main,
  padding: "5px",
  "& svg": {
    fontSize: "1.8rem",
    filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.4))",
  },
  "&:hover": {
    backgroundColor: "rgba(184, 15, 10, 0.1)",
    color: theme.palette.primary.dark,
  },
  "&.Mui-disabled": {
    color: "rgba(255, 255, 255, 0.2)",
  },
}));

export const ActionButtonGroup = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  maxWidth: "400px",
  marginTop: "20px",
}));

export const BackButton = styled(Button)(({ theme }) => ({
  backgroundColor: "transparent",
  color: theme.palette.text.primary,
  border: `1px solid ${theme.palette.text.primary}`,
  padding: "8px 15px",
  fontSize: "1rem",
  fontWeight: 700,
  textTransform: "none",
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderColor: theme.palette.secondary.main,
    color: theme.palette.secondary.main,
  },
  "& svg": {
    fontSize: "1.2rem",
    marginRight: "5px",
  },
}));

export const GoButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.primary.main,
  padding: "10px 30px",
  fontSize: "1.5rem",
  fontWeight: 700,
  borderRadius: "10px",
  boxShadow: "0px 4px 15px rgba(0,0,0,0.6)",
  position: "relative",
  border: `2px solid ${theme.palette.secondary.dark}`,
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
    boxShadow: "0px 6px 20px rgba(0,0,0,0.8)",
  },
  fontFamily: theme.typography.button.fontFamily,
}));
