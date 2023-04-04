import { createContext } from "react";
import { Hero, Navbar } from "./components";
import { useColorMode } from "@chakra-ui/react";

export const ThemeContext = createContext<any>(null);

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <ThemeContext.Provider value={{ colorMode, toggleColorMode }}>
        <main>
          <Navbar />
          <Hero />
        </main>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
