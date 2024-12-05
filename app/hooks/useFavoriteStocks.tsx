import { FavoritesContext } from "@/app/context/FavoritesContext";
import { useContext } from "react";

export const useFavoriteStocks = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error(
      "useFavoriteStocks must be used within a FavoritesProvider"
    );
  }

  const { favorites, addFavorite, removeFavorite } = context;

  return {
    favorites,
    addToFavorites: addFavorite,
    removeFromFavorites: removeFavorite,
    isFavorite: (symbol: string) =>
      favorites.some((stock) => stock.symbol === symbol),
  };
};

export default useFavoriteStocks;
