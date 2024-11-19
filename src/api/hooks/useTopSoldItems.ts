import { useQuery } from "@tanstack/react-query";
import { fetchTopSoldItems } from "../endpoints/topSoldItems";

export const useTopSoldItems = () => {
  return useQuery({ queryKey: ["topSoldItems"], queryFn: fetchTopSoldItems });
};
