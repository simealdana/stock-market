import { renderHook } from "@testing-library/react-hooks";
import { useStocks } from "../useStocks";

describe("useStocks Hook", () => {
  it("should start with loading state and no data", () => {
    const { result } = renderHook(() => useStocks());

    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(null);
  });

  it("should load stocks data successfully", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useStocks());

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toHaveLength(6); // 6 stocks in dummy data
    expect(result.current.error).toBe(null);

    const firstStock = result.current?.data?.[0];
    expect(firstStock).toHaveProperty("symbol");
    expect(firstStock).toHaveProperty("name");
    expect(firstStock).toHaveProperty("price");
    expect(firstStock).toHaveProperty("daily_change");
  });

  it("should have correct data format for each stock", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useStocks());

    await waitForNextUpdate();

    const firstStock = result.current?.data?.[0];
    expect(typeof firstStock?.symbol).toBe("string");
    expect(typeof firstStock?.name).toBe("string");
    expect(typeof firstStock?.price).toBe("number");
    expect(typeof firstStock?.daily_change).toBe("number");
  });
});
