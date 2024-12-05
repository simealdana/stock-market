import React, { useRef } from "react";
import { View, StyleSheet, Dimensions, Animated } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StockCard } from "./StockCard";
import { ActionButtons } from "../ui/ActionButtons";

const SCREEN_WIDTH = Dimensions.get("window").width;

interface Stock {
  symbol: string;
  name: string;
  price: number;
  daily_change: number;
}

interface Props {
  currentStock: Stock;
  nextStock?: Stock;
  onSwipe: (direction: "left" | "right") => void;
}

export const StockSwiper: React.FC<Props> = ({
  currentStock,
  nextStock,
  onSwipe,
}) => {
  const swipeAnim = useRef(new Animated.Value(0)).current;
  const nextCardScale = useRef(new Animated.Value(0.9)).current;

  const swipeCard = (direction: "left" | "right") => {
    const x = direction === "right" ? SCREEN_WIDTH * 1.5 : -SCREEN_WIDTH * 1.5;

    Animated.parallel([
      Animated.timing(swipeAnim, {
        toValue: x,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.spring(nextCardScale, {
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onSwipe(direction);
      swipeAnim.setValue(0);
      nextCardScale.setValue(0.9);
    });
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.cardContainer}>
        {nextStock && (
          <Animated.View
            style={[
              styles.nextCardContainer,
              {
                transform: [{ scale: nextCardScale }],
              },
            ]}
          >
            <StockCard stock={nextStock} style={styles.nextCard} />
          </Animated.View>
        )}
        <StockCard
          stock={currentStock}
          swipeAnim={swipeAnim}
          onSwipeComplete={(direction) => swipeCard(direction)}
        />
      </View>
      <ActionButtons
        onPressLeft={() => swipeCard("left")}
        onPressRight={() => swipeCard("right")}
      />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  cardContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  nextCardContainer: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
  },
  nextCard: {
    opacity: 0.8,
  },
});

export default StockSwiper;
