import mainTheme from "./themes/mainTheme";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header/Header";
import Content from "./components/Content";

export default function App() {
  return (
    <div className="App">
      <CssBaseline>
        <ThemeProvider theme={mainTheme}>
          <Sidebar></Sidebar>

          <Header></Header>

          <Content></Content>
        </ThemeProvider>
      </CssBaseline>
    </div>
  );
}
