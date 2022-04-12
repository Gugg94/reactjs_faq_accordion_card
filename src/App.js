import { ThemeProvider, Global } from "@emotion/react";
import Card from "./components/Card";
import GlobalStyle from "./global/GlobalStyles";
import Themes from "./global/Themes";

function App() {
  return (
    <ThemeProvider theme={Themes.LightTheme}>
      <div>
        <Global styles={GlobalStyle} />
        <Card />
      </div>
    </ThemeProvider>
  );
}

export default App;
