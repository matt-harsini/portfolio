import { useContext } from "react";
import { Button } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { ThemeContext } from "../App";

function ToggleColorMode() {
  const { colorMode, toggleColorMode } = useContext(ThemeContext);
  return (
    <Button onClick={() => toggleColorMode()} size="lg">
      {colorMode === "dark" ? (
        <SunIcon color="gray.50" boxSize={6} />
      ) : (
        <MoonIcon color="gray.900" boxSize={6} />
      )}
    </Button>
  );
}

export default ToggleColorMode;
