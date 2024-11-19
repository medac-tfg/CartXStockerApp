import { useQuery } from "@tanstack/react-query";
import { fetchStats } from "../endpoints/stats";

export const useStats = () => {
  return useQuery({ queryKey: ["stats"], queryFn: fetchStats });
};
