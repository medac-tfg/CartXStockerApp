import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AlertModalProps } from "./@types/modal";

const AlertModal = ({
  visible,
  message,
  actions,
  onRequestClose,
}: AlertModalProps) => {
  return (
    <Modal transparent={true} visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.content}>
          <Text style={styles.message}>{message}</Text>
          {actions.map(
            (action: { text: string; onPress: () => void }, index: number) => (
              <TouchableOpacity
                key={index}
                style={styles.button}
                onPress={() => {
                  action.onPress();
                  onRequestClose();
                }}
              >
                <Text style={styles.buttonText}>{action.text}</Text>
              </TouchableOpacity>
            )
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    width: "80%",
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default AlertModal;
