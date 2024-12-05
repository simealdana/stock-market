import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { StockListItem } from "../components/ui/StockListItem";
import { ListEmptyState } from "../components/ui/ListEmptyState";
import { useStocks } from "../hooks/useStocks";

export default function MarketScreen() {
  const { data, error, isLoading } = useStocks();

  if (isLoading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#4CAF50" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <StockListItem stock={item} />}
        keyExtractor={(item, index) => `${item.symbol}_${index}`}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          error ? (
            <View style={styles.centerContainer}>
              <ListEmptyState
                icon="error-outline"
                message="Couldn't load market data"
              />
            </View>
          ) : (
            <View style={styles.centerContainer}>
              <ListEmptyState icon="show-chart" message="No stocks available" />
            </View>
          )
        }
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  listContent: {
    padding: 16,
  },
});
