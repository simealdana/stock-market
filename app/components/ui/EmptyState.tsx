import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ROUTES } from "@/app/constants/Routes";

export const EmptyState = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="trending-up" size={80} color="#4CAF50" />
      <Text style={styles.title}>No more stocks to swipe!</Text>
      <Text style={styles.subtitle}>
        Check your favorites or explore the market
      </Text>

      <View style={styles.actionsContainer}>
        <Pressable
          style={[styles.button, styles.primaryButton]}
          onPress={() => router.push(ROUTES.FAVORITES)}
        >
          <MaterialIcons name="favorite" size={24} color="white" />
          <Text style={styles.primaryButtonText}>View Favorites</Text>
        </Pressable>

        <Pressable
          style={[styles.button, styles.secondaryButton]}
          onPress={() => router.push(ROUTES.MARKET)}
        >
          <MaterialIcons name="show-chart" size={24} color="#4CAF50" />
          <Text style={styles.secondaryButtonText}>Explore Market</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2D3748",
    marginTop: 24,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#718096",
    marginTop: 8,
    textAlign: "center",
    marginBottom: 32,
  },
  actionsContainer: {
    gap: 12,
    width: "100%",
    maxWidth: 300,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  primaryButton: {
    backgroundColor: "#4CAF50",
  },
  secondaryButton: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#4CAF50",
  },
  primaryButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryButtonText: {
    color: "#4CAF50",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default EmptyState;
