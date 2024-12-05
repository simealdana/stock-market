export const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)}`;
};

export const formatChange = (change: number): string => {
  const sign = change > 0 ? "+" : "";
  return `${sign}${change.toFixed(2)}%`;
};

export const getChangeColor = (change: number): string => {
  return change > 0 ? "#4CAF50" : "#FF4C4C";
};
