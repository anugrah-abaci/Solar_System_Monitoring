import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#ffc107" },
    secondary: { main: "#4caf50" },
    error: { main: "#f44336" },
    background: {
      default: "#1a2332",
      paper: "#243447",
    },
    text: { primary: "#fff", secondary: "rgba(255,255,255,0.7)" },
  },
  shape: { borderRadius: 8 },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h6: {
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.05em",
    },
    body2: { fontSize: "0.875rem" },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: { backgroundColor: "#243447", borderRadius: 8 },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        bar: { borderRadius: 4 },
      },
    },
  },
});
