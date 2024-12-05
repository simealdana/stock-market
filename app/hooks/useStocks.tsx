import { useState, useEffect } from "react";
import stocksData from "../../data/dummy_stock_data.json";

interface Stock {
  symbol: string;
  name: string;
  price: number;
  daily_change: number;
}

interface UseStocksReturn {
  data: Stock[] | null;
  error: Error | null;
  isLoading: boolean;
}

// FAKE API CALL
export const useStocks = (): UseStocksReturn => {
  const [data, setData] = useState<Stock[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (
          !stocksData ||
          !stocksData.stocks ||
          !Array.isArray(stocksData.stocks)
        ) {
          throw new Error("Invalid stock data format");
        }

        setData(stocksData.stocks);
        setError(null);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to fetch stocks")
        );
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStocks();
  }, []);

  return { data, error, isLoading };
};

export type { Stock };

export default useStocks;
