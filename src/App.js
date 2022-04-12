import { useState } from "react";
import { ThemeProvider, Global } from "@emotion/react";
import GlobalStyle from "./global/GlobalStyles";
import Themes from "./global/Themes";
import Header from "./components/ExampleStylingHeader";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? Themes.DarkTheme : Themes.LightTheme}>
      <div>
        <Global styles={GlobalStyle} />
        <Header title="Hello World" />
        <button
          onClick={() => {
            setIsDark(!isDark);
          }}
        >
          Change theme
        </button>
      </div>
    </ThemeProvider>
  );
}

export default App;
