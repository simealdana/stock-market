import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface Stock {
  symbol: string;
  name: string;
  price: number;
  daily_change: number;
}

interface Props {
  stock: Stock;
  onPress?: (symbol: string) => void;
}

export const StockListItem: React.FC<Props> = ({ stock, onPress }) => {
  const isPositiveChange = stock.daily_change > 0;

  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <View style={styles.content}>
        <View style={styles.leftContent}>
          <Text style={styles.symbol}>{stock.symbol}</Text>
          <Text style={styles.name}>{stock.name}</Text>
        </View>
        <View style={styles.rightContent}>
          <Text style={styles.price}>${stock.price.toFixed(2)}</Text>
          <Text
            style={[
              styles.change,
              { color: isPositiveChange ? "#4CAF50" : "#FF4C4C" },
            ]}
          >
            {isPositiveChange ? "+" : ""}
            {stock.daily_change}%
          </Text>
        </View>
      </View>
      {onPress && (
        <Pressable
          style={styles.removeButton}
          onPress={() => onPress(stock.symbol)}
        >
          <MaterialIcons
            name="remove-circle-outline"
            size={24}
            color="#FF4C4C"
          />
        </Pressable>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  pressed: {
    opacity: 0.7,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftContent: {
    flex: 1,
  },
  rightContent: {
    alignItems: "flex-end",
  },
  symbol: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2D3748",
  },
  name: {
    fontSize: 14,
    color: "#718096",
    marginTop: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2D3748",
  },
  change: {
    fontSize: 14,
    marginTop: 4,
  },
  removeButton: {
    marginLeft: 12,
    padding: 4,
  },
});

export default StockListItem;
