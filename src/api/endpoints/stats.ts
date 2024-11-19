import api from "..";

export const fetchStats = async () => {
  const { data } = await api.get("/api/stocker/getShopStatus");
  return data;
};
