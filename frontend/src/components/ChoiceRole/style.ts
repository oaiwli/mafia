import { Box, styled, IconButton, Button, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const Container = styled(Box)(({ theme }) => ({
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
}));

export const RolesBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
}));

export const Row = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  gridRow: "1",
  justifyContent: "center",
  alignItems: "center",
  gap: "3%",
  marginTop: "3%",
}));

export const RoleBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid white",
}));

export const RoleText = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  color: theme.palette.text.primary,
}));

export const MafiaText = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  marginLeft: "3%",
  color: theme.palette.text.secondary,
}));

export const CivilText = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  marginLeft: "3%",
  color: theme.palette.text.primary,
}));

export const Left = styled(ChevronLeftIcon)(({ theme }) => ({}));

export const Right = styled(ChevronRightIcon)(({ theme }) => ({}));

export const BtnBox = styled(Box)(() => ({
  display: "flex",
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
