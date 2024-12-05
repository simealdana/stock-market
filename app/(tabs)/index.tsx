import { StyleSheet, View, ActivityIndicator, Text } from "react-native";
import { StockSwiper } from "../components/cards/StockSwiper";
import { useSlideData } from "../hooks/useSlideData";
import { EmptyState } from "@/app/components/ui/EmptyState";

export default function HomeScreen() {
  const {
    currentStock,
    nextStock,
    hasMoreStocks,
    handleSwipe,
    isLoading,
    error,
  } = useSlideData();

  if (isLoading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#4CAF50" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>Failed to load stocks</Text>
        <Text style={styles.errorSubText}>{error.message}</Text>
      </View>
    );
  }

  if (!hasMoreStocks) {
    return (
      <View style={styles.centerContainer}>
        <EmptyState />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StockSwiper
        currentStock={currentStock}
        nextStock={nextStock}
        onSwipe={handleSwipe}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  centerContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2D3748",
    textAlign: "center",
  },
  errorSubText: {
    fontSize: 14,
    color: "#718096",
    marginTop: 8,
    textAlign: "center",
  },
});
