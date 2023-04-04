import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import "@fontsource/inter";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const fonts = {
  body: `'Inter', sans-serif`,
};

const fontSizes = {
  
}

const theme = extendTheme({
  fonts,
  config,
});

export default theme;
