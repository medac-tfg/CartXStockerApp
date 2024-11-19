import { useQuery } from "@tanstack/react-query";
import { fetchLastStoredProducts } from "../endpoints/lastStoredProducts";

export const useLastStoredProducts = () => {
  return useQuery({ queryKey: ["lastStoredProducts"], queryFn: fetchLastStoredProducts });
};
