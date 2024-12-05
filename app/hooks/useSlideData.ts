import { useState, useEffect } from "react";
import { useStocks, Stock } from "./useStocks";
import { useFavoriteStocks } from "./useFavoriteStocks";

export const useSlideData = () => {
  const { data: stocks, error, isLoading } = useStocks();
  const { addToFavorites } = useFavoriteStocks();
  const [remainingStocks, setRemainingStocks] = useState<Stock[]>([]);

  useEffect(() => {
    if (stocks) {
      setRemainingStocks(stocks);
    }
  }, [stocks]);

  const handleSwipe = (direction: "left" | "right") => {
    const currentStock = remainingStocks[0];

    if (direction === "right" && currentStock) {
      addToFavorites(currentStock);
    }

    setRemainingStocks((prev) => prev.slice(1));
  };

  return {
    currentStock: remainingStocks[0],
    nextStock: remainingStocks[1],
    hasMoreStocks: remainingStocks.length > 0,
    handleSwipe,
    isLoading,
    error,
  };
};

export default useSlideData;
