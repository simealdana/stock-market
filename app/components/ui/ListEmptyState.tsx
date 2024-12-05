import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface ListEmptyStateProps {
  icon: string | any;
  message: string;
}

export const ListEmptyState = ({ icon, message }: ListEmptyStateProps) => {
  return (
    <View style={styles.container}>
      <MaterialIcons name={icon} size={24} color="#718096" />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
  message: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2D3748",
    textAlign: "center",
  },
});
