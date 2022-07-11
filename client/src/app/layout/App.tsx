import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import Catalog from "../../common/catalog/Catalog";
import Header from "./components/Header";


function App() {
const [darkMode, setDarkMode] = useState(false);
const paleteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paleteType,
      background: {
        default: paleteType === 'light' ? '#eaeaea' : '#121212'
      }
      }
  })

  function handleThemeChange(){
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Catalog />
      </Container>

    </ThemeProvider>
  );
}

export default App;
