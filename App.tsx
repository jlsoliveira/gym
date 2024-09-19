import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";

import { GluestackUIProvider } from "@gluestack-ui/themed";
import { Loading } from "@components/Loading";
import { Routes } from "@routes/index";
import { StatusBar } from "react-native";
// import { config } from "@gluestack-ui/config";
import { config } from "./config/gluestack-ui.config";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </GluestackUIProvider>
  );
}
