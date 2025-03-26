import { Home } from "./src/screens/Home";
import { ScreenWrapper } from "./src/components/ScreenWrapper";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    inter_regular: require("./assets/fonts/Inter_medium.ttf"),
    inter_bold: require("./assets/fonts/Inter_bold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <ScreenWrapper>
      <Home />
    </ScreenWrapper>
  );
}
