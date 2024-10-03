import { View, StyleSheet } from "react-native";

const squareSize = 325;
const cornerSize = 50; 
const cornerWidth = 4;

const Overlay = () => {
  return (
    <View style={styles.overlayContainer}>
      <View style={styles.overlayBackground} />
      <View style={styles.middleRowContainer}>
        <View style={styles.middleRowOverlayBackground} />
        <View style={styles.squareContainer}>
          <View style={styles.topLeftCorner} />
          <View style={styles.topRightCorner} />
          <View style={styles.bottomLeftCorner} />
          <View style={styles.bottomRightCorner} />
        </View>
        <View style={styles.middleRowOverlayBackground} />
      </View>
      <View style={styles.overlayBackground} />
    </View>
  );
};

const styles = StyleSheet.create({
  overlayContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  overlayBackground: {
    flex: 1,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  middleRowContainer: {
    flexDirection: "row",
  },
  middleRowOverlayBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  squareContainer: {
    width: squareSize,
    height: squareSize,
    position: "relative",
  },
  topLeftCorner: {
    position: "absolute",
    top: 0,
    left: 0,
    width: cornerSize,
    height: cornerSize,
    borderTopColor: "blue",
    borderTopWidth: cornerWidth,
    borderLeftColor: "blue",
    borderLeftWidth: cornerWidth,
  },
  topRightCorner: {
    position: "absolute",
    top: 0,
    right: 0,
    width: cornerSize,
    height: cornerSize,
    borderTopColor: "blue",
    borderTopWidth: cornerWidth,
    borderRightColor: "blue",
    borderRightWidth: cornerWidth,
  },
  bottomLeftCorner: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: cornerSize,
    height: cornerSize,
    borderBottomColor: "blue",
    borderBottomWidth: cornerWidth,
    borderLeftColor: "blue",
    borderLeftWidth: cornerWidth,
  },
  bottomRightCorner: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: cornerSize,
    height: cornerSize,
    borderBottomColor: "blue",
    borderBottomWidth: cornerWidth,
    borderRightColor: "blue",
    borderRightWidth: cornerWidth,
  },
});

export default Overlay;