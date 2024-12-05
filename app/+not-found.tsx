import { StyleSheet, View, Text } from "react-native";
import { Link } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <MaterialIcons name="error-outline" size={80} color="#718096" />

      <Text style={styles.title}>Page Not Found</Text>

      <Text style={styles.subtitle}>
        Looks like this investment didn't pay off. Let's get you back on track.
      </Text>

      <Link href="/" style={styles.link}>
        <View style={styles.button}>
          <MaterialIcons name="home" size={24} color="white" />
          <Text style={styles.buttonText}>Back to Home</Text>
        </View>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2D3748",
    marginTop: 24,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#718096",
    textAlign: "center",
    marginBottom: 32,
    maxWidth: "80%",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4CAF50",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    gap: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  link: {
    textDecorationLine: "none",
  },
});
