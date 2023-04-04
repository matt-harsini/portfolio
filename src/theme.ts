import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import "@fontsource/open-sans";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const fonts = {
  body: `'Open Sans', sans-serif`,
};

const fontSizes = {
  
}

const theme = extendTheme({
  fonts,
  config,
});

export default theme;
