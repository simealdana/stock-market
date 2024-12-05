import React from "react";
import { Animated, StyleSheet, Text, View, Dimensions } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  State,
} from "react-native-gesture-handler";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.25;

interface Stock {
  symbol: string;
  name: string;
  price: number;
  daily_change: number;
}

interface Props {
  stock: Stock;
  swipeAnim?: Animated.Value;
  onSwipeComplete?: (direction: "left" | "right") => void;
  style?: object;
}

export const StockCard: React.FC<Props> = ({
  stock,
  swipeAnim = new Animated.Value(0),
  onSwipeComplete,
  style,
}) => {
  const onGestureEvent = Animated.event<PanGestureHandlerGestureEvent>(
    [{ nativeEvent: { translationX: swipeAnim } }],
    { useNativeDriver: true }
  );

  const onHandlerStateChange = ({
    nativeEvent,
  }: PanGestureHandlerGestureEvent) => {
    if (nativeEvent.state === State.END) {
      const { translationX, velocityX } = nativeEvent;

      if (
        Math.abs(translationX) > SWIPE_THRESHOLD ||
        Math.abs(velocityX) > 500
      ) {
        const direction = translationX > 0 ? "right" : "left";

        Animated.timing(swipeAnim, {
          toValue:
            direction === "right" ? SCREEN_WIDTH * 1.5 : -SCREEN_WIDTH * 1.5,
          duration: 250,
          useNativeDriver: true,
        }).start(() => {
          onSwipeComplete?.(direction);
        });
      } else {
        Animated.spring(swipeAnim, {
          toValue: 0,
          useNativeDriver: true,
          tension: 40,
          friction: 5,
        }).start();
      }
    }
  };

  const rotate = swipeAnim.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: ["-10deg", "0deg", "10deg"],
  });

  const opacity = swipeAnim.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [0.5, 1, 0.5],
  });

  const scale = swipeAnim.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [0.8, 1, 0.8],
  });

  const isPositiveChange = stock.daily_change > 0;

  return (
    <PanGestureHandler
      onGestureEvent={onGestureEvent}
      onHandlerStateChange={onHandlerStateChange}
    >
      <Animated.View
        style={[
          styles.card,
          style,
          {
            transform: [{ translateX: swipeAnim }, { rotate }, { scale }],
            opacity,
          },
        ]}
      >
        <View style={styles.content}>
          <Text style={styles.symbol}>{stock.symbol}</Text>
          <Text style={styles.name}>{stock.name}</Text>
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
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  card: {
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_WIDTH * 1.2,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  symbol: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#2D3748",
  },
  name: {
    fontSize: 20,
    color: "#718096",
    marginTop: 8,
  },
  price: {
    fontSize: 52,
    fontWeight: "bold",
    color: "#2D3748",
    marginTop: 40,
  },
  change: {
    fontSize: 24,
    fontWeight: "600",
    marginTop: 16,
  },
});

export default StockCard;
