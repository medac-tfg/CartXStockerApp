import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { View, TouchableOpacity, Pressable, StyleSheet } from "react-native";
import Animated, {
  withDelay,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

import { FloatingActionButtonProps } from "./@types/button";

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const AnimatedFeather = Animated.createAnimatedComponent(Feather);

const SPRING_CONFIG = {
  duration: 1200,
  overshootClamping: true,
  dampingRatio: 0.8,
};

const OFFSET = 70;

const FloatingActionButton = ({
  isExpanded,
  index,
  IconProvider,
  icon,
  label,
  targetScreen,
  color,
}: FloatingActionButtonProps) => {
  const { navigate } = useNavigation<any>();
  const animatedStyles = useAnimatedStyle(() => {
    const moveValue = isExpanded.value ? OFFSET * index : 0;
    const translateValue = withSpring(-moveValue, SPRING_CONFIG);
    const delay = index * 100;

    const scaleValue = isExpanded.value ? 1 : 0;

    return {
      transform: [
        { translateY: translateValue },
        {
          scale: withDelay(delay, withTiming(scaleValue)),
        },
      ],
    };
  });

  const handlePress = () => {
    isExpanded.value = false;
    navigate(targetScreen);
  }

  return (
    <Animated.View style={[animatedStyles, styles.buttonContainer]}>
      <Animated.Text style={styles.label}>{label}</Animated.Text>
      <AnimatedTouchableOpacity
        style={[styles.button, { backgroundColor: color }]}
        onPress={handlePress}
      >
        <IconProvider name={icon} size={24} color="#fff" />
      </AnimatedTouchableOpacity>
    </Animated.View>
  );
};

const Footer = () => {
  const isExpanded = useSharedValue(false);

  const handlePress = () => {
    isExpanded.value = !isExpanded.value;
  };

  const plusIconStyle = useAnimatedStyle(() => {
    const moveValue = interpolate(Number(isExpanded.value), [0, 1], [0, 2]);
    const translateValue = withTiming(moveValue);
    const rotateValue = isExpanded.value ? "45deg" : "0deg";

    return {
      transform: [
        { translateX: translateValue },
        { rotate: withTiming(rotateValue) },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <AnimatedPressable onPress={handlePress} style={styles.plusButton}>
        <AnimatedFeather
          name="plus"
          size={30}
          color="#fff"
          style={plusIconStyle}
        />
      </AnimatedPressable>
      <FloatingActionButton
        isExpanded={isExpanded}
        index={1}
        IconProvider={MaterialCommunityIcons}
        icon="barcode-scan"
        label="Scan Product"
        targetScreen="ScanProductHint"
        color="green"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    right: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  plusButton: {
    zIndex: 1,
    height: 60,
    width: 60,
    borderRadius: 15,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  button: {
    height: 60,
    width: 60,
    backgroundColor: "#C6CACD",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: "#000",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
    position: "absolute",
    right: 70,
  },
});

export default Footer;
