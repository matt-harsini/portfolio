import { useColorMode, Button } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

function ToggleColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
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
