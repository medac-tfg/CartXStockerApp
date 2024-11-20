import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import * as SplashScreen from "expo-splash-screen";
import {
  setButtonStyleAsync,
  setBackgroundColorAsync,
} from "expo-navigation-bar";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import { View, Platform } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Home from "./screens/Home/Home";
import ScanProductHint from "./screens/ScanProductHint/ScanProductHint";
import ScanBarcode from "./screens/ScanBarcode/ScanBarcode";
import ScanRFID from "./screens/ScanRFID/ScanRFID";

SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();
const StackTheme = {
  dark: false,
  colors: {
    primary: "#fff",
    background: "#ECECEC",
    card: "#fff",
    text: "#000",
    border: "#fff",
    notification: "#fff",
  },
};

const queryClient = new QueryClient();

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat: require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
  });

  if (Platform.OS === "android") {
    setButtonStyleAsync("light");
    setBackgroundColorAsync("#ffffff");
  }

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer theme={StackTheme}>
        <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          >
            {/* Main Home Screen */}
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ gestureEnabled: false, animationEnabled: false }}
            />

            {/* Scan Product Hint Screen */}
            <Stack.Screen
              name="ScanProductHint"
              component={ScanProductHint}
              options={{
                presentation: "transparentModal",
                cardStyleInterpolator:
                  CardStyleInterpolators.forModalPresentationIOS,
              }}
            />

            {/* Scan Barcode Screen */}
            <Stack.Screen name="ScanBarcode" component={ScanBarcode} />

            {/* Scan RFID Screen */}
            <Stack.Screen name="ScanRFID" component={ScanRFID} />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
