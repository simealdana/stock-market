import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface Props {
  onPressLeft?: () => void;
  onPressRight?: () => void;
}

export const ActionButtons: React.FC<Props> = ({
  onPressLeft,
  onPressRight,
}) => {
  return (
    <View style={styles.container}>
      <Pressable
        testID="button-left"
        style={({ pressed }) => [
          styles.button,
          styles.buttonLeft,
          pressed && styles.buttonPressed,
        ]}
        onPress={onPressLeft}
      >
        <MaterialIcons name="close" size={32} color="#FF4C4C" />
      </Pressable>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          styles.buttonRight,
          pressed && styles.buttonPressed,
        ]}
        onPress={onPressRight}
      >
        <MaterialIcons name="favorite-border" size={32} color="#4CAF50" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 40,
    paddingVertical: 20,
    width: "100%",
  },
  button: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonLeft: {
    borderWidth: 1,
    borderColor: "#FF4C4C",
  },
  buttonRight: {
    borderWidth: 1,
    borderColor: "#4CAF50",
  },
  buttonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.96 }],
  },
});

export default ActionButtons;
