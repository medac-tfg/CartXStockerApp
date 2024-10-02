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

import Home from "./screens/Home/Home";
import Footer from "./components/Footer/Footer";

SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();
const StackTheme = {
  dark: false,
  colors: {
    primary: "#fff",
    background: "#fff",
    card: "#fff",
    text: "#000",
    border: "#fff",
    notification: "#fff",
  },
};

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
        </Stack.Navigator>
        <Footer />
      </View>
    </NavigationContainer>
  );
}
